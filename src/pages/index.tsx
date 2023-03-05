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
        <SectionTitle title={content.services.title} />
        <Services />
        <SectionTitle title={content.benefits.title} />
        <Benefits />
        <SectionTitle title={content.dentist.title} />
        <Dentist />
        <SectionTitle title={content.team.title} />
        <Team />
        <SectionTitle title={content.testimonials.title} />
        <Testimonials />
      </BasePage>
    </div>
  )
}
