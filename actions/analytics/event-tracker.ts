export default function eventTracker({
  element,
  action,
  pageName,
  description,
}: {
  element?: string
  pageName?: string
  description?: string
  action?: string
}) {
  console.log({ action, element, pageName, description })
  return null
}
