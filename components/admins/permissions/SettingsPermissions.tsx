import { Grid } from '@material-ui/core'
import React from 'react'
import { PermissionStyles, PermitHeader } from './permission-list-styles'
import PermitListItem from './PermitListItem'

export default function SettingsPermissions({ handleSetSettings, settings }) {
  return (
    <PermissionStyles>
      <PermitHeader>Settings Permissions</PermitHeader>
      <Grid container spacing={3}>
        {Object.keys(settings).map((permit) => (
          <PermitListItem
            permit={permit}
            key={permit}
            permissionObject={settings}
            callback={handleSetSettings}
          />
        ))}
      </Grid>
    </PermissionStyles>
  )
}
