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
import SupportDetails from '../../components/support/SupportDetails'
import getSupportTicket from '../../actions/support/getSupportTicket'

export default function SupporttDetails() {
  const router = useRouter()
  const { ticketId } = router.query
  const { refetch, data: support, isSuccess, isError, error, isLoading } = useQuery(
    ['Support details', ticketId],
    () => getSupportTicket(ticketId)
  )
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Details', url: '', isActive: true },
    { title: 'Supports', url: '/supports', isActive: false },
  ]
  const secondaryActions = [{ title: 'Supports', url: '/supports' }]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Support"
            createButtonUrl=""
            createButtonTitle="Create Support"
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            {isSuccess && support && <SupportDetails ticket={support} />}
            {isError && <DisplayServerError error={error} />}
            {isLoading && <DisplayAdminLoader message="Loading Supports" />}
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
