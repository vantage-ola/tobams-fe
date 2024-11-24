import { Box, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { FaBook } from "react-icons/fa";
import Button from "../Button/Button";

const Overline2 = () => {
  return (
    <Flex
      bg="nft_black"
      color="nft_white"
      px={{ base: 4, md: 8 }}
      py={{ base: 6, md: 12 }}
      align="center"
      justify="space-between"
      direction={{ base: "column", md: "row" }}
      gap={{ base: 8, md: 0 }}
    >
      {/* Left section */}
      <Box
        flex="1"
        display="flex"
        justifyContent={{ base: "center", md: "flex-start" }}
        alignItems="center"
      >
        <Box
          position="relative"
          width={{ base: "200px", sm: "280px", md: "400px" }}
          height="auto"
          transform="scale(1.1)"
          transition="transform 0.3s ease"
        >
          <img
            src="assets/overline/overline2.png"
            alt="Emoji and Paper Plane"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
            loading="lazy"
          />
        </Box>
      </Box>

      {/* Right section */}
      <Box
        flex="2"
        maxW="600px"
        ml={{ md: 8 }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Text fontSize="sm" fontWeight="bold" color="nft_lightgrey" mb={2}>
          OVERLINE
        </Text>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "4xl" }}
          mb={4}
          color="nft_white"
        >
          Habitant tristique aliquam in vel scelerisque
        </Heading>
        <Text fontSize="sm" color="nft_lightgrey" mb={8}>
          Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
          pulvinar ultricies dolor feugiat aliquam commodo.
        </Text>

        {/* Icon and text features */}
        <Flex
          justify={{ base: "center", md: "space-between" }}
          mb={6}
          flexWrap="wrap"
          gap={4}
        >
          <Stack direction="column" align="center" spacing={2}>
            <Icon as={FaBook} boxSize={8} color="nft_darkblue" />
            <Text fontWeight="bold" color="nft_white">
              Sollicitudin sapien
            </Text>
            <Text color="nft_lightgrey">Cursus fermentum</Text>
          </Stack>
        </Flex>

        {/* Buttons */}
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justify={{ base: "center", md: "flex-start" }}
        >
          <Button w={{ base: "100%", sm: "auto" }}>Get started</Button>
          <Button variant="outline" w={{ base: "100%", sm: "auto" }}>
            Learn more
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Overline2;
