import React from "react"

import BasePage from "@components/base-page"
import { SectionTitle } from "@components/sections"
import Services from "@components/services"
import { useRouter } from "next/router"
import { data } from "@content/pages"

export default function Home() {
  const { locale } = useRouter();
  const content = data[locale];
  
  return (
    <div>
      <BasePage>
        <SectionTitle title={content.services.title} subtitle={content.services.description} />
        <Services />
      </BasePage>
    </div>
  )
}
