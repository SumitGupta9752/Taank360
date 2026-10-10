import defaultPublished from '../data/published-content.json'
import { defaultContent } from '../data/content'
import type { SiteContent } from '../data/types'
import { normalizeContent, sanitizeContent, validateEnvelope } from '../admin/validate'

export const DRAFT_KEY = 'taank360.contentDraft.v1'
export const PREVIEW_KEY = 'taank360.preview'
export const CONTENT_CHANGED_EVENT = 'taank360-content-changed'

function clone(value: SiteContent): SiteContent { return JSON.parse(JSON.stringify(value)) as SiteContent }
export function getBaseline(): SiteContent { const result = validateEnvelope(defaultPublished); return result.valid && result.content ? normalizeContent(sanitizeContent(result.content, defaultContent)) : normalizeContent(clone(defaultContent)) }
export function readDraft(baseline = getBaseline()): SiteContent | null { try { const raw = localStorage.getItem(DRAFT_KEY); if (!raw) return null; const parsed: unknown = JSON.parse(raw); const result = validateEnvelope(parsed); return result.valid && result.content ? sanitizeContent(result.content, baseline) : null } catch { return null } }
export function getActiveContent(): SiteContent { const baseline = getBaseline(); try { if (sessionStorage.getItem(PREVIEW_KEY) === '1') return readDraft(baseline) || baseline } catch { return baseline } return baseline }
export function saveDraft(content: SiteContent) { const payload = { app: 'taank360-content', schemaVersion: 1, savedAt: new Date().toISOString(), content: normalizeContent(content) }; localStorage.setItem(DRAFT_KEY, JSON.stringify(payload)); window.dispatchEvent(new Event(CONTENT_CHANGED_EVENT)); return payload }
export function removeDraft() { localStorage.removeItem(DRAFT_KEY); sessionStorage.removeItem(PREVIEW_KEY); window.dispatchEvent(new Event(CONTENT_CHANGED_EVENT)) }
export function setPreview(value: boolean) { if (value) sessionStorage.setItem(PREVIEW_KEY, '1'); else sessionStorage.removeItem(PREVIEW_KEY); window.dispatchEvent(new Event(CONTENT_CHANGED_EVENT)) }
export function isPreviewing() { try { return sessionStorage.getItem(PREVIEW_KEY) === '1' } catch { return false } }
