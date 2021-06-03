export default function textShortener(str: string, limit: number) {
  if (!str) return ''
  if (!limit) return str
  if (str.length < limit) return str
  return `${str.charAt(0).toUpperCase() + str.slice(0, limit).slice(0, 1)}...`
}
