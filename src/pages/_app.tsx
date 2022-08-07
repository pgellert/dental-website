import React from "react"

import { AppProps } from "next/app"
import "../styles/tailwind.scss"
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'
import * as gtag from 'lib/gtag'
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const ga_tracking_id = process.env['GA_TRACKING_ID'] || process.env['NEXT_PUBLIC_GA_TRACKING_ID'];
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url, ga_tracking_id)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  useEffect(() => {
    hotjar.initialize(Number(process.env["NEXT_PUBLIC_HOTJAR_HJID"]), Number(process.env["NEXT_PUBLIC_HOTJAR_HJSV"]))
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
