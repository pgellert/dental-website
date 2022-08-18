import React from "react"

import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

import Container from "@components/container"
import Link from "next/link"

export default function ServicePage(markdown) {
  return <Content markdown={markdown} />
}

export function Content(props) {
  var markdown = props.markdown
  return (
    <>
      <Container className="w-full">
        <article className="prose prose-stone max-w-none prose-img:rounded-xl lg:prose-lg">
          <ReactMarkdown 
          rehypePlugins={[rehypeRaw]}
          components={{
            a: ({ node, ...props }) => {
              return (
                <Link href={props.href as string}>
                  <a>
                    {props.children[0]}
                  </a>
                </Link>
              );
            },
          }}
          >
            {markdown}
          </ReactMarkdown>
        </article>
      </Container>
    </>
  )
}
