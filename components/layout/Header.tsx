import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import { FiSettings, FiBell } from 'react-icons/fi'
import { TiThSmall } from 'react-icons/ti'
import { BsBell, BsClockHistory } from 'react-icons/bs'
import { AiOutlineDown } from 'react-icons/ai'
import { IoIosAddCircle } from 'react-icons/io'
import Search from './Search'
import useAuth from '../../context/auth'
import HeaderLogin from './HeaderLogin'
import HeaderProfileAvatar from './HeaderProfileAvatar'
import CreateShortcuts from './CreateShortcuts'
import HistoryTab from './HistoryTab'
import AccountTab from './AccountTab'

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
  .profile {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background: #ffffff;
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
`
export default function Header({
  toggleSideNav,
  handleAccount,
  showAccount,
  handleCreateShortcuts,
  showCreateShortcuts,
  handleHistoryTab,
  showHistoryTab,
}) {
  const { profile, isLoading } = useAuth()
  return (
    <Styles toggleSideNav={toggleSideNav}>
      <div className="wrapper__now">
        <div className="header__logo">
          <Logo complete />
        </div>
        <Search service="Products" />
        <div className="header__spead">
          <div className="header__account-details">
            <div className="header-links__item" style={{ fontSize: '14px' }}>
              Kimogan <AiOutlineDown />
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
              <BsBell />
            </div>
            <div className="header-links__item">
              <TiThSmall />
            </div>
            <div className="header-links__item">
              {profile?.avatar && (
                <HeaderProfileAvatar handleAccount={handleAccount} showAccount={showAccount} />
              )}
              {!profile && !isLoading && <HeaderLogin />}
              {isLoading && <div className="profile"></div>}
            </div>
            <AccountTab handleAccount={handleAccount} showAccount={showAccount} />
          </div>
        </div>
      </div>
    </Styles>
  )
}
