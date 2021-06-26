import React from 'react'
import Layout from '../../../components/layout/Layout'
import ContainerMainAction from '../../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../../components/layout/ScrollableContainer'
import { useRouter } from 'next/router'
import ActionButtonWrapper from '../../../components/shared/ActionButtonWrapper'
import { nanoid } from 'nanoid'
import ContainerMainWrapper from '../../../components/layout/ContainerWrapper'
import AlertCreatedList from '../../../components/setting/alert/AlertsCreatedList'
import ContainerHeaders from '../../../components/layout/ContainerHeaders'

export default function AlertsIndexPage() {
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Alerts', url: '', isActive: true },
    { title: 'Create Alert', url: '/settings/alerts/create', isActive: false },
  ]
  const router = useRouter()
  const secondaryActions = [
    { title: 'Alerts', url: '/settings/alerts' },
    { title: 'Create Alert', url: '/settings/alerts/create' },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Settings"
            createButtonUrl="/settings/alerts/create"
            createButtonTitle="Create Alert"
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            <AlertCreatedList />
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
