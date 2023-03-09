import { render, fireEvent } from "@testing-library/react";
import InputHtml from "./InputHtml";

describe("TextArea component", () => {
  const mockOnChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders with a label", () => {
    const { getByLabelText } = render(
      <InputHtml label="Test Text Area" value="" onChange={mockOnChange} />
    );
    const inputHtml = getByLabelText("Test Text Area");
    expect(inputHtml).toBeInTheDocument();
  });

  test("renders without a label", () => {
    const { queryByLabelText } = render(
      <InputHtml value="" onChange={mockOnChange} />
    );
    const textarea = queryByLabelText("Test Text Area");
    expect(textarea).toBeNull();
  });
});
