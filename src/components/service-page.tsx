import React, { Fragment } from "react"

import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

import Container from "@components/container"
import Link from "next/link"
import Image from "next/image"
import BasePage from "./base-page"
import { useRouter } from "next/router"
import { data } from "@content/components/service-page"

import {CTAButtons} from "@components/hero"
import carousel2 from "../../public/img/smiling-woman-white-teeth-2.jpg"
import Testimonials from "./testimonials"


export default function ServicePage({title, meta_description, markdown, image, image_alt = null}) {
  const { locale } = useRouter();
  const content = data[locale];

  return <Fragment>
    <BasePage title={title} meta_description={meta_description}>
      <div className="flex gap-8 flex-col lg:flex-row">
        <div className="overflow-hidden lg:h-96 float w-full lg:mt-32 lg:w-1/3 lg:border-8 lg:shadow-2xl lg:border-sky-600">
          <Image src={image || carousel2} alt={image_alt || title} sizes="(max-width: 420px) 100vw, 400" className="w-full lg:h-96 object-cover" priority fetchPriority="high"/>
        </div>
        
        <Container className="w-full">
          <Content markdown={markdown} />
          {CTAButtons()}
        </Container>
      </div>
      <Testimonials/>
    </BasePage>
  </Fragment>
}

export function Content({ markdown }) {
  return (
    <article className="p-4 prose prose-stone max-w-none prose-img:rounded-xl lg:prose-lg prose-p:leading-relaxed prose-p:text-justify">
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
