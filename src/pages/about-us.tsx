import BasePage from "@components/base-page"
import { Content } from "@components/service-page"

export default function Home({ markdown }) {
  return (
    <div>
      <BasePage>
        <div className="p-8 md:p-12">
          <Content markdown={markdown} />
        </div>
      </BasePage>
    </div>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      markdown: await require(`@markdowns/${locale}/about-us.md`).default,
    },
  }
}
