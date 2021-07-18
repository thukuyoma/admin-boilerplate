import React from 'react'
import Layout from '../../components/layout/Layout'
import ContainerMainAction from '../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../components/layout/ScrollableContainer'
import ActionButtonWrapper from '../../components/shared/ActionButtonWrapper'
import { useRouter } from 'next/router'
import ContainerMainWrapper from '../../components/layout/ContainerWrapper'
import ContainerHeaders from '../../components/layout/ContainerHeaders'
import { nanoid } from 'nanoid'
import CheckUser from '../../components/admins/CheckUser'
import CreateAdmin from '../../components/admins/CreateAdmin'
import { useState } from 'react'

export default function CreateAdminPage() {
  const router = useRouter()
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Create', url: '', isActive: true },
    { title: 'Admins', url: '/admins', isActive: false },
    { title: 'Admin Requests', url: '/admins/admin-request', isActive: false },
  ]
  const secondaryActions = [
    { title: 'Admins', url: '/admins' },
    { title: 'All Active', url: '/admins/filters/active' },
    { title: 'All Blocked', url: '/admins/filters/blocked' },
  ]
  const [email, setEmail] = useState('')
  const [user, setUser] = useState(null)
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Admins"
            createButtonUrl=""
            createButtonTitle=""
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            <CheckUser email={email} setEmail={setEmail} setUser={setUser} />
            {user && <CreateAdmin user={user} email={user.email} />}
          </ScrollableContainer>
        </ContainerMainColumn>
        <ContainerMainAction>
          {secondaryActions.map((secondaryAction) => (
            <ActionButtonWrapper key={nanoid()}>
              <span
                onKeyPress={() => router.push(secondaryAction.url)}
                onClick={() => router.push(secondaryAction.url)}
              >
                {secondaryAction.title}
              </span>
            </ActionButtonWrapper>
          ))}
        </ContainerMainAction>
      </ContainerMainWrapper>
    </Layout>
  )
}
