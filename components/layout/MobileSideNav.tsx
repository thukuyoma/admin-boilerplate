import React from 'react'
import styled from 'styled-components'
import config from '../../config/config'
import { useRouter } from 'next/router'
import links from './nav.links'
import Logo from './Logo'
import Avatar from '../shared/Avatar'
import useAuth from '../../context/auth'
import { GrClose } from 'react-icons/gr'

const Styles = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  flex-direction: column;
  flex-direction: column;
  background: #00000099;
  width: 100%;
  left: 0;
  height: 100%;
  position: fixed;
  border-right: 1px solid #f0f0f0;
  z-index: 999;
  .sidenav__logo {
    margin: 0 0 50px 10px;
    height: 40px;
  }
  .sidenav__links {
    display: flex;
    flex-direction: column;
  }
  .side-nav__link {
    display: flex;
    align-items: center;
    padding: 10px;
    :hover {
      background: #f7f7f7;
      width: 300px;
      cursor: pointer;
      margin: 0px -30px;
      padding: 10px 40px;
    }
  }
  .side-nav-link___icon {
    font-size: 16px;
    color: ${config.styles.baseColor};
  }
  .side-nav-link___title {
    margin-left: 20px;
    font-size: 18px;
    color: ${config.styles.baseColor};
  }

  .mobile__wrapper {
    background: #f0f0f0;
    height: 100%;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 30px;
    position: relative;
  }

  .wrapper__top {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 360px) {
    .wrapper {
      width: 240px;
    }
  }
  .close {
    width: 25px;
    height: 25px;
    color: #444;
    border-radius: 50%;
    position: absolute;
    right: 15px;
    top: 28px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  .wrapper__bottom {
    display: flex;
  }
  .account__details {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    height: 100%;
    justify-content: center;
  }
  .account__avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .username {
    font-size: 18px;
    line-height: 21px;
    color: #0c4284;
  }
`

export default function MobileSideNav({ handleShowNav }) {
  const { profile, isLoading, logout } = useAuth()
  const router = useRouter()
  const handleRedirect = (url: string) => router.push(url)
  return (
    <Styles>
      <div className="mobile__wrapper">
        <div className="close" onClick={() => handleShowNav(false)}>
          <GrClose />
        </div>
        <div className="wrapper__top">
          <div className="sidenav__logo">
            <Logo complete />
          </div>
          <div className="sidenav__links">
            {links.map((link) => (
              <div
                className="side-nav__link"
                key={link.id}
                tabIndex={0}
                onKeyPress={() => handleRedirect(link.uri)}
                onClick={() => handleRedirect(link.uri)}
              >
                {link.icon}
                <div className="side-nav-link___title">{link.title}</div>
              </div>
            ))}
          </div>
        </div>
        {profile && !isLoading && (
          <div className="wrapper__bottom">
            <Avatar
              image={profile?.avatar?.url}
              initial={profile.firstName}
              size="large"
              style={{ height: 60, width: 60 }}
            />
            <div className="account__details">
              <span className="username">
                {profile.firstName} {profile.lastName}
              </span>
              <span className="logout" onClick={() => logout()} onKeyPress={() => logout()}>
                Logout
              </span>
            </div>
          </div>
        )}
      </div>
    </Styles>
  )
}
