// eslint-disable-next-line no-useless-escape
let tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

export default function emailValidator(email: string) {
  if (!email) return false
  if (email.length > 256) return false
  if (!tester.test(email)) return false
  let emailParts = email.split('@')
  let account = emailParts[0]
  let address = emailParts[1]
  if (account.length > 64) return false
  let domainParts = address.split('.')
  if (domainParts.some((part) => part.length > 63)) return false
  return true
}
