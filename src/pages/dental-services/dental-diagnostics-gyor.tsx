import ServicePage from "@components/service-page"

const data = {
  en: {
    title: "Dental Diagnostics in Gyor | Perident Dentistry",
    meta_description: "If you are looking for a dentist that offers diagnostic services, look no further! We offer a variety of diagnostic services that can help you maintain your oral health. Call us today to schedule an appointment!",
  },
  hu: {
    title: "Fogászati diagnosztika Győrben | Perident Fogászat",
    meta_description: "Ha diagnosztikai szolgáltatásokat nyújtó fogorvost keres, ne keressen tovább! Különféle diagnosztikai szolgáltatásokat kínálunk, amelyek segíthetnek szájhigiénéjének megőrzésében. Hívjon minket még ma, hogy egyeztessünk időpontot!",
  },
  de: {
    title: "Zahndiagnostik in Györ | Zahnarztpraxis Perident",
    meta_description: "Wenn Sie nach einem Zahnarzt suchen, der diagnostische Dienstleistungen anbietet, suchen Sie nicht weiter! Wir bieten eine Vielzahl von diagnostischen Dienstleistungen an, die Ihnen helfen können, Ihre Mundgesundheit zu erhalten. Rufen Sie uns noch heute an, um einen Termin zu vereinbaren!",
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
      markdown: await require(`@markdowns/${locale}/dental-services/dental-diagnostics.md`).default,
      locale: locale,
    },
  }
}

