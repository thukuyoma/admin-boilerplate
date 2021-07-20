import React from 'react'
import styled from 'styled-components'
import capitalizeFirstLetter from '../../../utils/capitalize-first-letter'
import dateFormatter from '../../../utils/date-formatter'
import { useRouter } from 'next/router'
import wordsCapitalizer from '../../../utils/words-capitalizer'
import { TagKey, TagTitle, TagDetails } from '../../shared/shared-styles'
import ItemStatus from '../../shared/ItemStatus'
import BorderPaddingWrapper from '../../shared/BorderPaddingWrapper'

const Styles = styled.div`
  margin-bottom: 30px;
  .alert__title {
    font-size: 16px;
    line-height: 27px;
    color: #0c4284;
    margin: 0;
    font-weight: 600;
  }
  .alert__image {
    width: 80px;
    height: 80px;
    position: relative;
    flex-shrink: 0;
    border-radius: 5px;
  }
  .alert__timestamp {
    font-size: 13px;
    line-height: 200.4%;
    color: #c4c4c4;
    margin-left: 20px;
  }

  .alert__wrapper {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 40px;
  }
  .alert__type-date {
    margin: 0;
  }
  .alert__creator {
    margin: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 5px;
  }
  .alert__details {
    margin-left: 10px;
  }
`

export default function AlertDetails({ alert }) {
  const router = useRouter()
  return (
    <Styles>
      <BorderPaddingWrapper padding>
        <div className="alert__wrapper">
          <div className="alert__details">
            <p className="alert__type-date">
              {capitalizeFirstLetter(alert.type)}{' '}
              <span className="alert__timestamp">{dateFormatter(alert.timestamp)}</span>
            </p>
            <ItemStatus statusTitle="Published" status={alert.status.isActive} />
            <p className="alert__creator">
              <TagKey>Created By:</TagKey>
              {wordsCapitalizer(alert.createdBy.adminFullName)}
            </p>
          </div>
        </div>
        <TagTitle>Expires On</TagTitle>
        <TagDetails>{capitalizeFirstLetter(alert.expiresAt)}</TagDetails>
        <TagTitle>Button Text</TagTitle>
        <TagDetails>{capitalizeFirstLetter(alert.alertButtonText)}</TagDetails>
        <TagTitle>Button Link</TagTitle>
        <TagDetails>{capitalizeFirstLetter(alert.alertButtonLink)}</TagDetails>
        <TagTitle>Alert Message</TagTitle>
        <TagDetails>{capitalizeFirstLetter(alert.message)}</TagDetails>
      </BorderPaddingWrapper>
    </Styles>
  )
}
