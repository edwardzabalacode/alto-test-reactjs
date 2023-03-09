import { render } from "@testing-library/react";
import Headline from "./Headline";

describe("Headline component", () => {
  it("renders the correct text", () => {
    const text = "Example Headline";
    const { getByText } = render(<Headline>{text}</Headline>);
    expect(getByText(text)).toBeInTheDocument();
  });
});
