import BasePage from "@components/base-page";
import ServicePage from "@components/service-page"
import Head from "next/head";


export default function Home({markdown}) {
  return (
    <div>
      <Head>
        <title>About Us - Perident Dental Clinic Gyor</title>

        <meta
          name="description"
          content="Painless aesthetic dentistry in Győr. Implants, 3D CT, panoramic X-ray, dental prosthesis, bridges, crowns, prosthesis, denture fixation and teeth whitening."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BasePage>
        <Content markdown={markdown}/>
      </BasePage>
    </div>
  )
}

function Content({markdown}) {
  return ServicePage(markdown)
}

export async function getStaticProps() {
    const markdown = await require("../data/about-us.md").default;
    
    return {
      props: {
        markdown: markdown,
      },
    }
  }