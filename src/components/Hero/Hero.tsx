import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import HeroSearchBar from "../Button/HeroSearchBar";

const Hero = () => {
  return (
    <Box py={20}>
      <Flex direction="column" align="center" justify="center" px={4}>
        <Text color="gray.400" mb={3}>
          NON FUNGIBLE TOKENS
        </Text>
        <Heading as="h1" size="4xl" color="white" mb={6}>
          A new NFT <br />{" "}
          {/* add the images in the right hero header  and work on top and bottom text styling*/}
          <Text as={"span"}>Experience</Text>
        </Heading>
        <Text color="gray.400" mb={10}>
          Discover, collect and sell
        </Text>
        <HeroSearchBar />
        <Flex mt={6}>
          <Box mr={4}>
            {/* replace the images with proper ones*/}
            <img src="/2.55_eth.png" alt="2.55 ETH" />
          </Box>
          <Box mr={4}>
            <img src="/2.55_eth.png" alt="2.55 ETH" />
          </Box>
          <Box mr={4}>
            <img src="/2.55_eth.png" alt="2.55 ETH" />
          </Box>
          <Box>
            <img src="/2.55_eth.png" alt="2.55 ETH" />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Hero;
