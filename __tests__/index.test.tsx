import { render, screen } from "@testing-library/react"

import Home from "../src/pages/index"

describe("Home", () => {
  it("renders the primary phone CTA", () => {
    render(<Home />)

    expect(
      screen.getByRole("heading", { name: "Magán Fogorvos Győrben" })
    ).toBeInTheDocument()
    expect(screen.getAllByRole("link", { name: "Hívjon minket" })[0]).toHaveAttribute(
      "href",
      "tel:+36205675678"
    )
  })
})
