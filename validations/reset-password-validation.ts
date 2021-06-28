export default function resetPasswordValidation({
  newPassword,
  confirmNewPassword,
}: {
  newPassword: string
  confirmNewPassword: string
}) {
  const errors = {} as {
    newPassword: string
    confirmNewPassword: string
  }
  if (!newPassword) {
    errors.newPassword = 'New password is required'
  }
  if (newPassword && newPassword.length < 6) {
    errors.newPassword = 'New password must be greater than six(6) character'
  }
  if (!confirmNewPassword) {
    errors.confirmNewPassword = 'Confirm password is required'
  }
  if (confirmNewPassword && confirmNewPassword.length < 6) {
    errors.confirmNewPassword = 'Confirm password must be greater than six(6) character'
  }
  if (newPassword !== confirmNewPassword) {
    errors.confirmNewPassword = 'New password and confirm password must match'
  }
  return { errors, isError: Object.keys(errors).length ? true : false }
}
