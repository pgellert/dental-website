import React from "react"

import BasePage from "@components/base-page"
import Benefits from "@components/benefits"
import Hero from "@components/hero"
import { Section } from "@components/sections"
import Services from "@components/services"
import Team from "@components/team"
import Testimonials from "@components/testimonials"
import { useRouter } from "next/router"
import { data } from "@content/pages"
import Dentist from "@components/dentist"
import PeridentMap from "@components/google-map"

export default function Home() {
  const { locale } = useRouter();
  const content = data[locale];
  return (
    <div>
      <BasePage title={content.title} meta_description={content.meta_description}>
        <Hero />
        <Section title={content.services.title} anchor={"fogorvosi-kezelesek"}>
          <Services />
        </Section>
        <Section title={content.benefits.title} anchor={"miert-a-perident-fogaszat"}>
          <Benefits />
        </Section>
        <Section title={content.dentist.title} anchor={"dr-peresztegi-fogorvos-gyor"}>
          <Dentist />
        </Section>
        <Section title={content.team.title} anchor={"csapat"}>
          <Team />
        </Section>
        <Section title={content.map.title} anchor={"terkep"}>
          <PeridentMap className={"w-full h-56"}/>
        </Section>
        <Section title={content.testimonials.title} anchor={"velemenyek"}>
          <Testimonials />
        </Section>
      </BasePage>
    </div>
  )
}
