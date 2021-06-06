import React, { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import styled from 'styled-components'

const Styles = styled.div`
  width: 300px;
  .search__wrapper {
    border: 1px solid #ccc;
    border-radius: 30px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
  }
  .search__input {
    border: navajowhite;
    background: inherit;
    border-left: 1px solid #ccc;
    outline: none;
    width: 100%;
    height: 100%;
    margin-left: 10px;
    padding-left: 10px;
  }
  .search__icon {
  }
  .search__dropdown {
    position: absolute;
    top: 52px;
    display: flex;
    flex-direction: column;
    background: #f0f0f0;
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .search-dropdown_item {
    font-size: 14px;
    font-weight: 400;
  }
`
export default function Search({ service }) {
  const [showDropDown, setShowDropDOwn] = useState<boolean>(false)
  return (
    <Styles>
      <div className="search__wrapper">
        <FiSearch /> <AiFillCaretDown onClick={() => setShowDropDOwn(!showDropDown)} />
        <input type="text" className="search__input" placeholder={`Search ${service}`} />
      </div>
      {showDropDown && (
        <div className="search__dropdown">
          <span className="search-dropdown_item">Home</span>
          <span className="search-dropdown_item">Products</span>
          <span className="search-dropdown_item">Blogs</span>
          <span className="search-dropdown_item">Application</span>
        </div>
      )}
    </Styles>
  )
}
