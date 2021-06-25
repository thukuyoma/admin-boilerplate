import React from 'react'
import Layout from '../../components/layout/Layout'
import ContainerMainAction from '../../components/layout/ContainerMainAction'
import ContainerMainColumn from './../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../components/layout/ScrollableContainer'
import PostDetails from '../../components/blog/PostDetails'
import { useRouter } from 'next/router'
import getPostDetails from '../../actions/post/get-post-details'
import { useQuery } from 'react-query'
import DisplayAdminLoader from '../../components/shared/DisplayAdminLoader'
import DisplayServerError from '../../components/shared/DisplayServerError'
import DeletePostButton from '../../components/blog/actions/DeletePostButton'
import ActionButtonWrapper from '../../components/shared/ActionButtonWrapper'
import EditBlogButton from '../../components/blog/actions/EditBlogButton'
import UnPublishBlogButton from '../../components/blog/actions/UnPublishBlogButton'
import PublishBlogButton from '../../components/blog/actions/PublishBlogButton'
import { nanoid } from 'nanoid'
import ContainerMainWrapper from '../../components/layout/ContainerWrapper'
import ContainerHeaders from '../../components/layout/ContainerHeaders'

export default function BlogPostDetails() {
  const router = useRouter()
  const { slug } = router.query
  const { refetch, data: blog, isSuccess, isError, error, isLoading } = useQuery(
    ['blog post details', slug],
    () => getPostDetails(slug)
  )
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Blog Details', url: '', isActive: true },
    { title: 'Blogs', url: '/blogs', isActive: false },
    { title: 'All Categories', url: '/blogs/categories', isActive: false },
    { title: 'Create Categories', url: '/blogs/categories/create', isActive: false },
    { title: 'Create Blog', url: '/blogs/create', isActive: false },
  ]
  const primaryActions = [
    { component: blog && <EditBlogButton slug={blog.slug} /> },
    { component: blog && <DeletePostButton postId={blog._id} /> },
    {
      component:
        blog && blog.status.isPublished ? (
          <UnPublishBlogButton postId={blog && blog._id} refetch={refetch} />
        ) : (
          <PublishBlogButton postId={blog && blog._id} refetch={refetch} />
        ),
    },
  ]

  const secondaryActions = [
    { title: 'Create Blog', url: '/blogs/create' },
    { title: 'All Blogs', url: '/blogs' },
    { title: 'All Categories', url: '/blogs/categories' },
    { title: 'Create Categories', url: '/blogs/categories/create' },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Blog"
            createButtonUrl="/blogs/create"
            createButtonTitle="Create Blog"
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            {isSuccess && blog && <PostDetails blog={blog} />}
            {isError && <DisplayServerError error={error} />}
            {isLoading && <DisplayAdminLoader message="Loading Post" />}
          </ScrollableContainer>
        </ContainerMainColumn>
        <ContainerMainAction>
          {isSuccess && blog && (
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
