import React from 'react'
import ContainerMainHeader from '../../components/layout/ContainerMainHeader'
import Layout from '../../components/layout/Layout'
import MobileContainerHeader from '../../components/layout/MobileContainerHeader'
import styled from 'styled-components'
import ContainerMainAction from '../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../components/layout/ScrollableContainer'
import ActionButtonWrapper from '../../components/shared/ActionButtonWrapper'
import { useRouter } from 'next/router'
import ContainerMainWrapper from '../../components/layout/ContainerWrapper'
import { nanoid } from 'nanoid'
import CreateScholarship from '../../components/scholarship/CreateScholarship'

export default function CreateBlogPost() {
  const router = useRouter()
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Create', url: '/scholarships/create', isActive: true },
    { title: `Scholarships`, url: '/scholarships', isActive: false },
  ]

  const secondaryActions = [
    { title: 'Create Scholarship', url: '/scholarships/create' },
    { title: 'Scholarships', url: '/scholarships' },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerMainHeader
            pageTitle="Scholarships"
            createButtonUrl=""
            createButtonTitle="Create Scholarship"
            overlayItems={overlayItems}
          />
          <MobileContainerHeader
            overlayItems={overlayItems}
            pageTitle="Scholarships"
            createButtonUrl=""
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
