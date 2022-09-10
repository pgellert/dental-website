import BasePage from "@components/base-page"
import { Content } from "@components/service-page"

export default function Home({ markdown }) {
  return (
    <div>
      <BasePage>
        <Content markdown={markdown} />
      </BasePage>
    </div>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      markdown: await require(`@markdowns/${locale == 'hu' ? locale : 'hu'}/privacy-policy.md`).default,
    },
  }
}
