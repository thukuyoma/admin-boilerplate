import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import dateFormatter from '../../utils/date-formatter'
import wordShortener from '../../utils/wordShortener'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'

const Styles = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 20px;
  margin-right: 20px;
  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  .scholarship__image {
    height: 62px;
    width: 62px;
    border-radius: 0px;
    margin-right: 10px;
    border-radius: 5px;
    flex-shrink: 0;
  }
  .scholarship__wrapper {
    display: flex;
  }
  .scholarship-details__type {
    margin: 0;
    color: #0c4284;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .button__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: gray;
    flex-shrink: 0;
  }
  .button__read {
    color: #ccc;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 23px;
    cursor: pointer;
    :hover {
      color: #fff;
      background: #0098db;
    }
    @media (max-width: 600px) {
      margin-top: 20px;
    }
  }
  .scholarship-details__description {
    margin: 0;
    font-size: 14px;
  }
`
export default function ScholarshipCard({ scholarship }) {
  const router = useRouter()
  return (
    <Styles>
      <div className="scholarship__wrapper">
        <img
          src={scholarship.image ? scholarship.image.url : '/assets/no-scholarship-image.png'}
          className="scholarship__image"
        />
        <div className="scholarship__details">
          <p className="scholarship-details__type">
            {wordShortener(capitalizeFirstLetter(scholarship.organization), 5)}
            <span className="scholarship__timestamp">{dateFormatter(scholarship.timestamp)}</span>
          </p>
          <p className="scholarship-details__description">
            {wordShortener(scholarship.description, 20)}
          </p>
        </div>
      </div>
      <div className="button__wrapper">
        <div
          className="button__read"
          onClick={() => router.push(`/scholarships/${scholarship._id}`)}
        >
          View More
        </div>
      </div>
    </Styles>
  )
}
