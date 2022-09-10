import ServicePage from "@components/service-page"

const data = {
  en: {
    title: "Cosmetic Dentistry in Gyor | Perident Dentistry",
    meta_description: "If you're not happy with your smile, come to our cosmetic dentistry page and see how we can help. We offer a variety of services to help you get the smile you've always wanted.",
  },
  hu: {
    title: "Kozmetikai Fogászat Győrben | Perident Fogászat",
    meta_description: "Ha nem elégedett mosolyával, jöjjön el kozmetikai fogászati oldalunkra és nézze meg, hogyan tudunk segíteni. Számos szolgáltatást kínálunk, amelyek segítenek elérni azt a mosolyt, amire mindig is vágyott.",
  },
  de: {
    title: "Ästhetische Zahnmedizin in Györ | Zahnarztpraxis Perident",
    meta_description: "Wenn Sie mit Ihrem Lächeln nicht zufrieden sind, besuchen Sie unsere Seite für kosmetische Zahnheilkunde und sehen Sie, wie wir Ihnen helfen können. Wir bieten eine Vielzahl von Dienstleistungen an, um Ihnen zu dem Lächeln zu verhelfen, das Sie sich schon immer gewünscht haben.",
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
      markdown: await require(`@markdowns/${locale}/dental-services/cosmetic-dentistry.md`).default,
      locale: locale,
    },
  }
}

