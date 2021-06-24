import React from 'react'
import DisplayInputError from '../../forms/DisplayInputError'
import { Control, InputTitle, Must, InputField } from '../../forms/form-styles'

export default function Country({ country, setCountry, inputErrors, setInputErrors }) {
  const handleChange = (e) => {
    setInputErrors((prev) => ({ ...prev, country: '' }))
    setCountry(e.target.value)
  }
  return (
    <Control>
      <InputTitle>
        Country <Must>*</Must>
      </InputTitle>
      <InputField
        error={inputErrors.country}
        placeholder="Scholarship Country"
        value={country}
        onChange={handleChange}
      />
      {inputErrors.country && <DisplayInputError error={inputErrors.country} />}
    </Control>
  )
}
