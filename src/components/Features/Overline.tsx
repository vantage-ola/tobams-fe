import { Box, Text, Heading, Flex, Image } from "@chakra-ui/react";
import Button from "../Button/Button";

const Overline = () => {
  return (
    <Box
      bg="nft_black"
      color="nft_white"
      px={{ base: 4, md: 12 }}
      py={{ base: 8, md: 20 }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
      gap={{ base: 8, md: 0 }} // Adds space between elements on smaller screens
    >
      {/* Text Content */}
      <Box
        maxW={{ base: "100%", md: "50%" }}
        textAlign={{ base: "center", md: "left" }}
      >
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
        <Heading as="h1" size="xl" mb={4} lineHeight="1.2">
          Sapien ipsum scelerisque convallis fusce
        </Heading>
        <Text color="nft_lightgrey" fontSize="md" mb={6}>
          Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
          pulvinar ultricies dolor feugiat aliquam commodo.
        </Text>
        <Flex
          gap={4}
          justifyContent={{ base: "center", md: "flex-start" }} // Center buttons on mobile
          flexDirection={{ base: "column", sm: "row" }} // Stack buttons vertically on smaller screens
        >
          <Button w={{ base: "100%", sm: "auto" }}>Get started</Button>
          <Button variant="outline" w={{ base: "100%", sm: "auto" }}>
            Learn more
          </Button>
        </Flex>
      </Box>

      {/* Image Section */}
      <Box
        maxW={{ base: "100%", md: "40%" }}
        mt={{ base: 8, md: 0 }}
        display="flex"
        justifyContent="center" // Center image on mobile
      >
        <Image
          src="assets/overline/overline.png"
          alt="Hero Graphic"
          loading="lazy"
          boxSize={{ base: "80%", sm: "100%" }} // Scales image better for small screens
        />
      </Box>
    </Box>
  );
};

export default Overline;
