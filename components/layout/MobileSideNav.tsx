import React from 'react'
import styled from 'styled-components'
import config from '../../config/config'
const Styles = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  flex-direction: column;
  flex-direction: column;
  background: #00000099;
  width: 100vw;
  left: 0;
  height: 100vh;
  position: fixed;
  border-right: 1px solid #f0f0f0;
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
    padding: 7px 10px;
    :hover {
      background: #ffa50042;
      width: 180px;
      cursor: pointer;
      border-radius: 5px;
    }
  }
  .side-nav-link___icon {
  }
  .side-nav-link___title {
    margin-left: 20px;
    font-size: 18px;
    color: ${config.styles.baseColor};
  }

  .mobile__wrapper {
    background: #f0f0f0;
    height: 100vh;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    width: 30px;
    height: 30px;
    color: #fff;
    border-radius: 50%;
    position: absolute;
    right: 80px;
    top: 8px;
    background: #0098db;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
  }
  .wrapper__bottom {
    display: flex;
    padding: 10px;
    margin-bottom: 10px;
  }
  .account__details {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
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

import { useRouter } from 'next/router'
import links from './nav.links'
import Logo from './Logo'

export default function MobileSideNav({ handleShowNav }) {
  const router = useRouter()
  const handleRedirect = (url: string) => router.push(url)
  return (
    <Styles>
      <div className="mobile__wrapper">
        <div className="close" onClick={() => handleShowNav(false)}>
          X
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
        <div className="wrapper__bottom">
          <img src="/assets/face.svg" className="account__avatar" />
          <div className="account__details">
            <span className="username">Ukuyoma Theophilus</span>
            <span className="logout">Logout</span>
          </div>
        </div>
      </div>
    </Styles>
  )
}
function handleShowNav(arg0: boolean): void {
  throw new Error('Function not implemented.')
}
