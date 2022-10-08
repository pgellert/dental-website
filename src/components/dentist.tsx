import { data } from "@content/components/dentist";
import { useRouter } from "next/router";


export default function Dentist() {
  const { locale } = useRouter();
  const content = data[locale];

  return (
    <>
        <div className="mt-4 flex w-full flex-col text-center">
          <div className="px-4">
            <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
              {content.title}
            </h2>

            <div className="flex w-full flex-col items-center justify-items-center place-content-center place-items-center content-center">
              <article className="py-5 px-5 prose max-w-none lg:prose-xl lg:w-3/5 lg:px-12 items-center justify-items-center place-content-center place-items-center content-center">
                {
                  content.paragraphs.map((parag) => {
                    return (<p className="text-xl leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-2xl">
                      {parag}
                    </p>)
                  })
                }
              </article>
            </div>
          </div>
        </div>
    </>
  )
}
