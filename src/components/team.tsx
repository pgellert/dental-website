import React from "react";
import Container from "./container";
import Image from "next/image";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";

export default function Team(props) {
  const { data } = props;

  return (
    <>
      <Container className="flex flex-wrap items-center w-full ">
      <div className="flex flex-row flex-wrap gap-6 w-full place-content-center">
        {data.members.map((item, index) => (
          <TeamMember key={index} image={item.image} name={item.name} title={item.title} linkedinLink={item.linkedin}/>
        ))}
      </div>
      </Container>
    </>
  );
}

function TeamMember({ image, name, title, linkedinLink }) {
  return (
    <div className="shadow hover:shadow-md w-full bg-white rounded-lg basis-1/2 lg:basis-1/4 xl:basis-1/4 3xl:basis-1/4">
      
      <Image
           layout="responsive"
           src={image}
           alt="Flower and sky"
           />


      <div className="relative p-4">
        <h3 className="text-base md:text-xl font-medium text-gray-800">
          {name}
        </h3>

        
        <div className="mt-1 inline-flex items-center text-base">
            { (linkedinLink === null || typeof linkedinLink === "undefined") ? "" :
                <a target="_blank" href={linkedinLink} rel="noopener noreferrer">
                {React.cloneElement(<FontAwesomeIcon icon={faLinkedin} />, {
                    className: "w-6 h-6 text-blue-600 mr-2",
                })}
                </a>
            }
            

            <p className="text-gray-600">
            {title}
            </p>
        </div>
        
        
      </div>
    </div>
  )
}