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
    :hover {
      cursor: pointer;
    }
  }
`
export default function Search() {
  const [showDropDown, setShowDropDown] = useState<boolean>(false)
  const [service, setService] = useState('')

  const items = [
    { title: 'Scholarships' },
    { title: 'Applications' },
    { title: 'Bookings' },
    { title: 'Blogs' },
  ]
  return (
    <Styles>
      <div className="search__wrapper">
        <FiSearch />
        <AiFillCaretDown
          onClick={() => {
            setShowDropDown(!showDropDown)
          }}
        />
        <input
          type="text"
          className="search__input"
          placeholder={`Search ${service ? service.toLowerCase() : 'studyovs'} ...`}
        />
      </div>
      {showDropDown && (
        <div className="search__dropdown">
          {items.map((item) => (
            <span
              key={item.title}
              className="search-dropdown_item"
              onClick={() => {
                setService(item.title)
                setShowDropDown(false)
              }}
            >
              {item.title}
            </span>
          ))}
        </div>
      )}
    </Styles>
  )
}
