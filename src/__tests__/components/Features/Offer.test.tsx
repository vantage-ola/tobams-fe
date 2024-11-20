import { render, screen } from "@testing-library/react";
import Offers from "../../../components/Features/Offers";

import "@testing-library/jest-dom";

describe("Offers Component", () => {
  it("renders without crashing", () => {
    render(<Offers />);
    expect(
      screen.getByText("Check out the hottest Sale offers"),
    ).toBeInTheDocument();
  });

  it("displays the left column items", () => {
    render(<Offers />);
    const leftColumnItems = screen.getAllByAltText(
      "Fames habitasse risus ultricies tortor sit",
    );
    expect(leftColumnItems).toHaveLength(1);
  });

  it("displays the middle column image", () => {
    render(<Offers />);
    const middleColumnImage = screen.getByAltText("3D Hand");
    expect(middleColumnImage).toBeInTheDocument();
  });

  it("displays the right column items", () => {
    render(<Offers />);
    const rightColumnItems = screen.getAllByAltText(
      /Volutpat velit viverra volutpat|Egestas blandit est egestas non sed|Id ut consequat netus nec velit amet|Sed et nibh felis integer tellus turpis/,
    );
    expect(rightColumnItems).toHaveLength(5);
  });

  it("displays the 'Show me more' buttons", () => {
    render(<Offers />);
    const showMeMoreButtons = screen.getAllByRole("button", {
      name: /show me more/i,
    });
    expect(showMeMoreButtons).toHaveLength(2);
  });

  it("displays the 'Get started' button", () => {
    render(<Offers />);
    const getStartedButton = screen.getByRole("button", {
      name: /get started/i,
    });
    expect(getStartedButton).toBeInTheDocument();
  });
});
