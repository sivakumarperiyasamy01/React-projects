import Contact from "../components/contact.js";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("all test cases", () => {
  it("test contact us loading", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  t("test submit button present", () => {
    render(<Contact />);

    const button = screen.getByText("submit");

    expect(button).toBeInTheDocument();
  });

  it("get placeholder name", () => {
    render(<Contact />);

    const name = screen.getByPlaceholderText("name");

    // assertion
    expect(name).toBeInTheDocument();
  });

  it("test 2 text boxes loaded", () => {
    render(<Contact />);
    // quarry
    const inputboxes = screen.getAllByRole("textbox");

    // assertion

    expect(inputboxes.length).toBe(2);
  });
});
