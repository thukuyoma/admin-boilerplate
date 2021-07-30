import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { FiMoreHorizontal } from 'react-icons/fi'
import styled from 'styled-components'
import OverlayDisplay from './OverlayDisplay'

const Styles = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: -10px;
  margin-right: -10px;
  border-bottom: 1px solid #ccc;
  padding: 20px 10px;
  z-index: 222;
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
    color: #0c4284;
  }
  .mobile-container-header-dropdown__icon {
    margin: 0 5px;
  }
  .mobile-container-header-dropdown-menu {
    position: absolute;
    top: 90px;
    right: 3px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background: #fff;
    width: 200px;
    box-shadow: 0 3px 12px rgb(27 31 35 / 15%);
  }
  .mobile-container-header-dropdown-menu__item {
    padding: 10px;
    color: #0c4284;
  }
`

export default function MobileContainerHeader({
  pageTitle,
  createButtonUrl,
  overlayItems,
}: {
  pageTitle: string
  createButtonUrl: string
  overlayItems: Array<{ title: string; url: string; isActive: boolean }>
}) {
  const router = useRouter()
  const [optionDropDown, setOptionDropDown] = useState<boolean>(false)
  const [showSubPages, setShowSubPages] = useState<boolean>(false)
  return (
    <Styles>
      <div className="mobile-container-header__wrapper">
        <span className="mobile-container-header__title">{pageTitle}</span>
        <span
          className="mobile-container-header__dropdown"
          onClick={() => setShowSubPages(!showSubPages)}
          onKeyPress={() => setShowSubPages(!showSubPages)}
        >
          <span className="mobile-container-header-dropdown__icon">
            {showSubPages ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
          </span>
          {overlayItems.filter((item) => item.isActive === true)[0].title}
        </span>
        {showSubPages && (
          <OverlayDisplay
            overlayItems={overlayItems.filter((item) => item.isActive === false)}
            left="10px"
            top="90px"
          />
        )}
      </div>
      <div className="actions">
        {createButtonUrl ? (
          <button className="create__button" onClick={() => router.push(createButtonUrl)}>
            +
          </button>
        ) : null}

        {/* <button
          className="create__button"
          onKeyPress={() => setOptionDropDown(!optionDropDown)}
          onClick={() => setOptionDropDown(!optionDropDown)}
        >
          <FiMoreHorizontal />
        </button> */}
        {/* {optionDropDown && (
          <div className="mobile-container-header-dropdown-menu">
            <span className="mobile-container-header-dropdown-menu__item">Filter By Category</span>
            <span className="mobile-container-header-dropdown-menu__item">Filter By Category</span>
            <span className="mobile-container-header-dropdown-menu__item">Filter By Category</span>
            <span className="mobile-container-header-dropdown-menu__item">Filter By Category</span>
            <span className="mobile-container-header-dropdown-menu__item">Filter By Category</span>
          </div>
        )} */}
      </div>
    </Styles>
  )
}
