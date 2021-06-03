import React, { useState } from 'react'
import styled from 'styled-components'
import config from '../../config/config'
import Logo from '../icons/Logo'
import Icon from './../icons/index'
import MobileSideNav from './MobileSideNav'

const Styles = styled.div`
  background: #e8e8e8;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -10px;
  padding: 0 10px;
  position: fixed;
  width: 100%;

  .header__left {
    display: flex;
    align-items: center;
  }
  .header__right {
    display: flex;
    align-items: center;
  }
  .avatar {
    margin-left: 20px;
    height: 45px;
    width: 45px;
    border-radius: 50%;
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
  .account {
    position: absolute;
    right: 10px;
    top: 93px;
    background: #f0f0f0;
    width: 220px;
    height: 350px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}
  }
`

export default function MobileHeader() {
  const [showNav, setShowNav] = useState(false)
  const [showAccount, setShowAccount] = useState(false)

  const handleAccount = () => {
    setShowNav(false)
    setShowAccount(!showAccount)
  }

  const handleShowNav = (show) => {
    setShowAccount(false)
    setShowNav(show)
  }

  return (
    <Styles>
      <div className="header__left">
        <span onClick={() => handleShowNav(true)}>
          <Icon name="hamburger" />
        </span>
        <Logo icon marginLeft="10px" />
        {showNav && <MobileSideNav handleShowNav={handleShowNav} />}
      </div>
      <div className="header__right">
        <div className="alert">
          <Icon name="alert" />
        </div>
        <img src="/assets/face.svg" alt="default" className="avatar" onClick={handleAccount} />
        {showAccount && <div className="account">Account Detauls</div>}
      </div>
    </Styles>
  )
}
