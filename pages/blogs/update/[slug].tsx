import React from 'react'
import CreateBlog from '../../../components/blog/CreateBlog'
import ContainerMainHeader from '../../../components/layout/ContainerMainHeader'
import Layout from '../../../components/layout/Layout'
import MobileContainerHeader from '../../../components/layout/MobileContainerHeader'
import styled from 'styled-components'
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

export default function UpdatePost() {
  const router = useRouter()
  const { slug } = router.query
  const { refetch, data, isSuccess, isError, error, isLoading } = useQuery(
    ['blog post details', slug],
    () => getPostDetails(slug)
  )
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Edit Blog', url: '', isActive: true },
    { title: 'Blogs', url: '/blogs', isActive: false },
    { title: 'All Categories', url: '/blogs/categories', isActive: false },
    { title: 'Create Categories', url: '/blogs/categories/create', isActive: false },
    { title: 'Create Blog', url: '/blogs/create', isActive: false },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerMainHeader
            pageTitle="Blog"
            createButtonUrl="/blogs/create"
            createButtonTitle="Create Post"
            overlayItems={overlayItems}
          />
          <MobileContainerHeader
            pageTitle="Blog"
            createButtonUrl="/blogs/create"
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            {isSuccess && data && <EditBlog blog={data} />}
            {isError && <DisplayServerError error={error} />}
            {isLoading && <DisplayAdminLoader message="Loading Post" />}
          </ScrollableContainer>
        </ContainerMainColumn>
        <ContainerMainAction>
          <h1>Hello</h1>
        </ContainerMainAction>
      </ContainerMainWrapper>
    </Layout>
  )
}
