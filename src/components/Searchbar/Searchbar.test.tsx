import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Searchbar from "./Searchbar";

describe("Searchbar component", () => {
  test("renders input field and search button", async () => {
    render(<Searchbar />);

    const inputField = screen.getByPlaceholderText("ENTER POST NAME...");
    expect(inputField).toBeInTheDocument();

    const searchButton = screen.getByRole("button", { name: "Search" });
    expect(searchButton).toBeInTheDocument();
  });
});
