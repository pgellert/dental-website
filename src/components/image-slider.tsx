import Image from "next/image";

import { initCarousels } from "flowbite";
import { useEffect } from "react";
import { Carousel } from "flowbite-react";


export function ImageSlider({images, indicators, slide, objectFit}) {
    useEffect(() => {
      initCarousels();
    }, [])
  
    return (
      <div className={`${height()} bg-black`}>
        <Carousel slide={slide} slideInterval={3000} indicators={indicators}>
          {images.map((item, index) => {
            return <CarouselItem key={index} image={item.image} priority={item.priority} objectFitStyle={objectFit} />
          })}
        </Carousel>
      </div>
    );
  }
  
  function CarouselItem({image, priority, objectFitStyle}) {
    return <div className="duration-700 ease-in-out" data-carousel-item>
      <Image className={`absolute block w-full ${height()} -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`} src={image} sizes="100vw" style={{ width: "100%", objectFit: objectFitStyle }} alt="Fehér fogsor - Perident Fogorvos Győr" priority={priority} />
    </div>;
  }

  function height() {
    return "h-72 md:h-120"
  }