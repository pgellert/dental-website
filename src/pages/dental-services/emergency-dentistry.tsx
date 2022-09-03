import ServicePage from "@components/service-page"

export default function Home({ markdown }) {
  return (
    <ServicePage title="Emergency Dentistry in Gyor, Hungary" markdown={markdown}/>
  )
}

export async function getStaticProps({locale}) {
  const markdown = await require(`@markdowns/${locale}/dental-services/emergency-dentistry.md`).default;
    return {
    props: {
      markdown: markdown,
    },
  }
}

