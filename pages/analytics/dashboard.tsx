import React from 'react'
import { Grid } from '@material-ui/core'
import Layout from '../../components/layout/Layout'
import CountGroupOne from '../../components/analytics/groups/CountGroupOne'
import { IconEye } from '@tabler/icons'
import CounterFour from '../../components/analytics/counters/CountFour'
import TableOne from '../../components/analytics/tables/TableOne'
import MobileSpacer from '../../components/shared/MobileSpacer'
import CountGroupThree from '../../components/analytics/groups/CountGroupThree'
import CountGroupTwo from '../../components/analytics/groups/CountGroupTwo'
import DailyPageViews from '../../components/analytics/DailyPageViews'
import TotalPageViews from '../../components/analytics/TotalPageViews'
import AveragePageViews from '../../components/analytics/AveragePageView'
import DailyUniqueVisitors from '../../components/analytics/DailyUniqueVisitors'
import TotalBookingRequest from '../../components/bookings/analytics/TotalBookingRequests'
import TotalApplicationLogs from '../../components/applications/analytics/TotalApplicationLogs'
import TotalBlogCategories from '../../components/blog/analytics/TotalBlogCategories'
import TotalNewsletterSubscribers from '../../components/newsletter/analytics/TotalNewsletterSubscribers'

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
              <TotalBookingRequest />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <TotalApplicationLogs />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <TotalBlogCategories />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <TotalNewsletterSubscribers />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={3}>
              <TotalPageViews />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <AveragePageViews />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <DailyPageViews />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <DailyUniqueVisitors />
            </Grid>
          </Grid>
          {/* 
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={3}>
              <CounterFour
                itemName="impressions"
                itemCount="20,000"
                itemDate="1,356May 23 - June 01 (2018)"
                iconBg="rgb(33, 150, 243)"
                icon={<IconEye width="20" color="#0098db" strokeWidth={2} style={{ zIndex: 5 }} />}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <CounterFour
                itemName="impressions"
                itemCount="20,000"
                itemDate="1,356May 23 - June 01 (2018)"
                iconBg="rgb(33, 150, 243)"
                icon={<IconEye width="20" color="#0098db" strokeWidth={2} style={{ zIndex: 5 }} />}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <CounterFour
                itemName="impressions"
                itemCount="20,000"
                itemDate="1,356May 23 - June 01 (2018)"
                iconBg="rgb(33, 150, 243)"
                icon={<IconEye width="20" color="#0098db" strokeWidth={2} style={{ zIndex: 5 }} />}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <CounterFour
                itemName="impressions"
                itemCount="20,000"
                itemDate="1,356May 23 - June 01 (2018)"
                iconBg="rgb(33, 150, 243)"
                icon={<IconEye width="20" color="#0098db" strokeWidth={2} style={{ zIndex: 5 }} />}
              />
            </Grid>
          </Grid> */}

          {/* <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <TableOne />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TableOne />
            </Grid>
          </Grid> */}
        </Grid>
      </Layout>
    </MobileSpacer>
  )
}
