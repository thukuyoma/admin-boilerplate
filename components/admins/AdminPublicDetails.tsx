import React from 'react'
import styled from 'styled-components'
import BorderPaddingWrapper from '../shared/BorderPaddingWrapper'
import AdminInfoCard from './AdminInfoCard'
import AccountsPermission from './permissions/AccountsPermissions'
import PostsPermission from './permissions/PostsPermissions'
import SettingsPermissions from './permissions/SettingsPermissions'
import UtilitiesPermissions from './permissions/UtilitiesPermissions'

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
  .admin__name {
    color: black;
    font-size: 16px;
  }
  .admin__tags {
    margin-bottom: 50px;
    > * {
      margin-bottom: 20px;
    }
  }
`
export default function AdminPublicDetails({ admin }) {
  return (
    <Styles>
      <BorderPaddingWrapper padding>
        <AdminInfoCard admin={admin} />
        <AccountsPermission handleSetAccounts={() => null} accounts={admin.permissions.accounts} />
        <PostsPermission handleSetPosts={() => null} posts={admin.permissions.posts} />
        <SettingsPermissions handleSetSettings={() => null} settings={admin.permissions.settings} />
        <UtilitiesPermissions
          handleSetUtilities={() => null}
          utilities={admin.permissions.utilities}
        />
      </BorderPaddingWrapper>
    </Styles>
  )
}
