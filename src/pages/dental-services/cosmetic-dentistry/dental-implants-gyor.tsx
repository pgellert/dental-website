import ServicePage from "@components/service-page"

const data = {
  en: {
    title: "Dental Implants in Gyor | Perident Dentistry",
    meta_description: "If you are looking for a new and improved smile, then look no further than our dental praxis! We offer top-of-the-line dental implants that will give you the smile you have always wanted. So come on in and see us today!",
  },
  hu: {
    title: "Fogászati implantátumok Győrben | Perident Fogászat",
    meta_description: "Ha tökéletes mosolyra vágyik, ne keressen tovább! Csúcskategóriás fogászati implantátumokat kínálunk, amelyek olyan mosolyt adnak Önnek, amelyre mindig is vágyott. Térjen be hozzánk még ma!",
  },
  de: {
    title: "Zahnimplantate in Győr | Zahnarztpraxis Perident",
    meta_description: "Wenn Sie auf der Suche nach einem neuen und besseren Lächeln sind, dann sind Sie in unserer Zahnarztpraxis genau richtig! Wir bieten erstklassige Zahnimplantate, die Ihnen das Lächeln geben, das Sie sich schon immer gewünscht haben. Kommen Sie also noch heute vorbei und besuchen Sie uns!",
  },
}

export default function Home({markdown, locale}) {
  const content = data[locale];
  return (
    <ServicePage title={content.title} markdown={markdown} meta_description={content.meta_description}/>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      markdown: await require(`@markdowns/${locale}/dental-services/cosmetic-dentistry/dental-implants.md`).default,
      locale: locale,
    },
  }
}
