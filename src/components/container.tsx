import React from "react"

export default function Container(props) {
  return (
    <div
      className={`container mx-auto p-8 xl:px-0 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  )
}