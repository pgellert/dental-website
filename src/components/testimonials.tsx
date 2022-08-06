import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col w-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Correct dental care, I recommend to everyone!
            </p>

            <Avatar
              name="Nicolette K"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col w-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              If you come to Perident Dentistry, you will find the kind, very knowledgeable, high quality, quick care professionals.
            </p>

            <Avatar
              name="Sandor Haboczky"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col w-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              I was here for tooth extraction, completely painlessly and quickly resolved the matter.
            </p>

            <Avatar
              name="Csaba Fulop"
            />
          </div>
        </div>
        
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-orange-500 text-xl text-white uppercase">{Array.from(props.name)[0]}</div>
      
      {/** <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
      *   <Image
      *     src={props.image}
      *     width="40"
      *     height="40"
      *     alt="Avatar"
      *     layout="responsive"
      *     placeholder="blur"
      *   />
  * </div> */}
      <div>
        <div className="text-lg font-medium">{props.name}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}