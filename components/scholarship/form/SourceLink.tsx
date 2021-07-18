import React from 'react'
import DisplayInputError from '../../forms/DisplayInputError'
import { Control, InputTitle, Must, InputField } from '../../forms/form-styles'

export default function SourceLink({ sourceLink, setSourceLink, inputErrors, setInputErrors }) {
  const handleChange = (e) => {
    setInputErrors((prev) => ({ ...prev, sourceLink: '' }))
    setSourceLink(e.target.value)
  }
  return (
    <Control>
      <InputTitle>
        Source Link <Must>*</Must>
      </InputTitle>
      <InputField
        error={inputErrors.sourceLink}
        placeholder="Scholarship Source Link"
        value={sourceLink}
        onChange={handleChange}
      />
      {inputErrors.sourceLink && <DisplayInputError error={inputErrors.sourceLink} />}
    </Control>
  )
}
