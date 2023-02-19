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
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              {content.title}
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-2xl">
              {content.subtitle}
            </p>
          </div>

          <div className="flex flex-col items-start space-y-3 px-4 w-full xl:flex-row xl:items-center xl:space-x-4 xl:space-y-0">
            <a
              href="/contact-us"
              className="rounded-md bg-sky-600 px-8 py-4 text-center text-lg font-medium text-white w-full md:w-auto"
            >
              {content.booking}
            </a>
            <a
              href="tel:+36205675678"
              className="bg-grey-600 rounded-md border-2 border-sky-600 px-8 py-4 text-center text-lg font-medium text-sky-600 w-full md:w-auto"
            >
              {content.call}
            </a>
          </div>
        </div>
        <div className="flex aspect-video grow items-center justify-center lg:min-w-[50%] lg:p-12 xl:p-0">
          <YouTubeLazyLoad youtubeID="Zf2-imQ02rY" title="Youtube video player" thumbnailOverride={undefined}  />
        </div>
      </Container>
    </>
  )
}

import { useState } from "react";
import NextImage from "next/image";

function YouTubeLazyLoad({
  youtubeID,
  title,
  thumbnailOverride,
}) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative h-full w-full p-4">
      {showVideo ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeID}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <button
          type="button"
          onClick={() => setShowVideo(true)}
          className="group relative aspect-[16/9] w-full"
          aria-label={`Play video ${title}`}
        >
          <NextImage
            src={
              thumbnailOverride ||
              `https://img.youtube.com/vi/${youtubeID}/0.jpg`
            }
            alt={title}
            sizes="100vw"
            fill
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="relative grid place-items-center text-xl text-white opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
              className="h-2/5 w-1/2 transform transition group-hover:scale-105"
            >
              <path
                fill="currentColor"
                d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28Z"
              />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}