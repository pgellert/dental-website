import ServicePage from "@components/service-page"

const data = {
  en: {
    title: "Dental Inlays and Onlays in Gyor | Perident Dentistry",
    meta_description: "Dental inlays and onlays from our dental praxis are the perfect way to improve your smile. We offer a wide range of inlays and onlays to choose from, so you can find the perfect one for you.",
  },
  hu: {
    title: "Fogászati Inlay és Onlay Győrben | Perident Fogászat",
    meta_description: "Fogászati inlay-eink és onlay-eink tökéletes módot nyújtanak mosolya javítására. Az inlay-ek és onlay-ek széles választékát kínáljuk, amelyek közül választhat, hogy megtalálja az Önnek legmegfelelőbbet.",
  },
  de: {
    title: "Zahninlays und Onlays in Győr | Zahnarztpraxis Perident",
    meta_description: "Zahninlays und -onlays aus unserer Zahnarztpraxis sind die perfekte Möglichkeit, Ihr Lächeln zu verschönern. Wir bieten eine große Auswahl an Inlays und Onlays zur Auswahl, damit Sie das perfekte für Sie finden können.",
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
      markdown: await require(`@markdowns/${locale}/dental-services/cosmetic-dentistry/inlays-and-onlays.md`).default,
      locale: locale,
    },
  }
}
