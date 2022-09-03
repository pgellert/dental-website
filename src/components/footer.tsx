import React from "react"

import Link from "next/link"

import Container from "./container"
import { data } from "@content/components/footer";
import { global_data } from "@content/global";
import { useRouter } from "next/router";

export default function Footer(props) {
  const { locale } = useRouter();
  const content = data[locale];
  const global_content = global_data[locale];

  return (
    <>
      <Container classNameName="flex flex-wrap items-center w-full ">
        <footer className="text-center text-gray-600 lg:text-left">
          <div className="mx-6 border-t border-gray-300 py-10 text-center md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="">
                <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="cubes"
                    className="mr-3 w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
                    ></path>
                  </svg>
                  {global_content.title}
                </h6>
                <p>
                  {content.description}
                </p>
              </div>
              <div className="center">
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  {global_content.opening_hours.title}
                </h6>
                <table className="w-full table-auto items-center">
                  <tbody>
                    <OpeningsRow day={global_content.opening_hours.monday} times="8:00-15:00" />
                    <OpeningsRow day={global_content.opening_hours.tuesday} times="14:00-19:00" />
                    <OpeningsRow day={global_content.opening_hours.wednesday} times="8:00-15:00" />
                    <OpeningsRow day={global_content.opening_hours.thursday} times="14:00-19:00" />
                    <OpeningsRow day={global_content.opening_hours.friday} times="8:00-13:00" />
                    <OpeningsRow day={global_content.opening_hours.saturday} times={global_content.opening_hours.closed} />
                    <OpeningsRow day={global_content.opening_hours.sunday} times={global_content.opening_hours.closed} />
                  </tbody>
                </table>
              </div>
              <div className="">
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  {content.links.title}
                </h6>
                <UsefulLink href="/" title={content.links.home} />
                <UsefulLink href="/about-us" title={content.links.about_us} />
                <UsefulLink href="/dental-services" title={content.links.dental_services} />
                <UsefulLink href="/contact-us" title={content.links.contact_us} />
                <UsefulLink href="/privacy-policy" title={content.links.privacy_policy} last={true} />
              </div>
              <div className="">
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  {content.contact}
                </h6>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="home"
                    className="mr-4 w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                    ></path>
                  </svg>
                  9024 GYŐR, Nagy Imre út 93.
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="envelope"
                    className="mr-4 w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                    ></path>
                  </svg>
                  <Link href="mailto:info@perident.hu">info@perident.hu</Link>
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="phone"
                    className="mr-4 w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                    ></path>
                  </svg>
                  <Link href="tel:+36-20-567-5678">+36-20-567-5678</Link>
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="phone"
                    className="mr-4 w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                    ></path>
                  </svg>
                  <Link href="tel:+36-20-314-0511">+36-20-314-0511</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 text-center">
            <span>© 2022 Copyright:</span>
            <Link href="/">
              <a className="font-semibold text-gray-600">
                {" "}
                Perinvest Ker. & Szolg Kft
              </a>
            </Link>
          </div>
        </footer>
      </Container>
    </>
  )
}

function UsefulLink({ href, title, last = false }) {
  return (
    <p className={last ? "" : "mb-4"}>
      <Link href={href}>
        <a className="text-gray-600">{title}</a>
      </Link>
    </p>
  )
}

function OpeningsRow({ day, times }) {
  return (
    <tr className="mb-4">
      <th className="px-4">{day}</th>
      <td className="px-4">{times}</td>
    </tr>
  )
}
