import { Grid } from '@material-ui/core'
import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { ImLocation2 } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import styled from 'styled-components'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import dateFormatter from '../../utils/date-formatter'
import wordsCapitalizer from '../../utils/words-capitalizer'
import BorderPaddingWrapper from '../shared/BorderPaddingWrapper'
import ApplicationsLogs from './ApplicationsLogs'

const Styles = styled.div`
  .application__group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #f0f0f0;
  }
  .application__tag {
    height: 60px;
    width: 60px;
    margin-bottom: 20px;
    border-radius: 50px;
    background: #0098db;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    color: #fff;
  }
  .divider {
    border-bottom: 1px solid #f0f0f0;
  }
  .applicant__name {
    flex-wrap: wrap;
    line-height: 28px;
    color: #0098db;
    text-align: center;
  }
  .applicant__date {
    text-align: center;
  }
  .grid__wrapper {
    height: fit-content;
    padding-bottom: 20px;
  }
  .tag__name {
    margin: 0;
    font-size: 12px;
    font-weight: bold;
    color: #0098db;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  .tag__icon {
    margin-right: 5px;
  }
  .tag__grouper {
    display: flex;
    flex-wrap: wrap;
  }
  .tag__group {
  }
  .tag__group-active {
    margin-right: 20px;
  }
  .tag__key {
  }
  .tag__value {
    margin: 0;
    font-size: 14px;
  }
  .tag__title {
    margin-top: 0;
    font-weight: 500;
  }
  .tag__seperator {
    margin-top: 15px;
  }
  .school__divider {
    margin-top: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #f0f0f0;
  }
`
export default function ApplicationDetails({ application }) {
  return (
    <Styles>
      <BorderPaddingWrapper padding>
        <div className="divider">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={5}>
              <div className="application__group">
                <div className="application__tag">
                  {application.firstName.charAt(0).toUpperCase()}
                  {application.lastName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="applicant__name">
                    {wordsCapitalizer(
                      `${application.firstName} ${application.middleName} ${application.lastName}`
                    )}
                  </div>
                  <p className="applicant__date">{dateFormatter(application.timestamp)}</p>
                </div>
              </div>
            </Grid>
            <Grid container item xs={12} sm={7}>
              <Grid>
                <div className="grid__wrapper">
                  <p className="tag__title">Personal Information</p>
                  <div className="tag__grouper">
                    <div className="tag__group tag__group-active">
                      <p className="tag__name">
                        <AiFillPhone className="tag__icon" />
                        Telephone
                      </p>
                      <p className="tag__value">{application.telephoneNumber}</p>
                    </div>
                    <div className="tag__group">
                      <p className="tag__name">
                        <ImLocation2 className="tag__icon" />
                        Residential Address
                      </p>
                      <p className="tag__value">{application.address}</p>
                    </div>
                  </div>
                  <div className="tag__seperator">
                    <p className="tag__name">
                      <MdEmail className="tag__icon" />
                      Email
                    </p>
                    <p className="tag__value">{application.email}</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className="school__divider">
          <p className="tag__title">Application Details</p>
          <Grid spacing={3} container>
            <Grid item xs={12} md={3}>
              <p className="tag__name">Programme</p>
              <p className="tag__value">{capitalizeFirstLetter(application.programme)}</p>
            </Grid>
            <Grid item xs={12} md={3}>
              <p className="tag__name">Field of study</p>
              <p className="tag__value">{capitalizeFirstLetter(application.studyField)}</p>
            </Grid>
            <Grid item xs={12} md={3}>
              <p className="tag__name">Desired Country</p>
              <p className="tag__value">{capitalizeFirstLetter(application.desiredCountry)}</p>
            </Grid>
            <Grid item xs={12} md={3}>
              <p className="tag__name">University</p>
              <p className="tag__value">{capitalizeFirstLetter(application.university)}</p>
            </Grid>
          </Grid>
        </div>
        <ApplicationsLogs applicationId={application._id} />
      </BorderPaddingWrapper>
    </Styles>
  )
}
