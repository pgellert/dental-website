import BasePage from "@components/base-page"
import ServicePage from "@components/service-page"

export default function Home({ markdown }) {
  return (
    <div>
      <BasePage title="Prothesis">
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
      markdown: await require(`@markdowns/${locale}/dental-services/general-dentistry/implants.md`).default,
    },
  }
}

