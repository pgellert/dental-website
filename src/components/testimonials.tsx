import { data } from "@content/components/testimonials";
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React from "react"

import Container from "./container"

export default function Testimonials() {
  const { locale } = useRouter();
  const content = data[locale];

  return (
    <ul className="mt-8 pb-6 flex overflow-x-auto gap-8 snap-x snap-mandatory scroll-p-0 before:shrink-0 after:shrink-0 transition-all">
      {content.testimonials.map((item, index) =>
        <Rating key={index} testimonial={item.text} name={item.name}/>
      )}
    </ul>
  )
}

function Rating({name, testimonial}) {
  return (
    <li className="snap-center snap-always overflow-visible">
      <div className="flex max-w-xs flex-col rounded-md bg-slate-100 p-6 shadow-md">
        <Stars />
        <p className="leading-normal text-center text-sm lg:text-base">
          {testimonial}
        </p>
        <Avatar name={name} />
      </div>
    </li>
  )
}

function Avatar(props) {
  return (
    <div className="mt-6 flex items-center space-x-3">
      <div className="relative m-1 mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 uppercase text-white">
        {Array.from(props.name)[0]}
      </div>

      <div>
        <div className="font-medium">{props.name}</div>
      </div>
    </div>
  )
}

function Stars() {
  return (
    <div className="inline-flex rounded-full p-2 pb-6 place-content-center">
      {[...Array(5)].map((_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} className="w-6 h-6 text-yellow-300" />
      ))}
    </div>
  )
}
