import React from "react"

import BasePage from "@components/base-page"
import Benefits from "@components/benefits"
import Hero from "@components/hero"
import { SectionTitle } from "@components/sections"
import Services from "@components/services"
import Team from "@components/team"
import Testimonials from "@components/testimonials"
import { useRouter } from "next/router"
import { data } from "@content/pages"
import Dentist from "@components/dentist"

export default function Home() {
  const { locale } = useRouter();
  const content = data[locale];
  return (
    <div>
      <BasePage title={content.title} meta_description={content.meta_description}>
        <Hero />
        <SectionTitle title={content.services.title} subtitle={content.services.desciption} />
        <Services />
        <SectionTitle title={content.benefits.title} subtitle={content.benefits.description} />
        <Benefits />
        <Dentist />
        <SectionTitle title={content.team.title} subtitle={content.team.desciption} />
        <Team />
        <SectionTitle title={content.testimonials.title} />
        <Testimonials />
      </BasePage>
    </div>
  )
}
