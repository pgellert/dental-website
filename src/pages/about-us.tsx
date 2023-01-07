import BasePage from "@components/base-page"
import { Content } from "@components/service-page"

const data = {
  en: {
    title: "About us | Perident Dentistry",
    meta_description: "Looking for dental services? Our team of dental professionals offer a wide range of services to help you maintain your oral health. From teeth cleaning and whitening to more complex procedures, we're here to help. Contact us today to schedule a consultation.",
  },
  hu: {
    title: "Rólunk | Perident Fogászat",
    meta_description: "Fogászati kezelésre van szüksége? Fogorvosi csapatunk széles körű szolgáltatást nyújt, hogy segítsen megőrizni szája egészségét. A fogtisztítástól és fehérítéstől a bonyolultabb eljárásokig itt vagyunk, hogy segítsünk. Vegye fel velünk a kapcsolatot még ma, hogy időpontot egyeztethessünk.",
  },
  de: {
    title: "Über uns | Zahnarztpraxis Perident",
    meta_description: "Suchen Sie nach zahnärztlichen Leistungen? Unser Team von Zahnärzten bietet eine breite Palette von Dienstleistungen an, um Sie bei der Erhaltung Ihrer Mundgesundheit zu unterstützen. Von der Zahnreinigung und Aufhellung bis hin zu komplexeren Verfahren sind wir hier, um zu helfen. Kontaktieren Sie uns noch heute, um einen Beratungstermin zu vereinbaren.",
  },
}

export default function Home({ markdown, locale }) {
  const content = data[locale];
  return (
    <div>
      <BasePage title={content.title} meta_description={content.meta_description}>
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
      locale: locale,
    },
  }
}
