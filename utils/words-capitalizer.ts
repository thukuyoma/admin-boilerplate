export default function wordsCapitalizer(str: string) {
  if (!str) return
  const words = str.split(' ')
  const trimmedWordsArray = words.map((word) => word.trim().charAt(0).toUpperCase() + word.slice(1))
  const capitalizedWords = trimmedWordsArray.join(' ')
  return capitalizedWords
}
