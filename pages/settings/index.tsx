import React from 'react'
import Layout from '../../components/layout/Layout'
import ContainerMainAction from '../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../components/layout/ScrollableContainer'
import ActionButtonWrapper from '../../components/shared/ActionButtonWrapper'
import { nanoid } from 'nanoid'
import ContainerMainWrapper from '../../components/layout/ContainerWrapper'
import ContainerHeaders from '../../components/layout/ContainerHeaders'
import SettingsCard from '../../components/setting/SettingsCard'
import { useRouter } from 'next/router'
import MobileSpacer from '../../components/shared/MobileSpacer'

export default function SettingsIndexPage() {
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: ``, url: '/alerts', isActive: true },
    { title: 'Create Alerts', url: '/alerts/create', isActive: false },
  ]

  const secondaryActions = [
    { title: 'Create Alert', url: '/alerts/create' },
    { title: 'Alerts', url: '/settings/alerts' },
  ]

  const settings = [
    { title: 'Alerts', url: '/settings/alerts', icon: '/settings/alert.png' },
    { title: 'Create Alerts', url: '/settings/alerts/create', icon: '/settings/create-alert.png' },
  ]
  const router = useRouter()
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
            <MobileSpacer style={{ paddingTop: 40 }}>
              <div style={{ display: 'flex' }}>
                {settings.map((item) => (
                  <SettingsCard item={item} />
                ))}
              </div>
            </MobileSpacer>
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
