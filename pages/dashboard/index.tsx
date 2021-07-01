import React from 'react'
import Layout from '../../components/layout/Layout'
import RoundItemCount from '../../components/analytics/RoundItemCount'

import styled from 'styled-components'
import IncomePercentage from '../../components/analytics/IncomePercentage'
import BestSellingProducts from '../../components/analytics/BestSellingProducts'

const Styles = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default function DashboardIndexPage() {
  return (
    <Layout>
      <Styles>
        <RoundItemCount />
        <RoundItemCount />
        <RoundItemCount />
        <RoundItemCount />
        <RoundItemCount />
      </Styles>
      <Styles>
        <IncomePercentage />
        <BestSellingProducts />
      </Styles>
    </Layout>
  )
}
