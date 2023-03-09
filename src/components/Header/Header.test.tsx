import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Header", () => {
  test("renders the logo", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByAltText("Alto Logo")).toBeInTheDocument();
  });

  test("renders the navigation links", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText("home")).toBeInTheDocument();
    expect(screen.getByText("about")).toBeInTheDocument();
    expect(screen.getByText("blog")).toBeInTheDocument();
    expect(screen.getByText("contact")).toBeInTheDocument();
  });

  test("renders the search bar", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(
      screen.getByPlaceholderText("ENTER POST NAME...")
    ).toBeInTheDocument();
  });
});
