/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import 'react-quill/dist/quill.snow.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import Router from 'next/router'
import NProgress from 'nprogress'
import Head from 'next/head'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify'
import { AuthProvider, ProtectRoute } from '../context/auth'
import 'react-toastify/dist/ReactToastify.css'
import config from './../config/config'
import AnalyticsProvider from '../context/analytics'
import { GlobalStateProvider } from '../context/global'
Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <>
      <AnalyticsProvider>
        <AuthProvider>
          <GlobalStateProvider>
            <ProtectRoute>
              <QueryClientProvider client={queryClient}>
                <Head>
                  <link rel="stylesheet" type="text/css" href="/nprogress.css" />
                  <title>{config.client.clientName} | Admin</title>
                  <link rel="icon" href="/favicon.svg" />
                </Head>
                <ToastContainer />
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen={false} />
              </QueryClientProvider>
            </ProtectRoute>
          </GlobalStateProvider>
        </AuthProvider>
      </AnalyticsProvider>
    </>
  )
}
export default MyApp
