import React from "react";
import Container from "./container";
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Benefits(props) {
  const { data } = props;

  return (
    <>
      <Container className="flex flex-wrap items-center w-full ">
        <div className="flex flex-col w-full mt-4">
          <FeatureList>
            {data.bullets.map((item, index) => (
              <Feature key={index} title={item.title} desc={item.desc}/>
            ))}
          </FeatureList>
        </div>
      </Container>
    </>
  );
}

interface FeatureListProps {
  children: React.ReactNode
}

function FeatureList({ children }: FeatureListProps) {
  return <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full bg-white p-4">{children}</ul>
}

function Feature({ title, desc }) {
  return (
    <li className="flex items-start">
      <CheckIcon/>
      <div>
        <h4 className="mt-4 text-lg md:text-xl font-medium text-gray-800">{title}</h4>
        <p className="mt-4 text-base md:text-lg text-gray-600">{desc}</p>
      </div>
    </li>
  )
}

function CheckIcon() {
  return (
    <div className="inline-flex rounded-full bg-grey p-4">
        {React.cloneElement(<FontAwesomeIcon icon={faCheck} />, {
            className: "w-6 h-6 text-emerald-400",
          })}
	</div>
  )
}
