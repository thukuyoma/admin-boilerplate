export default function changePasswordValidation({
  oldPassword,
  newPassword,
  confirmNewPassword,
}: {
  oldPassword: string
  newPassword: string
  confirmNewPassword: string
}) {
  const errors = {} as {
    oldPassword: string
    newPassword: string
    confirmNewPassword: string
  }
  if (!oldPassword) {
    errors.oldPassword = 'Old password is required'
  }
  if (oldPassword && oldPassword.length < 6) {
    errors.oldPassword = 'Old password must be greater than six(6) character'
  }
  if (!newPassword) {
    errors.newPassword = 'New password is required'
  }
  if (newPassword && newPassword.length < 6) {
    errors.newPassword = 'New password must be greater than six(6) character'
  }
  if (!confirmNewPassword) {
    errors.confirmNewPassword = 'Confirm new password is required'
  }
  if (confirmNewPassword && confirmNewPassword.length < 6) {
    errors.confirmNewPassword = 'Confirm new password must be greater than six(6) character'
  }
  if (newPassword !== confirmNewPassword) {
    errors.confirmNewPassword = 'New password and confirm password must match'
  }
  return { errors, isError: Object.keys(errors).length ? true : false }
}
