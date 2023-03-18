import React, { Fragment } from "react"

import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

import Container from "@components/container"
import Link from "next/link"
import Image from "next/image"
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

export function Content({ markdown }) {
  return (
    <article className="prose prose-stone max-w-none prose-img:rounded-xl lg:prose-lg prose-p:leading-relaxed">
      <ReactMarkdown 
      rehypePlugins={[rehypeRaw]}
      components={{
        a: ({ node, ...props }) => {
          return (
            (<Link href={props.href as string}>

              {props.children[0]}

            </Link>)
          );
        },
        p: (paragraph: { children?: boolean; node?: any}) => {
          const { node } = paragraph
        
          if (node.children[0].tagName === "img") {
            const image = node.children[0]
            const metastring = image.properties.alt
            const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
            const metaWidth = metastring.match(/{([^}]+)x/)
            const metaHeight = metastring.match(/x([^}]+)}/)
            const width = metaWidth ? metaWidth[1] : "768"
            const height = metaHeight ? metaHeight[1] : "432"
            const isPriority = metastring?.toLowerCase().match('{priority}')
            const hasCaption = metastring?.toLowerCase().includes('{caption:')
            const caption = metastring?.match(/{caption: (.*?)}/)?.pop()
        
            return (
              <div className="postImgWrapper">
                <Image
                  src={image.properties.src}
                  width={width}
                  height={height}
                  className="postImg"
                  alt={alt}
                  priority={isPriority}
                />
                  {hasCaption ? <div className="caption" aria-label={caption}>{caption}</div> : null}
              </div>
            )
          }
          return <p>{paragraph.children}</p>
        },
      }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
