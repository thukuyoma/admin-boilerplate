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

const ContainerMainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 450px;
`

export default function edit() {
  const router = useRouter()
  const { slug } = router.query
  const { refetch, data, isSuccess, isError, error, isLoading } = useQuery(
    ['blog post details', slug],
    () => getPostDetails(slug)
  )
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerMainHeader pageTitle="Blog" createUrl="" createButtonTitle="Create Blog" />
          <MobileContainerHeader pageTitle="Blog" createButtonUrl="" />
          <ScrollableContainer>
            {isSuccess && data && <EditBlog blog={data} />}
            {isError && <DisplayServerError error={error} />}
            {isLoading && <DisplayAdminLoader message="Loading Post" />}
          </ScrollableContainer>
        </ContainerMainColumn>
        <ContainerMainAction />
      </ContainerMainWrapper>
    </Layout>
  )
}
