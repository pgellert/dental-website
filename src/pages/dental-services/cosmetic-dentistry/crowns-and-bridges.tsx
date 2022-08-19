import ServicePage from "@components/service-page"

export default function Home({ markdown }) {
  return (
    <ServicePage title="Crowns and Bridges in Gyor" markdown={markdown} />
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      markdown: await require(`../../../markdown/${locale}/dental-services/cosmetic-dentistry/crowns-and-bridges.md`).default,
    },
  }
}
