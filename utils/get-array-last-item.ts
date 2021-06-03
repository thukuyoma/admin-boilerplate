export default function getArrayLastItem(arr = null) {
  if (arr == null) {
    return null
  }
  return arr[arr.length - 1]
}
