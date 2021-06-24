import React from 'react'
import DisplayInputError from '../../forms/DisplayInputError'
import { Control, InputTitle, Must, InputField } from '../../forms/form-styles'

export default function ScholarshipSourceLink({
  scholarshipSourceLink,
  setScholarshipSourceLink,
  inputErrors,
  setInputErrors,
}) {
  const handleChange = (e) => {
    setInputErrors((prev) => ({ ...prev, scholarshipSourceLink: '' }))
    setScholarshipSourceLink(e.target.value)
  }
  return (
    <Control>
      <InputTitle>
        Source Link <Must>*</Must>
      </InputTitle>
      <InputField
        error={inputErrors.scholarshipSourceLink}
        placeholder="Scholarship Source Link"
        value={scholarshipSourceLink}
        onChange={handleChange}
      />
      {inputErrors.scholarshipSourceLink && (
        <DisplayInputError error={inputErrors.scholarshipSourceLink} />
      )}
    </Control>
  )
}
