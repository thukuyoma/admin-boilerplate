import React from 'react'
import Layout from '../../../components/layout/Layout'
import ContainerMainAction from '../../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../../components/layout/ScrollableContainer'
import { useRouter } from 'next/router'
import ActionButtonWrapper from '../../../components/shared/ActionButtonWrapper'
import { nanoid } from 'nanoid'
import ContainerMainWrapper from '../../../components/layout/ContainerWrapper'
import ContainerHeaders from '../../../components/layout/ContainerHeaders'
import CreateAlert from '../../../components/setting/alert/CreateAlert'

export default function CreateALertPage() {
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Create Alert', url: '', isActive: true },
    { title: 'Alerts', url: '/settings/alerts', isActive: true },
  ]
  const router = useRouter()
  const secondaryActions = [{ title: 'Alerts', url: '/settings/alerts' }]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Settings"
            createButtonUrl=""
            createButtonTitle=""
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            <CreateAlert />
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
