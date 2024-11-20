import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Button from "../../../components/Button/Button";

// Wrapper to provide Chakra context
const renderWithChakra = (ui: React.ReactElement) => {
  return render(<ChakraProvider>{ui}</ChakraProvider>);
};

describe("Custom Button Component", () => {
  test("renders button with default props", () => {
    renderWithChakra(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
  });

  test("renders outline variant", () => {
    renderWithChakra(<Button variant="outline">Outline Button</Button>);
    const button = screen.getByRole("button", { name: "Outline Button" });
    expect(button).toHaveStyle({
      background: "transparent",
      border: "2px solid",
    });
  });

  test("renders ghost variant", () => {
    renderWithChakra(<Button variant="ghost">Ghost Button</Button>);
    const button = screen.getByRole("button", { name: "Ghost Button" });
    expect(button).toHaveStyle({
      background: "transparent",
    });
  });

  // Additional props passthrough
  test("passes additional props to underlying Chakra button", () => {
    const onClick = jest.fn();
    renderWithChakra(<Button onClick={onClick}>Clickable Button</Button>);
    const button = screen.getByRole("button", { name: "Clickable Button" });

    button.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
