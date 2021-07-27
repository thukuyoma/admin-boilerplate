import React from 'react'
import styled from 'styled-components'
import useAuth from '../../../context/auth'

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 12;
  width: 30px;
  height: 30px;
  border-radius: 40px;
  background: #c9c9c9;
  .avatar {
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
`

export default function HeaderProfileAvatar({ handleAccount }) {
  const { profile, isLoading } = useAuth()
  return (
    <Styles>
      {!isLoading ? (
        <img
          src={profile?.avatar?.url ? profile?.avatar?.url : '/assets/default-avatar.png'}
          alt="default"
          className="avatar"
          onClick={() => handleAccount()}
          onKeyPress={() => handleAccount()}
        />
      ) : null}
    </Styles>
  )
}
