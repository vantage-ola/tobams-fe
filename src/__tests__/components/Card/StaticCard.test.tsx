import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // for extended matchers like 'toBeInTheDocument'
import StaticNFTCards from "../../../components/Card/StaticCard";

describe("StaticNFTCards Component", () => {
  const cards = [
    { id: 1, src: "assets/hero/hero7.png", price: "2.5 ETH" },
    { id: 2, src: "assets/hero/hero_new.png", price: "3.2 ETH" },
    { id: 3, src: "assets/hero/hero3.png", price: "2.8 ETH" },
    { id: 4, src: "assets/hero/hero4.png", price: "3.0 ETH" },
    { id: 5, src: "assets/hero/hero5.png", price: "3.5 ETH" },
    { id: 6, src: "assets/hero/hero6.png", price: "2.9 ETH" },
  ];

  it("renders each card with the correct price", () => {
    render(<StaticNFTCards />);
    cards.forEach((card) => {
      expect(screen.getByText(card.price)).toBeInTheDocument();
    });
  });

  it("renders without crashing", () => {
    const { container } = render(<StaticNFTCards />);
    expect(container).toBeInTheDocument();
  });
});
