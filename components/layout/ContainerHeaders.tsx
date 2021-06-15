import React from 'react'
import ContainerMainHeader from './ContainerMainHeader'
import MobileContainerHeader from './MobileContainerHeader'

export default function ContainerHeaders({
  pageTitle,
  overlayItems,
  createButtonTitle,
  createButtonUrl,
}) {
  return (
    <>
      <ContainerMainHeader
        pageTitle={pageTitle}
        createButtonUrl={createButtonUrl}
        createButtonTitle={createButtonTitle}
        overlayItems={overlayItems}
      />
      <MobileContainerHeader
        pageTitle={pageTitle}
        createButtonUrl={createButtonUrl}
        overlayItems={overlayItems}
      />
    </>
  )
}
