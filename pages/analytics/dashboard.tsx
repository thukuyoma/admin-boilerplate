import React from 'react'
import styled from 'styled-components'
import Header from '../../components/layout/Header'
import MobileHeader from '../../components/layout/MobileHeader'
import SideNav from '../../components/layout/SideNav'
import config from '../../config/config'

const Styles = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  .main {
    width: 100%;
    margin-left: 229px;
    padding: 0 30px 0 20px;

    @media (max-width: 700px) {
      margin-left: 0px;
      padding: 0 10px;
    }
    @media (max-width: 500px) {
      // display: none;
    }
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
  }
  .container-header__title {
    font-weight: bold;
    font-size: 17px;
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
    height: 51px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    color: #0c4284;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
}
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 40px;
    width: 120px;
    height: 40px;
    background: #0098db;
    border-radius: 3px;
    white-space: nowrap;
    outline: none;
    border: 1px solid #0098db;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: white;
  }
`
export default function dashboard() {
  return (
    <Styles>
      <SideNav />
      <div className="main">
        <Header />
        <MobileHeader />
        <div className="container">
          <div className="container-left">
            <div className="container__header">
              <span className="container-header__title">All Products (1.24K)</span>
              <div className="container-header__cta">
                <button className="button">Create Blog</button>
              </div>
            </div>
          </div>
          <div className="container__actions">
            <div className="container-actions-header">Actions</div>
          </div>
        </div>
      </div>
    </Styles>
  )
}
