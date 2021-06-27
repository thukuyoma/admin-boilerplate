import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { RiSettings3Line } from 'react-icons/ri'
import styled from 'styled-components'

const Styles = styled.div`
  border-bottom: 1px solid #5e5e5e1f;
  padding-bottom: 20px;
  margin-bottom: 30px;
  width: 100%;
  .account-tab-title__header {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    margin-top: 0;
    margin-bottom: 5px;
  }
  .account-tab-title__action {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .account-tab-title__Settings,
  .account-tab-title__profile {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #0098db;
    cursor: pointer;
    :hover {
      color: #2a74be;
    }
  }
  .account-tab-title__action-seperator {
    margin: 0 10px;
  }
  .account-tab-title__Settings {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #e4585a;
    cursor: pointer;
    :hover {
      color: red;
    }
  }
  .item__icon {
    margin-right: 5px;
  }
`
export default function AccountTabTitle({
  tabTitle,
  setSwitchCaseAccount,
}: {
  tabTitle: string
  setSwitchCaseAccount: (value) => void
}) {
  return (
    <Styles>
      <p className="account-tab-title__header">{tabTitle}</p>
      <div className="account-tab-title__action">
        <span
          className="account-tab-title__profile"
          onClick={() => setSwitchCaseAccount('profile')}
        >
          <FaRegUser className="item__icon" />
          <span className="account-tab-title__item">Profile</span>
        </span>
        <span className="account-tab-title__action-seperator">|</span>

        <span
          className="account-tab-title__Settings"
          onClick={() => setSwitchCaseAccount('settings')}
        >
          <RiSettings3Line className="item__icon" />
          <span className="account-tab-title__item">Settings</span>
        </span>
      </div>
    </Styles>
  )
}
