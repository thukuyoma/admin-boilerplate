import emailValidator from '../utils/email-validator'

/**
 * @description - register validation
 * @param firstName
 * @param lastName
 * @param email
 * @param password
 * @returns {object}
 */
export default function registerValidation({
  firstName,
  lastName,
  email,
  password,
}: {
  firstName: string
  lastName: string
  email: string
  password: string
}) {
  const errors = {} as {
    firstName: string
    lastName: string
    email: string
    password: string
  }
  if (!firstName) {
    errors.firstName = 'First name is required'
  }
  if (!lastName) {
    errors.lastName = 'Last name is required'
  }
  if (!email) {
    errors.email = 'Email is required'
  }
  if (email) {
    if (!emailValidator(email)) {
      errors.email = 'Email is not valid'
    }
  }
  if (!password) {
    errors.password = 'Password is required'
  }
  if (password) {
    if (password.length < 6) {
      errors.password = 'Password should be greater than 6 characters'
    }
  }
  return { errors, isError: Object.keys(errors).length ? true : false }
}
