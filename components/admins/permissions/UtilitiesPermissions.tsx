import { Grid } from '@material-ui/core'
import React from 'react'
import { PermissionStyles, PermitHeader } from './permission-list-styles'
import PermitListItem from './PermitListItem'

export default function UtilitiesPermissions({ handleSetUtilities, utilities }) {
  return (
    <PermissionStyles>
      <PermitHeader>Utilities Permissions</PermitHeader>
      <Grid container spacing={3}>
        {Object.keys(utilities).map((permit) => (
          <PermitListItem
            key={permit}
            permit={permit}
            permissionObject={utilities}
            callback={handleSetUtilities}
          />
        ))}
      </Grid>
    </PermissionStyles>
  )
}
