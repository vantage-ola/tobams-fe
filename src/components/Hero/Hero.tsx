import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/react";
import HeroSearchBar from "../Button/HeroSearchBar";
import NftIcon from "../Icon/NftIcon";
import { keyframes } from "@emotion/react";

import Nike from "../../assets/Nike.png";
import Adidas from "../../assets/Adidas.png";
import Ritter from "../../assets/Ritter Sport.png";
import Holland from "../../assets/New Holland.png";

const glowPulse = keyframes`
  0% { filter: drop-shadow(0 0 8px rgba(42, 39, 201, 0.5)); }
  25% { filter: drop-shadow(0 0 12px rgba(81, 76, 255, 0.6)); }
  50% { filter: drop-shadow(0 0 15px rgba(118, 222, 204, 0.5)); }
  75% { filter: drop-shadow(0 0 12px rgba(234, 108, 188, 0.6)); }
  100% { filter: drop-shadow(0 0 8px rgba(42, 39, 201, 0.5)); }
`;

const Hero = () => {
  return (
    <Box py={85}>
      <Flex direction="column" align="center" justify="center" px={4}>
        <Text
          color="nft_lightgrey"
          fontWeight="bold"
          fontSize="13px"
          mb={2}
          letterSpacing="0.05em"
        >
          NON FUNGIBLE TOKENS
        </Text>
        <Heading
          as="h1"
          fontSize={{ base: "6xl", lg: "8xl" }}
          color="white"
          mb={6}
          textAlign="center"
          lineHeight="1.1"
          position="relative"
        >
          A new NFT
          <NftIcon
            boxSize={{ base: "10px", lg: "20px" }}
            position="relative"
            mr={3}
            sx={{
              animation: `${glowPulse} 6s infinite ease-in-out`,
            }}
            transform="translateY(-2px)"
          />
          <br />
          <Box position="relative" display="inline-flex" alignItems="center">
            <NftIcon
              boxSize={{ base: "40px", lg: "60px" }}
              position="relative"
              mr={3}
              sx={{
                animation: `${glowPulse} 6s infinite ease-in-out`,
              }}
              transform="translateY(-2px)"
            />
            <Text
              as="span"
              background="linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.8) 100%)"
              backgroundClip="text"
              sx={{ WebkitBackgroundClip: "text" }}
            >
              Experience
            </Text>
          </Box>
        </Heading>
        <Text color="nft_lightgrey" mb={10} fontSize="lg" fontWeight={"bold"}>
          Discover, collect and sell
        </Text>
        <HeroSearchBar />
        <Flex mt={20} flexWrap="wrap" justify="center" gap={4}>
          <Stack direction={"row"} spacing={10}>
            <Box>
              <img src={Ritter} />
            </Box>
            <Box>
              <img src={Nike} />
            </Box>
            <Box>
              <img src={Adidas} />
            </Box>
            <Box>
              <img src={Holland} />
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Hero;
