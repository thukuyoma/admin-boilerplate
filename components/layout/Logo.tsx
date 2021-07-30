import React from 'react'
import config from '../../config/config'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Styles = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  .logo__wrapper {
    display: flex;
    align-item: center;
  }
  .logo__text {
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    color: #0098db;
    margin: 0;
  }
  .complete {
    display: flex;
    align-items: center;
    height: 40px;
    .logo__text {
      margin: 0;
      margin-left: 10px;
    }
  }
  .icon {
    width: 28px;
    height: 28px;
  }
`
export default function Logo({
  complete,
  icon,
  text,
  marginRight,
  marginLeft,
  marginTop,
  marginBottom,
}: {
  complete?: boolean
  icon?: boolean
  text?: boolean
  marginRight?: string
  marginLeft?: string
  marginTop?: string
  marginBottom?: string
}) {
  const router = useRouter()
  return (
    <Styles
      onClick={() => router.push('/analytics/dashboard')}
      onKeyPress={() => router.push('/analytics/dashboard')}
    >
      <div
        style={{
          marginRight: marginRight,
          marginLeft: marginLeft,
          marginTop: marginTop,
          marginBottom: marginBottom,
        }}
        className="logo__wrapper"
      >
        {complete && (
          <div className="complete">
            <img src={config.logo.icon} className="icon" />
            <h1 className="logo__text">Kimogan</h1>
          </div>
        )}
        {icon && <img src={config.logo.icon} className="icon" />}
        {text && <h1 className="logo__text">Kimogan</h1>}
      </div>
    </Styles>
  )
}
