import React from "react"

import Head from "next/head"
import Navbar from "@components/navbar"
import Hero from "@components/hero"
import Benefits from "@components/benefits"
import Services from "@components/services"
import {services, benefits, team} from "@components/data"
import Team from "@components/team"
import Footer from "@components/footer"
import Testimonials from "@components/testimonials"
import { SectionTitle } from "@components/sections"
import Container from "@components/container"
import Link from "next/link"
import BasePage from "@components/base-page"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Dental Services - Perident Dental Clinic Gyor</title>

        <meta
          name="description"
          content="Painless aesthetic dentistry in Győr. Implants, 3D CT, panoramic X-ray, dental prosthesis, bridges, crowns, prosthesis, denture fixation and teeth whitening."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BasePage>
        <SectionTitle title={services.title} subtitle={services.desc}/>
        <Services data={services} />
      </BasePage>
    </div>
  )
}
