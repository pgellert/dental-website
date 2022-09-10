import ServicePage from "@components/service-page"

const data = {
  en: {
    title: "Dental Crowns and Bridges in Gyor | Perident Dentistry",
    meta_description: "At our dental practice, we specialize in creating custom dental crowns and bridges that perfectly match your smile. Whether you need a porcelain, gold, or silver crown, we can help!",
  },
  hu: {
    title: "Fogászati koronák és hidak Győrben | Perident Fogászat",
    meta_description: "Fogorvosi rendelőnkben olyan fogászati koronák és hidak készítésére specializálódtunk, amelyek tökéletesen illeszkednek az Ön mosolyához. Legyen szüksége porcelán, arany vagy ezüst koronára, mi segítünk!",
  },
  de: {
    title: "Zahnkronen und -brücken in Győr | Zahnarztpraxis Perident",
    meta_description: "In unserer Zahnarztpraxis sind wir darauf spezialisiert, individuelle Zahnkronen und -brücken herzustellen, die perfekt zu Ihrem Lächeln passen. Egal, ob Sie eine Krone aus Porzellan, Gold oder Silber benötigen, wir können Ihnen helfen!",
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
      markdown: await require(`@markdowns/${locale}/dental-services/cosmetic-dentistry/crowns-and-bridges.md`).default,
      locale: locale,
    },
  }
}
