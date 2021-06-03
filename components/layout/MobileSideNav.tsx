import React from 'react'
import styled from 'styled-components'
import config from '../../config/config'
const Styles = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  flex-direction: column;
  flex-direction: column;
  background: pink;
  width: 100vw;
  left: 0;
  height: 100vh;
  position: fixed;
  //   padding: 20px 0 0 10px;
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

  .wrapper {
    background: green;
    height: 100vh;
    width: 300px;
    disply: flex;
    align-items: space-between;
  }

  .wrapper__top {
    display: flex;
    flex-direction: column;
  }

  //   @media (max-width: 700px) {
  //     display: none;
  //   }
  //   @media (max-width: 500px) {
  //     display: none;
  //   }
`

import { useRouter } from 'next/router'
import links from './nav.links'
import Logo from '../icons/Logo'

export default function MobileSideNav() {
  const router = useRouter()
  const handleRedirect = (url: string) => router.push(url)
  return (
    <Styles>
      <div className="wrapper">
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
        <div className="wrapper__bottom">Helo we are working</div>
      </div>
    </Styles>
  )
}
