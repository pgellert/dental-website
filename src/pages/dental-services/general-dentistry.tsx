import ServicePage from "@components/service-page"

export default function Home({ markdown }) {
  return (
    <ServicePage title="General Dentistry in Gyor, Hungary" markdown={markdown}/>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      markdown: await require(`../../markdown/${locale}/dental-services/general-dentistry.md`).default,
    },
  }
}

