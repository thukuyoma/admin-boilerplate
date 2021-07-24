import { Grid } from '@material-ui/core'
import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { MdEmail } from 'react-icons/md'
import { RiAdminLine } from 'react-icons/ri'
import styled from 'styled-components'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import wordsCapitalizer from '../../utils/words-capitalizer'
import Avatar from '../shared/Avatar'

const Styles = styled.div`
  margin-bottom: 50px;
  .user__group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #f0f0f0;
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
  .user__timestamp {
    text-align: center;
    margin-top: 5px;
    display: flex;
    align-items: center;
    font-size: 14px;s
  }
  .user__timestamp-tag {
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
export default function UserInfoCard({ user }) {
  return (
    <Styles>
      <div className="divider">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <div className="user__group">
              <Avatar image={user.avatar.url} initial={user.firstName} size="extraLarge" />
              <div>
                <div className="applicant__name">
                  {wordsCapitalizer(`${user.firstName} ${user.lastName}`)}
                </div>
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
                      <CgWorkAlt className="tag__icon" />
                      Role
                    </p>
                    <p className="tag__value">{capitalizeFirstLetter(user.role)}</p>
                  </div>
                  <div className="tag__group">
                    <p className="tag__name">
                      <RiAdminLine className="tag__icon" />
                      Created On
                    </p>
                  </div>
                </div>
                <div className="tag__seperator">
                  <p className="tag__name">
                    <MdEmail className="tag__icon" />
                    Email
                  </p>
                  <p className="tag__value">{user.email}</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Styles>
  )
}
