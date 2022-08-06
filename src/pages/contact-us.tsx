import React from "react"

import Head from "next/head"
import Navbar from "@components/navbar"
import Hero from "@components/hero"
import Benefits from "@components/benefits"
import Services from "@components/services"
import {services, benefits, team} from "@components/data"
import Team from "@components/team"
import Footer from "@components/footer"
import Testimonials from "@components/testimonials"
import { SectionTitle } from "@components/sections"
import Container from "@components/container"
import Link from "next/link"

import { GoogleMap, LoadScript } from '@react-google-maps/api';
import BasePage from "@components/base-page"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contact Us - Perident Dental Clinic Gyor</title>

        <meta
          name="description"
          content="Painless aesthetic dentistry in Győr. Implants, 3D CT, panoramic X-ray, dental prosthesis, bridges, crowns, prosthesis, denture fixation and teeth whitening."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BasePage>
        <Content/>
      </BasePage>
    </div>
  )
}


function Content() {
    return (
      <>
        <Container className="w-full md:flex justify-evenly">
          <article className="mx-4 pb-0 md:pb-8 prose lg:prose-xl prose-stone max-w-none prose-img:rounded-xl prose-a:text-blue-600">
            <h1>Contact Us</h1>
            
            <h3>Our Address:</h3>
            <ul>
                <li>9024 GYŐR, Nagy Imre út 93.</li>
                <li>Magyarorszag</li>
                <li>E-mail: <Link href="mailto:info@perident.hu">info@perident.hu</Link></li>
                <li>Rendelő: <Link href="tel:+36-20-567-5678">+36-20-567-5678</Link></li>
                <li>Mobil: <Link href="tel:+36-20-314-0511">+36-20-314-0511</Link></li>
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
          <MyMap/>
        </Container>
      </>
    );
  }

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyMap(props) {
    return (
        <LoadScript
          googleMapsApiKey="YOUR_API_KEY"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
        </LoadScript>
      );
}
  
  
