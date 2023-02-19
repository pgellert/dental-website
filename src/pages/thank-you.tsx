import BasePage from "@components/base-page"
import { useRouter } from "next/router"

const data = {
  "en": {
    thank_you: "Thank You!",
    form_submitted: "Thank You! Form submitted",
  },
  "hu": {
    thank_you: "Köszönjük!",
    form_submitted: "Köszönjük! Űrlap beküldve",
  },
  "de": {
    thank_you: "Dankeschön!",
    form_submitted: "Danke schön! Formular übermittelt",
  },
}

export default function Home() {
  const { locale } = useRouter();
  const content = data[locale];

  return (
    <div>
      <BasePage title={content.thank_you} meta_description={content.thank_you}>
        <div className="w-full h-full items-center">
          <h1 className="text-center font-bold p-16 text-2xl">{content.form_submitted}</h1>
        </div>
      </BasePage>
    </div>
  )
}
