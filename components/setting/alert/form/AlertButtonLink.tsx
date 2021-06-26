import React from 'react'
import DisplayInputError from '../../../forms/DisplayInputError'
import { Control, InputTitle, Must, InputField } from '../../../forms/form-styles'

export default function AlertButtonLink({
  alertButtonLink,
  setAlertButtonLink,
  inputErrors,
  setInputErrors,
}) {
  const handleChange = (e) => {
    setInputErrors((prev) => ({ ...prev, alertButtonLink: '' }))
    setAlertButtonLink(e.target.value)
  }
  return (
    <Control>
      <InputTitle>Alert Button Link</InputTitle>
      <InputField placeholder="Alert Button Link" value={alertButtonLink} onChange={handleChange} />
      {inputErrors.alertButtonLink && <DisplayInputError error={inputErrors.alertButtonLink} />}
    </Control>
  )
}
