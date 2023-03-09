import { render, screen } from "@testing-library/react";
import { Post } from "../../interfaces/post.interface";
import Card from "./Card";

const mockPost: Post = {
  id: "1",
  number: 1,
  title: "Test Post",
  description: "This is a test post description.",
  createAt: "April 17, 2023",
  category: "Test",
};

describe("Card", () => {
  test("renders the post name", () => {
    render(<Card post={mockPost} />);
    const nameElement = screen.getByText(mockPost.title);
    expect(nameElement).toBeInTheDocument();
  });

  test("renders the post category", () => {
    render(<Card post={mockPost} />);
    const categoryElement = screen.getByText(`#${mockPost.category}`);
    expect(categoryElement).toBeInTheDocument();
  });

  test("renders the post createAt date", () => {
    render(<Card post={mockPost} />);
    const dateElement = screen.getByText(mockPost.createAt);
    expect(dateElement).toBeInTheDocument();
  });
});
