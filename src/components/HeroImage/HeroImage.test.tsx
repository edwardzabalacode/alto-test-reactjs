import { render, screen } from "@testing-library/react";
import HeroImage from "./HeroImage";

describe("HeroImage component", () => {
  test("renders the correct heading", () => {
    render(<HeroImage />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
    );
  });

  test("renders the correct text", () => {
    render(<HeroImage />);
    const text = screen.getByText(
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain."
    );
    expect(text).toBeInTheDocument();
  });

  test("renders the image", () => {
    render(<HeroImage />);
    const image = screen.getByAltText("Hero");
    expect(image).toBeInTheDocument();
  });
});
