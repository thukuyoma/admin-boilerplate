import { AlertI } from './../interfaces/alert.interface'
/**
 * @description alert validation
 * @interface AlertI
 * @param type
 * @param message
 * @param alertButtonText
 * @param alertButtonLink
 * @param expiresAt
 * @returns {errors, isError}
 */
export default function alertValidation({
  type,
  message,
  alertButtonLink,
  alertButtonText,
  expiresAt,
}: AlertI) {
  const errors = {} as AlertI
  if (!type) {
    errors.type = "Alert type is required e.g 'warning', 'success', 'info'"
  }
  if (!message) {
    errors.message = 'Alert message is required'
  }
  if (!expiresAt) {
    errors.expiresAt = 'Alert expiring date is required'
  }
  if (message) {
    if (message.length > 151) {
      errors.message = 'Alert message must be less than 1000 characters'
    }
  }
  if (alertButtonText && !alertButtonLink) {
    errors.alertButtonLink = 'Alert button link is required'
  }
  return { errors, isError: Object.keys(errors).length > 0 }
}
