import ServicePage from "@components/service-page"
import dentalXray from "../../../public/img/fogrontgen.jpg"

const data = {
  en: {
    title: "Dental CT and Panoramic X-ray in Győr | Perident Dentistry",
    meta_description: "With modern 3D CBCT and digital panoramic X-ray, we welcome our patients in Győr for a private CT examination.",
  },
  hu: {
    title: "Fogászati CT és Panoráma Röntgen Győrben | Perident Fogászat",
    meta_description: "Modern 3D CBCT-vel és digitális panoráma röntgennel várjuk pácienseinket Győrben magán CT vizsgálatra.",
  },
  de: {
    title: "Zahn-CT und Panorama-Röntgen in Győr | Perident Zahnklinik",
    meta_description: "Mit modernem 3D-DVT und digitalem Panorama-Röntgen empfangen wir unsere Patienten in Győr zu einer privaten CT-Untersuchung.",
  },
}

export default function Home({markdown, locale}) {
  const content = data[locale];
  return (
    <ServicePage title={content.title} markdown={markdown} meta_description={content.meta_description} image={dentalXray}/>
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

