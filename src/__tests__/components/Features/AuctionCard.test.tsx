import { render, screen } from "@testing-library/react";
import LatestLiveAuctions from "../../../components/Features/LatestAuctions";
import "@testing-library/jest-dom";

describe("LatestLiveAuctions Component", () => {
  it("renders without crashing", () => {
    render(<LatestLiveAuctions />);
    expect(screen.getByText("Latest live auctions")).toBeInTheDocument();
  });

  it("displays the correct titles for each auction card", () => {
    render(<LatestLiveAuctions />);
    const titles = [
      "Vulputate felis purus viverra morbi facilisi eget",
      "Dui accumsan leo vestibulum ornare eu",
      "Senectus adipiscing nascetur accumsan etiam",
    ];
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("displays the correct eth prices for each auction card", () => {
    render(<LatestLiveAuctions />);
    const ethPrices = ["3.19 ETH", "1.11 ETH", "1.63 ETH"];
    ethPrices.forEach((ethPrice) => {
      expect(screen.getByText(ethPrice)).toBeInTheDocument();
    });
  });

  it("displays the correct time left for each auction card", () => {
    render(<LatestLiveAuctions />);
    const timeLefts = ["2:41 min left", "22:59 min left", "37:01 min left"];
    timeLefts.forEach((timeLeft) => {
      expect(screen.getByText(timeLeft)).toBeInTheDocument();
    });
  });

  it("displays the correct number of bids for each auction card", () => {
    render(<LatestLiveAuctions />);
    const bids = [
      "35 people are bidding",
      "101 people are bidding",
      "12 people are bidding",
    ];
    bids.forEach((bid) => {
      expect(screen.getByText(bid)).toBeInTheDocument();
    });
  });

  it("displays the correct number of likes for each auction card", () => {
    render(<LatestLiveAuctions />);
    const likes = ["120", "570", "98"];
    likes.forEach((like) => {
      expect(screen.getByText(like)).toBeInTheDocument();
    });
  });
});
