import ServicePage from "@components/service-page"
import oralSurgery from "../../../public/img/oral-surgery.jpg"

const data = {
  en: {
    title: "Oral Surgery in Gyor | Perident Dentistry",
    meta_description: "Our modern dentistry offers the following oral surgery treatments: tooth extraction, root canal treatment, bone replacement, cyst surgery, sinus closure, bone grafting.",
  },
  hu: {
    title: "Tapasztalt Szájsebész Győrben | Perident Fogászat, Szájsebészet",
    meta_description: "Modern fogászatunk a következő szájsebészeti kezeléseket nyújtja: fogeltávolítás, gyökérkezelés, csontpótlás, cisztaműtétek, arcüregzárás, csontátültetés.",
  },
  de: {
    title: "Erfahrene Oralchirurgie in Győr | Peridente Zahnmedizin",
    meta_description: "Unsere moderne Zahnmedizin bietet folgende oralchirurgische Behandlungen an: Zahnextraktion, Wurzelkanalbehandlung, Knochenersatz, Zystenchirurgie, Sinusverschluss, Knochenaufbau.",
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

