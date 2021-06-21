/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react'
import { BiCheck } from 'react-icons/bi'
import styled from 'styled-components'

const Styles = styled.div`
  .check-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 17px;
    width: 17px;
    margin-right: 10px;
    outline: none;
    border-radius: 2px;
    margin-right: 10px;
    border: 1.5px solid #ccc;
    outline: none;
    cursor: pointer;
    :hover {
    }
  }
  .checked-true {
    color: #0098db;
  }
`
export default function CheckBox({ onChange, value }) {
  return (
    <Styles>
      <div role="button" onKeyPress={onChange} onClick={onChange}>
        {value ? (
          <div className={`check-box checked-${value}`}>
            <BiCheck />
          </div>
        ) : (
          <div className="check-box"> </div>
        )}
      </div>
    </Styles>
  )
}
