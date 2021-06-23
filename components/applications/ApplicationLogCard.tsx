import moment from 'moment'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import dateFormatter from '../../utils/date-formatter'
import randomColorPicker from '../../utils/random-color-picker'
import wordsCapitalizer from '../../utils/words-capitalizer'

const Styles = styled.div`
  margin-bottom: 30px;
  .log__name-date {
    font-size: 13px;
    color: #8a8a8a;
    margin: 0;
    // font-weight: bold;
  }
  .log__name {
    margin-right: 5px;
  }
  .log__date {
    font-style: italic;
  }
  .log__message {
    margin: 0;
    font-size: 14px;
    margin-top: 5px;
    font-weight: 400;
    color: #444;
  }
`

export default function ApplicationLogCard({ log }) {
  return (
    <Styles>
      <p className="log__name-date">
        <span className="log__name">{wordsCapitalizer(log.createdBy.adminFullName)}</span>-{' '}
        <span className="log__date">{moment(log.timestamp).startOf('hour').fromNow()}</span>
      </p>
      <p className="log__message">{capitalizeFirstLetter(log.message)}</p>
    </Styles>
  )
}
