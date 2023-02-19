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
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <Rating testimonial={content.testimonial_1} name={"Nicolette"}/>
        <Rating testimonial={content.testimonial_2} name={"Sándor"}/>
        <Rating testimonial={content.testimonial_3} name={"Csaba"}/>
      </div>
    </Container>
  )
}

function Rating({name, testimonial}) {
  return (
    <div className="lg:col-span-2 xl:col-auto">
      <div className="flex w-full flex-col rounded-2xl bg-gray-100 p-6 lg:p-10">
        <Stars />
        <p className="leading-normal ">
          {testimonial}
        </p>
        <Avatar name={name} />
      </div>
    </div>
  )
}

function Avatar(props) {
  return (
    <div className="mt-3 flex items-center space-x-3">
      <div className="relative m-1 mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 uppercase text-white">
        {Array.from(props.name)[0]}
      </div>

      <div>
        <div className="font-medium">{props.name}</div>
      </div>
    </div>
  )
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="rounded-md bg-sky-100 text-sky-800 ring-4 ring-sky-100 dark:bg-sky-900 dark:text-sky-200 dark:ring-sky-900">
        {props.children}
      </mark>{" "}
    </>
  )
}


function Stars() {
  return (
    <div className="inline-flex rounded-full p-2 pb-6 place-content-center md:place-content-start xl:place-content-center">
      {[...Array(5)].map((_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} className="w-6 h-6 text-yellow-300" />
      ))}
    </div>
  )
}
