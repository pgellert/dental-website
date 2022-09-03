import React, { Fragment } from "react"

import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

import Container from "@components/container"
import Link from "next/link"
import BasePage from "./base-page"

export default function ServicePage({title, markdown}) {
  return <Fragment>
    <BasePage title={title}>
      <Container className="w-full">
        <Content markdown={markdown} />
        <article className="prose prose-stone max-w-none prose-img:rounded-xl lg:prose-lg">
          <p>
            <b>
              If you have any questions or would like to make an appointment, please contact us at <a href="tel:+36-20-567-5678">+36-20-567-5678</a> or <a href="mailto:info@perident.hu">info@perident.hu</a>.
            </b>
          </p>
        </article>
      </Container>
    </BasePage>
  </Fragment>
}

export function Content(props) {
  var markdown = props.markdown
  return <article className="prose prose-stone max-w-none prose-img:rounded-xl lg:prose-lg">
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
}
