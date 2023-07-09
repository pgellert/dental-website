import React, { useState } from "react"

import Link from "next/link"
import Image from "next/image";

import Container from "./container"
import { useRouter } from "next/router";
import { data } from "@content/components/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons"

import carousel2 from "../../public/img/smiling-woman-white-teeth-2.jpg"


export default function Services(props) {
  const { locale } = useRouter();
  const content = data[locale];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <Container className="m-0 p-0 lg:mx-auto">
        <div className="mx-auto divide-y divide-opacity-20 divide-dashed divide-sky-700 bg-sky-50 text-gray-600 shadow-md py-8 md:p-10 md:w-3/5">
          <ul className="mb-6 w-full flex flex-row flex-wrap justify-center gap-y-1">
            {content.bullets.map((item, index) => (
              <li key={index}><button onClick={() => setSelectedIndex(index)} className={(selectedIndex == index ? "border-sky-600" : "border-transparent") + " border-2 border-opacity-40 duration-100 px-3 py-1 tracking-tight text-sm text-semi uppercase rounded-full"} title={item.title}>{item.title}</button></li>
            ))}
          </ul>
          <div className="px-4 py-6">
            {content.bullets.map((item, index) => (
              <div key={index} className={`${(selectedIndex == index) ? "" : "hidden"} mt-8 space-y-4 text-left text-gray-500 dark:text-gray-400`}>
                <ServiceImage image={item.image} title={item.title} link={item.link}/>
                <p className="px-4 pt-4 pb-2 whitespace-pre-wrap">{item.desc}</p>
                <LearnMore text={content.learn_more} link={item.link} title={item.title}/>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

function ServiceImage({image, title, link}) {
  return <figure className="relative max-w-sm mx-auto">
    <a href={link} title={title}>
      <Image className="brightness-75 rounded-md shadow-sm h-48" src={image || carousel2} sizes="(max-width: 420px) 100vw, 400" style={{ width: "100%", objectFit: "cover" }} alt={title} />
    </a>
    <figcaption className="absolute px-4 text-lg text-white bottom-4">
      <h3 className="font-medium tracking-tight uppercase">{title}</h3>
    </figcaption>
  </figure>;
}

function LearnMore({text, link, title}) {
  return <Link title={title} href={link} className="mt-2 px-4 flex items-center space-x-2"> 
      <ArrowIcon />
      <span className="font-medium">{text}</span>
    </Link>;
}

function ArrowIcon() {
  return React.cloneElement(<FontAwesomeIcon icon={faCircleArrowRight} />, {
    className: "w-6 h-6 flex-shrink-0 text-emerald-400",
  })
}
