import React from 'react'
import styled from 'styled-components'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import dateFormatter from '../../utils/date-formatter'
import { useRouter } from 'next/router'
import wordsCapitalizer from '../../utils/words-capitalizer'
import { TagKey, TagTitle, TagDetails, TagKeyValuePair, TagValue } from '../shared/shared-styles'
import ItemStatus from '../shared/ItemStatus'
import { nanoid } from 'nanoid'
import BorderPaddingWrapper from '../shared/BorderPaddingWrapper'

const Styles = styled.div`
  .scholarship__title {
    font-size: 16px;
    line-height: 27px;
    color: #0c4284;
    margin: 0;
    font-weight: 600;
  }
  .scholarship__image {
    width: 80px;
    height: 80px;
    position: relative;
    flex-shrink: 0;
    border-radius: 5px;
  }
  .scholarship__timestamp {
    font-size: 13px;
    line-height: 200.4%;
    color: #c4c4c4;
    margin-left: 20px;
  }

  .scholarship__wrapper {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 40px;
  }
  .scholarship__type-date {
    margin: 0;
  }
  .scholarship__creator {
    margin: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 5px;
  }
  .scholarship__details {
    margin-left: 10px;
  }
  .how-to__number {
    margin-right: 10px;
  }
  .how-to__list {
    background: #fdf5ed;
    border-radius: 5px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    margin: 10px 5px 10px 0;
    font-size: 12px;
    white-space: wrap;
  }
`

export default function ScholarshipDetails({ scholarship }) {
  const router = useRouter()
  return (
    <Styles>
      <BorderPaddingWrapper padding>
        <div className="scholarship__wrapper">
          <img
            className="scholarship__image"
            src={scholarship.image ? scholarship.image.url : '/assets/no-scholarship-image.png'}
          />
          <div className="scholarship__details">
            <p className="scholarship__type-date">
              {capitalizeFirstLetter(scholarship.organization)}{' '}
              <span className="scholarship__timestamp">{dateFormatter(scholarship.timestamp)}</span>
            </p>
            <ItemStatus statusTitle="Published" status={scholarship.status.isPublished} />
            <p className="scholarship__creator">
              <TagKey>Created By:</TagKey>
              {wordsCapitalizer(scholarship.createdBy.adminFullName)}
            </p>
          </div>
        </div>
        <TagKeyValuePair>
          <TagKey>Title</TagKey>
          <TagValue>{scholarship.title}</TagValue>
        </TagKeyValuePair>
        <TagKeyValuePair>
          <TagKey>Country</TagKey>
          <TagValue>{scholarship.country}</TagValue>
        </TagKeyValuePair>
        <TagKeyValuePair>
          <TagKey>Who can Apply</TagKey>
          <TagValue>{scholarship.whoCanApply}</TagValue>
        </TagKeyValuePair>
        <TagTitle>Scholarship Description</TagTitle>
        <TagDetails>{capitalizeFirstLetter(scholarship.description)}</TagDetails>

        {scholarship.howToApply.length ? (
          <>
            <TagTitle>How to Apply</TagTitle>
            {scholarship.howToApply.map((howToApplyListItem, index) => (
              <div key={nanoid()} className="how-to__list">
                <span className="how-to__number">{index + 1}</span>
                {howToApplyListItem}
              </div>
            ))}
          </>
        ) : null}
      </BorderPaddingWrapper>
    </Styles>
  )
}
