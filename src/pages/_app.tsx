import React from "react"

import { AppProps } from "next/app"
import "../styles/tailwind.scss"
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    hotjar.initialize(Number(process.env["HJID"]), process.env["HJSV"])
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
