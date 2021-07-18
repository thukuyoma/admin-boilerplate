import React from 'react'
import Layout from '../../components/layout/Layout'
import ContainerMainAction from '../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../components/layout/ScrollableContainer'
import ActionButtonWrapper from '../../components/shared/ActionButtonWrapper'
import { useRouter } from 'next/router'
import ContainerMainWrapper from '../../components/layout/ContainerWrapper'
import { nanoid } from 'nanoid'
import CreateScholarship from '../../components/scholarship/CreateScholarship'
import ContainerHeaders from '../../components/layout/ContainerHeaders'

export default function CreateBlogPost() {
  const router = useRouter()
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Create', url: '/scholarships/create', isActive: true },
    { title: `Scholarships`, url: '/scholarships', isActive: false },
  ]

  const secondaryActions = [
    { title: 'Create Scholarship', url: '/scholarships/create' },
    { title: 'Scholarships', url: '/scholarships' },
    { title: 'All Online', url: '/scholarships/filters/online' },
    { title: 'All Offline', url: '/scholarships/filters/offline' },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Scholarships"
            createButtonUrl=""
            createButtonTitle="Create Scholarship"
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            <CreateScholarship />
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
