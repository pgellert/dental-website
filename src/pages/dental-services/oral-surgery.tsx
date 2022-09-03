import ServicePage from "@components/service-page"

export default function Home({ markdown }) {
  return (
    <ServicePage title="Oral surgery in Gyor, Hungary" markdown={markdown}/>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      markdown: await require(`@markdowns/${locale}/dental-services/oral-surgery.md`).default,
    },
  }
}

