import Container from "./container";

const content = {
    "title": "Welcome to Perident Dental Clinic Gyor",
    "subtitle": "Dr. Peresztegi Szabolcs's dental practice",
    "booking": "Book an appointment",
    "booking_link": "/contact-us",
    "call": "Call us",
    "call_link": "tel:+36205675678",
}

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap xl:flex-nowrap w-full">
        <div className="shrink flex flex-wrap items-center">
          <div className="px-4">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              {content.title}
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              {content.subtitle}
            </p>
          </div>

          <div className="flex flex-col items-start px-4 space-y-3 xl:space-x-4 xl:space-y-0 xl:items-center xl:flex-row">
            <a
              href={content.booking_link}
              className="px-8 py-4 text-lg font-medium text-center text-white bg-sky-600 rounded-md ">
              {content.booking}
            </a>
            <a
              href={content.call_link}
              className="px-8 py-4 text-lg font-medium text-center text-sky-600 bg-grey-600 rounded-md border-2 border-sky-600">
              {content.call}
            </a>
          </div>
        </div>
        <div className="grow flex items-center justify-center xl:p-0 lg:p-12 lg:min-w-[50%] aspect-video">
          <Video/>
        </div>
      </Container>
    </>
  );
}


function Video() {
  return (
    <div className="relative p-4 w-full h-full">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Zf2-imQ02rY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
}
