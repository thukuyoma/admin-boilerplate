import React from 'react'
import Select from 'react-select'
import { Control, customReactSelectStyles, InputTitle } from '../form-styles'
import DisplayInputError from '../DisplayInputError'

export default function BookingType({ bookingType, inputErrors, setInputErrors, setBookingType }) {
  const options = [
    { value: 'hotel', label: 'Hotel' },
    { value: 'flight', label: 'Flight' },
    { value: 'train', label: 'Train' },
  ]

  const handleChange = (selectedOption) => {
    setInputErrors((prev) => ({ ...prev, bookingType: '' }))
    setBookingType(selectedOption.value)
  }

  return (
    <Control>
      <InputTitle>Booking Type</InputTitle>
      <div>
        <Select
          styles={customReactSelectStyles('')}
          options={options.length && options}
          onChange={handleChange}
          placeholder={bookingType ? bookingType : 'Select Booking Type'}
        />
      </div>
      {inputErrors.bookingType && <DisplayInputError error={inputErrors.bookingType} />}
    </Control>
  )
}
