import { data } from "@content/components/hero";
import { useRouter } from "next/router";
import Container from "./container"


export default function Hero() {
  const { locale } = useRouter();
  const content = data[locale];

  return (
    <>
      <Container className="flex w-full flex-wrap xl:flex-nowrap">
        <div className="flex shrink flex-wrap items-center">
          <div className="px-4">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              {content.title}
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-2xl">
              {content.subtitle}
            </p>
          </div>

          <div className="flex flex-col items-start space-y-3 px-4 xl:flex-row xl:items-center xl:space-x-4 xl:space-y-0">
            <a
              href="/contact-us"
              className="rounded-md bg-sky-600 px-8 py-4 text-center text-lg font-medium text-white "
            >
              {content.booking}
            </a>
            <a
              href="tel:+36205675678"
              className="bg-grey-600 rounded-md border-2 border-sky-600 px-8 py-4 text-center text-lg font-medium text-sky-600"
            >
              {content.call}
            </a>
          </div>
        </div>
        <div className="flex aspect-video grow items-center justify-center lg:min-w-[50%] lg:p-12 xl:p-0">
          <Video />
        </div>
      </Container>
    </>
  )
}

function Video() {
  return (
    <div className="relative h-full w-full p-4">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/Zf2-imQ02rY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
