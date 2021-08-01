import React from 'react'
// import { Control, InputTitle, Must, InputField } from '../form-styles'
import DisplayInputError from '../DisplayInputError'

export default function Description({ description, setDescription, inputErrors, setInputErrors }) {
  const handleChange = (e) => {
    setInputErrors((prev) => ({ ...prev, description: '' }))
    setDescription(e.target.value)
  }
  return (
    <Control>
      <InputTitle>
        Description <Must>*</Must>
      </InputTitle>
      <InputField
        error={inputErrors.description}
        placeholder="Short post description"
        value={description}
        onChange={handleChange}
      />
      {inputErrors.description && <DisplayInputError error={inputErrors.description} />}
    </Control>
  )
}
