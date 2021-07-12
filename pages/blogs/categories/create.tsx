import React from 'react'
import ContainerMainHeader from '../../../components/layout/ContainerMainHeader'
import Layout from '../../../components/layout/Layout'
import MobileContainerHeader from '../../../components/layout/MobileContainerHeader'
import ContainerMainAction from '../../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../../components/layout/ScrollableContainer'
import ActionButtonWrapper from '../../../components/shared/ActionButtonWrapper'
import { useRouter } from 'next/router'
import ContainerMainWrapper from '../../../components/layout/ContainerWrapper'
import { nanoid } from 'nanoid'
import CreateBlogCategory from '../../../components/blog/categories/CreateBlogCategory'

export default function CreateCategory() {
  const router = useRouter()
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Create', url: '', isActive: true },
    { title: 'Blogs', url: '/blogs', isActive: false },
    { title: 'Categories', url: '/blogs/categories', isActive: false },
    { title: 'Create Blog', url: '/blogs/create', isActive: false },
  ]
  const secondaryActions = [
    { title: 'Blogs', url: '/blogs' },
    { title: 'Categories', url: '/blogs/categories' },
    { title: 'Create Blog', url: '/blogs/create' },
  ]

  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerMainHeader
            pageTitle="Blogs"
            createButtonUrl=""
            createButtonTitle=""
            overlayItems={overlayItems}
          />
          <MobileContainerHeader overlayItems={overlayItems} pageTitle="" createButtonUrl="" />
          <ScrollableContainer>
            <CreateBlogCategory />
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
