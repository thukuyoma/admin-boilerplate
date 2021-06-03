import React from 'react'
import config from '../../config/config'
import styled from 'styled-components'

const Styles = styled.div`
  .wrapper {
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
  return (
    <Styles>
      <div
        style={{
          marginRight: marginRight,
          marginLeft: marginLeft,
          marginTop: marginTop,
          marginBottom: marginBottom,
        }}
        className="wrapper"
      >
        {complete && (
          <div className="complete">
            <img src={config.logo.icon} className="icon" />
            <h1 className="logo__text">Kimogan</h1>
          </div>
        )}
        {icon && <img src={config.logo.icon} />}
        {text && <h1 className="logo__text">Kimogan</h1>}
      </div>
    </Styles>
  )
}
