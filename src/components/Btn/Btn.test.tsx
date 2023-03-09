import { render, fireEvent } from "@testing-library/react";
import Btn from "./Btn";

describe("Button component", () => {
  test("should render children correctly", () => {
    const { getByText } = render(<Btn>Hello</Btn>);
    expect(getByText("Hello")).toBeInTheDocument();
  });

  test("should execute onClick function when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Btn onClick={onClickMock}>Click me</Btn>);
    const button = getByText("Click me");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("shoud be disabled when is true", () => {
    const isDisabled = true;
    const fakeClick = jest.fn();

    const { getByRole } = render(
      <Btn disabled={isDisabled} onClick={fakeClick}>
        Hola
      </Btn>
    );

    const btn: any = getByRole("button");

    expect(btn.disabled).toBe(true);
    expect(btn).toHaveClass("opacity-50 cursor-not-allowed");

    fireEvent.click(btn);

    expect(fakeClick).not.toHaveBeenCalled();
  });
});
