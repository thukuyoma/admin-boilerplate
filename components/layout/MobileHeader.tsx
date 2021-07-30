import React from 'react'
import styled from 'styled-components'
import MobileSideNav from './MobileSideNav'
import { BsBell, BsClockHistory } from 'react-icons/bs'
import { IoIosAddCircle } from 'react-icons/io'
import { AiOutlineMenu } from 'react-icons/ai'
import AccountTab from '../account/AccountTab'
import ShortcutsTab from './header-tabs/ShortcutsTab'
import { TiThSmall } from 'react-icons/ti'
import NotificationTab from './header-tabs/NotificationTab'
import NotificationCount from '../notifications/NotificationCount'
import CreateShortcuts from './header-tabs/CreateShortcuts'
import HistoryTab from './header-tabs/HistoryTab'
import StudyovsLogo from './StudyovsLogo'
import Avatar from '../shared/Avatar'
import useAuth from '../../context/auth'

const Styles = styled.div`
  background: #e8e8e8;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  position: fixed;
  width: 100%;
  opacity: 1;
  z-index: 99999999;
  top: 0;
  .header__left {
    display: flex;
    align-items: center;
  }
  .header__right {
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
  @media (min-width: 500px) {
    display: none;
  }
  .header__account-details {
    display: flex;
    align-items: center;
  }
  .header-links__item {
    margin-left: 30px;
    display: flex;
    align-items: center;
    font-size: 22px;
    position: relative;
    :hover {
      color: #0098db;
    }
    @media (max-width: 340px) {
      margin-left: 15px;
    }
  }
  .mobile__hamburger {
    display: flex;
    align-items: center;
    font-size: 25px;
  }
  .colorizer {
    color: #f4863a;
  }
`

export default function MobileHeader({
  handleShowNav,
  showNav,
  handleCreateShortcuts,
  showCreateShortcuts,
  handleHistoryTab,
  showHistoryTab,
  handleNotification,
  showNotification,
  handleShortcuts,
  showShortcuts,
  handleAccount,
  showAccount,
}) {
  const { profile, isLoading } = useAuth()
  return (
    <Styles>
      <div className="header__left">
        <span onClick={() => handleShowNav(true)} className="mobile__hamburger">
          <AiOutlineMenu />
        </span>
        <StudyovsLogo icon marginLeft="10px" />
        {showNav && <MobileSideNav handleShowNav={handleShowNav} />}
      </div>
      <div className="header__right">
        <div className="header__account-details">
          <div className="header-links__item" style={{ fontSize: '30px' }}>
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
            <BsBell onClick={() => handleNotification()} onKeyPress={() => handleNotification()} />
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
              size="large"
            />
          </div>
          <AccountTab showAccount={showAccount} />
        </div>
      </div>
    </Styles>
  )
}
