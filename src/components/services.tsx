import React from "react"

import Link from "next/link"

import Container from "./container"
import { useRouter } from "next/router";
import { data } from "@content/components/services";

export default function Services(props) {
  const { locale } = useRouter();
  const content = data[locale];

  return (
    <>
      <Container className="mb-4 flex flex-wrap lg:flex-nowrap lg:gap-10 ">
        <div
          className={`flex w-full flex-wrap items-center ${
            props.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <ul className="grid w-full grid-cols-1 gap-6 bg-white p-4 md:grid-cols-2 xl:grid-cols-3">
            {content.bullets.map((item, index) => (
              <Service
                key={index}
                title={item.title}
                icon={item.icon}
                link={item.link}
                learn_more={content.learn_more}
              >
                {item.desc}
              </Service>
            ))}
          </ul>
        </div>
      </Container>
    </>
  )
}

function Service(props) {
  return (
    <li className="rounded-xl bg-blue-50 shadow-md p-6 md:p-10">
      <div>
        <div className="inline-flex rounded-full bg-emerald-400 p-4">
        {React.cloneElement(props.icon, {
          className: "w-7 h-7 text-white",
        })}
      </div>

      <h3 className="mt-4 text-lg font-medium text-gray-800 md:text-xl">
        {props.title}
      </h3>
      
      </div>
      <p className="mt-4 text-base font-light text-gray-600 md:text-lg">
        {props.children}
      </p>

      <div className="cursor-pointer mt-2 text-sky-600 transition duration-300 ease-in-out focus:text-blue-700 focus:outline-none active:text-blue-800">
        <Link href={props.link || "/"} title={props.title}>
          {props.learn_more}
        </Link>
      </div>
      
    </li>
  );
}
