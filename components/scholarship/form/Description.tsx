import React from 'react'
import DisplayInputError from '../../forms/DisplayInputError'
import { Control, InputTitle, Must, InputField } from '../../forms/form-styles'

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
        placeholder="Scholarship Description"
        value={description}
        onChange={handleChange}
      />
      {inputErrors.description && <DisplayInputError error={inputErrors.description} />}
    </Control>
  )
}
