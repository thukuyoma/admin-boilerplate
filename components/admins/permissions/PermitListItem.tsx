import Grid from '@material-ui/core/Grid'
import React from 'react'
import CheckBox from '../../forms/CheckBox'

export default function PermitListItem({
  callback,
  permissionObject,
  permit,
}: {
  permit: string
  callback: (permit) => void
  permissionObject: object
}) {
  return (
    <Grid item xs={12} sm={4} md={4} lg={3} xl={2} key={permit}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CheckBox value={permissionObject[permit]} onChange={() => callback(permit)} />
        {permit}
      </div>
    </Grid>
  )
}
