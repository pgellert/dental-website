import React from "react"

import BasePage from "@components/base-page"
import { services } from "@components/data"
import { SectionTitle } from "@components/sections"
import Services from "@components/services"

export default function Home() {
  return (
    <div>
      <BasePage title="Dental Services">
        <SectionTitle title={services.title} subtitle={services.desc} />
        <Services data={services} />
      </BasePage>
    </div>
  )
}
