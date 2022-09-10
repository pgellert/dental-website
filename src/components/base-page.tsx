import React from "react"

import Head from "next/head"

import Footer from "@components/footer"
import Navbar from "@components/navbar"
import Router, { useRouter } from "next/router";
import { data } from "@content/components/base-page";
import { global_data } from "@content/global";
import CookieConsent from "react-cookie-consent";

export default function BasePage(props) {
  const { locale, locales, asPath, defaultLocale } = useRouter();
  const content = data[locale];
  const global_content = global_data[locale];

  const hostname = process.env['HOST'] || process.env['NEXT_PUBLIC_HOST'];
  const ga_tracking_id = process.env['GA_TRACKING_ID'] || process.env['NEXT_PUBLIC_GA_TRACKING_ID'];

  const title = props.title ?? global_content.title
  const meta_description = props.meta_description ?? content.meta_description

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>

        {meta_description === undefined ? <></> : 
          <meta
            name="description"
            content={meta_description}
          />
        }
        {locales.map((loc) => {
                    const prefix = loc === defaultLocale ? "" : loc;
                    const path = loc === defaultLocale ? asPath.substring(1) : asPath;
                    return (
                        <link
                            key={loc}
                            rel="alternate"
                            hrefLang={loc}
                            href={`https://${hostname}/${prefix}${path}`}
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
