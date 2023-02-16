import React, { useState } from "react"

import Link from "next/link"

import BasePage from "@components/base-page"
import Container from "@components/container"
import dynamic from "next/dynamic"
import { Router, useRouter } from "next/router"
import { data } from "@content/pages/contact-us"
import { global_data } from "@content/global"

export default function Home() {
  const { locale } = useRouter()
  const content = data[locale]
  const global_content = global_data[locale]

  return (
    <div>
      <BasePage
        title={content.title}
        meta_description={content.meta_description}
      >
        <Content content={content} global_content={global_content} />
      </BasePage>
    </div>
  )
}
import {
  faTooth,
  faTeethOpen,
  faClipboardCheck,
  faUserDoctor,
  faCrown,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Content({ content, global_content }) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  async function handleOnSubmit(e) {
    e.preventDefault();

    // TODO: validate

    await fetch('/api/form-submit', {
      method: 'POST',
      body: JSON.stringify({
        "name": name,
        "email": email,
        "message": message,
      })
    });

    router.push("/thank-you")
  }


  return (
    <>
      <div className="w-full justify-evenly md:flex">
        <div className="p-8 xl:p-0">
          {/* <article className="prose prose-stone mx-4 max-w-none pb-0 prose-a:text-blue-600 prose-img:rounded-xl md:pb-8 lg:prose-lg">
            
          </article> */}
          <div>
            <div className="text-center">
              <h1 className="mb-1 text-2xl font-bold text-sky-700">
                {content.contact_us}
              </h1>
              <p className="font-medium italic leading-tight text-gray-700">
                Do you have a question? Would you like to book a free first
                consultation? Call us or enquire below.
              </p>
              {/* <p className="font-medium text-gray-700 italic leading-tight">We are here and committed to your wellbeing.</p>  */}
            </div>
            <FontAwesomeIcon
              icon={faUserDoctor}
              className="my-8 h-7 w-full text-center text-emerald-300 drop-shadow-sm"
            />
            {/* <hr className="my-4"></hr> */}
            <div>
              <h2 className="mb-1 text-lg font-semibold text-sky-500">
                {content.our_address}
              </h2>
              <p className="leading-tight text-gray-700">
                9024 GYŐR, Nagy Imre út 93, {content.hungary}
              </p>
            </div>
            <hr className="my-4"></hr>
            <div>
              <h2 className="mb-1 text-lg font-semibold text-sky-500">
                E-mail
              </h2>
              <p className="leading-tight text-gray-700">
                <Link href="mailto:info@perident.hu">info@perident.hu</Link>
              </p>
            </div>
            <hr className="my-4"></hr>
            <div>
              <h2 className="mb-1 text-lg font-semibold text-sky-500">
                Telephone
              </h2>
              <p className="leading-tight text-gray-700">
                <Link href="tel:+36-20-314-0511">+36-20-314-0511</Link>
              </p>
            </div>
            <hr className="mt-4 mb-10"></hr>
            <div>
              <form onSubmit={handleOnSubmit}>
                <fieldset>
                  <legend className="mb-4 text-lg font-semibold text-sky-500">Enquire</legend>
                  <div className="items-baseline mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                    <input onChange={(e) => setName(e.target.value)} className="placeholder:italic shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:border-sky-700" id="name" type="text" placeholder="John Doe"/>
                  </div>
                  <div className="items-baseline mb-5">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} className="placeholder:italic shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:border-sky-700" id="email" type="email" placeholder="john@doe.com"/>
                  </div>
                  <div className="items-baseline mb-5">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
                    <textarea onChange={(e) => setMessage(e.target.value)} className="resize-y min-h-[100px] placeholder:italic shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:border-sky-700" id="message" placeholder="I'd like to ask a question about..." />
                  </div>
                  <div className="">
                    <button className="w-full shadow uppercase bg-sky-600 hover:bg-sky-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                      Send
                    </button>
                  </div>
                  
                </fieldset>
                
              </form>
            </div>
            <hr className="mt-10 mb-4"></hr>
            <div>
              <h2 className="mb-1 text-lg font-semibold text-sky-500">
                {global_content.opening_hours.title}
              </h2>
              <ul className="list-inside list-disc leading-normal text-gray-700">
                <li>
                  <span className="font-semibold">
                    {global_content.opening_hours.monday}:
                  </span>{" "}
                  8:00–15:00
                </li>
                <li>
                  <span className="font-semibold">
                    {global_content.opening_hours.tuesday}:
                  </span>{" "}
                  14:00–19:00
                </li>
                <li>
                  <span className="font-semibold">
                    {global_content.opening_hours.wednesday}:
                  </span>{" "}
                  8:00–15:00
                </li>
                <li>
                  <span className="font-semibold">
                    {global_content.opening_hours.thursday}:
                  </span>{" "}
                  14:00–19:00
                </li>
                <li>
                  <span className="font-semibold">
                    {global_content.opening_hours.friday}:
                  </span>{" "}
                  8:00–13:00
                </li>
                <li>
                  <span className="font-semibold">
                    {global_content.opening_hours.saturday}:
                  </span>{" "}
                  {global_content.opening_hours.closed}
                </li>
                <li>
                  <span className="font-semibold">
                    {global_content.opening_hours.sunday}:
                  </span>{" "}
                  {global_content.opening_hours.closed}
                </li>
              </ul>
            </div>
            <hr className="mt-4 mb-6"></hr>
            <div className="w-full md:w-1/2">
              <MyMap />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function MyMap(props) {
  const Map = React.useMemo(
    () =>
      dynamic(
        () => import("@components/map"), // replace '@components/map' with your component's location
        {
          loading: () => <p>A map is loading</p>,
          ssr: false, // This line is important. It's what prevents server-side render
        }
      ),
    [
      /* list variables which should trigger a re-render here */
    ]
  )
  return <Map />
}
