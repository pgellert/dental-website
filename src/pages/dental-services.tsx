import React from "react"

import ServicePage from "@components/service-page"

export default function Home({markdown}) {
  return (
    <ServicePage title="Dental Services in Gyor | Perident Dentistry" markdown={markdown} meta_description={undefined}/>
  )
}


export async function getStaticProps({locale}) {
  return {
    props: {
      markdown: await require(`@markdowns/${locale}/dental-services/index.md`).default,
    },
  }
}
