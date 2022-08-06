import BasePage from "@components/base-page"
import ServicePage from "@components/service-page"

export default function Home({ markdown }) {
  return (
    <div>
      <BasePage title="About Us">
        <Content markdown={markdown} />
      </BasePage>
    </div>
  )
}

function Content({ markdown }) {
  return ServicePage(markdown)
}

export async function getStaticProps() {
  const markdown = await require("../data/about-us.md").default

  return {
    props: {
      markdown: markdown,
    },
  }
}
