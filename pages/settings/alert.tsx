import React from 'react'
import ContainerMainHeader from '../../components/layout/ContainerMainHeader'
import Layout from '../../components/layout/Layout'
import MobileContainerHeader from '../../components/layout/MobileContainerHeader'
import ContainerMainAction from '../../components/layout/ContainerMainAction'
import ContainerMainColumn from './../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../components/layout/ScrollableContainer'
import { useRouter } from 'next/router'
import ActionButtonWrapper from '../../components/shared/ActionButtonWrapper'
import { nanoid } from 'nanoid'
import ContainerMainWrapper from '../../components/layout/ContainerWrapper'
import AlertCreatedList from '../../components/setting/alert/AlertsCreatedList'

export default function BlogPostDetails() {
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Details', url: '', isActive: true },
    { title: 'Scholarships', url: '/scholarship', isActive: false },
    { title: 'Create Scholarship', url: '/scholarship/create', isActive: false },
  ]
  const router = useRouter()
  const secondaryActions = [
    { title: 'Scholarships', url: '/scholarships' },
    { title: 'Create Scholarship', url: '/scholarships/create' },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
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
