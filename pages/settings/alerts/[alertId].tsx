import React from 'react'
import Layout from '../../../components/layout/Layout'
import ContainerMainAction from '../../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../../components/layout/ScrollableContainer'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import DisplayServerError from '../../../components/shared/DisplayServerError'
import ActionButtonWrapper from '../../../components/shared/ActionButtonWrapper'
import { nanoid } from 'nanoid'
import ContainerMainWrapper from '../../../components/layout/ContainerWrapper'
import ContainerHeaders from '../../../components/layout/ContainerHeaders'
import LoadingState from '../../../components/shared/ServerLoadingLoader'
import AlertDetails from '../../../components/setting/alert/AlertDetails'
import getAlert from '../../../actions/settings/alert/get-alert'
import RemoveAlertButton from '../../../components/setting/alert/actions/RemoveAlertButton'
import DeleteAlertButton from '../../../components/setting/alert/actions/DeleteAlertButton'

export default function AlertDetailsPage() {
  const router = useRouter()
  const { alertId } = router.query
  const { data: alert, isSuccess, isError, error, isLoading } = useQuery(
    ['Alert details', alertId],
    () => getAlert(alertId)
  )
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Alerts', url: '', isActive: true },
    { title: 'Create Alert', url: '/settings/alerts/create', isActive: false },
  ]
  const primaryActions = [
    {
      component: alert && (
        <RemoveAlertButton alertId={alert._id} isActive={alert.status.isActive} />
      ),
    },
    { component: alert && <DeleteAlertButton alertId={alert._id} /> },
  ]

  const secondaryActions = [
    { title: 'Create alert', url: '/settings/alerts/create' },
    { title: 'Alerts', url: '/settings/alerts' },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Settings"
            createButtonUrl="/settings/alerts/create"
            createButtonTitle="Create Alert"
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            {isSuccess && alert && <AlertDetails alert={alert} />}
            {isError && <DisplayServerError error={error} />}
            {isLoading && <LoadingState message="Loading Alert" />}
          </ScrollableContainer>
        </ContainerMainColumn>
        <ContainerMainAction>
          {isSuccess && alert && (
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
