import ServicePage from "@components/service-page"
import dentalFillings from "../../../../public/img/dental-fillings.jpg"

const data = {
  en: {
    title: "Dental fillings in Győr - Perident Dentistry",
    meta_description: "Painless, durable and aesthetic dental fillings. Choose our experienced experts! Call us today!",
  },
  hu: {
    title: "Fogtömések Győrben - Perident Fogászat",
    meta_description: "Fájdalommentes, tartós és esztétikus fogtömések. Válassza tapasztalt szakértőinket! Hívjon minket még ma!",
  },
  de: {
    title: "Zahnfüllungen in Győr - Peridente Zahnheilkunde",
    meta_description: "Schmerzfreie, langlebige und ästhetische Zahnfüllungen. Entscheiden Sie sich für unsere erfahrenen Experten! Ruf uns heute an!",
  },
}

export default function Home({markdown, locale}) {
  const content = data[locale];
  return (
    <ServicePage title={content.title} markdown={markdown} meta_description={content.meta_description} image={dentalFillings}/>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      markdown: await require(`@markdowns/${locale}/dental-services/cosmetic-dentistry/dental-fillings.md`).default,
      locale: locale,
    },
  }
}
