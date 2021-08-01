import { Grid } from '@material-ui/core'
import React from 'react'
import { PermissionStyles, PermitHeader } from './permission-list-styles'
import PermitListItem from './PermitListItem'

export default function PostsPermission({ handleSetPosts, posts }) {
  return (
    <PermissionStyles>
      <PermitHeader>Posts Permissions</PermitHeader>
      <Grid container spacing={3}>
        {Object.keys(posts).map((permit) => (
          <PermitListItem
            key={permit}
            permit={permit}
            permissionObject={posts}
            callback={handleSetPosts}
          />
        ))}
      </Grid>
    </PermissionStyles>
  )
}
