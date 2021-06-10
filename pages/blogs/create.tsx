import React from 'react'
import CreateBlog from '../../components/blog/CreateBlog'
import ContainerMainHeader from '../../components/layout/ContainerMainHeader'
import Layout from '../../components/layout/Layout'
import MobileContainerHeader from '../../components/layout/MobileContainerHeader'
import styled from 'styled-components'
import ContainerMainAction from '../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../components/layout/ScrollableContainer'

const ContainerMainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 450px;
`

export default function CreateBlogPost() {
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerMainHeader pageTitle="Blog" createUrl="" createButtonTitle="Create Blog" />
          <MobileContainerHeader pageTitle="Blog" createButtonUrl="" />
          <ScrollableContainer>
            <CreateBlog />
          </ScrollableContainer>
        </ContainerMainColumn>
        <ContainerMainAction />
      </ContainerMainWrapper>
    </Layout>
  )
}
