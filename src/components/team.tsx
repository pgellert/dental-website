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
      <Container className="flex w-full flex-wrap items-center m-8">
        <ul className="flex w-full flex-row flex-wrap place-content-center gap-8">
          {content.members.map((item, index) => (
            <TeamMember
              key={index}
              image={item.image}
              name={item.name}
              title={item.title}
              linkedinLink={item.linkedin}
            />
          ))}
        </ul>
      </Container>
    </>
  )
}

function TeamMember({ image, name, title, linkedinLink }) {
  const imageCss = { width: '100%', height: 'auto' }

  return (
    <li className="3xl:basis-1/4 w-full basis-1/2 rounded-lg bg-white shadow hover:shadow-md lg:basis-1/4 xl:basis-1/4">
      <Image src={image} sizes="100vw" alt={name + " inside Perident"} style={imageCss} />

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
    </li>
  )
}
