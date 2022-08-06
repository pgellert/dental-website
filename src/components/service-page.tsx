import React from "react"

import Head from "next/head"
import Navbar from "@components/navbar"
import Footer from "@components/footer"
import Container from "@components/container"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw";


export default function ServicePage(markdown) {
  return (
    <div>
      <Head>
        <title>Implants - Perident Dental Clinic Gyor</title>

        <meta
          name="description"
          content="Painless aesthetic dentistry in Győr. Implants, 3D CT, panoramic X-ray, dental prosthesis, bridges, crowns, prosthesis, denture fixation and teeth whitening."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="xl:mx-12 mx-4"> 
        <Navbar/>
        <Content markdown={markdown}/>
        <Footer/>
      </main>
    </div>
  )
}

function Content(props) {
  var markdown = props.markdown;
  return (
    <>
      <Container className="w-full">
        <article className="prose lg:prose-xl prose-stone max-w-none prose-img:rounded-xl">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
          
        </article>
      </Container>
    </>
  );
}
