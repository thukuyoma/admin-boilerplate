import React from 'react'
import styled from 'styled-components'
import BorderPaddingWrapper from '../shared/BorderPaddingWrapper'
import UserInfoCard from './UserInfoCard'

const Styles = styled.div`
  .avatar-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    > * {
      &:first-child {
        margin-right: 20px;
      }
    }
  }
  .image-avatar {
    height: 50px;
    width: 50px;
    border-radius: 50px;
  }
  .user__name {
    color: black;
    font-size: 16px;
  }
  .user__tags {
    margin-bottom: 50px;
    > * {
      margin-bottom: 20px;
    }
  }
`
export default function UserPublicDetails({ user }) {
  return (
    <Styles>
      <BorderPaddingWrapper padding>
        <UserInfoCard user={user} />
      </BorderPaddingWrapper>
    </Styles>
  )
}
