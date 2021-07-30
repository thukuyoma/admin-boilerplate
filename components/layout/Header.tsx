import React from 'react'
import styled from 'styled-components'
import { TiThSmall } from 'react-icons/ti'
import { BsBell, BsClockHistory } from 'react-icons/bs'
import { AiOutlineDown } from 'react-icons/ai'
import { IoIosAddCircle } from 'react-icons/io'
import Search from './Search'
import useAuth from '../../context/auth'
import CreateShortcuts from './header-tabs/CreateShortcuts'
import HistoryTab from './header-tabs/HistoryTab'
import AccountTab from '../account/AccountTab'
import ShortcutsTab from './header-tabs/ShortcutsTab'
import NotificationCount from '../notifications/NotificationCount'
import NotificationTab from './header-tabs/NotificationTab'
import StudyovsLogo from './StudyovsLogo'
import Avatar from '../shared/Avatar'

const Styles = styled.div`
  justify-content: space-between;
  z-index: 1028;
  display: flex;
  top: 0px;
  color: rgba(36, 46, 62, 0.8);
  transition: all 0.3s ease-in-out 0s;
  position: fixed;
  width: 100%;

  .header__account-details {
    display: flex;
    align-items: center;
  }
  .alert {
    width: 40px;
    height: 40px;
    background: #ffffff;
    box-shadow: 1px 1px 10px -5px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .alert {
    margin-left: 20px;
  }
  .header-links__item {
    margin: 0 15px;
    display: flex;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    position: relative;
    :hover {
      color: #0098db;
    }
  }
  .name {
    color: #6e6e6e;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }
  @media (max-width: 500px) {
    display: none;
  }
  .wrapper__now {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1300px;
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    min-height: 60px;
    align-items: center;
    padding: 0 10px;
    background: #f7f7f7;
    position: relative;
  }
  .header__spead {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header__logo {
    width: 200px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    margin-right: 30px;
  }
  .colorizer {
    color: #f4863a;
  }
`
export default function Header({
  toggleSideNav,
  handleAccount,
  showAccount,
  handleCreateShortcuts,
  showCreateShortcuts,
  handleHistoryTab,
  showHistoryTab,
  handleShortcuts,
  showShortcuts,
  handleNotification,
  showNotification,
}) {
  const { profile } = useAuth()
  return (
    <Styles toggleSideNav={toggleSideNav}>
      <div className="wrapper__now">
        <div className="header__logo">
          <StudyovsLogo complete />
        </div>
        <Search />
        <div className="header__spead">
          <div className="header__account-details">
            <div className="header-links__item" style={{ fontSize: '14px' }}>
              Studyovs <AiOutlineDown />
            </div>
            <div className="header-links__item" style={{ fontSize: '26px' }}>
              <IoIosAddCircle
                onClick={() => handleCreateShortcuts()}
                onKeyPress={() => handleCreateShortcuts()}
              />
            </div>
            <CreateShortcuts showCreateShortcuts={showCreateShortcuts} />
            <div className="header-links__item">
              <BsClockHistory
                onClick={() => handleHistoryTab()}
                onKeyPress={() => handleHistoryTab()}
              />
            </div>
            <HistoryTab showHistoryTab={showHistoryTab} />
            <div className="header-links__item">
              <BsBell
                onClick={() => handleNotification()}
                onKeyPress={() => handleNotification()}
              />
              <NotificationCount />
            </div>
            {showNotification && <NotificationTab showNotification={showNotification} />}
            <div className="header-links__item colorizer">
              <TiThSmall onClick={() => handleShortcuts()} onKeyPress={() => handleShortcuts()} />
            </div>
            <ShortcutsTab showShortcuts={showShortcuts} />
            <div
              className="header-links__item"
              onClick={() => handleAccount()}
              onKeyPress={() => handleAccount()}
            >
              <Avatar
                image={profile?.avatar?.url ? profile?.avatar?.url : '/assets/default-avatar.png'}
                size="medium"
              />
            </div>
            <AccountTab showAccount={showAccount} />
          </div>
        </div>
      </div>
    </Styles>
  )
}
