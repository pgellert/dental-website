import React from "react"

import Container from "@components/container"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw";


export default function ServicePage(markdown) {
  return (
    <Content markdown={markdown}/>
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
