import markdown from "../data/about-us.md";
import ServicePage from "@components/service-page"


export default function Home() {
  return ServicePage(markdown)
}
