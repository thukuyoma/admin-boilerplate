import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import DisplayInputError from '../../../forms/DisplayInputError'
import { Control, InputTitle, Must } from '../../../forms/form-styles'
import dateFormatter from '../../../../utils/date-formatter'
import ms from 'ms'
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

export default function ExpiresAt({ setExpiresAt, inputErrors, setInputErrors }) {
  const [selectedDate, setSelectedDate] = useState(null)
  const handleChange = (date) => {
    setInputErrors((prev) => ({ ...prev, expiresAt: '' }))
    setExpiresAt(date)
    setSelectedDate(date)
  }
  const today = new Date()
  const tomorrow = new Date(today)
  const minDate = tomorrow.setDate(tomorrow.getDate() + 1)
  return (
    <Styles>
      <Control>
        <InputTitle>
          Expires At <Must>*</Must>
        </InputTitle>
        <DatePicker
          className="date__input"
          selected={selectedDate}
          onChange={(date) => handleChange(date)}
          placeholderText="Expires At"
          closeOnScroll={true}
          minDate={minDate}
          isClearable
        />
        {inputErrors.expiresAt && <DisplayInputError error={inputErrors.expiresAt} />}
      </Control>
    </Styles>
  )
}
