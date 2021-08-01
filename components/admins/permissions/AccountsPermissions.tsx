import { Grid } from '@material-ui/core'
import React from 'react'
import { PermissionStyles, PermitHeader } from './permission-list-styles'
import PermitListItem from './PermitListItem'

export default function AccountsPermission({ handleSetAccounts, accounts }) {
  return (
    <PermissionStyles>
      <PermitHeader>Account Permissions</PermitHeader>
      <Grid container spacing={3}>
        {Object.keys(accounts).map((permit) => (
          <PermitListItem
            permit={permit}
            key={permit}
            permissionObject={accounts}
            callback={handleSetAccounts}
          />
        ))}
      </Grid>
    </PermissionStyles>
  )
}
