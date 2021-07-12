import React from 'react'
import Layout from '../../../../components/layout/Layout'
import ContainerMainAction from '../../../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../../../components/layout/ScrollableContainer'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import DisplayAdminLoader from '../../../../components/shared/DisplayAdminLoader'
import DisplayServerError from '../../../../components/shared/DisplayServerError'
import ContainerMainWrapper from '../../../../components/layout/ContainerWrapper'
import ContainerHeaders from '../../../../components/layout/ContainerHeaders'
import ActionButtonWrapper from '../../../../components/shared/ActionButtonWrapper'
import { nanoid } from 'nanoid'
import getCategory from '../../../../actions/post/categories/get-category'
import EditBlogCategory from '../../../../components/blog/categories/EditBlogCategory'

export default function UpdatePost() {
  const router = useRouter()
  const { categoryTitle } = router.query
  const { data, isSuccess, isError, error, isLoading } = useQuery(
    ['blog category', categoryTitle],
    () => getCategory(categoryTitle as string)
  )
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Edit Category', url: '', isActive: true },
    { title: 'Blogs', url: '/blogs', isActive: false },
    { title: 'Create Blog', url: '/blogs/create', isActive: false },
    { title: 'Categories', url: '/blogs/categories', isActive: false },
    { title: 'Create Category', url: '/blogs/categories/create', isActive: false },
  ]
  const secondaryActions = [
    { title: 'Create Blog', url: '/blogs/create' },
    { title: 'Blogs', url: '/blogs' },
    { title: 'Categories', url: '/blogs/categories' },
    { title: 'Create Category', url: '/blogs/categories/create' },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Blogs"
            createButtonUrl="/blogs/categories/create"
            createButtonTitle="Create Category"
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            {isSuccess && data && <EditBlogCategory category={data} />}
            {isError && <DisplayServerError error={error} />}
            {isLoading && <DisplayAdminLoader message="Loading Category" />}
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
