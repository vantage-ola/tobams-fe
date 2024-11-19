import {
  Box,
  Flex,
  Input,
  Link,
  Stack,
  Text,
  Icon,
  HStack,
  Center,
  Spacer,
} from "@chakra-ui/react";
import Button from "../Button/Button";
import NftIcon from "../Icon/NftIcon";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box maxW="1200px" mx="auto" overflow="hidden" p={3}>
      <Box
        as="footer"
        bg="nft_black"
        color="nft_lightgrey"
        py={8}
        position="relative"
        borderRadius="lg"
        borderWidth={"1px"}
        borderColor={"nft_darkgrey"}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          maxW="1200px"
          mx="auto"
          px={4}
          position="relative"
        >
          {/* Vertical Column Separators */}
          <Box
            display={{ base: "none", md: "block" }}
            position="absolute"
            top="0"
            bottom="0"
            left="33%"
            width="1px"
            bg="nft_darkgrey"
          />
          <Box
            display={{ base: "none", md: "block" }}
            position="absolute"
            top="0"
            bottom="0"
            left="66%"
            width="1px"
            bg="nft_darkgrey"
          />

          {/* First Column: Logo and Links */}
          <Flex
            direction="column"
            align="flex-start"
            flex="1"
            pr={{ base: 0, md: 6 }}
          >
            <HStack spacing={3} mb={4}>
              <Center>
                <NftIcon boxSize={8} />
              </Center>
              <Text fontSize="lg" fontWeight="bold" color="nft_white">
                NFT Market
              </Text>
            </HStack>
            <Spacer />
            <HStack spacing={4} fontSize="xs">
              <Link href="#" _hover={{ textDecor: "underline" }}>
                Support
              </Link>
              <Link href="#" _hover={{ textDecor: "underline" }}>
                Term of service
              </Link>
              <Link href="#" _hover={{ textDecor: "underline" }}>
                License
              </Link>
            </HStack>
          </Flex>

          {/* Second Column: Navigation and Social Links */}
          <Flex
            direction="column"
            align="center"
            flex="1"
            px={{ base: 0, md: 6 }}
          >
            <Stack spacing={2} mb={6} fontSize="sm">
              <Link
                href="#"
                fontWeight="bold"
                color="nft_white"
                _hover={{ textDecoration: "none" }}
              >
                Auctions
              </Link>
              <Link
                href="#"
                fontWeight="bold"
                color="nft_white"
                _hover={{ textDecoration: "none" }}
              >
                Roadmap
              </Link>
              <Link
                href="#"
                fontWeight="bold"
                color="nft_white"
                _hover={{ textDecoration: "none" }}
              >
                Discover
              </Link>
              <Link
                href="#"
                fontWeight="bold"
                color="nft_white"
                _hover={{ textDecoration: "none" }}
              >
                Community
              </Link>
            </Stack>
            <Button>My account</Button>
            <Spacer />
            {/* Social Links */}
            <Flex mt={6}>
              <Link href="#" mr={3}>
                <Icon as={FaFacebookF} boxSize={4} />
              </Link>
              <Link href="#" mr={3}>
                <Icon as={FaLinkedinIn} boxSize={4} />
              </Link>
              <Link href="#" mr={3}>
                <Icon as={FaTwitter} boxSize={4} />
              </Link>
              <Link href="#" mr={3}>
                <Icon as={FaInstagram} boxSize={4} />
              </Link>
              <Link href="#" mr={3}>
                <Icon as={FaGithub} boxSize={4} />
              </Link>
            </Flex>
          </Flex>

          {/* Third Column: Newsletter and Description */}
          <Flex direction="column" flex="1" align="flex-end" px={4}>
            <Text mb={4} fontSize="sm">
              Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet
              velit, sed egestas in. Id nam semper dolor tellus vulputate eget
              turpis.
            </Text>
            <Spacer />
            <Flex
              as="form"
              align="center"
              w="100%"
              maxW="300px"
              bg="nft_white"
              borderRadius="5px"
              p={1}
              boxShadow="md"
            >
              <Input
                placeholder="Newsletter"
                bg="transparent"
                border="none"
                flex="1"
                color="nft_lightgrey"
                borderRadius="5px"
                _placeholder={{ color: "nft_lightgrey" }}
                _focus={{ border: "none", boxShadow: "none" }}
                px={4}
              />
              <Button variant="ghost" color="nft_blue" fontWeight="bold" px={4}>
                Sign in
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
