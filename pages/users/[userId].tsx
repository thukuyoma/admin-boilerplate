import React from 'react'
import Layout from '../../components/layout/Layout'
import ContainerMainAction from '../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../components/layout/ScrollableContainer'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import DisplayAdminLoader from '../../components/shared/DisplayAdminLoader'
import DisplayServerError from '../../components/shared/DisplayServerError'
import ActionButtonWrapper from '../../components/shared/ActionButtonWrapper'
import { nanoid } from 'nanoid'
import ContainerMainWrapper from '../../components/layout/ContainerWrapper'
import ContainerHeaders from '../../components/layout/ContainerHeaders'
import UserPublicDetails from '../../components/users/UserPublicDetails'
import BlockUserButton from '../../components/users/actions/BlockUserButton'
import DeleteUserButton from '../../components/users/actions/DeleteUserButton'
import getPublicUser from '../../actions/users/get-public-user'

export default function PublicUserProfilePage() {
  const router = useRouter()
  const { userId } = router.query
  const { refetch, data: user, isSuccess, isError, error, isLoading } = useQuery(
    ['User details', userId],
    () => getPublicUser(userId as string)
  )

  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Details', url: '', isActive: true },
    { title: 'Users', url: '/users', isActive: false },
  ]
  const primaryActions = [
    { component: user && <DeleteUserButton userId={user._id} /> },
    {
      component: user && (
        <BlockUserButton
          refetch={refetch}
          isBlocked={user.status.isBlocked}
          userId={user ? user._id : ''}
        />
      ),
    },
  ]

  const secondaryActions = [
    { title: 'Users', url: '/users' },
    { title: 'All Active', url: '/users/filters/active' },
    { title: 'All Blocked', url: '/users/filters/blocked' },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Users"
            createButtonUrl=""
            createButtonTitle=""
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            {isSuccess && user && <UserPublicDetails user={user} />}
            {isError && <DisplayServerError error={error} />}
            {isLoading && <DisplayAdminLoader message="Loading User" />}
          </ScrollableContainer>
        </ContainerMainColumn>
        <ContainerMainAction>
          {isSuccess && user && (
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
