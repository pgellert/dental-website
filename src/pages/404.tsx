import BasePage from "@components/base-page"
import { Content } from "@components/service-page"
import { markdownContent } from "lib/markdown"

export default function Home({ markdown }) {
  return (
    <div>
      <BasePage title="404" meta_description="">
        <Content markdown={markdown} />
      </BasePage>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      markdown: markdownContent(await require(`@markdowns/${locale}/404.md`)),
    },
  }
}
