import type { SiteContent } from '../data/types.js'
import { parseYouTube } from '../lib/youtube.js'
import { schemas } from './schema.js'

export interface ContentEnvelope { app: string; schemaVersion: number; content: Record<string, unknown>; savedAt?: string; exportedAt?: string }
export interface ValidationResult { valid: boolean; problems: string[]; content?: Record<string, unknown> }

const groups = ['general', 'founder', 'home', 'homeSections', 'about', 'startupProgram', 'womenSupport', 'formOptions', 'partnership', 'services', 'tools', 'portfolio', 'testimonials', 'partners', 'videos', 'stats', 'faqs', 'timeline', 'banners', 'offers', 'contact', 'social', 'seo', 'legal']
const fixedSeoRoutes = ['/', '/about', '/services', '/services/digital-marketing', '/services/development', '/services/business-tools', '/startup-program', '/women-entrepreneur-support', '/portfolio', '/partnership', '/contact', '/privacy-policy', '/terms-and-conditions', '/refund-policy', '/disclaimer', '/admin']
const listGroups = new Set(['services', 'tools', 'portfolio', 'testimonials', 'partners', 'videos', 'stats', 'faqs', 'timeline', 'banners', 'offers', 'social', 'homeSections', 'seo'])
const blockedKeys = new Set(['__proto__', 'constructor', 'prototype'])

function isRecord(value: unknown): value is Record<string, unknown> { return Boolean(value) && typeof value === 'object' && !Array.isArray(value) }
function safeDate(value: unknown) { return typeof value === 'string' && (!value || /^\d{4}-\d{2}-\d{2}$/.test(value)) }
function safeUrl(value: unknown) { return typeof value === 'string' && (!value || /^https?:\/\/[^\s]+$/.test(value)) }
function safeImage(value: unknown) { return typeof value === 'string' && (!value || /^(?:\/[^/].*|https:\/\/[^\s]+)\.(?:png|jpe?g|webp|avif|svg|gif)$/i.test(value)) }
function fieldValue(item: Record<string, unknown>, key: string) { return key.split('.').reduce<unknown>((value, part) => isRecord(value) ? value[part] : undefined, item) }
function slug(value: string) { return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'item' }
function generatedId(item: Record<string, unknown>, index: number) { const title = String(item.name || item.title || item.clientName || item.client || item.id || 'item'); return `${slug(title)}-${Math.random().toString(36).slice(2, 7)}-${index}` }

export function validateEnvelope(value: unknown): ValidationResult {
  const problems: string[] = []
  if (!isRecord(value) || value.app !== 'taank360-content') problems.push('app must equal taank360-content.')
  if (!isRecord(value) || value.schemaVersion !== 1) problems.push('schemaVersion must be 1.')
  if (!isRecord(value) || !isRecord(value.content)) problems.push('content must be an object.')
  if (problems.length) return { valid: false, problems }
  const envelope = value as Record<string, unknown>
  const content = envelope.content as Record<string, unknown>
  Object.keys(content).forEach((group) => { if (!groups.includes(group)) return; const groupValue = content[group]; if (listGroups.has(group) && !Array.isArray(groupValue)) problems.push(`${group} must be a list.`); if (!listGroups.has(group) && !isRecord(groupValue)) problems.push(`${group} must be an object.`); if (Array.isArray(groupValue) && groupValue.length > 100) problems.push(`${group} has more than 100 items.`) })
  for (const group of listGroups) { const list = content[group]; if (!Array.isArray(list)) continue; const ids = new Set<string>(); list.forEach((item, index) => { if (!isRecord(item)) { problems.push(`${group}[${index}] must be an object.`); return } const id = typeof item.id === 'string' ? item.id : ''; if (id && ids.has(id)) problems.push(`${group} contains duplicate id ${id}.`); if (id) ids.add(id); for (const field of schemas[group] || []) { const fieldValueResult = fieldValue(item, field.key); if (field.required && (typeof fieldValueResult !== 'string' || !fieldValueResult.trim())) problems.push(`${group}[${index}].${field.key} is required.`); if (typeof fieldValueResult === 'string' && fieldValueResult.length > (field.maxLength || (field.type === 'textarea' ? 5000 : 200))) problems.push(`${group}[${index}].${field.key} is too long.`); if (field.type === 'youtube' && typeof fieldValueResult === 'string' && fieldValueResult && !parseYouTube(fieldValueResult)) problems.push(`${group}[${index}].${field.key} is not a recognised YouTube link or video ID.`); if ((field.type === 'url' || field.type === 'internalOrExternalLink') && fieldValueResult && !(field.type === 'internalOrExternalLink' && typeof fieldValueResult === 'string' && fieldValueResult.startsWith('/') ? true : safeUrl(fieldValueResult))) problems.push(`${group}[${index}].${field.key} must be an http(s) URL.`); if (field.type === 'imagePath' && fieldValueResult && !safeImage(fieldValueResult)) problems.push(`${group}[${index}].${field.key} is not a supported image path.`); if (field.type === 'hexColor' && fieldValueResult && !/^#[0-9a-f]{6}$/i.test(String(fieldValueResult))) problems.push(`${group}[${index}].${field.key} must be a hex color.`); if (field.type === 'date' && !safeDate(fieldValueResult)) problems.push(`${group}[${index}].${field.key} must be YYYY-MM-DD.`) } }) }
  if (Array.isArray(content.seo)) { const routes = content.seo.map((entry) => isRecord(entry) ? entry.route : ''); if (routes.some((route) => !fixedSeoRoutes.includes(String(route)))) problems.push('SEO contains a route outside the fixed route list.'); if (new Set(routes).size !== routes.length) problems.push('SEO contains duplicate routes.') }
  return { valid: problems.length === 0, problems: problems.slice(0, 20), content: problems.length ? undefined : content }
}

function setPath(target: Record<string, unknown>, path: string, value: unknown) { const parts = path.split('.'); let cursor = target; parts.slice(0, -1).forEach((part) => { if (!isRecord(cursor[part])) cursor[part] = {}; cursor = cursor[part] as Record<string, unknown> }); cursor[parts[parts.length - 1]] = value }
function sanitizeGroup(group: string, value: unknown) { if (Array.isArray(value)) return value.map((item, index) => { if (!isRecord(item)) return {}; const fields = schemas[group] || []; const allowed = new Set(fields.map((field) => field.key.split('.')[0])); const output: Record<string, unknown> = {}; Object.entries(item).forEach(([key, entry]) => { if (!blockedKeys.has(key) && (allowed.size === 0 || allowed.has(key)) && key !== 'id' && key !== 'order') output[key] = entry }); output.id = typeof item.id === 'string' && item.id ? item.id : generatedId(item, index); output.order = index + 1; output.status = item.status === 'disabled' || item.status === 'hidden' ? 'disabled' : 'enabled'; return output }); if (!isRecord(value)) return value; const output: Record<string, unknown> = {}; for (const field of schemas[group] || []) { const entry = fieldValue(value, field.key); if (entry !== undefined) setPath(output, field.key, entry) } Object.entries(value).forEach(([key, entry]) => { if (!blockedKeys.has(key) && !(schemas[group] || []).some((field) => field.key === key || field.key.startsWith(`${key}.`))) output[key] = entry }); return output }

export function sanitizeContent(input: Record<string, unknown>, baseline: SiteContent): SiteContent { const next = JSON.parse(JSON.stringify(baseline)) as SiteContent; for (const group of groups) if (input[group] !== undefined) (next as unknown as Record<string, unknown>)[group] = sanitizeGroup(group, input[group]); if (input.seo !== undefined && Array.isArray(input.seo)) { const incoming = input.seo.filter(isRecord); next.seo = baseline.seo.map((entry) => (incoming.find((candidate) => candidate.route === entry.route) as unknown as typeof entry) || entry) } return next }
export function normalizeContent(input: SiteContent): SiteContent { return sanitizeContent(input as unknown as Record<string, unknown>, input) }
export { fixedSeoRoutes, groups }
