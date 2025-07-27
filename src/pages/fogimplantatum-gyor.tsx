import ServicePage from "@components/service-page"
import dentalImplants from "../../public/img/dental-implants.jpg"

const data = {
  en: {
    title: "Dental Implants in Gyor | Perident Dentistry",
    meta_description: "Learn about the most modern implant technologies All-on-4, NobelGuide, CBCT. Perident Dentistry Győr.",
  },
  hu: {
    title: "Fogászati implantátumok Győrben | Perident Fogászat",
    meta_description: "Ismerje meg a legmodernebb implantátum-technológiákat All-on-4, NobelGuide, CBCT. Perident fogászat Győr.",
  },
  de: {
    title: "Zahnimplantate in Györ | Zahnarztpraxis Perident",
    meta_description: "Erfahren Sie mehr über die modernsten Implantattechnologien All-on-4, NobelGuide, DVT. Zahnarztpraxis Perident Györ.",
  },
}

export default function Home({markdown, locale}) {
  const content = data[locale];
  return (
    <ServicePage title={content.title} markdown={markdown} meta_description={content.meta_description} image={dentalImplants}/>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      markdown: await require(`@markdowns/${locale}/dental-services/cosmetic-dentistry/dental-implants.md`).default,
      locale: locale,
    },
  }
}
