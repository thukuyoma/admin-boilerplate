import React from 'react'
import DisplayInputError from '../../forms/DisplayInputError'
import { Control, InputTitle, Must, InputField } from '../../forms/form-styles'

export default function Title({ title, setTitle, inputErrors, setInputErrors }) {
  const handleChange = (e) => {
    setInputErrors((prev) => ({ ...prev, title: '' }))
    setTitle(e.target.value)
  }
  return (
    <Control>
      <InputTitle>
        Title <Must>*</Must>
      </InputTitle>
      <InputField
        error={inputErrors.title}
        placeholder="Scholarship Title"
        value={title}
        onChange={handleChange}
      />
      {inputErrors.title && <DisplayInputError error={inputErrors.title} />}
    </Control>
  )
}
