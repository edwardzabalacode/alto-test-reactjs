import { render } from "@testing-library/react";
import Logo from "./Logo";

describe("logo", () => {
  test("should be rendered", () => {
    const { getByAltText } = render(<Logo />);
    expect(getByAltText("Alto Logo")).toBeInTheDocument();
  });
});
