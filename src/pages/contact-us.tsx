import React from "react"

import Link from "next/link"

import BasePage from "@components/base-page"
import Container from "@components/container"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { data } from "@content/pages/contact-us"
import { global_data } from "@content/global"

export default function Home() {
  return (
    <div>
      <BasePage>
        <Content />
      </BasePage>
    </div>
  )
}

function Content() {
  const { locale } = useRouter();
  const content = data[locale];
  const global_content = global_data[locale];
  return (
    <>
      <Container className="w-full justify-evenly md:flex">
        <article className="prose prose-stone mx-4 max-w-none pb-0 prose-a:text-blue-600 prose-img:rounded-xl md:pb-8 lg:prose-xl">
          <h1>{content.contact_us}</h1>

          <h3>{content.our_address}:</h3>
          <ul>
            <li>9024 GYŐR, Nagy Imre út 93.</li>
            <li>{content.hungary}</li>
            <li>
              E-mail: <Link href="mailto:info@perident.hu">info@perident.hu</Link>
            </li>
            <li>
              {content.praxis}: <Link href="tel:+36-20-567-5678">+36-20-567-5678</Link>
            </li>
            <li>
              Mobil: <Link href="tel:+36-20-314-0511">+36-20-314-0511</Link>
            </li>
          </ul>

          <h3>{global_content.opening_hours.title}</h3>
          <ul>
            <li>{global_content.opening_hours.monday}: 8:00–15:00</li>
            <li>{global_content.opening_hours.tuesday}: 8:00–19:00</li>
            <li>{global_content.opening_hours.wednesday}: 8:00–15:00</li>
            <li>{global_content.opening_hours.thursday}: 8:00–19:00</li>
            <li>{global_content.opening_hours.friday}: 8:00–13:00</li>
            <li>{global_content.opening_hours.saturday}: {global_content.opening_hours.closed}</li>
            <li>{global_content.opening_hours.sunday}: {global_content.opening_hours.closed}</li>
          </ul>
        </article>
        <div className="m-8 w-7/8 md:w-1/2">
          <MyMap />
        </div>
      </Container>
    </>
  )
}

function MyMap(props) {
  const Map = React.useMemo(() => dynamic(
    () => import('@components/map'), // replace '@components/map' with your component's location
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false // This line is important. It's what prevents server-side render
    }
  ), [/* list variables which should trigger a re-render here */])
  return <Map />
}
