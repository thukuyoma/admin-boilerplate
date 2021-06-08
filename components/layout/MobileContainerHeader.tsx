import React from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { FiMoreHorizontal } from 'react-icons/fi'
import styled from 'styled-components'

const Styles = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: -10px;
  margin-right: -10px;
  border-bottom: 1px solid #ccc;
  padding: 20px 10px;
  .mobile-container-header__wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .mobile-container-header__title {
    font-size: 25px;
    font-weight: bold;
    color: #0098db;
  }
  .create__button {
    background: #0098db;
    border-radius: 36px;
    color: #fff;
    width: 35px;
    height: 35px;
    border-color: #0098db;
    outline: none;
    border: none;
    font-size: 25px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .actions {
    display: flex;
    button {
      margin-left: 10px;
    }
  }

  @media (min-width: 500px) {
    display: none;
  }
  .mobile-container-header__dropdown {
    display: flex;
    align-items: center;
    margin-top: 5px;
    font-size: 16px;
  }
  .mobile-container-header-dropdown__icon {
    margin: 0 5px;
  }
`

export default function MobileContainerHeader() {
  return (
    <Styles>
      <div className="mobile-container-header__wrapper">
        <span className="mobile-container-header__title">Blog</span>
        <span className="mobile-container-header__dropdown">
          <span className="mobile-container-header-dropdown__icon">
            <AiOutlineCaretDown />
          </span>
          Products
        </span>
      </div>
      <div className="actions">
        <button className="create__button">+</button>
        <button className="create__button">
          <FiMoreHorizontal />
        </button>
      </div>
    </Styles>
  )
}
