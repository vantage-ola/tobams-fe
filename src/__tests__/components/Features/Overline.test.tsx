import { render, screen } from "@testing-library/react";
import Overline from "../../../components/Features/Overline";
import "@testing-library/jest-dom";

describe("Overline Component", () => {
  it("renders without crashing", () => {
    render(<Overline />);
    expect(screen.getByText("Overline")).toBeInTheDocument();
  });

  it("displays the main heading", () => {
    render(<Overline />);
    expect(
      screen.getByText("Sapien ipsum scelerisque convallis fusce"),
    ).toBeInTheDocument();
  });

  it("displays the description text", () => {
    render(<Overline />);
    expect(
      screen.getByText(
        "Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.",
      ),
    ).toBeInTheDocument();
  });

  it("displays the 'Get started' button", () => {
    render(<Overline />);
    expect(
      screen.getByRole("button", { name: /get started/i }),
    ).toBeInTheDocument();
  });

  it("displays the 'Learn more' button", () => {
    render(<Overline />);
    expect(
      screen.getByRole("button", { name: /learn more/i }),
    ).toBeInTheDocument();
  });

  it("displays the image", () => {
    render(<Overline />);
    const image = screen.getByAltText("Hero Graphic");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "assets/overline/overline.png");
  });

  it("displays the correct layout on mobile", () => {
    render(<Overline />);
    const textContent = screen.getByText("Overline");
    const image = screen.getByAltText("Hero Graphic");
    expect(textContent).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it("displays the correct layout on desktop", () => {
    render(<Overline />);
    const textContent = screen.getByText("Overline");
    const image = screen.getByAltText("Hero Graphic");
    expect(textContent).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
