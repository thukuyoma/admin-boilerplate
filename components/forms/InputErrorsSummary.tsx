import React, { useEffect } from 'react'
import styled from 'styled-components'
import DisplayInputError from './DisplayInputError'

const Styles = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
  }
`
export default function InputErrorsSummary({ errors }) {
  return (
    <Styles>
      <p>{errors.length} input error(s) found</p>
      <div>
        {errors.map((error: string) => (
          <DisplayInputError error={error} />
        ))}
      </div>
    </Styles>
  )
}
