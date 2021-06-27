import React from 'react'
import styled from 'styled-components'
import useAuth from '../../../context/auth'

import ProfileContainer from '../../account/ProfileContainer'

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 12;
  .avatar {
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
`

export default function HeaderProfileAvatar({ showAccount, handleAccount }) {
  const { profile } = useAuth()
  return (
    <Styles>
      <img
        src={profile?.avatar ? profile?.avatar : '/assets/face.svg'}
        alt="default"
        className="avatar"
        onClick={() => handleAccount()}
        onKeyPress={() => handleAccount()}
      />
    </Styles>
  )
}
