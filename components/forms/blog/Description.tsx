import React from 'react'
import styled from 'styled-components'
import { RiErrorWarningLine } from 'react-icons/ri'
import {
  Control,
  InputTitle,
  Must,
  InputField,
  InputError,
  ErrorIcon,
} from '../../shared/form-styles'

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
      {inputErrors.description && (
        <InputError>
          <ErrorIcon>
            <RiErrorWarningLine />
          </ErrorIcon>
          {inputErrors.description}
        </InputError>
      )}
    </Control>
  )
}
