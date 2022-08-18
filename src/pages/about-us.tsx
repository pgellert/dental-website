import BasePage from "@components/base-page"
import ServicePage, { Content } from "@components/service-page"

export default function Home({ markdown }) {
  return (
    <div>
      <BasePage>
        <Content markdown={markdown} />
      </BasePage>
    </div>
  )
}

export async function getStaticProps() {
  const markdown = await require("../markdown/about-us.md").default

  return {
    props: {
      markdown: markdown,
    },
  }
}
