import { faUncharted } from "@fortawesome/free-brands-svg-icons"
import {
  faTooth,
  faTeethOpen,
  faClipboardCheck,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { EmojiHappyIcon } from "@heroicons/react/outline"

import szabolcsImg from "../../public/img/dr-peresztegi-szabolcs-fogorvosi-szek.jpeg"
import doctorImg from "../../public/img/DR-Peresztegi-Szabolcs.jpeg"
import assistantImg from "../../public/img/kinga-asszisztens.jpeg"

export const services = {
  title: "Dental Services",
  desc: "Some of the expert dental treatments offered at the Perident Dental Clinic:",
  image: doctorImg,
  image_alt: "DR Peresztegi Szabolcs",
  image_subtitle: "DR Peresztegi Szabolcs",
  bullets: [
    {
      title: "Implants",
      desc: "Here you can add the next benefit point.",
      icon: <FontAwesomeIcon icon={faTooth} />,
      link: "/dental-services/implants",
    },
    {
      title: "Prothesis",
      desc: "This will be your last bullet point in this section.",
      icon: <FontAwesomeIcon icon={faTeethOpen} />,
      link: "/dental-services/prothesis",
    },
    {
      title: "General checkup",
      desc: "This will be your last bullet point in this section.",
      icon: <FontAwesomeIcon icon={faClipboardCheck} />,
    },
    {
      title: "3D CT",
      desc: "This will be your last bullet point in this section.",
      icon: <FontAwesomeIcon icon={faUncharted} />,
    },
    {
      title: "Panoramic X-Ray",
      desc: "This will be your last bullet point in this section.",
      icon: <FontAwesomeIcon icon={faUserDoctor} />,
    },
    {
      title: "Tooth whitening",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <EmojiHappyIcon />,
    },
  ],
}
export const benefits = {
  title: "Why us?",
  desc: "Here are a few reasons why you should choose us for your dental procedure:",
  bullets: [
    {
      title: "Guarantee",
      desc: "We provide an all-round guarantee on our work",
    },
    {
      title: "Best materials",
      desc: "We use the best materials to provide top quality results",
    },
    {
      title: "Friendly atmosphere",
      desc: "We provide caring dentistry in a comfortable and friendly environment",
    },
    {
      title: "Reasonable prices",
      desc: "Our pricing is designed to be affordable",
    },
    {
      title: "Painless procedure",
      desc: "Our dental procedures is pain-free",
    },
    {
      title: "Short waiting time",
      desc: "Call us, and we can typically give you an appointment within a week",
    },
    {
      title: "Fast, precise work",
      desc: "We won't keep you waiting on your new beautiful smile :)",
    },
  ],
}

export const team = {
  title: "Meet the team",
  members: [
    {
      image: szabolcsImg,
      name: "Dr. Peresztegi Szabolcs",
      title: "Dentist",
      linkedin: "https://www.linkedin.com/in/szabolcs-peresztegi-nagy-b16a3a23",
    },
    {
      image: assistantImg,
      name: "Mehrmann Kinga",
      title: "Assistant",
    },
  ],
}
