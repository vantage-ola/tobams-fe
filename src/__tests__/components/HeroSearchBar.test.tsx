import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ChakraProvider } from "@chakra-ui/react";
import HeroSearchBar from "../../components/Button/HeroSearchBar"; // Adjust import path as needed

// Wrapper to provide Chakra context
const renderWithChakra = (ui: React.ReactElement) => {
  return render(<ChakraProvider>{ui}</ChakraProvider>);
};

describe("HeroSearchBar Component", () => {
  // Basic rendering tests
  test("renders search input", () => {
    renderWithChakra(<HeroSearchBar />);
    const input = screen.getByPlaceholderText(
      "Items, collections and creators",
    );
    expect(input).toBeInTheDocument();
  });

  // Search input attributes
  test("search input has correct attributes", () => {
    renderWithChakra(<HeroSearchBar />);
    const input = screen.getByPlaceholderText(
      "Items, collections and creators",
    );

    expect(input).toHaveAttribute(
      "placeholder",
      "Items, collections and creators",
    );
    expect(input).toHaveStyle({
      borderRadius: "13px",
      height: "56px",
    });
  });

  // Category dropdown tests
  test("renders category dropdown", () => {
    renderWithChakra(<HeroSearchBar />);
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
  });

  test("category dropdown has correct options", () => {
    renderWithChakra(<HeroSearchBar />);
    const select = screen.getByRole("combobox");
    const options = screen.getAllByRole("option");

    const optionValues = options.map((option) => option.getAttribute("value"));
    expect(optionValues).toEqual([
      "Category",
      "Art",
      "Music",
      "Gaming",
      "Photography",
    ]);
  });
});
