import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../../components/layout/Header'
import MobileHeader from '../../components/layout/MobileHeader'
import SideNav from '../../components/layout/SideNav'

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
    position: relative;
  }
`
export default function Layout({ children }) {
  const [toggleSideNav, setToggleSideNav] = useState<boolean>(false)
  const [showNav, setShowNav] = useState<boolean>(false)
  const [showAccount, setShowAccount] = useState<boolean>(false)
  const [showCreateShortcuts, setShowCreateShortcuts] = useState<boolean>(false)
  const [showHistoryTab, setShowHistryTab] = useState<boolean>(false)
  const [showShortcuts, setShowShortcuts] = useState<boolean>(false)
  const [showNotification, setShowNotification] = useState<boolean>(false)
  const handleAccount = () => {
    setShowNav(false)
    setShowCreateShortcuts(false)
    setShowHistryTab(false)
    setShowShortcuts(false)
    setShowAccount(!showAccount)
  }
  const handleShowNav = (show: boolean) => {
    setShowAccount(false)
    setShowNav(show)
    setShowShortcuts(false)
  }

  const handleCreateShortcuts = () => {
    setShowAccount(false)
    setShowHistryTab(false)
    setShowShortcuts(false)
    setShowNotification(false)
    setShowCreateShortcuts(!showCreateShortcuts)
  }
  const handleShortcuts = () => {
    setShowAccount(false)
    setShowHistryTab(false)
    setShowCreateShortcuts(false)
    setShowNotification(false)
    setShowShortcuts(!showShortcuts)
  }
  const handleHistoryTab = () => {
    setShowCreateShortcuts(false)
    setShowAccount(false)
    setShowShortcuts(false)
    setShowNotification(false)
    setShowHistryTab(!showHistoryTab)
  }
  const handleNotification = () => {
    setShowCreateShortcuts(false)
    setShowAccount(false)
    setShowShortcuts(false)
    setShowHistryTab(false)
    setShowNotification(!showNotification)
  }

  return (
    <Styles toggleSideNav={toggleSideNav}>
      <Header
        toggleSideNav={toggleSideNav}
        showAccount={showAccount}
        handleAccount={handleAccount}
        handleCreateShortcuts={handleCreateShortcuts}
        showCreateShortcuts={showCreateShortcuts}
        handleHistoryTab={handleHistoryTab}
        showHistoryTab={showHistoryTab}
        handleShortcuts={handleShortcuts}
        showShortcuts={showShortcuts}
        handleNotification={handleNotification}
        showNotification={showNotification}
      />
      <MobileHeader
        showNav={showNav}
        showAccount={showAccount}
        handleAccount={handleAccount}
        handleShowNav={handleShowNav}
        handleCreateShortcuts={handleCreateShortcuts}
        showCreateShortcuts={showCreateShortcuts}
        handleHistoryTab={handleHistoryTab}
        showHistoryTab={showHistoryTab}
        handleShortcuts={handleShortcuts}
        showShortcuts={showShortcuts}
        handleNotification={handleNotification}
        showNotification={showNotification}
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
