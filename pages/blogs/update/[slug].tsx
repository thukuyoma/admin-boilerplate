import React from 'react'
import Layout from '../../../components/layout/Layout'
import ContainerMainAction from '../../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../../components/layout/ScrollableContainer'
import EditBlog from '../../../components/blog/EditBlog'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import getPostDetails from '../../../actions/post/get-post-details'
import DisplayAdminLoader from '../../../components/shared/DisplayAdminLoader'
import DisplayServerError from '../../../components/shared/DisplayServerError'
import ContainerMainWrapper from '../../../components/layout/ContainerWrapper'
import ContainerHeaders from '../../../components/layout/ContainerHeaders'
import ActionButtonWrapper from '../../../components/shared/ActionButtonWrapper'
import { nanoid } from 'nanoid'

export default function UpdatePost() {
  const router = useRouter()
  const { slug } = router.query
  const { data, isSuccess, isError, error, isLoading } = useQuery(['blog post details', slug], () =>
    getPostDetails(slug)
  )
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Edit Blog', url: '', isActive: true },
    { title: 'Blogs', url: '/blogs', isActive: false },
    { title: 'All Categories', url: '/blogs/categories', isActive: false },
    { title: 'Create Categories', url: '/blogs/categories/create', isActive: false },
    { title: 'Create Blog', url: '/blogs/create', isActive: false },
  ]

  const secondaryActions = [
    { title: 'Create Blog', url: '/blogs/create' },
    { title: 'All Blogs', url: '/blogs' },
    { title: 'All Online', url: '/blogs/filters/online' },
    { title: 'All Offline', url: '/blogs/filters/offline' },
    { title: 'All Categories', url: '/blogs/categories' },
    { title: 'Create Categories', url: '/blogs/categories/create' },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Blogs"
            createButtonUrl="/blogs/create"
            createButtonTitle="Create Post"
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            {isSuccess && data && <EditBlog blog={data} />}
            {isError && <DisplayServerError error={error} />}
            {isLoading && <DisplayAdminLoader message="Loading Post" />}
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
