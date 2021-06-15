import React from 'react'
import { Control, InputTitle, Must, InputField } from '../form-styles'
import DisplayInputError from '../InputError'

export default function BookingTitle({
  bookingTitle,
  setBookingTitle,
  inputErrors,
  setInputErrors,
}) {
  const handleChange = (e) => {
    setInputErrors((prev) => ({ ...prev, bookingTitle: '' }))
    setBookingTitle(e.target.value)
  }
  return (
    <Control>
      <InputTitle>
        Booking Title <Must>*</Must>
      </InputTitle>
      <InputField
        error={inputErrors.title}
        placeholder="Title of Booking"
        value={bookingTitle}
        onChange={handleChange}
      />
      {inputErrors.bookingTitle && <DisplayInputError error={inputErrors.bookingTitle} />}
    </Control>
  )
}
