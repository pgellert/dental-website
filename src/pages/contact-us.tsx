import React from "react"

import { GoogleMap, LoadScript } from "@react-google-maps/api"
import Link from "next/link"

import BasePage from "@components/base-page"
import Container from "@components/container"

export default function Home() {
  return (
    <div>
      <BasePage title="Contact Us">
        <Content />
      </BasePage>
    </div>
  )
}

function Content() {
  return (
    <>
      <Container className="w-full justify-evenly md:flex">
        <article className="prose prose-stone mx-4 max-w-none pb-0 prose-a:text-blue-600 prose-img:rounded-xl md:pb-8 lg:prose-xl">
          <h1>Contact Us</h1>

          <h3>Our Address:</h3>
          <ul>
            <li>9024 GYŐR, Nagy Imre út 93.</li>
            <li>Magyarorszag</li>
            <li>
              E-mail:{" "}
              <Link href="mailto:info@perident.hu">info@perident.hu</Link>
            </li>
            <li>
              Rendelő: <Link href="tel:+36-20-567-5678">+36-20-567-5678</Link>
            </li>
            <li>
              Mobil: <Link href="tel:+36-20-314-0511">+36-20-314-0511</Link>
            </li>
          </ul>

          <h3>Opening hours</h3>
          <ul>
            <li>Hétfő 8:00–15:00</li>
            <li>Kedd 8:00–19:00</li>
            <li>Szerda 8:00–15:00</li>
            <li>Csütörtök 8:00–19:00</li>
            <li>Péntek 8:00–13:00</li>
            <li>Szombaton Zárva</li>
            <li>Vasárnap Zárva</li>
          </ul>
        </article>
        <MyMap />
      </Container>
    </>
  )
}

const containerStyle = {
  width: "400px",
  height: "400px",
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

function MyMap(props) {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  )
}