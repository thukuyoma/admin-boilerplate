import React, { useState } from 'react'
import styled from 'styled-components'
import config from '../../config/config'
const Styles = styled.div`
  background: #f0f0f0;
  height: 100vh;

  display: flex;
  flex-direction: column;
  width: ${({ toggleSideNav }) => (!toggleSideNav ? '80px' : '200px')};
  position: fixed;
  padding: ${({ toggleSideNav }) => (!toggleSideNav ? '30px 20px' : '30px 0 0 20px')};
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
      width: ${({ toggleSideNav }) => (!toggleSideNav ? '40px' : '163px')};
      cursor: pointer;
      border-radius: 5px;
      background: #f7f7f7;
      .side-nav-link___icon {
        color: #0098db;
      }
    }
  }
  .side-nav-link___icon {
    font-size: 16px;
    color: ${config.styles.baseColor};
  }
  .side-nav-link___title {
    margin-left: 20px;
    font-size: 14px;
    color: ${config.styles.baseColor};
  }

  @media (max-width: 700px) {
    display: none;
  }
  @media (max-width: 500px) {
    display: none;
  }
  .toggle__button {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background: #cdcdcd;
    border: none;
    outline: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #0098db;
    font-weight: bold;
    margin-top: 50px;
    cursor: pointer;
    :hover {
      background: #f7f7f7;
    }
  }
`

import { useRouter } from 'next/router'
import links from './nav.links'
import Logo from './Logo'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

export default function SideNav({ toggleSideNav, setToggleSideNav }) {
  const router = useRouter()
  const handleRedirect = (url: string) => router.push(url)
  return (
    <Styles toggleSideNav={toggleSideNav}>
      <div>
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
        <button className="toggle__button" onClick={() => setToggleSideNav(!toggleSideNav)}>
          {toggleSideNav ? <BsArrowLeft /> : <BsArrowRight />}
        </button>
      </div>
    </Styles>
  )
}
