import React from 'react'
import { Grid } from '@material-ui/core'
import Layout from '../../components/layout/Layout'
import CountGroupOne from '../../components/analytics/groups/CountGroupOne'
import { IconEye } from '@tabler/icons'
import CountThree from '../../components/analytics/counters/CountThree'
import CounterFour from '../../components/analytics/counters/CountFour'
import TableOne from '../../components/analytics/tables/TableOne'
import MobileSpacer from '../../components/shared/MobileSpacer'
import CountGroupThree from '../../components/analytics/groups/CountGroupThree'
import CountGroupTwo from '../../components/analytics/groups/CountGroupTwo'

export default function dashboard() {
  return (
    <MobileSpacer>
      <Layout>
        <Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4}>
              <CountGroupOne />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <CountGroupTwo />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <CountGroupThree />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={3}>
              <CountThree />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <CountThree />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <CountThree />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <CountThree />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={3}>
              <CounterFour
                itemName="impressions"
                itemCount="20,000"
                itemDate="1,356May 23 - June 01 (2018)"
                iconBg="rgb(33, 150, 243)"
                icon={
                  <IconEye width="20" color="#0098db" strokeWidth={1.5} style={{ zIndex: 5 }} />
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <CounterFour
                itemName="impressions"
                itemCount="20,000"
                itemDate="1,356May 23 - June 01 (2018)"
                iconBg="rgb(33, 150, 243)"
                icon={
                  <IconEye width="20" color="#0098db" strokeWidth={1.5} style={{ zIndex: 5 }} />
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <CounterFour
                itemName="impressions"
                itemCount="20,000"
                itemDate="1,356May 23 - June 01 (2018)"
                iconBg="rgb(33, 150, 243)"
                icon={
                  <IconEye width="20" color="#0098db" strokeWidth={1.5} style={{ zIndex: 5 }} />
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <CounterFour
                itemName="impressions"
                itemCount="20,000"
                itemDate="1,356May 23 - June 01 (2018)"
                iconBg="rgb(33, 150, 243)"
                icon={
                  <IconEye width="20" color="#0098db" strokeWidth={1.5} style={{ zIndex: 5 }} />
                }
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <TableOne />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TableOne />
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </MobileSpacer>
  )
}
