import { Box, Divider } from "@chakra-ui/react";

import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import Overline from "./Features/Overline";
import ThirdHero from "./Features/Offers";
import Overline2 from "./Features/Overline2";
import Overline3 from "./Features/Overline3";
import Overline4 from "./Features/Overline4";
import LatestLiveAuctions from "./Features/LatestAuctions";

import OrbitalBackground from "./Effects/OrbitalBackground";
import StaticNFTCards from "./Card/StaticCard";
const ListingLayout = () => {
  return (
    <>
      <Box height="100vh" overflow="hidden" position="relative">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={-1}
        >
          <OrbitalBackground />
          <StaticNFTCards />
        </Box>
        <Navbar />
        <Hero />
      </Box>
      <LatestLiveAuctions />

      <Overline />
      <ThirdHero />
      <Overline2 />
      <Divider />
      <Overline3 />
      <Overline4 />
      <Footer />
    </>
  );
};

export default ListingLayout;
