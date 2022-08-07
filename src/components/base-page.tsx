import React from "react"

import Head from "next/head"

import Footer from "@components/footer"
import Navbar from "@components/navbar"
import { useRouter } from "next/router";
import { data } from "@content/components/base-page";

export default function BasePage(props) {
  const { locale, locales, asPath, pathname, basePath, defaultLocale } = useRouter();
  const content = data[locale];

  const hostname = process.env['HOST'] || process.env['NEXT_PUBLIC_HOST'];
  console.log("Host:", hostname);

  return (
    <div>
      <Head>
        <title>Perident Dental Clinic Gyor, Hungary</title>

        <meta
          name="description"
          content={content.meta_description}
        />
        <meta
          name="description"
          content={content.meta_description}
        />
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
        <link key="x-default" rel="alternate" hrefLang="x-default" href={`https://${hostname}/${asPath.substring(1)}`} />
      </Head>
      <main className="mx-0 xl:mx-12">
        <Navbar/>
        {props.children}
        <Footer />
      </main>
    </div>
  )
}