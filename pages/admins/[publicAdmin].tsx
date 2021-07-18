import React from 'react'
import Layout from '../../components/layout/Layout'
import ContainerMainAction from '../../components/layout/ContainerMainAction'
import ContainerMainColumn from './../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../components/layout/ScrollableContainer'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import DisplayAdminLoader from '../../components/shared/DisplayAdminLoader'
import DisplayServerError from '../../components/shared/DisplayServerError'
import ActionButtonWrapper from '../../components/shared/ActionButtonWrapper'
import { nanoid } from 'nanoid'
import ContainerMainWrapper from '../../components/layout/ContainerWrapper'
import ContainerHeaders from '../../components/layout/ContainerHeaders'
import getPublicAdmin from '../../actions/account/get-public-admin'
import AdminPublicDetails from '../../components/admins/AdminPublicDetails'
import BlockAdminButton from '../../components/admins/actions/BlockAdminButton'
import DeleteAdminButton from '../../components/admins/actions/DeleteAdminButton'
import UpdateAdminButton from '../../components/admins/actions/UpdateAdminButton'
import wordsCapitalizer from '../../utils/words-capitalizer'
import AdminActivitiesButton from '../../components/admins/actions/AdminActivitiesButton'

export default function PublicAdminProfilePage() {
  const router = useRouter()
  const { publicAdmin } = router.query
  const { refetch, data: admin, isSuccess, isError, error, isLoading } = useQuery(
    ['Admin details', publicAdmin],
    () => getPublicAdmin(publicAdmin as string)
  )

  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Details', url: '', isActive: true },
    { title: 'Admins', url: '/admins', isActive: false },
    { title: 'Create Admin', url: '/admins/create', isActive: false },
  ]
  const primaryActions = [
    {
      component: admin && (
        <UpdateAdminButton
          adminToUpdateName={wordsCapitalizer(`${admin.firstName} ${admin.lastName}`)}
          adminId={admin._id}
        />
      ),
    },
    { component: admin && <DeleteAdminButton adminId={admin._id} /> },
    { component: admin && <AdminActivitiesButton adminId={admin._id} /> },
    {
      component: admin && (
        <BlockAdminButton
          refetch={refetch}
          isBlocked={admin.status.isBlocked}
          adminId={admin ? admin._id : ''}
        />
      ),
    },
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
            pageTitle="Admins"
            createButtonUrl="/admins/create"
            createButtonTitle="Create Admin"
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            {isSuccess && admin && <AdminPublicDetails admin={admin} />}
            {isError && <DisplayServerError error={error} />}
            {isLoading && <DisplayAdminLoader message="Loading Admin" />}
          </ScrollableContainer>
        </ContainerMainColumn>
        <ContainerMainAction>
          {isSuccess && admin && (
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
