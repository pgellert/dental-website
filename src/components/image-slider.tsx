import Image from "next/image";

import { initCarousels } from "flowbite";
import { useEffect } from "react";

export function ImageSlider({images, indicators, slide, objectFit}) {
    return (
        <div className={`${height()}`}>
            <Carousel images={images} slide={slide} indicators={indicators} objectFit={objectFit} />
        </div>
    );
}

function CarouselItem({image, priority, objectFitStyle}) {
    return <div className="w-full duration-700 ease-in-out" data-carousel-item>
        <Image className={`bg-black absolute brightness-90 block w-full ${height()} -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`} src={image} sizes="100vw" style={{ width: "100%", objectFit: objectFitStyle }} alt="Fehér fogsor - Perident Fogorvos Győr" priority={priority} />
    </div>;
}

function height() {
    return "h-72 md:h-96"
}

function Carousel({images, indicators, slide, objectFit}) {
    useEffect(() => {
      initCarousels();
    }, [images])

    return <div id="default-carousel" className="relative" data-carousel={slide ? "slide" : "static"} data-carousel-interval="5000">
        <div className={`${height()} relative overflow-hidden`}>
            {images.map((item, index) => {
                return <CarouselItem key={index} image={item.image} priority={item.priority} objectFitStyle={objectFit} />
            })}
        </div>
        <div className={`${indicators ? "" : "hidden"} absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2`}>
            {images.map((item, index) => {
                return <button key={index} type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label={`"Slide ${index}`} data-carousel-slide-to={index}></button>
            })}
        </div>
        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div>;
}