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
import ApplicationDetails from '../../components/applications/ApplicationDetails'
import getApplicationsDetails from '../../actions/application/get-application-details'
import MarkAsApplied from '../../components/applications/actions/MarkAsApplied'
import ContainerHeaders from '../../components/layout/ContainerHeaders'

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
        <MarkAsApplied
          applicationId={applicationId as string}
          refetch={refetch}
          isApplied={application.status.isApplied}
        />
      ),
    },
  ]

  const secondaryActions = [
    { title: 'Applications', url: '/applications' },
    { title: 'All Applied', url: '/applications/filters/applied' },
    { title: 'All Pending', url: '/applications/filters/pending' },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Application"
            createButtonUrl=""
            createButtonTitle="Create Application"
            overlayItems={overlayItems}
          />

          <ScrollableContainer>
            {isSuccess && application && <ApplicationDetails application={application} />}
            {isError && <DisplayServerError error={error} />}
            {isLoading && <DisplayAdminLoader message="Loading Applications" />}
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
