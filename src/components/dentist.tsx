import { data } from "@content/components/dentist";
import { useRouter } from "next/router";
import Container from "./container";


export default function Dentist() {
  const { locale } = useRouter();
  const content = data[locale];

  return <Container className="flex place-content-center">
    <div className="text-center p-5 prose w-full lg:prose-xl lg:w-4/5 lg:px-12">
      {
        content.paragraphs.map((parag, index) => {
          return (<p key={index} className="leading-normal dark:text-gray-300">
            {parag}
          </p>)
        })
      }
    </div>
  </Container>
}
