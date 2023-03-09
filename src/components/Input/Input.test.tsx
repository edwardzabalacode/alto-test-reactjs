import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
  const mockOnChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders with a label", () => {
    const { getByLabelText } = render(
      <Input label="Test Input" value="" onChange={mockOnChange} />
    );
    const input = getByLabelText("Test Input");
    expect(input).toBeInTheDocument();
  });

  test("renders without a label", () => {
    const { queryByLabelText } = render(
      <Input value="" onChange={mockOnChange} />
    );
    const input = queryByLabelText("Test Input");
    expect(input).toBeNull();
  });
});
