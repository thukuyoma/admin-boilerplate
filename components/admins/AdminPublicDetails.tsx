import React from 'react'
import styled from 'styled-components'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import dateFormatter from '../../utils/date-formatter'
import wordsCapitalizer from '../../utils/words-capitalizer'
import { TagKey, TagKeyValuePair, TagValue } from '../shared/shared-styles'
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
      {/* <div className="avatar-wrapper">
        
        <p className="admin__name">
          {capitalizeFirstLetter(admin.firstName)} {capitalizeFirstLetter(admin.lastName)}
        </p>
      </div>
      <div className="admin__tags">
        <TagKeyValuePair>
          <TagKey>Email:</TagKey>
          <TagValue>{admin.email}</TagValue>
        </TagKeyValuePair>
        <TagKeyValuePair>
          <TagKey>Admin Role:</TagKey>
          <TagValue>{admin.role}</TagValue>
        </TagKeyValuePair>
        <TagKeyValuePair>
          <TagKey>Created By:</TagKey>
          <TagValue>{wordsCapitalizer(admin.createdBy.adminFullName)} </TagValue>
        </TagKeyValuePair>
        <TagKeyValuePair>
          <TagKey>Created On:</TagKey>
          <TagValue>{dateFormatter(admin.timestamp)}</TagValue>
        </TagKeyValuePair>
      </div> */}
      <AdminInfoCard admin={admin} />
      <AccountsPermission handleSetAccounts={() => null} accounts={admin.permissions.accounts} />
      <PostsPermission handleSetPosts={() => null} posts={admin.permissions.posts} />
      <SettingsPermissions handleSetSettings={() => null} settings={admin.permissions.settings} />
      <UtilitiesPermissions
        handleSetUtilities={() => null}
        utilities={admin.permissions.utilities}
      />
    </Styles>
  )
}
