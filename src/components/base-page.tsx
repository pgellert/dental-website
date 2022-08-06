import React from "react"

import Head from "next/head"

import Footer from "@components/footer"
import Navbar from "@components/navbar"

export default function BasePage(props) {
  return (
    <div>
      <Head>
        <title>{props.title} - Perident Dental Clinic Gyor</title>

        <meta
          name="description"
          content="Painless aesthetic dentistry in Győr. Implants, 3D CT, panoramic X-ray, dental prosthesis, bridges, crowns, prosthesis, denture fixation and teeth whitening."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-0 xl:mx-12">
        <Navbar />
        {props.children}
        <Footer />
      </main>
    </div>
  )
}
