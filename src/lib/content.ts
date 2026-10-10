import type { Status } from '../data/types'

export function isContentEnabled(status: Status | undefined) { return status !== 'hidden' && status !== 'disabled' }
export function normalizeStatus(status: Status | undefined): 'enabled' | 'disabled' { return status === 'hidden' || status === 'disabled' ? 'disabled' : 'enabled' }