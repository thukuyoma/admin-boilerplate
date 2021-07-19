import { Grid } from '@material-ui/core'
import React from 'react'
import { AiFillClockCircle, AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai'
import { CgWorkAlt } from 'react-icons/cg'
import { ImLocation2 } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { RiAdminLine } from 'react-icons/ri'
import styled from 'styled-components'
import dateFormatter from '../../utils/date-formatter'
import wordsCapitalizer from '../../utils/words-capitalizer'
import ItemStatus from '../shared/ItemStatus'

const Styles = styled.div`
  margin-bottom: 50px;
  .person-data__group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #f0f0f0;
  }
  .person-data__tag {
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
  .person-data__avatar {
    height: 60px;
    width: 60px;
    margin-bottom: 20px;
    border-radius: 50px;
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
  .person-data__timestamp {
    text-align: center;
    margin-top: 5px;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .person-data__timestamp-tag {
    margin-bottom: 0;
    margin-right: 10px;
    color: #0098db;
    font-weight: bold;
    display: flex;
    align-items: center;
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
export default function PersonDataDisplay({
  avatar,
  firstName,
  lastName,
  timestamp,
  email,
  telephone,
  isOpen,
}: {
  avatar?: string
  firstName: string
  lastName: string
  timestamp: string
  email: string
  telephone: string | number
  isOpen: boolean
}) {
  return (
    <Styles>
      <div className="divider">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <div className="person-data__group">
              {avatar ? (
                <img className="person-data__avatar" src={avatar} />
              ) : (
                <div className="person-data__tag">
                  {firstName.charAt(0).toUpperCase()}
                  {lastName.charAt(0).toUpperCase()}
                </div>
              )}
              <div>
                <div className="applicant__name">
                  {wordsCapitalizer(`${firstName} ${lastName}`)}
                </div>
                <p className="person-data__timestamp">
                  <div className="person-data__timestamp-tag">
                    <AiFillClockCircle className="tag__icon" />
                    Created On:
                  </div>
                  <p className="tag__value">{dateFormatter(timestamp)}</p>
                </p>
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
                      Phone
                    </p>
                    <p className="tag__value">{telephone}</p>
                  </div>
                  <div className="tag__group">
                    <p className="tag__name">
                      <MdEmail className="tag__icon" />
                      Email
                    </p>
                    <p className="tag__value">{email}</p>
                  </div>
                </div>
                <div className="tag__seperator">
                  <ItemStatus statusTitle="Ticket Closed" status={isOpen} />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Styles>
  )
}
