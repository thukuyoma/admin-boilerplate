import React from 'react'
import { RiExchangeLine } from 'react-icons/ri'
import styled from 'styled-components'
import AccountTabTitle from './AccountTabTitle'

const Styles = styled.div`
  .settings-tab-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .settings-tab {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 10px 20px;
    height: 100px;
    width: 100px;
  }
  .settings-tab__image {
    width: 30px;
    height: 30px;
    border-radius: 5px;
  }
  .settings-tab__title {
    margin-top: 10px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    :hover {
      color: #0098db;
    }
  }
  .settings-tab__icon {
    margin-right: 5px;
  }
  .wrapper__head {
    text-align: center;
  }
`

const tabs = [
  {
    title: 'Names',
    switchCase: 'names',
    icon: '/shortcuts/names.png',
  },
  {
    title: 'Avatar',
    switchCase: 'avatar',
    icon: '/shortcuts/avatar.png',
  },
  {
    title: 'Bio',
    switchCase: 'bio',
    icon: '/shortcuts/bio.png',
  },
  {
    title: 'Password',
    switchCase: 'password',
    icon: '/shortcuts/password.png',
  },
]
export default function AccountSettingsMenu({ setSwitchCaseAccount }) {
  return (
    <Styles>
      <AccountTabTitle
        tabTitle="Manage Account Settings"
        setSwitchCaseAccount={setSwitchCaseAccount}
      />
      <div className="settings-tab-wrapper">
        {tabs.map((tab) => (
          <div key={tab.title} className="settings-tab">
            <img className="settings-tab__image" src={tab.icon} />
            <p className="settings-tab__title" onClick={() => setSwitchCaseAccount(tab.switchCase)}>
              <RiExchangeLine className="settings-tab__icon" />
              <span>{tab.title}</span>
            </p>
          </div>
        ))}
      </div>
    </Styles>
  )
}
