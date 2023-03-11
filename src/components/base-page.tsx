import React, { useEffect, useState } from "react"

import Head from "next/head"
import Script from 'next/script'

import Footer from "@components/footer"
import Navbar from "@components/navbar"
import Router, { useRouter } from "next/router";
import { data } from "@content/components/base-page";
import { data as testimonials } from "@content/components/testimonials";
import CookieConsent from "react-cookie-consent";
import { generateLocalUrl } from "lib/domain";
import { getCookieConsentValue } from "react-cookie-consent"


import { Inter } from '@next/font/google'
import { ScrollToTopButton } from "./scroll-up-button"

const inter = Inter({ subsets: ['latin'] })


export default function BasePage({title, meta_description, children}) {
  const { locale, locales } = useRouter();
  const content = data[locale];

  const gtm_id = process.env['NEXT_PUBLIC_GTM_ID'] || 'GTM-P8PLXT8';

  const [consentGiven, setConsentGiven] = useState(false);
  useEffect(() => {
    setConsentGiven('true' === getCookieConsentValue())
  }, []);

  return (
    <div>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content={title} />
        {meta_description === undefined ? <></> : 
          <meta property="og:description" content={meta_description} />
        }
        <meta property="og:type" content="website" />
        <meta property="og:url" content={urlForLocale(locale)} />
        <meta property="og:image" content="https://www.fogaszatgyor.hu/img/dr-peresztegi-szabolcs-fogorvosi-szek.jpeg" />
        <meta property="og:image:alt" content="An image showing Dr Peresztegi Szabolcs dentist in front of the dental chair in our dental clinic in Gyor." />
        <meta property="og:locale" content={ogLocale(locale)} />
        <title>{title}</title>

        {meta_description ? 
          <meta
            name="description"
            content={meta_description}
          />
          :
          <></>
        }
        <meta name="keywords" content={content.keywords} />
        {locales.map((loc) => {
                    return (
                        <link
                            key={loc}
                            rel="alternate"
                            hrefLang={loc}
                            href={urlForLocale(loc)}
                        />
                    )
                })}

        {/* Google tag manager */}
        {consentGiven ?
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtm_id}');`
            }}
          />
          : <></>
        }
        
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structured_data) }}
        />
      </Head>
      <main className={"mx-0 xl:mx-12 antialiased" + inter.className}>
        {/* Google tag manager */}
        {consentGiven ?
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtm_id}" height="0" width="0" style="display:none;visibility:hidden;"`,
            }}
          />
          : <></>
        }
        <Navbar/>
        {children}
        <Footer />
        <CookieConsent 
        enableDeclineButton
        onDecline={() => {Router.reload()}}
        onAccept={() => {Router.reload()}}
        buttonText={content.cookie.accept}
        declineButtonText={content.cookie.decline}
        >{content.cookie.description}</CookieConsent>
        <ScrollToTopButton />
      </main>
    </div>
  )
}

function urlForLocale(loc){
  const { asPath } = useRouter();
  return generateLocalUrl(asPath, loc)
}

function ogLocale(loc){
  if(loc == "hu"){
    return "hu_HU"
  } else if (loc == "en"){
    return "en_UK"
  } else {
    return "de_DE"
  }
}

const structured_data = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Perident - Implantológia és Esztétikai Fogászat",
  "description": "Győri fogorvosi rendelő, amelynek specialitása a fogászati implantáció, fogpótlás.",
  "telephone": "+36205675678",
  "email": "info@perident.hu",
  "address": {
      "@type": "PostalAddress",
      "addressCountry": "HU",
      "addressLocality": "Győr",
      "postalCode": "9024",
      "streetAddress": "Nagy Imre út 93."
  },
  "paymentAccepted": "Cash, Credit Card",
  "priceRange": "$$",
  "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 5.0,
      "reviewCount": testimonials['hu'].testimonials.length,
  },
  "image": "https://www.fogaszatgyor.hu/img/dr-peresztegi-szabolcs-fogorvosi-szek.jpeg",
  "review": [
      testimonials['hu'].testimonials.map((item, index) => (
        {
          "@type": "Review",
          "author": {
              "@type": "Person",
              "name": item.name,
          },
          "datePublished": item.date,
          "reviewBody": item.text,
          "reviewRating": {
              "@type": "Rating",
              "worstRating": 1,
              "bestRating": 5,
              "ratingValue": 5,
          }
      }))
  ]
}
