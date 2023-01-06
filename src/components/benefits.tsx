import React from "react"

import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { data } from "@content/components/benefits";

import Container from "./container"
import { useRouter } from "next/router";

export default function Benefits(props) {
  const { locale } = useRouter();
  const content = data[locale];

  return (
    <>
      <Container className="flex w-full flex-wrap items-center ">
        <div className="mt-4 flex w-full flex-col">
          <FeatureList>
            {content.bullets.map((item, index) => (
              <Feature key={index} title={item.title} desc={item.desc} />
            ))}
          </FeatureList>
        </div>
      </Container>
    </>
  )
}

interface FeatureListProps {
  children: React.ReactNode
}

function FeatureList({ children }: FeatureListProps) {
  return (
    <ul className="grid w-full grid-cols-1 gap-6 bg-white p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </ul>
  )
}

function Feature({ title, desc }) {
  return (
    <li className="flex items-start">
      <CheckIcon />
      <div>
        <p className="mt-4 text-lg font-medium text-gray-800 md:text-xl bold">
          {title}
        </p>
        <p className="mt-4 text-base text-gray-600 md:text-lg">{desc}</p>
      </div>
    </li>
  )
}

function CheckIcon() {
  return (
    <div className="bg-grey inline-flex rounded-full p-4">
      {React.cloneElement(<FontAwesomeIcon icon={faCheck} />, {
        className: "w-6 h-6 text-emerald-400",
      })}
    </div>
  )
}
