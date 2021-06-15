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

export default function CreateBookingPage() {
  const router = useRouter()
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Create Blog', url: '', isActive: true },
    { title: 'bookings', url: '/bookings', isActive: false },
    { title: 'All Categories', url: '/bookings/categories', isActive: false },
    { title: 'Create Categories', url: '/bookings/categories/create', isActive: false },
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
          <ActionButtonWrapper>
            <span
              onKeyPress={() => router.push('/bookings/create')}
              onClick={() => router.push('/bookings/create')}
            >
              Create Blog
            </span>
          </ActionButtonWrapper>
          <ActionButtonWrapper>
            <span
              onKeyPress={() => router.push('/bookings')}
              onClick={() => router.push('/bookings')}
            >
              All Posts
            </span>
          </ActionButtonWrapper>
          <ActionButtonWrapper>
            <span
              onKeyPress={() => router.push('/bookings/categories')}
              onClick={() => router.push('/bookings/categories')}
            >
              See Categories
            </span>
          </ActionButtonWrapper>
          <ActionButtonWrapper>
            <span
              onKeyPress={() => router.push('/bookings/categories/create')}
              onClick={() => router.push('/bookings/categories/create')}
            >
              Create Categories
            </span>
          </ActionButtonWrapper>
        </ContainerMainAction>
      </ContainerMainWrapper>
    </Layout>
  )
}
