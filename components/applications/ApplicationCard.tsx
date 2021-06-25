import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import dateFormatter from '../../utils/date-formatter'
import randomColorPicker from '../../utils/random-color-picker'
import wordsCapitalizer from '../../utils/words-capitalizer'

const Styles = styled.div`
  margin-bottom: 30px;
  .application__wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .application__group {
    display: flex;
  }
  .application__tag {
    height: 40px;
    width: 40px;
    margin-right: 10px;
    border-radius: 50px;
    background: #f0f0f0;
    color: #8b8a8a;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    flex-shrink: 0;
  }
  .applicant__name {
    font-size: 13px;
    color: #a2a1a1;
    display: flex;
    flex-wrap: wrap;
  }
  .applicant__nationality {
    margin-left: 5px;
  }
  .applicant__request {
    font-size: 16px;
    margin: 0;
    padding-top: 3px;
  }
  .application__button {
    cursor: pointer;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding: 5px 10px;
    color: #a2a1a1;
    white-space: nowrap;
    font-size: 14px;
  }
  .application__actions {
    display: flex;
    flex-direction: column;
  }
  .view-more__button {
    display: none;
  }
  @media (max-width: 600px) {
    .application__button {
      display: none;
    }
    .view-more__button {
      display: flex;
      color: #0098db;
      margin-bottom: 0;
    }
  }
`

export default function ApplicationCard({ application }) {
  const colors = randomColorPicker()
  const router = useRouter()
  return (
    <Styles>
      <div className="application__wrapper">
        <div className="application__group">
          <div
            className="application__tag"
            style={{ backgroundColor: colors.primary, color: colors.comp }}
          >
            {application.firstName.charAt(0).toUpperCase()}
            {application.lastName.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="applicant__name">
              {wordsCapitalizer(`${application.firstName} ${application.lastName}`)}
              <span className="applicant__nationality">({application.nationality})</span>
              <span>{dateFormatter(application.timestamp)}</span>
            </div>
            <p
              className="applicant__request"
              style={{ fontWeight: !application.status.isRead && 500 }}
            >
              {capitalizeFirstLetter(application.programme)} in {application.studyField} in{' '}
              {application.desiredCountry}
            </p>
            <p
              className="view-more__button"
              onClick={() => router.push(`/applications/${application._id}`)}
              onKeyPress={() => router.push(`/applications/${application._id}`)}
              tabIndex={0}
            >
              View More
            </p>
          </div>
        </div>
        <div className="application__actions">
          <span
            onClick={() => router.push(`/applications/${application._id}`)}
            onKeyPress={() => router.push(`/applications/${application._id}`)}
            tabIndex={0}
            className="application__button"
            style={{
              color: !application.status.isRead && 'black',
              fontWeight: !application.status.isRead && 600,
            }}
          >
            See More
          </span>
        </div>
      </div>
    </Styles>
  )
}
