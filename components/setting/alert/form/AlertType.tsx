import React from 'react'
import Select from 'react-select'
import DisplayInputError from '../../../forms/DisplayInputError'
import { Control, InputTitle, customReactSelectStyles } from '../../../forms/form-styles'

export default function AlertType({ type, inputErrors, setInputErrors, setType }) {
  const options = [
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'info', label: 'Info' },
  ]

  const handleChange = (selectedOption) => {
    setInputErrors((prev) => ({ ...prev, type: '' }))
    setType(selectedOption.value)
  }

  return (
    <Control>
      <InputTitle>Alert Type</InputTitle>
      <div>
        <Select
          styles={customReactSelectStyles('inputErrors.type')}
          options={options.length && options}
          onChange={handleChange}
          placeholder={type ? type : 'Select Alert Type'}
        />
      </div>
      {inputErrors.type && <DisplayInputError error={inputErrors.type} />}
    </Control>
  )
}
