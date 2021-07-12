import React from 'react'
import DisplayInputError from '../../../forms/DisplayInputError'
import { Control, InputTitle, Must, TextArea } from '../../../forms/form-styles'
import InputWordsCounter from '../../../forms/InputWordsCounter'

export default function Description({ description, setDescription, inputErrors, setInputErrors }) {
  const handleChange = (e) => {
    setInputErrors((prev) => ({ ...prev, description: '' }))
    setDescription(e.target.value)
  }
  return (
    <Control>
      <InputTitle>
        Description <InputWordsCounter words={description} max={300} /> <Must>*</Must>
      </InputTitle>
      <TextArea
        error={inputErrors.description}
        placeholder="Category description"
        value={description}
        onChange={handleChange}
      />
      {inputErrors.description && <DisplayInputError error={inputErrors.description} />}
    </Control>
  )
}
