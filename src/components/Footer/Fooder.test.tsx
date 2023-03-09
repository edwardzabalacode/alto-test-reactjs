import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  test("renders correctly", () => {
    render(<Footer />);
    const footerElement = screen.getByText(/All rights reserved/);
    expect(footerElement).toBeInTheDocument();
  });
});
