import React from 'react'
import Layout from '../../../components/layout/Layout'
import ContainerMainAction from '../../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../../components/layout/ScrollableContainer'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import DisplayAdminLoader from '../../../components/shared/DisplayAdminLoader'
import DisplayServerError from '../../../components/shared/DisplayServerError'
import ActionButtonWrapper from '../../../components/shared/ActionButtonWrapper'
import { nanoid } from 'nanoid'
import ContainerMainWrapper from '../../../components/layout/ContainerWrapper'
import ContainerHeaders from '../../../components/layout/ContainerHeaders'
import EditBlogCategoryButton from '../../../components/blog/categories/actions/EditBlogCategoryButton'
import DeleteBlogCategoryButton from '../../../components/blog/categories/actions/DeleteBlogCategoryButton'
import getCategory from '../../../actions/post/categories/get-category'
import BlogCategoryDetails from '../../../components/blog/categories/BlogCategoryDetails'
import TogglePublishBlogCategoryButton from '../../../components/blog/categories/actions/TogglePublishBlogCategoryButton'

export default function BlogPostDetails() {
  const router = useRouter()
  const { categoryTitle } = router.query
  const { refetch, data: category, isSuccess, isError, error, isLoading } = useQuery(
    ['blog category details', categoryTitle],
    () => getCategory(categoryTitle as string)
  )
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Details', url: '', isActive: true },
    { title: 'Blogs', url: '/blogs', isActive: false },
    { title: 'Create Blog', url: '/blogs/create', isActive: false },
    { title: 'Categories', url: '/blogs/categories', isActive: false },
    { title: 'Create Categories', url: '/blogs/categories/create', isActive: false },
  ]
  const primaryActions = [
    { component: category && <EditBlogCategoryButton categoryTitle={category.title} /> },
    { component: category && <DeleteBlogCategoryButton categoryTitle={category.title} /> },
    {
      component: category && category.status && (
        <TogglePublishBlogCategoryButton
          categoryTitle={categoryTitle as string}
          refetch={refetch}
          isPublished={category.status.isPublished}
        />
      ),
    },
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
            {isSuccess && category && <BlogCategoryDetails category={category} />}
            {isError && <DisplayServerError error={error} />}
            {isLoading && <DisplayAdminLoader message="Loading Category" />}
          </ScrollableContainer>
        </ContainerMainColumn>
        <ContainerMainAction>
          {isSuccess && category && (
            <>
              {primaryActions.map((primaryAction) => (
                <ActionButtonWrapper key={nanoid()}>{primaryAction.component} </ActionButtonWrapper>
              ))}
            </>
          )}
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
