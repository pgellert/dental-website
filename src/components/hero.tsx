import { data } from "@content/components/hero";
import { useRouter } from "next/router";
import Container from "./container"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import carousel1 from "../../public/img/smiling-woman-white-teeth-1.jpg"
import carousel2 from "../../public/img/smiling-woman-white-teeth-2.jpg"
import carousel3 from "../../public/img/smiling-woman-white-teeth-3.jpg"


export default function Hero() {
  const { locale } = useRouter();
  const content = data[locale];

  return (
    <>
      <Carousel/>
      <div className="md:flex md:flex-wrap lg:flex-nowrap w-full">  
        <div className="w-full mt-3 flex shrink flex-wrap items-center">
          <div className="px-4 w-full">
            <h1 className="text-3xl text-center font-extrabold leading-tight tracking-tighter text-gray-800 dark:text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              {content.title}
            </h1>
            <p className="py-5 text-base text-center leading-snug text-gray-500 dark:text-gray-300 lg:text-xl xl:text-2xl">
              {content.subtitle}
            </p>
          </div>
          <div className="w-full">
            {CTAButtons(content)}
          </div>
        </div>
      </div>
    </>
  )
}

function Carousel() {
  return <div id="default-carousel" className="relative" data-carousel="slide">
      <div className="relative h-56 overflow-hidden md:h-96">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <Image src={carousel1} alt="Fehér fogsor - Perident Fogorvos Győr" priority/>
            </div>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <Image src={carousel2} sizes="100vw" alt="Fehér fogsor - Perident Fogorvos Győr"/>
            </div>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <Image src={carousel3} sizes="100vw" alt="Fehér fogsor - Perident Fogorvos Győr"/>
            </div>
          </div>
      </div>
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
      </div>
      <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
              <span className="sr-only">Previous</span>
          </span>
      </button>
      <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              <span className="sr-only">Next</span>
          </span>
      </button>
  </div>;
}

function CTAButtons(content: any) {
  return <div className="place-items-center center mt-10 flex flex-row items-baseline justify-center gap-6 space-y-3 px-4 w-full xl:m-0 xl:flex-row xl:items-center xl:space-x-4 xl:space-y-0">
    <Link href="/contact-us" className="rounded-md bg-sky-600 px-8 py-4 text-center text-lg font-medium shadow-md text-white w-full md:w-auto">
      {content.booking}
    </Link>

    <a
      href="tel:+36205675678"
      className="hidden md:block bg-grey-600 rounded-md border-2 border-sky-600 px-8 py-4 text-center text-lg font-medium text-sky-600 w-full md:w-auto"
    >
      {content.call}
    </a>
  </div>;
}
