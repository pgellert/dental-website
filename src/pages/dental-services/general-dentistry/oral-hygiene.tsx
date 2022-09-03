import BasePage from "@components/base-page"
import ServicePage from "@components/service-page"

export default function Home({ markdown }) {
  return (
    <div>
      <BasePage title="Oral Hygiene in Gyor">
        <Content markdown={markdown} />
      </BasePage>
    </div>
  )
}

function Content({ markdown }) {
  return ServicePage(markdown)
}

export async function getStaticProps({locale}) {
  return {
    props: {
      markdown: await require(`@markdowns/${locale}/dental-services/general-dentistry/oral-hygiene.md`).default,
    },
  }
}

