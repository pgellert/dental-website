import markdown from "../../data/implants.md";
import ServicePage from "@components/service-page"


export default function Home() {
  return ServicePage(markdown)
}
