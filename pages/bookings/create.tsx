import React from 'react'
import Layout from '../../components/layout/Layout'
import ContainerMainAction from '../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../components/layout/ScrollableContainer'
import ActionButtonWrapper from '../../components/shared/ActionButtonWrapper'
import { useRouter } from 'next/router'
import ContainerMainWrapper from '../../components/layout/ContainerWrapper'
import ContainerHeaders from '../../components/layout/ContainerHeaders'
import CreateBooking from '../../components/bookings/CreateBooking'
import { nanoid } from 'nanoid'

export default function CreateBookingPage() {
  const router = useRouter()
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Create', url: '', isActive: true },
    { title: 'Bookings', url: '/bookings', isActive: false },
    { title: 'Booking Requests', url: '/bookings/booking-request', isActive: false },
  ]
  const secondaryActions = [
    { title: 'Bookings', url: '/bookings' },
    { title: 'Booking Requests', url: '/bookings/booking-request' },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Bookings"
            createButtonUrl="/booking/create"
            createButtonTitle="Create Booking"
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            <CreateBooking />
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
