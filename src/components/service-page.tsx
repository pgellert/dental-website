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
        <article className="prose prose-stone max-w-none prose-img:rounded-xl lg:prose-lg prose-p:leading-relaxed mt-8">
          <p>
            If you have any questions about the dental procedures at Perident Dentistry, or if you would like to make an appointment, please call us at <a href="tel:+36-20-567-5678">+36-20-567-5678</a> or email us at <a href="mailto:info@perident.hu">info@perident.hu</a>.
          </p>
          <p>
            Our dental praxis is located at Gyor in the wester part of Hungary. Our address is 9024 GYŐR, Nagy Imre út 93. For more information on how you can contact us and how to get to our praxis, click <Link href="/contact-us"><a>here</a></Link>.
          </p>
        </article>
      </Container>
    </BasePage>
  </Fragment>
}

export function Content(props) {
  var markdown = props.markdown
  return <article className="prose prose-stone max-w-none prose-img:rounded-xl lg:prose-lg prose-p:leading-relaxed">
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
