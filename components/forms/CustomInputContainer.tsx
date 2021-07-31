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
}: {
  children: React.ReactNode
  title: string
  error?: string
}) {
  return (
    <Styles>
      <label>{capitalizeFirstLetter(title)}</label>
      {children}
      {error && <DisplayInputError error={error} />}
    </Styles>
  )
}
