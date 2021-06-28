import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

import styled from 'styled-components'
const Styles = styled.div`
  .input-error__wrapper {
    color: red;
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
  }
  .input-error__icon {
    color: red;
    display: flex;
    margin-right: 5px;
    flex-shrink: 0;
    padding-top: 2px;
  }
`

export default function DisplayInputError({ error }: { error: string }) {
  return (
    <Styles>
      {error.length ? (
        <div className="input-error__wrapper">
          <div className="input-error__icon">
            <BiErrorCircle />
          </div>
          {error}
        </div>
      ) : null}
    </Styles>
  )
}
