import { Box, Text, Heading, Flex, Image } from "@chakra-ui/react";
import Button from "../Button/Button";
const Overline = () => {
  return (
    <Box
      bg="nft_black"
      color="nft_white"
      px={{ base: 6, md: 12 }}
      py={{ base: 10, md: 20 }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
    >
      {/* Text Content */}
      <Box maxW={{ base: "100%", md: "50%" }}>
        <Text
          fontSize="sm"
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="wide"
          color="nft_lightgrey"
          mb={2}
        >
          Overline
        </Text>
        <Heading as="h1" size="2xl" mb={4}>
          Sapien ipsum scelerisque convallis fusce
        </Heading>
        <Text color="nft_lightgrey" fontSize="lg" mb={6}>
          Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
          pulvinar ultricies dolor feugiat aliquam commodo.
        </Text>
        <Flex gap={4}>
          <Button>Get started</Button>
          <Button variant="outline">Learn more</Button>
        </Flex>
      </Box>

      {/* Image Section */}
      <Box maxW={{ base: "100%", md: "40%" }} mt={{ base: 10, md: 0 }}>
        <Image
          src="assets/overline/overline.png" // Replace with the actual path to your image
          alt="Hero Graphic"
          loading="lazy"
        />
      </Box>
    </Box>
  );
};

export default Overline;
