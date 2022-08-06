import { Disclosure, Menu } from "@headlessui/react"
import Image from "next/image"
import Link from "next/link"
import "flag-icons"

import logoImg from "../../public/img/logo.jpeg"

const navigation = {
  en: [
    {
      title: "Home",
      href: "/#",
    },
    {
      title: "About us",
      href: "/about-us",
    },
    {
      title: "Dental services",
      href: "/dental-services",
    },
    {
      title: "Contact us",
      href: "/contact-us",
    },
  ],
  hu: [
    {
      title: "Home",
      href: "/#",
    },
    {
      title: "Rolunk",
      href: "/about-us",
    },
    {
      title: "Dental services",
      href: "/dental-services",
    },
    {
      title: "Contact us",
      href: "/contact-us",
    },
  ]
}

const call_to_action = {
  title: "Call us now",
  href: "tel:+36205675678",
}

export default function Navbar(props) {
  return (
    <div className="w-full">
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between p-8 lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex w-full flex-wrap items-center justify-between lg:w-auto">
                <Link href="#">
                  <a className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <Image src={logoImg} alt="Logo" height="49" width="150" />
                  </a>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="dark:focus:bg-trueGray-700 ml-auto rounded-md px-2 py-1 text-gray-500 hover:text-indigo-500 focus:bg-sky-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 lg:hidden"
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

                <Disclosure.Panel className="my-5 flex w-full flex-wrap lg:hidden">
                  <>
                    {navigation[props.locale].map((item, index) => (
                      <Link key={index} href={item.href}>
                        <a className="dark:focus:bg-trueGray-700 -ml-4 w-full rounded-md px-4 py-2 text-gray-500 hover:text-indigo-500 focus:bg-sky-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-800">
                          {item.title}
                        </a>
                      </Link>
                    ))}
                    <Link href={call_to_action.href}>
                      <a className="mt-3 w-full rounded-md bg-sky-600 px-6 py-2 text-center text-white lg:ml-5">
                        {call_to_action.title}
                      </a>
                    </Link>
                    <div className="mt-4">
                      <LanguageSwitcher altLangs={[{lang: "hu"}, {lang: "en"}, {lang: "de"}]}/>
                    </div>
                    
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="flex-1 list-none items-center justify-end pt-6 lg:flex lg:pt-0">
            {navigation[props.locale].map((menu, index) => (
              <li className="nav__item mr-3" key={index}>
                <Link href={menu.href}>
                  <a className="inline-block rounded-md px-4 py-2 text-lg font-normal text-gray-800 no-underline hover:text-indigo-500 focus:bg-sky-100 focus:text-indigo-500 focus:outline-none dark:text-gray-200 dark:focus:bg-gray-800">
                    {menu.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-nowrap justify-end content-center items-center">
          <div className="nav__item mr-5 hidden space-x-4 lg:flex">
            <Link href={call_to_action.href}>
              <a className="rounded-md bg-sky-600 px-6 py-2 text-white md:ml-5">
                {call_to_action.title}
              </a>
            </Link>
            
          </div>
          <div className="nav__item mr-3 flex flex-nowrap hidden lg:flex">
            <LanguageSwitcher altLangs={[{lang: "hu"}, {lang: "en"}, {lang: "de"}]} />
          </div>
        </div>
      </nav>
    </div>
  )
}


const LangIcon = ({ lang }) => {
  const icon_lang = lang == "en" ? "gb" : lang;

  return <span className={`fi fi-${icon_lang}`} />
}

export const LanguageSwitcher = ({ altLangs = [] }) => {
  return (
    <ul className="flex flex-nowrap">
      {altLangs.map((altLang) => {
        return (
          <li key={altLang.lang} className="px-1">
            {/* TODO: add a link here based on the language */ }
            <Link
              href="/" 
              locale={altLang.lang}
            >
              <a><LangIcon lang={altLang.lang} /></a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}