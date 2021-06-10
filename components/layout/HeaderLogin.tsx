import { useRouter } from 'next/router'
import React from 'react'
import { RiLoginCircleLine } from 'react-icons/ri'
import styled from 'styled-components'

const Styles = styled.div`
  .mobile-header__login {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    background: #ccc;
    color: #0c4284;
  }
`
export default function HeaderLogin() {
  const router = useRouter()
  return (
    <Styles>
      <div className="mobile-header__login" onClick={() => router.push('/login')}>
        <RiLoginCircleLine />
      </div>
    </Styles>
  )
}
