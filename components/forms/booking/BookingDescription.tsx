import React from 'react'
import { Control, InputTitle, Must, InputField } from '../form-styles'
import DisplayInputError from '../InputError'

export default function BookingDescription({
  bookingDescription,
  setBookingDescription,
  inputErrors,
  setInputErrors,
}) {
  const handleChange = (e) => {
    setInputErrors((prev) => ({ ...prev, bookingDescription: '' }))
    setBookingDescription(e.target.value)
    if (bookingDescription.length > 151) {
      setInputErrors((prev) => ({
        ...prev,
        bookingDescription: 'booking description should not be more than 150 characters',
      }))
      return null
    }
  }
  return (
    <Control>
      <InputTitle>
        Booking Description (150/{bookingDescription.length}) <Must>*</Must>
      </InputTitle>
      <InputField
        error={inputErrors.bookingDescription}
        placeholder="Short Booking Description"
        value={bookingDescription}
        onChange={handleChange}
      />
      {inputErrors.bookingDescription && (
        <DisplayInputError error={inputErrors.bookingDescription} />
      )}
    </Control>
  )
}
