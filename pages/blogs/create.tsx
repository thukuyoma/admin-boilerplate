import React from 'react'
import CreateBlog from '../../components/blog/CreateBlog'
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

export default function CreateBlogPost() {
  const router = useRouter()
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Create Blog', url: '', isActive: true },
    { title: 'Blogs', url: '/blogs', isActive: false },
    { title: 'All Categories', url: '/blogs/categories', isActive: false },
    { title: 'Create Categories', url: '/blogs/categories/create', isActive: false },
  ]

  const secondaryActions = [
    { title: 'All Blogs', url: '/blogs' },
    { title: 'All Categories', url: '/blogs/categories' },
    { title: 'Create Categories', url: '/blogs/categories/create' },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerMainHeader
            pageTitle="Blog"
            createButtonUrl=""
            createButtonTitle=""
            overlayItems={overlayItems}
          />
          <MobileContainerHeader overlayItems={overlayItems} pageTitle="" createButtonUrl="" />
          <ScrollableContainer>
            <CreateBlog />
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
