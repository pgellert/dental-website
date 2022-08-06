import Link from "next/link";
import React from "react";
import Container from "./container";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Services(props) {
  const { data } = props;

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex flex-wrap items-center w-full ${
            props.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-full bg-white p-4">
            {data.bullets.map((item, index) => (
              <Service key={index} title={item.title} icon={item.icon} link={item.link}>
                {item.desc}
              </Service>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

function Service(props) {
  return (
    <div className="p-6 md:p-10 rounded-xl bg-blue-50">
      <div className="inline-flex rounded-full bg-emerald-400 p-4">
            {React.cloneElement(props.icon, {
                className: "w-7 h-7 text-white",
              })}
      </div>

      <h3 className="mt-4 text-base md:text-xl font-medium text-gray-800">
            {props.title}
      </h3>
      <p className="mt-4 text-base md:text-lg text-gray-600">
        {props.children}
      </p>

      <Link href={props.link ? props.link : ""}>
      <div className="py-2 cursor-pointer text-sky-600 focus:text-blue-700 focus:outline-none active:text-blue-800 transition duration-300 ease-in-out">
        Learn more
      </div>
      
      </Link>
    </div>
  );
}
