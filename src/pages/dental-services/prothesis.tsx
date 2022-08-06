import markdown from "../../data/prothesis.md";
import ServicePage from "@components/service-page"


export default function Home() {
  return ServicePage(markdown)
}
