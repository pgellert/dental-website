import { Disclosure, Menu } from "@headlessui/react"
import Image from "next/image"
import Link from "next/link"
import "flag-icons"

import logoImg from "../../public/img/logo.jpeg"
import { useRouter } from "next/router"
import { data } from "../content/components/navbar"

export default function Navbar() {
  const { locale, locales, asPath } = useRouter();
  const content = data[locale];

  return (
    <div className="w-full">
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between p-8 lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex w-full flex-wrap items-center justify-between lg:w-auto">
                <Link
                  href="/"
                  title={content.logo_alt}
                  className="flex items-center space-x-2 text-2xl font-medium text-sky-500 dark:text-gray-100">

                  <Image src={logoImg} alt={content.logo_alt} height="49" width="150" priority />

                </Link>

                <div className="justify-end flex flex-nowrap align-middle item-center lg:hidden">
                  <LanguageSwitcher locales={locales} asPath={asPath}/>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="dark:focus:bg-trueGray-700 ml-auto rounded-md px-2 py-1 text-gray-500 hover:text-sky-500 focus:bg-sky-100 focus:text-sky-500 focus:outline-none dark:text-gray-300"
                  >
                    <svg
                      className="h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>

                

                <Disclosure.Panel className="my-5 flex w-full flex-wrap lg:hidden">
                  <>
                    {content.nav_items.map((item, index) => (
                      (<Link
                        key={index}
                        href={item.href}
                        className="dark:focus:bg-trueGray-700 -ml-4 w-full rounded-md px-4 py-2 text-gray-500 hover:text-sky-500 focus:bg-sky-100 focus:text-sky-500 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-800">

                        {item.title}

                      </Link>)
                    ))}
                    <Link
                      href={content.call_to_action.href}
                      className="mt-3 w-full rounded-md bg-sky-600 px-6 py-2 text-center text-white lg:ml-5">

                      {content.call_to_action.title}

                    </Link>
                    
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="flex-1 list-none items-center justify-end pt-6 lg:flex lg:pt-0">
            {content.nav_items.map((menu, index) => (
              <li className="nav__item mr-3" key={index}>
                <Link
                  href={menu.href}
                  className="inline-block rounded-md px-4 py-2 text-lg font-normal text-gray-800 no-underline hover:text-sky-500">

                  {menu.title}

                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-nowrap justify-end content-center items-center">
          <div className="nav__item mr-5 hidden space-x-4 lg:flex">
            <Link
              href={content.call_to_action.href}
              className="rounded-md bg-sky-600 px-6 py-2 text-white md:ml-5">

              {content.call_to_action.title}

            </Link>
            
          </div>
          <div className="nav__item mr-3 flex flex-nowrap hidden lg:flex">
            <LanguageSwitcher locales={locales} asPath={asPath} />
          </div>
        </div>
      </nav>
    </div>
  );
}


const LangIcon = ({ lang, title }) => {
  const icon_lang = lang == "en" ? "gb" : lang;

  return <span className={`fi fi-${icon_lang}`} title={title} />
}

export const LanguageSwitcher = ({ locales, asPath }) => {
  return (
    <ul className="flex flex-nowrap items-center">
      {locales.map((lang) => {
        const title = `Switch to ${lang} language`;
        return (
          <li key={lang} className="mr-2 text-xl">
            {/* TODO: add a link here based on the language */ }
            <Link
              href={asPath} 
              locale={lang}
              title={title}
            >
              <LangIcon lang={lang} title={title} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}