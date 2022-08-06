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
import BasePage from "@components/base-page"



export default function Home() {
  return (
    <div>
      <Head>
        <title>Dentist Gyor - Perident Dental Clinic Gyor</title>

        <meta
          name="description"
          content="Painless aesthetic dentistry in Győr. Implants, 3D CT, panoramic X-ray, dental prosthesis, bridges, crowns, prosthesis, denture fixation and teeth whitening."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BasePage>
        <Hero/>
        <SectionTitle title={services.title} subtitle={services.desc}/>
        <Services data={services} />
        <SectionTitle title={benefits.title} subtitle={benefits.desc}/>
        <Benefits data={benefits}/>
        <SectionTitle title="Meet the team"
          subtitle="Our team of experienced professionals is here to help you"/>
        <Team data={team}/>
        <SectionTitle title="Here's what our customers said"/>
        <Testimonials/>
      </BasePage>
    </div>
  )
}
