import emailValidation from './email-validator'

export default function registerValidation(values) {
  let errors: { email: string; password: string } = { email: '', password: '' }
  const { email, password } = values

  if (!email) {
    errors.email = 'Email address is required'
  } else if (!emailValidation(email)) {
    errors.email = 'Email address is invalid'
  }
  if (!password) errors.password = 'Password is required'
  if (password.length < 6) errors.password = 'Password must be more than 6 characters'

  return errors
}
