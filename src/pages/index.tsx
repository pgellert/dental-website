import React from "react"

import BasePage from "@components/base-page"
import Benefits from "@components/benefits"
import { services, benefits, team } from "@components/data"
import Hero from "@components/hero"
import { SectionTitle } from "@components/sections"
import Services from "@components/services"
import Team from "@components/team"
import Testimonials from "@components/testimonials"

export default function Home() {
  return (
    <div>
      <BasePage title="Dentist Gyor">
        <Hero />
        <SectionTitle title={services.title} subtitle={services.desc} />
        <Services data={services} />
        <SectionTitle title={benefits.title} subtitle={benefits.desc} />
        <Benefits data={benefits} />
        <SectionTitle
          title="Meet the team"
          subtitle="Our team of experienced professionals is here to help you"
        />
        <Team data={team} />
        <SectionTitle title="Here's what our customers said" />
        <Testimonials />
      </BasePage>
    </div>
  )
}
