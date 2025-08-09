import ServicePage from "@components/service-page"
import dentalImplants from "../../public/img/dental-implants.jpg"

const data = {
  en: {
    title: "Dental Implants in Gyor | Perident Dentistry",
    meta_description: "Dental Implant Győr - Dr. Peresztegi Szabolcs 20+ years of experience, 3D CBCT planning, Guarantee, Free consultation, Nobel & Straumann implant.",
    image_alt: "Dental implant placement in Győr at the Perident Dental Clinic",
  },
  hu: {
    title: "Fogimplantátum Győr | Perident Fogászat",
    meta_description: "Fogimplantátum Győr - Dr. Peresztegi Szabolcs 20+ év tapasztalat, 3D CBCT tervezés, Garancia, Ingyenes konzultáció, Nobel & Straumann implantátum.",
    image_alt: "Fogimplantátum beültetés Győrben a Perident Fogászat rendelőjében",
  },
  de: {
    title: "Zahnimplantate in Györ | Zahnarztpraxis Perident",
    meta_description: "Zahnimplantat Győr – Dr. Peresztegi Szabolcs. Über 20 Jahre Erfahrung, 3D CBCT, Garantie, kostenlose Beratung, Nobel & Straumann-Implantat.",
    image_alt: "Zahnimplantation in Győr in der Perident Zahnklinik",
  },
}

export default function Home({markdown, locale}) {
  const content = data[locale];
  return (
    <ServicePage title={content.title} markdown={markdown} meta_description={content.meta_description} image={dentalImplants} image_alt={content.image_alt}/>
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
