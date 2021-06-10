import React from 'react'
import styled from 'styled-components'
import useAuth from '../../context/auth'

import ProfileContainer from './ProfileContainer'

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 12;
  .avatar {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
`

export default function HeaderProfileAvatar({ showAccount, handleAccount }) {
  const { profile } = useAuth()
  return (
    <Styles>
      <img
        src={profile?.avatar.url}
        alt="default"
        className="avatar"
        onClick={() => handleAccount()}
        onKeyPress={() => handleAccount()}
      />
      {showAccount && <ProfileContainer />}
    </Styles>
  )
}
