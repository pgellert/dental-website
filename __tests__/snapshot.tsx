import { render, screen } from "@testing-library/react"

import Home from "../src/pages/index"

it("renders homepage content", () => {
  render(<Home />)

  expect(screen.getByRole("heading", { name: "Fogászati kezeléseink" })).toBeInTheDocument()
})
