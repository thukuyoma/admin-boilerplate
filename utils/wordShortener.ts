export default function wordShortener(words: string, limit: number) {
  if (!words) return ''
  if (words.split(' ').length < limit) return words
  return `${words.split(' ').splice(0, limit).join(' ')}...`
}
