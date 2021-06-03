import emailValidation from './email-validator'

interface ErrorProps {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  isMatch: string
}

export default function registerValidation(values) {
  let errors: ErrorProps = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isMatch: '',
  }
  const { firstName, lastName, email, password, confirmPassword } = values

  if (!firstName) {
    errors.firstName = 'First name is required'
  }
  if (!lastName) {
    errors.lastName = 'Last name is required'
  }
  if (!email) {
    errors.email = 'Email address is required'
  } else if (!emailValidation(email)) {
    errors.email = 'Email address is invalid'
  }
  if (password.length < 6) errors.password = 'Password must be more than 6 characters'
  if (!password) errors.password = 'Password is required'
  if (!confirmPassword) errors.confirmPassword = 'Confirm password is required'
  if (password !== confirmPassword) errors.isMatch = 'Passwords does not match'

  return errors
}
