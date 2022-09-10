import ServicePage from "@components/service-page"

const data = {
  en: {
    title: "Emergency Dentistry in Gyor | Perident Dentistry",
    meta_description: "If you're in pain and need emergency dentistry, we can help. We offer emergency dental services for when you need it most. Call us today!",
  },
  hu: {
    title: "Sürgősségi fogászat Győrben | Perident Fogászat",
    meta_description: "Ha fájdalmai vannak, és sürgősségi fogászatra van szüksége, tudunk segíteni. Sürgősségi fogászati szolgáltatásunk segít, amikor a legnagyobb szüksége van rá. Hívjon minket még ma!",
  },
  de: {
    title: "Notfallzahnmedizin in Györ | Zahnarztpraxis Perident",
    meta_description: "Wenn Sie Schmerzen haben und eine zahnärztliche Notfallbehandlung benötigen, können wir Ihnen helfen. Wir bieten einen zahnärztlichen Notdienst an, wenn Sie ihn am dringendsten benötigen. Ruf uns heute an!",
  },
}

export default function Home({markdown, locale}) {
  const content = data[locale];
  return (
    <ServicePage title={content.title} markdown={markdown} meta_description={content.meta_description}/>
  )
}

export async function getStaticProps({locale}) {
  const markdown = await require(`@markdowns/${locale}/dental-services/emergency-dentistry.md`).default;
    return {
    props: {
      markdown: markdown,
      locale: locale,
    },
  }
}

