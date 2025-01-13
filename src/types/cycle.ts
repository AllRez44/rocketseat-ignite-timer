export type Cycle = {
  title: string
  minutes: number
}

export function isCycle(data: unknown): data is Cycle {
  if (!data) return false
  if (typeof data !== 'object') return false
  if (!('title' in data)) return false
  if (!('minutes' in data)) return false
  if (typeof data.title !== 'string') return false
  if (typeof data.minutes !== 'number') return false
  return true
}
