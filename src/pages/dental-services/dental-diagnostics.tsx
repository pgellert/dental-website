import ServicePage from "@components/service-page"

export default function Home({ markdown }) {
  return (
    <ServicePage title="Dental Diagnostics in Gyor, Hungary" markdown={markdown}/>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      markdown: await require(`../../markdown/${locale}/dental-services/dental-diagnostics.md`).default,
    },
  }
}

