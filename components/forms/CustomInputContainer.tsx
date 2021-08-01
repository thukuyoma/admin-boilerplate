import React from 'react'
import styled from 'styled-components'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import DisplayInputError from './DisplayInputError'

const Styles = styled.div`
  margin-bottom: 30px;
  width: 100%;
`
export default function CustomInputContainer({
  title,
  children,
  error,
  isRequired,
  value,
}: {
  children: React.ReactNode
  title: string
  error?: string
  isRequired?: boolean
  value?: string
}) {
  return (
    <Styles>
      <label>
        {capitalizeFirstLetter(title)}{' '}
        {isRequired && <span style={{ color: value.length ? '#4cd964' : 'red' }}>*</span>}{' '}
      </label>
      {children}
      {error && <DisplayInputError error={error} />}
    </Styles>
  )
}
