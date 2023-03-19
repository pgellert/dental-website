import ServicePage from "@components/service-page"
import dentalCheckup from "../../../public/img/dental-checkup.jpg"

const data = {
  en: {
    title: "General Dentistry in Gyor | Perident Dentistry",
    meta_description: "You deserve the best dental care and that's what we promise to deliver. We are a top-rated dentistry specializing in all aspects of oral health.",
  },
  hu: {
    title: "Általános Fogászat Győrben | Perident Fogászat",
    meta_description: "Megérdemli a legjobb fogászati ellátást, és ezt ígérjük. A legjobb minősítésű fogászatunk a szájhigiénia minden területére szakosodott.",
  },
  de: {
    title: "Allgemeine Zahnmedizin in Györ | Zahnarztpraxis Perident",
    meta_description: "Sie verdienen die beste Zahnpflege und das ist unser Versprechen. Wir sind eine erstklassige Zahnmedizin, die sich auf alle Aspekte der Mundgesundheit spezialisiert hat.",
  },
}

export default function Home({markdown, locale}) {
  const content = data[locale];
  return (
    <ServicePage title={content.title} markdown={markdown} meta_description={content.meta_description} image={dentalCheckup}/>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      markdown: await require(`@markdowns/${locale}/dental-services/general-dentistry.md`).default,
      locale: locale,
    },
  }
}

