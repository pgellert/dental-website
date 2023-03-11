import { data } from "@content/components/hero";
import { useRouter } from "next/router";

import Link from "next/link";

import carousel1 from "../../public/img/smiling-woman-white-teeth-1.jpg"
import carousel2 from "../../public/img/smiling-woman-white-teeth-2.jpg"
import carousel3 from "../../public/img/smiling-woman-white-teeth-3.jpg"
import { ImageSlider } from "./image-slider";

const images = [
  { image: carousel1, priority: true },
  { image: carousel2, priority: false },
  { image: carousel3, priority: false },
]

export default function Hero() {
  const { locale } = useRouter();
  const content = data[locale];

  return (
    <>
      <ImageSlider images={images} indicators slide objectFit="cover"/>
      <div className="md:flex md:flex-wrap lg:flex-nowrap w-full">  
        <div className="w-full mt-3 flex shrink flex-wrap items-center">
          <div className="px-4 w-full">
            <h1 className="text-3xl text-center font-medium leading-tight tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
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

function CTAButtons(content: any) {
  return <div className="place-items-center center mt-10 flex flex-col md:flex-row items-baseline justify-center gap-6 space-y-3 px-4 w-full xl:m-0 xl:flex-row xl:items-center xl:space-x-4 xl:space-y-0">
    <Link href="/contact-us" className="rounded-md bg-sky-600 px-8 py-4 text-center text-lg font-medium shadow-md text-white w-full md:w-auto">
      {content.booking}
    </Link>

    <a
      href="tel:+36205675678"
      className="bg-grey-600 rounded-md border-2 border-sky-600 px-8 py-4 text-center text-lg font-medium text-sky-600 w-full md:w-auto"
    >
      {content.call}
    </a>
  </div>;
}
