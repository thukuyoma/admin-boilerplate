import React, { useState } from 'react'
import DisplayInputError from '../../forms/DisplayInputError'
import { Control, InputTitle, Must, InputField } from '../../forms/form-styles'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
const Styles = styled.div`
  .date__input {
    display: flex;
    width: 100%;
    border: 1px solid #ced4da;
    box-sizing: border-box;
    border-radius: 3px;
    height: 35px;
    padding: 10px 10px;
    flex-wrap: nowrap;
    align-items: center;
    oultine: 0;
  }
  .react-datepicker__close-icon::after {
    background-color: #0098db;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    background-color: #0098db;
  }
`

export default function ApplicationDeadLine({
  setApplicationDeadLine,
  inputErrors,
  setInputErrors,
}) {
  const handleChange = (date) => {
    setInputErrors((prev) => ({ ...prev, applicationDeadLine: '' }))
    setApplicationDeadLine(date)
  }
  return (
    <Styles>
      <Control>
        <InputTitle>
          Application Deadline <Must>*</Must>
        </InputTitle>
        <DatePicker
          className="date__input"
          selected={new Date()}
          onChange={(date) => handleChange(date)}
          isClearable
          placeholderText="Date"
          closeOnScroll={true}
        />
        {inputErrors.applicationDeadLine && (
          <DisplayInputError error={inputErrors.applicationDeadLine} />
        )}
      </Control>
    </Styles>
  )
}
