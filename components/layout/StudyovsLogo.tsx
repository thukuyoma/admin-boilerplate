import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  .complete {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
  .logo {
    width: 24px;
    height: 35px;
  }
  .logo__text {
    margin-left: 5px;
    font-size: 25px;
  }
  .logo__study {
    font-weight: 400;
    color: #0baee6;
  }
  .logo__ovs {
    font-weight: 800;
    color: #f4863a;
  }
  cursor: pointer;
`

export default function StudyovsLogo({
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
            <img src="/assets/logo-icon.png" alt="" className="logo" />
            <div className="logo__text">
              <span className="logo__study">STUDY</span>
              <span className="logo__ovs">OVS</span>
            </div>
          </div>
        )}
        {icon && <img src="/assets/logo-icon.png" alt="" className="logo" />}
        {text && (
          <div className="logo__text">
            <span className="logo__study">STUDY</span>
            <span className="logo__ovs">OVS</span>
          </div>
        )}
      </div>
    </Styles>
  )
}
