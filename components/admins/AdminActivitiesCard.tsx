import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import dateFormatter from '../../utils/date-formatter'
import randomColorPicker from '../../utils/random-color-picker'
import wordsCapitalizer from '../../utils/words-capitalizer'

const Styles = styled.div`
  margin-bottom: 30px;
  .activity__creator {
    font-size: 13px;
    color: #a2a1a1;
    display: flex;
    flex-wrap: wrap;
  }
  .activity__timestamp {
    font-style: italic;
    margin-left: 10px;
  }
  .activity__details {
    margin-top: 5px;
    font-weight: 400;
  }
  .activity__type {
    margin-right: 10px;
    color: #797979;
  }
  .activity__activity {
  }
`

export default function AdminActivitiesCard({ activity }) {
  const colors = randomColorPicker()
  return (
    <Styles>
      <div className="activity__creator">
        {wordsCapitalizer(`${activity.createdByFullName}`)}
        <span className="activity__timestamp">{dateFormatter(activity.timestamp)}</span>
      </div>
      <p className="activity__details" style={{ fontWeight: activity.isSuccess && 500 }}>
        <span className="activity__type"> {activity.type}</span> -{' '}
        <span className="activity__activity">{activity.activity}</span>
      </p>
    </Styles>
  )
}
