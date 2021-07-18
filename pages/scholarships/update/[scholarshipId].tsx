import React from 'react'
import Layout from '../../../components/layout/Layout'
import ContainerMainAction from '../../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../../components/layout/ScrollableContainer'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import DisplayAdminLoader from '../../../components/shared/DisplayAdminLoader'
import DisplayServerError from '../../../components/shared/DisplayServerError'
import ContainerMainWrapper from '../../../components/layout/ContainerWrapper'
import ContainerHeaders from '../../../components/layout/ContainerHeaders'
import ActionButtonWrapper from '../../../components/shared/ActionButtonWrapper'
import { nanoid } from 'nanoid'
import UpdateScholarship from '../../../components/scholarship/UpdateScholarship'
import getScholarship from '../../../actions/scholarship/get-scholarship'

export default function UpdateScholarshipPage() {
  const router = useRouter()
  const { scholarshipId } = router.query
  const { data: scholarship, isSuccess, isError, error, isLoading } = useQuery(
    ['scholarship details', scholarshipId],
    () => getScholarship(scholarshipId as string)
  )
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Update', url: '', isActive: true },
    { title: 'Scholarships', url: '/scholarships', isActive: false },
    { title: 'Create Scholarship', url: '/scholarships/create', isActive: false },
  ]

  const secondaryActions = [
    { title: 'Create Scholarship', url: '/scholarships/create' },
    { title: 'Scholaships', url: '/scholarships' },
    { title: 'All Online', url: '/scholarships/filters/online' },
    { title: 'All Offline', url: '/scholarships/filters/offline' },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Scholarships"
            createButtonUrl="/scholarships/create"
            createButtonTitle="Create Scholarship"
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            {isSuccess && scholarship && <UpdateScholarship scholarship={scholarship} />}
            {isError && <DisplayServerError error={error} />}
            {isLoading && <DisplayAdminLoader message="Loading Scholarship" />}
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
