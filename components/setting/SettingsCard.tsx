import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 20px;
  cursor: pointer;
  width: 105px;
  height: 105px;
  .settings__icon {
    width: 45px;
    height: 45px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .settings__title {
    margin-top: 10px;
    :hover {
      color: #0098db;
    }
  }
`
export default function SettingsCard({ item }) {
  const router = useRouter()
  return (
    <Styles className="setting__card">
      <img className="settings__icon" src={item.icon} />
      <p
        onClick={() => router.push(item.url)}
        onKeyPress={() => router.push(item.url)}
        className="settings__title"
      >
        {item.title}
      </p>
    </Styles>
  )
}
