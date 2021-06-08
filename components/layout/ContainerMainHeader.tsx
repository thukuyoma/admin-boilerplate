import { useRouter } from 'next/router'
import React from 'react'
import { GrAdd } from 'react-icons/gr'
import styled from 'styled-components'
import config from '../../config/config'

const Styles = styled.div`
  .container-main-header {
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
  .container-main-header__left {
    display: flex;
    align-items: center;
  }
  .container-main-header__title {
    font-size: 20px;
    line-height: 28px;
    color: ${config.styles.baseColor};
    font-weight: bold;
    margin-right: 10px;
  }
  .container-main-header__options {
  }
  .container-main-header__actions {
  }
`

export default function ContainerMainHeader({ pageTitle, createUrl, createButtonTitle }) {
  const router = useRouter()
  return (
    <Styles>
      <div className="container-main-header">
        <div className="container-main-header__left">
          <div className="container-main-header__title">{pageTitle}</div>
          <span className="container-main-header__options">All Products (1.24K)</span>
        </div>
        <div className="container-main-header__actions">
          <button className="button" onClick={() => router.push(createUrl)}>
            <GrAdd />
            {createButtonTitle}
          </button>
        </div>
      </div>
    </Styles>
  )
}
