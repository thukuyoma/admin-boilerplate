import React from 'react'
import Layout from '../../../components/layout/Layout'
import ContainerMainAction from '../../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../../components/layout/ScrollableContainer'
import EditBlog from '../../../components/blog/EditBlog'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import DisplayAdminLoader from '../../../components/shared/DisplayAdminLoader'
import DisplayServerError from '../../../components/shared/DisplayServerError'
import ContainerMainWrapper from '../../../components/layout/ContainerWrapper'
import ContainerHeaders from '../../../components/layout/ContainerHeaders'
import ActionButtonWrapper from '../../../components/shared/ActionButtonWrapper'
import { nanoid } from 'nanoid'
import getPublicAdmin from '../../../actions/account/get-public-admin'
import UpdateAdmin from '../../../components/admins/UpdateAdmin'

export default function UpdateAdminPage() {
  const router = useRouter()
  const { adminId, adminToUpdateName } = router.query
  const { data, isSuccess, isError, error, isLoading } = useQuery(
    ['Public admin details', adminId],
    () => getPublicAdmin(adminId as string)
  )
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Admin Details', url: '', isActive: true },
    { title: 'Admins', url: '/admins', isActive: false },
    { title: 'Create Admin', url: '/admins/create', isActive: false },
  ]
  const secondaryActions = [
    { title: 'Create Admin', url: '/admins/create' },
    { title: 'Admins', url: '/admins' },
    { title: 'All Active', url: '/admins/filters/active' },
    { title: 'All Blocked', url: '/admins/filters/blocked' },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Blog"
            createButtonUrl="/blogs/create"
            createButtonTitle="Create Post"
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            {isSuccess && data && (
              <UpdateAdmin adminToUpdateName={adminToUpdateName} admin={data} />
            )}
            {isError && <DisplayServerError error={error} />}
            {isLoading && <DisplayAdminLoader message="Loading Admin" />}
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
