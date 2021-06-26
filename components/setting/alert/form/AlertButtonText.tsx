import React from 'react'
import DisplayInputError from '../../../forms/DisplayInputError'
import { Control, InputTitle, Must, InputField } from '../../../forms/form-styles'

export default function AlertButtonText({
  alertButtonText,
  setAlertButtonText,
  inputErrors,
  setInputErrors,
}) {
  const handleChange = (e) => {
    setInputErrors((prev) => ({ ...prev, alertButtonText: '' }))
    setAlertButtonText(e.target.value)
  }
  return (
    <Control>
      <InputTitle>Alert Button Text</InputTitle>
      <InputField
        error={inputErrors.alertButtonText}
        placeholder="Alert Button Text"
        value={alertButtonText}
        onChange={handleChange}
      />
      {inputErrors.alertButtonText && <DisplayInputError error={inputErrors.alertButtonText} />}
    </Control>
  )
}
