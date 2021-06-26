import React from 'react'
import DisplayInputError from '../../../forms/DisplayInputError'
import { Control, InputTitle, Must, InputField } from '../../../forms/form-styles'

export default function BookingDescription({ message, setMessage, inputErrors, setInputErrors }) {
  const handleChange = (e) => {
    setInputErrors((prev) => ({ ...prev, message: '' }))
    setMessage(e.target.value)
    if (message.length > 151) {
      setInputErrors((prev) => ({
        ...prev,
        message: 'Alert message should not be more than 150 characters',
      }))
      return null
    }
  }
  return (
    <Control>
      <InputTitle>
        Alert Message (150/{message.length}) <Must>*</Must>
      </InputTitle>
      <InputField
        error={inputErrors.message}
        placeholder="Short Booking Description"
        value={message}
        onChange={handleChange}
      />
      {inputErrors.message && <DisplayInputError error={inputErrors.message} />}
    </Control>
  )
}
