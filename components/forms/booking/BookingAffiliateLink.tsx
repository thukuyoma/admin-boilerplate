import React from 'react'
import { Control, InputTitle, Must, InputField } from '../form-styles'
import DisplayInputError from '../InputError'

export default function BookingAffiliateLink({
  bookingAffiliateLink,
  setBookingAffiliateLink,
  inputErrors,
  setInputErrors,
}) {
  const handleChange = (e) => {
    setInputErrors((prev) => ({ ...prev, bookingAffiliateLink: '' }))
    setBookingAffiliateLink(e.target.value)
  }
  return (
    <Control>
      <InputTitle>
        Booking Affiliate Link <Must>*</Must>
      </InputTitle>
      <InputField
        error={inputErrors.title}
        placeholder="Booking Affiliate Link"
        value={bookingAffiliateLink}
        onChange={handleChange}
      />
      {inputErrors.bookingAffiliateLink && (
        <DisplayInputError error={inputErrors.bookingAffiliateLink} />
      )}
    </Control>
  )
}
