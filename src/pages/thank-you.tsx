import BasePage from "@components/base-page"
import { Content } from "@components/service-page"

export default function Home({ markdown }) {
  return (
    <div>
      <BasePage title="Thank You" meta_description="">
        <Content markdown={markdown} />
      </BasePage>
    </div>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
    // TODO: internationalise this text
      markdown: "# Thank You! Form submitted",//await require(`@markdowns/${locale}/404.md`).default,
    },
  }
}
