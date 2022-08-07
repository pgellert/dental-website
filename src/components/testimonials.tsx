import React from "react"

import Container from "./container"

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="dark:bg-trueGray-800 flex w-full flex-col rounded-2xl bg-gray-100 px-14 py-14">
            <p className="text-2xl leading-normal ">
              Correct dental care, I recommend to everyone!
            </p>

            <Avatar name="Nicolette K" />
          </div>
        </div>
        <div className="">
          <div className="dark:bg-trueGray-800 flex w-full flex-col rounded-2xl bg-gray-100 px-14 py-14">
            <p className="text-2xl leading-normal ">
              If you come to Perident Dentistry, you will find the kind, very
              knowledgeable, high quality, quick care professionals.
            </p>

            <Avatar name="Sandor Haboczky" />
          </div>
        </div>
        <div className="">
          <div className="dark:bg-trueGray-800 flex w-full flex-col rounded-2xl bg-gray-100 px-14 py-14">
            <p className="text-2xl leading-normal ">
              I was here for tooth extraction, completely painlessly and quickly
              resolved the matter.
            </p>

            <Avatar name="Csaba Fulop" />
          </div>
        </div>
      </div>
    </Container>
  )
}

function Avatar(props) {
  return (
    <div className="mt-8 flex items-center space-x-3">
      <div className="relative m-1 mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-xl uppercase text-white">
        {Array.from(props.name)[0]}
      </div>

      {/** <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
       *   <Image
       *     src={props.image}
       *     width="40"
       *     height="40"
       *     alt="Avatar"
       *     layout="responsive"
       *     placeholder="blur"
       *   />
       * </div> */}
      <div>
        <div className="text-lg font-medium">{props.name}</div>
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
