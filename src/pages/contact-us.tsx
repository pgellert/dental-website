import React, { useState } from "react"

import Link from "next/link"

import BasePage from "@components/base-page"
import { useRouter } from "next/router"
import { data } from "@content/pages/contact-us"
import { global_data } from "@content/global"
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PeridentMap from "@components/google-map"


export default function Home() {
  const { locale } = useRouter()
  const content = data[locale]
  const global_content = global_data[locale]

  return (
    <div>
      <BasePage
        title={content.meta_title}
        meta_description={content.meta_description}
      >
        <Content content={content} global_content={global_content} />
      </BasePage>
    </div>
  )
}


function Content({ content, global_content }) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  async function handleOnSubmit(e) {
    e.preventDefault();

    // Validate
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(name === "" || phone === "" || !mailformat.test(email)) {
      alert("Incorrect fields")
    }

    await fetch('/api/form-submit', {
      method: 'POST',
      body: JSON.stringify({
        "name": name,
        "email": email,
        "phone": phone,
        "message": message,
        "locale": router.locale,
      })
    });

    router.push("/thank-you")
  }


  return (
    <>
      <div className="w-full justify-evenly md:flex">
        <div className="px-8 py-4 xl:p-0">
          <div>
            <div className="text-center">
              <h1 className="mb-6 text-3xl font-bold text-sky-500">
                {content.contact_us}
              </h1>
              <p className="font-medium italic leading-tight text-gray-700">
                {content.subtitle}
              </p>
            </div>
            <FontAwesomeIcon
              icon={faUserDoctor}
              className="my-10 h-8 w-full text-center text-sky-500 drop-shadow-sm"
            />
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
                {global_content.contact.email}
              </h2>
              <p className="leading-tight text-gray-700 hover:text-gray-500">
                <Link href="mailto:perident1@gmail.com">perident1@gmail.com</Link>
              </p>
            </div>
            <hr className="my-4"></hr>
            <div>
              <h2 className="mb-1 text-lg font-semibold text-sky-500">
                {global_content.contact.phone}
              </h2>
              <p className="leading-tight text-gray-700 hover:text-gray-500">
                <Link href="tel:+36-20-567-5678">+36-20-567-5678</Link>
              </p>
            </div>
            <hr className="mt-4 mb-6"></hr>
            <div>
              <form onSubmit={handleOnSubmit}>
                <fieldset>
                  <legend className="mb-4 text-lg font-semibold text-sky-500">{global_content.contact.enquire}</legend>
                  <div className="items-baseline mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">{global_content.contact.name}</label>
                    <input onChange={(e) => setName(e.target.value)} className="placeholder:italic shadow-sm appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:border-sky-200" id="name" type="text" placeholder="Nagy Gábor"/>
                  </div>
                  <div className="items-baseline mb-5">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">{global_content.contact.email}</label>
                    <input onChange={(e) => setEmail(e.target.value)} className="placeholder:italic shadow-sm appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:border-sky-200" id="email" type="email" placeholder="gabor@gmail.com"/>
                  </div>
                  <div className="items-baseline mb-5">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">{global_content.contact.phone}</label>
                    <input onChange={(e) => setPhone(e.target.value)} className="placeholder:italic shadow-sm appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:border-sky-200" id="tel" type="tel" placeholder="+36205675678"/>
                  </div>
                  <div className="items-baseline mb-5">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">{global_content.contact.message}</label>
                    <textarea onChange={(e) => setMessage(e.target.value)} className="resize-y min-h-[100px] placeholder:italic shadow-sm appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:border-sky-200" id="message" placeholder={global_content.contact.message_hint} />
                  </div>
                  <div className="">
                    <button className="w-full shadow uppercase bg-sky-600 hover:bg-sky-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                    {global_content.contact.send}
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
            <div className="w-full items-center">
              <PeridentMap className={"w-full h-56"}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
