import React, { Fragment } from "react"

import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

import Container from "@components/container"
import Link from "next/link"
import BasePage from "./base-page"
import { useRouter } from "next/router"
import { data } from "@content/components/service-page"

export default function ServicePage({title, meta_description, markdown}) {
  const { locale } = useRouter();
  const content = data[locale];

  return <Fragment>
    <BasePage title={title} meta_description={meta_description}>
      <Container className="w-full">
        <Content markdown={markdown} />
        <article className="prose prose-stone max-w-none prose-img:rounded-xl lg:prose-lg prose-p:leading-relaxed mt-8">
          {content.end_of_article}
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
