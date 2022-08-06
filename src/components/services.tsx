import React from "react"

import Link from "next/link"

import Container from "./container"

export default function Services(props) {
  const { data } = props

  return (
    <>
      <Container className="mb-20 flex flex-wrap lg:flex-nowrap lg:gap-10 ">
        <div
          className={`flex w-full flex-wrap items-center ${
            props.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div className="grid w-full grid-cols-1 gap-6 bg-white p-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {data.bullets.map((item, index) => (
              <Service
                key={index}
                title={item.title}
                icon={item.icon}
                link={item.link}
              >
                {item.desc}
              </Service>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

function Service(props) {
  return (
    <div className="rounded-xl bg-blue-50 p-6 md:p-10">
      <div className="inline-flex rounded-full bg-emerald-400 p-4">
        {React.cloneElement(props.icon, {
          className: "w-7 h-7 text-white",
        })}
      </div>

      <h3 className="mt-4 text-base font-medium text-gray-800 md:text-xl">
        {props.title}
      </h3>
      <p className="mt-4 text-base text-gray-600 md:text-lg">
        {props.children}
      </p>

      <Link href={props.link || "#"}>
        <a className="cursor-pointer py-6 text-sky-600 transition duration-300 ease-in-out focus:text-blue-700 focus:outline-none active:text-blue-800">
          Learn more
        </a>
      </Link>
    </div>
  )
}
