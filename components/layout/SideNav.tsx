import React, { useState } from 'react'
import styled from 'styled-components'
import config from '../../config/config'
const Styles = styled.div`
  background: #f0f0f0;
  height: 100vh;

  display: flex;
  flex-direction: column;
  width: ${({ toggleSideNav }) => (!toggleSideNav ? '100px' : '200px')};
  position: fixed;
  padding: 30px 0 0 30px;
  border-right: 1px solid #f0f0f0;
  justify-content: space-between;
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
    padding: 0px 10px;

    height: 40px;
    :hover {
      background: #ffa50042;
      width: ${({ toggleSideNav }) => (!toggleSideNav ? '40px' : '180px')};
      cursor: pointer;
      border-radius: 5px;
    }
  }
  .side-nav-link___icon {
  }
  .side-nav-link___title {
    margin-left: 20px;
    font-size: 16px;
    color: ${config.styles.baseColor};
  }

  @media (max-width: 700px) {
    display: none;
  }
  @media (max-width: 500px) {
    display: none;
  }
`

import { useRouter } from 'next/router'
import links from './nav.links'
import Logo from './Logo'

export default function SideNav({ toggleSideNav, setToggleSideNav }) {
  const router = useRouter()
  const handleRedirect = (url: string) => router.push(url)
  return (
    <Styles toggleSideNav={toggleSideNav}>
      <div>
        {/* <div className="sidenav__logo">
          <Logo complete={toggleSideNav} icon={!toggleSideNav} />
        </div> */}
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
              {toggleSideNav && <div className="side-nav-link___title">{link.title}</div>}
            </div>
          ))}
        </div>
        <button onClick={() => setToggleSideNav(!toggleSideNav)}>{'=>>'}</button>
      </div>
    </Styles>
  )
}
