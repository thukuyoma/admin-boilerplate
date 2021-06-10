import React, { useState } from 'react'
import styled from 'styled-components'
import config from '../../config/config'
import Logo from './Logo'
import Icon from './../icons/index'
import MobileSideNav from './MobileSideNav'
import { FiSettings } from 'react-icons/fi'
import { BsBell, BsClockHistory } from 'react-icons/bs'
import { IoIosAddCircle } from 'react-icons/io'
import { AiOutlineDown, AiOutlineMenu } from 'react-icons/ai'
import useAuth from '../../context/auth'
import ProfileContainer from './ProfileContainer'
import { RiLoginCircleLine } from 'react-icons/ri'
import { useRouter } from 'next/router'
import HeaderLogin from './HeaderLogin'
import HeaderProfileAvatar from './HeaderProfileAvatar'

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
  z-index: 3;

  .header__left {
    display: flex;
    align-items: center;
  }
  .header__right {
    display: flex;
    align-items: center;
  }
  .profile {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background: #ffffff;
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
    font-size: 20px;
  }
`

export default function MobileHeader({ handleAccount, handleShowNav, showNav, showAccount }) {
  const { profile, isLoading } = useAuth()
  const router = useRouter()
  return (
    <Styles>
      <div className="header__left">
        <span onClick={() => handleShowNav(true)} className="mobile__hamburger">
          <AiOutlineMenu />
        </span>
        <Logo icon marginLeft="10px" />
        {showNav && <MobileSideNav handleShowNav={handleShowNav} />}
      </div>
      <div className="header__right">
        <div className="header__account-details">
          <div className="header-links__item" style={{ fontSize: '30px' }}>
            <IoIosAddCircle />
          </div>
          <div className="header-links__item">
            <BsClockHistory />
          </div>
          <div className="header-links__item">
            <BsBell />
          </div>
          <div className="header-links__item">
            <FiSettings />
          </div>
          <div className="header-links__item">
            {profile?.avatar && (
              <HeaderProfileAvatar handleAccount={handleAccount} showAccount={showAccount} />
            )}
            {}
            {!profile && !isLoading && <HeaderLogin />}
            {isLoading && <div className="profile"></div>}
          </div>
        </div>
      </div>
    </Styles>
  )
}
