import BasePage from "@components/base-page"
import ServicePage from "@components/service-page"

export default function Home({ markdown }) {
  return (
    <div>
      <BasePage title="Emergency Dentistry in Gyor, Hungary">
        <Content markdown={markdown} />
      </BasePage>
    </div>
  )
}

function Content({ markdown }) {
  return ServicePage(markdown)
}

export async function getStaticProps({locale}) {
  const markdown = await require(`../../markdown/${locale}/dental-services/emergency-dentistry.md`).default;
    return {
    props: {
      markdown: markdown,
    },
  }
}

