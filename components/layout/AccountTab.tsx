import React from 'react'
import styled from 'styled-components'
import AccountSettings from '../account/AccountSettings'
import ProfileContainer from './ProfileContainer'
import TabsOverlay from './TabsOverlay'

const Styles = styled.div``

export default function AccountTab({ showAccount, handleAccount }) {
  return (
    <>
      {showAccount ? (
        <TabsOverlay>
          <Styles>
            {/* <ProfileContainer /> */}
            <AccountSettings />
          </Styles>
        </TabsOverlay>
      ) : null}
    </>
  )
}
