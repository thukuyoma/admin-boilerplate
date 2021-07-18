import React from 'react'
import ContainerMainHeader from '../../components/layout/ContainerMainHeader'
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
import getScholarship from '../../actions/scholarship/get-scholarship'
import ScholarshipDetails from '../../components/scholarship/ScholarshipDetails'
import EditScholarshipButton from '../../components/scholarship/actions/EditScholarshipButton'
import DeleteScholarshipButton from '../../components/scholarship/actions/DeleteScholarshipButton'
import TogglePublishScholarshipButton from '../../components/scholarship/actions/TogglePublishScholarshipButton'

export default function BlogPostDetails() {
  const router = useRouter()
  const { scholarshipId } = router.query
  const { refetch, data: scholarship, isSuccess, isError, error, isLoading } = useQuery(
    ['scholarship details', scholarshipId],
    () => getScholarship(scholarshipId as string)
  )
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Details', url: '', isActive: true },
    { title: 'Scholarships', url: '/scholarship', isActive: false },
    { title: 'Create Scholarship', url: '/scholarship/create', isActive: false },
  ]
  const primaryActions = [
    { component: scholarship && <EditScholarshipButton scholarshipId={scholarshipId as string} /> },
    {
      component: scholarship && <DeleteScholarshipButton scholarshipId={scholarshipId as string} />,
    },
    {
      component: scholarship && (
        <TogglePublishScholarshipButton
          isPublished={scholarship.status && scholarship.status.isPublished}
          scholarshipId={scholarshipId}
          refetch={refetch}
        />
      ),
    },
  ]

  const secondaryActions = [
    { title: 'Scholarships', url: '/scholarships' },
    { title: 'Create Scholarship', url: '/scholarships/create' },
    { title: 'All Online', url: '/scholarships/filters/online' },
    { title: 'All Offline', url: '/scholarships/filters/offline' },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerMainHeader
            pageTitle="Scholarship"
            createButtonUrl="/scholarship/create"
            createButtonTitle="Create Scholarship"
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            {isSuccess && scholarship && <ScholarshipDetails scholarship={scholarship} />}
            {isError && <DisplayServerError error={error} />}
            {isLoading && <DisplayAdminLoader message="Loading Scholarship" />}
          </ScrollableContainer>
        </ContainerMainColumn>
        <ContainerMainAction>
          {isSuccess && scholarship && (
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
