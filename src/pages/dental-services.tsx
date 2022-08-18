import React, { Fragment } from "react"

import BasePage from "@components/base-page"
import { useRouter } from "next/router"
import { data } from "@content/pages"
import Link from "next/link"
import { Content } from "@components/service-page"

const services = [
  {
    href: "/dental-services/emergency-dentistry",
    label: "Emergency dentistry",
  },
  {
    href: "/dental-services/general-dentistry",
    label: "General dentistry",
    subitems: [
      {
        href: "/dental-services/general-dentistry/oral-hygiene",
        label: "Oral Hygiene",
      },
      {
        href: "/dental-services/general-dentistry/fissure-sealents",
        label: "Fissure sealants",
      },
      {
        href: "/dental-services/general-dentistry/white-fillings",
        label: "White fillings",
      },
      {
        href: "/dental-services/general-dentistry/gum-disease",
        label: "Gum Disease",
      },
      {
        href: "/dental-services/general-dentistry/endodonthics",
        label: "Endodonthics",
      },
    ],
  },
]

// - General dentistry
//     - Oral Hygiene
//     - Fissure sealants
//     - White fillings
//     - Gum Disease
//     - Endodonthics / gyokerkezeles
// - Cosmetic dentistry / Prostodonthics
//     - Implants
//     - Crowns and Bridges
//     - Inlays and Onlays
//     - Teeth Whitening
//     - Smile Makeovers
// - Oral surgery
//     - Root removal (betort gyokerek kibanyaszasa)
//     - Bone grafting / csontpotlas
//     - Sinus lift / arcureg emeles
//     - Wisdom teeth removal
//     - Root resection
//     - Small cists removal
// - Diagnostics
//     - 3D conebeam CT
//     - Panoramic XRay
//     - Digital XRay


function SingleItem({href, label}){
  return (
    <li><Link href={href}><a>{label}</a></Link></li>
  )
}

function Items({href, label, subitems}){
  return <Fragment>
    <SingleItem href={href} label={label}/>
      {subitems != null ? <ul>{subitems.map((item, index) => 
        <Items href={item.href} label={item.label} subitems={item.subitems} />
      )}</ul> : null}
  </Fragment>
}

export default function Home({markdown}) {
  const { locale } = useRouter();
  const content = data[locale];
  
  return (
    <div>
      <BasePage>
      <Content markdown={markdown}/>
        
      </BasePage>
    </div>
  )
}

 function HeadingSection(props) {
  return (
    <div className="mt-4 flex w-full flex-col text-center">
      <h1 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
        {props.title}
      </h1>

      <p className="py-4 px-12 text-lg leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-xl">
        {props.subtitle}
      </p>
    </div>
  )
}


export async function getStaticProps({locale}) {
  const markdown = await require(`../markdown/${locale}/dental-services.md`).default

  return {
    props: {
      markdown: markdown,
    },
  }
}
