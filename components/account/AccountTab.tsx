import React, { useState } from 'react'
import ChangePassword from './ChangePassword'
import AccountSettingsMenu from './SettingsTabs'
import UpdateAvatar from './UpdateAvatar'
import UpdateNames from './UpdateNames'
import ProfileContainer from './ProfileContainer'
import TabsOverlay from '../layout/header-tabs/TabsOverlay'
import UpdateBio from './UpdateBio'

export default function AccountTab({ showAccount }) {
  const [switchCaseAccount, setSwitchCaseAccount] = useState('profile')
  switch (switchCaseAccount) {
    case 'profile':
      return (
        <>
          {showAccount && (
            <TabsOverlay>
              <ProfileContainer setSwitchCaseAccount={setSwitchCaseAccount} />
            </TabsOverlay>
          )}
        </>
      )
    case 'settings':
      return (
        <>
          {showAccount && (
            <TabsOverlay>
              <AccountSettingsMenu setSwitchCaseAccount={setSwitchCaseAccount} />
            </TabsOverlay>
          )}
        </>
      )
    case 'names':
      return (
        <>
          {showAccount && (
            <TabsOverlay>
              <UpdateNames setSwitchCaseAccount={setSwitchCaseAccount} />
            </TabsOverlay>
          )}
        </>
      )
    case 'password':
      return (
        <>
          {showAccount && (
            <TabsOverlay>
              <ChangePassword setSwitchCaseAccount={setSwitchCaseAccount} />
            </TabsOverlay>
          )}
        </>
      )
    case 'avatar':
      return (
        <>
          {showAccount && (
            <TabsOverlay>
              <UpdateAvatar setSwitchCaseAccount={setSwitchCaseAccount} />
            </TabsOverlay>
          )}
        </>
      )
    case 'bio':
      return (
        <>
          {showAccount && (
            <TabsOverlay>
              <UpdateBio setSwitchCaseAccount={setSwitchCaseAccount} />
            </TabsOverlay>
          )}
        </>
      )

    default:
      return (
        <>
          {showAccount && (
            <TabsOverlay>
              <ProfileContainer setSwitchCaseAccount={setSwitchCaseAccount} />
            </TabsOverlay>
          )}
        </>
      )
  }
}
