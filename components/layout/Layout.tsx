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
import ContainerMainHeader from './ContainerMainHeader'

const Styles = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  .container {
    display: flex;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    margin-top: 50px;
  }

  .container__main {
    width: 100%;
    padding: 30px 30px 0 20px;
    margin-left: ${({ toggleSideNav }) => (!toggleSideNav ? '80px' : '200px')};
    @media (max-width: 700px) {
      margin-left: 0px;
      padding: 0 10px;
    }
    @media (max-width: 500px) {
      // display: none;
    }
    position: relative;
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
`
export default function Layout({ children }) {
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
      <div className="container">
        <SideNav toggleSideNav={toggleSideNav} setToggleSideNav={setToggleSideNav} />
        <div className="container__main">
          <div className="container-main__wrapper">{children}</div>
        </div>
      </div>
    </Styles>
  )
}
