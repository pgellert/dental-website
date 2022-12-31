import React from "react"

import Head from "next/head"

import Footer from "@components/footer"
import Navbar from "@components/navbar"
import Router, { useRouter } from "next/router";
import { data } from "@content/components/base-page";
import { global_data } from "@content/global";
import CookieConsent from "react-cookie-consent";

export default function BasePage(props) {
  const { locale, locales } = useRouter();
  const content = data[locale];
  const global_content = global_data[locale];

  const ga_tracking_id = process.env['GA_TRACKING_ID'] || process.env['NEXT_PUBLIC_GA_TRACKING_ID'];

  const title = props.title ?? global_content.title
  const meta_description = props.meta_description ?? content.meta_description

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

        {meta_description === undefined ? <></> : 
          <meta
            name="description"
            content={meta_description}
          />
        }
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
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${ga_tracking_id}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', '${ga_tracking_id}');`
          }}
        ></script>
      </Head>
      <main className="mx-0 xl:mx-12">
        <Navbar/>
        {props.children}
        <Footer />
        <CookieConsent 
        enableDeclineButton
        onDecline={() => {Router.reload()}}
        onAccept={() => {Router.reload()}}
        buttonText={content.cookie.accept}
        declineButtonText={content.cookie.decline}
        >{content.cookie.description}</CookieConsent>
      </main>
    </div>
  )
}

function urlForLocale(loc){
  const { asPath, defaultLocale } = useRouter();
  const hostname = process.env['NEXT_PUBLIC_HOST'] || process.env['HOST'];
  
  const prefix = loc === defaultLocale ? "" : loc;
  const path = loc === defaultLocale ? asPath.substring(1) : asPath;
  var result = `https://${hostname}/${prefix}${path}`

  // Remove / suffix from the path:
  result = result.replace(/\/+$/, "")
  return result
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
