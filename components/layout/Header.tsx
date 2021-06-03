import React from 'react'
import styled from 'styled-components'
import config from '../../config/config'
import Icon from './../icons/index'
const Styles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 50px;
  align-items: center;
  height: 40px;
  .header__title {
    font-size: 24px;
    line-height: 28px;
    color: ${config.styles.baseColor};
    font-weight: bold;
  }
  .header__account-details {
    display: flex;
    align-items: center;
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
  .profile {
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
  .alert {
    margin-left: 20px;
  }
  .stroke {
    margin: 0 24px;
  }
  .name {
    color: #6e6e6e;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }

  // @media (max-width: 1000px) {
  //   display: none;
  // }
  @media (max-width: 500px) {
    display: none;
  }
`
export default function Header() {
  return (
    <Styles>
      <div className="header__title">Blog</div>
      <div className="header__account-details">
        <div className="name">Welcome theophilus</div>
        <div className="alert">
          <Icon name="alert" />
        </div>
        <div className="stroke">
          <Icon name="stroke" />
        </div>
        <div className="">
          <img src="/assets/face.svg" alt="default" className="profile" />
        </div>
      </div>
    </Styles>
  )
}
