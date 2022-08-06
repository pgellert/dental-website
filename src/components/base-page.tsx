import React from "react"

import Navbar from "@components/navbar"
import Footer from "@components/footer"



export default function BasePage(props) {
  return (
    <div>
      <main className="xl:mx-12 mx-0">
        <Navbar/>
        {props.children}
        <Footer/>
      </main>
    </div>
  )
}
