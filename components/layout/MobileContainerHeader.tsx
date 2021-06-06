import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: -10px;
  margin-right: -10px;
  border-bottom: 1px solid #ccc;
  padding: 30px 10px;

  .create__button {
    background: #0098db;
    border-radius: 36px;
    color: #fff;
    width: 40px;
    height: 40px;
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
`

export default function MobileContainerHeader() {
  return (
    <Styles>
      <span className="container-header__title">Mobile Blog (1.24K)</span>
      <div className="actions">
        <button className="create__button">+</button>
        <button className="create__button">+</button>
        <button className="create__button">+</button>
      </div>
    </Styles>
  )
}
