import React from "react"

import ServicePage from "@components/service-page"

const data = {
  en: {
    title: "Dental Services in Gyor | Perident Dentistry",
    meta_description: "Looking for dental services? Our team of dental professionals offer a wide range of services to help you maintain your oral health. From teeth cleaning and whitening to more complex procedures, we're here to help. Contact us today to schedule a consultation.",
  },
  hu: {
    title: "Fogászati szolgáltatások Győrben | Perident Fogászat",
    meta_description: "Fogászati kezelésre van szüksége? Fogorvosi csapatunk széles körű szolgáltatást nyújt, hogy segítsen megőrizni szája egészségét. A fogtisztítástól és fehérítéstől a bonyolultabb eljárásokig itt vagyunk, hogy segítsünk. Vegye fel velünk a kapcsolatot még ma, hogy időpontot egyeztethessünk.",
  },
  de: {
    title: "Zahnärztliche Dienstleistungen in Győr | Zahnarztpraxis Perident",
    meta_description: "Suchen Sie nach zahnärztlichen Leistungen? Unser Team von Zahnärzten bietet eine breite Palette von Dienstleistungen an, um Sie bei der Erhaltung Ihrer Mundgesundheit zu unterstützen. Von der Zahnreinigung und Aufhellung bis hin zu komplexeren Verfahren sind wir hier, um zu helfen. Kontaktieren Sie uns noch heute, um einen Beratungstermin zu vereinbaren.",
  },
}

export default function Home({markdown, locale}) {
  const content = data[locale];
  return (
    <ServicePage title={content.title} markdown={markdown} meta_description={content.meta_description}/>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      markdown: await require(`@markdowns/${locale}/dental-services/index.md`).default,
      locale: locale,
    },
  }
}
