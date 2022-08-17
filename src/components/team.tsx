import React from "react"

import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

import Container from "./container"
import { useRouter } from "next/router"
import { data } from "@content/components/team"

export default function Team(props) {
  const { locale } = useRouter();
  const content = data[locale];

  return (
    <>
      <Container className="flex w-full flex-wrap items-center ">
        <div className="flex w-full flex-row flex-wrap place-content-center gap-6">
          {content.members.map((item, index) => (
            <TeamMember
              key={index}
              image={item.image}
              name={item.name}
              title={item.title}
              linkedinLink={item.linkedin}
            />
          ))}
        </div>
      </Container>
    </>
  )
}

function TeamMember({ image, name, title, linkedinLink }) {
  return (
    <div className="3xl:basis-1/4 w-full basis-1/2 rounded-lg bg-white shadow hover:shadow-md lg:basis-1/4 xl:basis-1/4">
      <Image layout="responsive" src={image} alt="Flower and sky" />

      <div className="relative p-4">
        <h3 className="text-base font-medium text-gray-800 md:text-xl">
          {name}
        </h3>

        <div className="mt-1 inline-flex items-center text-base">
          {linkedinLink === null || typeof linkedinLink === "undefined" ? (
            ""
          ) : (
            <a target="_blank" href={linkedinLink} rel="noopener noreferrer">
              {React.cloneElement(<FontAwesomeIcon icon={faLinkedin} />, {
                className: "w-6 h-6 text-blue-600 mr-2",
              })}
            </a>
          )}

          <p className="text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  )
}
