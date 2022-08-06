import React from "react"

import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

import Container from "@components/container"

export default function ServicePage(markdown) {
  return <Content markdown={markdown} />
}

function Content(props) {
  var markdown = props.markdown
  return (
    <>
      <Container className="w-full">
        <article className="prose prose-stone max-w-none prose-img:rounded-xl lg:prose-xl">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
        </article>
      </Container>
    </>
  )
}
