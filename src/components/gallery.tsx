
import szabolcsImg from "../../public/img/dr-peresztegi-szabolcs-fogorvosi-szek.jpeg"
import assistantImg from "../../public/img/kinga-asszisztens.jpeg"
import gyorImg from "../../public/img/gyor-fogorvos.jpeg"
import gyor2Img from "../../public/img/gyor.jpeg"
import insideImg from "../../public/img/fogaszati-rendelo-kulter.jpeg"
import inside2Img from "../../public/img/fogorvosi-rendelo-varo.jpeg"
import outsideImg from "../../public/img/fogorvosi-rendelo-belter.jpeg"

import { ImageSlider } from "./image-slider";

const images = [
  { image: outsideImg, priority: false },
  { image: insideImg, priority: false },
  { image: inside2Img, priority: false },
  { image: gyorImg, priority: false },
  { image: gyor2Img, priority: false },
  { image: szabolcsImg, priority: false },
  { image: assistantImg, priority: false },
]

export default function Gallery() {
    return <div className="w-full lg:w-1/3 mx-auto">
        <ImageSlider images={images} indicators slide={false} objectFit="contain"/>
    </div>
}