import React from 'react'
import ContainerMainHeader from '../../components/layout/ContainerMainHeader'
import Layout from '../../components/layout/Layout'
import MobileContainerHeader from '../../components/layout/MobileContainerHeader'
import ContainerMainAction from '../../components/layout/ContainerMainAction'
import ContainerMainColumn from './../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../components/layout/ScrollableContainer'
import { useRouter } from 'next/router'
import getPostDetails from '../../actions/post/get-post-details'
import { useQuery } from 'react-query'
import DisplayAdminLoader from '../../components/shared/DisplayAdminLoader'
import DisplayServerError from '../../components/shared/DisplayServerError'
import ActionButtonWrapper from '../../components/shared/ActionButtonWrapper'
import { nanoid } from 'nanoid'
import ContainerMainWrapper from '../../components/layout/ContainerWrapper'
import ApplicationDetails from '../../components/applications/ApplicationDetails'
import getApplicationsDetails from '../../actions/application/get-application-details'
import MarkAsRead from '../../components/applications/actions/MarkAsRead'

export default function ApplicationtDetails() {
  const router = useRouter()
  const { applicationId } = router.query
  const { refetch, data: application, isSuccess, isError, error, isLoading } = useQuery(
    ['Application details', applicationId],
    () => getApplicationsDetails(applicationId)
  )
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Details', url: '', isActive: true },
    { title: 'Applications', url: '/applications', isActive: false },
  ]
  const primaryActions = [
    {
      component: application && (
        <MarkAsRead
          applicationId={applicationId as string}
          refetch={refetch}
          isRead={application.status.isRead}
        />
      ),
    },
  ]

  const secondaryActions = [{ title: 'Applications', url: '/applications' }]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerMainHeader
            pageTitle="Application"
            createButtonUrl="/applications/create"
            createButtonTitle="Create Application"
            overlayItems={overlayItems}
          />
          <MobileContainerHeader
            overlayItems={overlayItems}
            pageTitle="Application"
            createButtonUrl="/applications/create"
          />
          <ScrollableContainer>
            {isSuccess && application && <ApplicationDetails application={application} />}
            {isError && <DisplayServerError error={error} />}
            {isLoading && <DisplayAdminLoader message="Loading Post" />}
          </ScrollableContainer>
        </ContainerMainColumn>
        <ContainerMainAction>
          {isSuccess && application && (
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
