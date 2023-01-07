import BasePage from "@components/base-page"
import { Content } from "@components/service-page"

const data = {
  en: {
    title: "Privacy Policy | Perident Dentistry",
    meta_description: "",
  },
  hu: {
    title: "Adatvédelmi irányelvek | Perident Fogászat",
    meta_description: "",
  },
  de: {
    title: "Datenschutz-Bestimmungen | Zahnarztpraxis Perident",
    meta_description: "",
  },
}

export default function Home({ markdown, locale }) {
  const content = data[locale];
  return (
    <div>
      <BasePage title={content.title} meta_description={content.meta_description}>
        <Content markdown={markdown} />
      </BasePage>
    </div>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      markdown: await require(`@markdowns/${locale == 'hu' ? locale : 'hu'}/privacy-policy.md`).default,
      locale: locale,
    },
  }
}
