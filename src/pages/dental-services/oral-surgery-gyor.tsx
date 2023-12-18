import ServicePage from "@components/service-page"
import oralSurgery from "../../../public/img/oral-surgery.jpg"

const data = {
  en: {
    title: "Private Oral Surgery in Győr | Perident Dentistry",
    meta_description: "In our dental office in Győr, we provide you with private oral surgery assistance, whether it is an acute intervention to relieve your toothache or an implant to restore your beautiful smile.",
  },
  hu: {
    title: "Magán Szájsebészet Győrben | Perident Fogászat",
    meta_description: "Győri fogászati rendelőnkben magán szájsebészeti segítséget nyújtunk Önnek, legyen szó akut beavatkozásról fogfájása enyhítésére, vagy implantátum beültetésről gyönyörű mosolya visszaszerzésének érdekében.",
  },
  de: {
    title: "Private Oralchirurgie in Győr | Peridente Zahnarztpraxis",
    meta_description: "In unserer Zahnarztpraxis in Győr bieten wir Ihnen private oralchirurgische Hilfe an, sei es ein akuter Eingriff zur Linderung Ihrer Zahnschmerzen oder ein Implantat zur Wiederherstellung Ihres schönen Lächelns.",
  },
}

export default function Home({markdown, locale}) {
  const content = data[locale];
  return (
    <ServicePage title={content.title} markdown={markdown} meta_description={content.meta_description} image={oralSurgery}/>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      markdown: await require(`@markdowns/${locale}/dental-services/oral-surgery.md`).default,
      locale: locale,
    },
  }
}

