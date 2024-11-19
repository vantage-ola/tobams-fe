import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  VStack,
  HStack,
  Icon,
  Divider,
  Center,
  Spacer,
} from "@chakra-ui/react";
import Button from "../Button/Button";
import { AiOutlineHeart } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

const Offers = () => {
  const leftColumnItems = [
    {
      image: "assets/offer/offer3.png",
      title: "Fames habitasse risus ultricies tortor sit",
      time: "22:59",
      price: "3.55 ETH",
      bidders: "101 people are bidding",
    },
  ];

  const rightColumnItems = [
    {
      image: "assets/nfts/nft18.png",
      title: "Volutpat velit viverra volutpat",
      time: "22:59",
      price: "1.25 ETH",
      bidders: "101 people are bidding",
    },
    {
      image: "assets/nfts/nft9.png",
      title: "Egestas blandit est egestas non sed",
      time: "20:15",
      price: "1.25 ETH",
      bidders: "95 people are bidding",
    },
    {
      image: "assets/nfts/nft2.png",
      title: "Id ut consequat netus nec velit amet",
      time: "18:40",
      price: "1.25 ETH",
      bidders: "80 people are bidding",
    },
    {
      image: "assets/nfts/nft17.png",
      title: "Sed et nibh felis integer tellus turpis",
      time: "15:00",
      price: "7.25 ETH",
      bidders: "20 people are bidding",
    },
    {
      image: "assets/nfts/nft3.png",
      title: "Sed et nibh felis integer tellus turpis",
      time: "15:00",
      price: "9.25 ETH",
      bidders: "120 people are bidding",
    },
  ];

  return (
    <Box bg="nft_black" px={{ base: 6, md: 12 }} py={{ base: 10, md: 20 }}>
      <Flex
        justifyContent="space-between"
        flexDirection={{ base: "column", lg: "row" }}
      >
        {/* Left Column */}
        <VStack
          spacing={6}
          bg="nft_dark"
          borderRadius="lg"
          p={6}
          w={{ base: "100%", lg: "30%" }}
          align="stretch"
          borderWidth={"1px"}
          borderColor={"nft_darkgrey"}
        >
          <Heading size="md" color="nft_white">
            Check out the hottest Sale offers
          </Heading>
          <VStack spacing={4} w="100%">
            {leftColumnItems.map((item, index) => (
              <Box key={index} borderRadius="lg" p={4} w="100%">
                <Image
                  src={item.image}
                  alt={item.title}
                  borderRadius="md"
                  mb={4}
                  loading="lazy"
                />
                <Text color="nft_white">{item.title}</Text>
                <Flex justify="space-between" mt={2} color="nft_lightgrey">
                  <HStack>
                    <Icon as={BiTimeFive} />
                    <Text fontSize="sm">{item.time}</Text>
                  </HStack>
                  <Box
                    bg={"#111137"}
                    display={"inline-block"}
                    px={2}
                    py={1}
                    mb={2}
                    borderRadius={"3px"}
                  >
                    <Text color="nft_lightblue" fontSize="sm">
                      {item.price}
                    </Text>
                  </Box>
                </Flex>
                <Divider />
                <Flex justify="space-between" align="center">
                  <Text color="nft_lightgrey" fontSize="xs" mt={2}>
                    {item.bidders}
                  </Text>
                  <Center>
                    <Icon as={AiOutlineHeart} color="nft_white" />
                  </Center>
                </Flex>
              </Box>
            ))}
          </VStack>
          <Spacer /> {/* Ensures button is always pushed to the bottom */}
          <Button
            w="full"
            bg="nft_darkgrey"
            color="nft_white"
            _hover={{ bg: "nft_lightgrey" }}
          >
            Show me more
          </Button>
        </VStack>

        {/* Middle Column */}
        <VStack
          spacing={6}
          bg="nft_dark"
          borderRadius="lg"
          p={6}
          w={{ base: "100%", lg: "30%" }}
          align="center"
          borderWidth={"1px"}
          borderColor={"nft_darkgrey"}
        >
          <Image
            borderRadius="xl"
            src="assets/offer/offer.png"
            alt="3D Hand"
            loading="lazy"
          />
          <Heading size="md" color="nft_white" textAlign="center">
            Get started creating & selling your NFTs
          </Heading>
          <Text color="nft_lightgrey" textAlign="center" fontSize="sm">
            Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat.
            Mi est sit.
          </Text>
          <Button
            bg="nft_lightblue"
            color="nft_white"
            _hover={{ bg: "nft_darkblue" }}
          >
            Get started
          </Button>
        </VStack>

        {/* Right Column */}
        <VStack
          spacing={6}
          bg="nft_dark"
          borderRadius="lg"
          p={6}
          w={{ base: "100%", lg: "30%" }}
          align="stretch"
          borderWidth={"1px"}
          borderColor={"nft_darkgrey"}
        >
          <Heading size="md" color="nft_white" mb={4}>
            Top NFT at a lower price
          </Heading>
          <VStack spacing={4} flex="1" w="100%" justify="space-between">
            {rightColumnItems.map((item, index) => (
              <Flex
                key={index}
                align="center"
                bg="nft_black"
                borderRadius="md"
                p={4}
                borderWidth="1px"
                borderColor="nft_darkgrey"
                w="100%"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  borderRadius="md"
                  boxSize="50px"
                  mr={4}
                  loading="lazy"
                />
                <Box flex="1">
                  <Text color="nft_white" fontSize="sm" noOfLines={1}>
                    {item.title}
                  </Text>
                  <Flex justify="space-between" mt={2} color="nft_lightgrey">
                    <HStack>
                      <Icon as={BiTimeFive} />
                      <Text fontSize="xs">{item.time}</Text>
                    </HStack>
                    <Box
                      bg={"#111137"}
                      display={"inline-block"}
                      px={2}
                      py={0}
                      borderRadius={"3px"}
                    >
                      <Text color="nft_lightblue" fontSize="xs">
                        {item.price}
                      </Text>
                    </Box>
                  </Flex>
                  <Text color="nft_lightgrey" fontSize="xs">
                    {item.bidders}
                  </Text>
                </Box>
                <Icon as={AiOutlineHeart} color="nft_white" ml={4} />
              </Flex>
            ))}
          </VStack>
          <Spacer />
          <Button
            w="full"
            bg="nft_darkgrey"
            color="nft_white"
            _hover={{ bg: "nft_lightgrey" }}
            mt={4} // Adds spacing from the last card
            alignSelf="flex-end" // Ensures alignment at the bottom
          >
            Show me more
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Offers;
