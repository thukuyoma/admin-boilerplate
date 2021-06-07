import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../../components/layout/Header'
import MobileContainerHeader from '../../components/layout/MobileContainerHeader'
import MobileHeader from '../../components/layout/MobileHeader'
import SideNav from '../../components/layout/SideNav'
import config from '../../config/config'
import { GrAdd } from 'react-icons/gr'
import { Grid } from '@material-ui/core'
import TItle from '../../components/forms/blog/TItle'
import Create from '../../components/blog/CreateBlog'
import CreateBlog from '../../components/blog/CreateBlog'
const Styles = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  .main {
    width: 100%;
    padding: 30px 30px 0 20px;
    margin-left: ${({ toggleSideNav }) => (!toggleSideNav ? '100px' : '229px')};
    @media (max-width: 700px) {
      margin-left: 0px;
      padding: 0 10px;
    }
    @media (max-width: 500px) {
      // display: none;
    }
    position: relative;
  }
  .container {
    display: flex;
    justify-content: space-between;
    min-height: 450px;
  }
  .container__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
    align-items: center;
    height: 40px;

    @media (max-width: 500px) {
      display: none;
    }
  }
  .container-header__title {
    font-weight: 400;
    font-size: 14px;
    color: #0c4284;
  }
  .container-header__cta {
  }
  .container__actions {
    border-left: 1px solid #e7e7e7;
    padding: 0 0 0 20px;
    width: 300px;
    margin-left: 20px;

    @media (max-width: 1000px) {
      display: none;
    }
    @media (max-width: 500px) {
    }
  }
  .container-left {
    height: 40px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .container-actions-header {
    height: 40px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #0c4284;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    height: 30px;
    background: #0098db;
    border-radius: 3px;
    white-space: nowrap;
    outline: none;
    border: 1px solid #0098db;
    font-size: 14px;
    line-height: 19px;
    color: white;
  }
  .wrapper {
    display: flex;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    margin-top: 50px;
  }
  .header__title {
    font-size: 20px;
    line-height: 28px;
    color: ${config.styles.baseColor};
    font-weight: bold;
  }
  .parent__wrapper {
    display: flex;
    align-items: center;

    .header__title {
      margin-right: 10px;
    }
  }
`
export default function dashboard() {
  const [toggleSideNav, setToggleSideNav] = useState<boolean>(false)
  const [showNav, setShowNav] = useState<boolean>(false)
  const [showAccount, setShowAccount] = useState<boolean>(false)
  const handleAccount = () => {
    setShowNav(false)
    setShowAccount(!showAccount)
  }
  const handleShowNav = (show: boolean) => {
    setShowAccount(false)
    setShowNav(show)
  }
  return (
    <Styles toggleSideNav={toggleSideNav}>
      <Header toggleSideNav={toggleSideNav} />
      <MobileHeader
        showNav={showNav}
        showAccount={showAccount}
        handleAccount={handleAccount}
        handleShowNav={handleShowNav}
      />
      <div className="wrapper">
        <SideNav toggleSideNav={toggleSideNav} setToggleSideNav={setToggleSideNav} />
        <div className="main">
          <div className="container">
            <div className="container-left">
              <div className="container__header">
                <div className="parent__wrapper">
                  <div className="header__title">Blog</div>
                  <span className="container-header__title">All Products (1.24K)</span>
                </div>
                <div className="container-header__cta">
                  <button className="button">
                    <GrAdd />
                    Create Blog
                  </button>
                </div>
              </div>
              <MobileContainerHeader />
              <div>
                <CreateBlog />
              </div>
            </div>
            <div className="container__actions">
              <div className="container-actions-header">Actions</div>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  )
}
