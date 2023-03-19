import ServicePage from "@components/service-page"

const data = {
  en: {
    title: "Oral Surgery in Gyor | Perident Dentistry",
    meta_description: "Looking for an oral surgeon in the Gyor area? Look no further than Dr. Peresztegi! With over 20 years of experience, Dr. Peresztegi is your best choice for oral surgery. Trust us for all of your oral surgery needs!",
  },
  hu: {
    title: "Szájsebészet Győrben | Perident Fogászat",
    meta_description: "Szájsebészt keres Győr környékén? Ne keressen tovább, mint Dr. Peresztegi! Dr. Peresztegi több mint 20 éves tapasztalatával a legjobb választás szájsebészetre. Bízza ránk minden szájsebészeti igényét!",
  },
  de: {
    title: "Orale Chirurgie in Győr | Zahnarztpraxis Perident",
    meta_description: "Auf der Suche nach einem Oralchirurgen in der Umgebung von Györ? Suchen Sie nicht weiter als Dr. Peresztegi! Mit über 20 Jahren Erfahrung ist Dr. Peresztegi Ihre beste Wahl für Oralchirurgie. Vertrauen Sie uns für alle Ihre oralchirurgischen Bedürfnisse!",
  },
}

export default function Home({markdown, locale}) {
  const content = data[locale];
  return (
    <ServicePage title={content.title} markdown={markdown} meta_description={content.meta_description} image={undefined}/>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      markdown: await require(`@markdowns/${locale}/dental-services/oral-surgery.md`).default,
      locale: locale,
    },
  }
}

