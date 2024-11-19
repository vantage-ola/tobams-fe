import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  Divider,
  Grid,
} from "@chakra-ui/react";
import Button from "../Button/Button";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

const Overline3 = () => {
  const auctions = [
    {
      image: "/assets/overline/overline33.png",
      title: "Faucibus habitasse at et platea massa mauris",
      price: "2.55 ETH",
      timeLeft: "22:59",
      bidders: "101 people are bidding",
    },
    {
      image: "/assets/overline/overline34.png",
      title: "Diam purus sagittis nisl erat mauris",
      price: "2.50 ETH",
      timeLeft: "22:59",
      bidders: "101 people are bidding",
    },
    {
      image: "/assets/overline/overline35.png",
      title: "Nascetur mauris viverra vel id id sem leo",
      price: "2.55 ETH",
      timeLeft: "22:59",
      bidders: "101 people are bidding",
    },
    {
      image: "/assets/overline/overline36.png",
      title: "Velit, fusce id non dui amet maecenas",
      price: "2.55 ETH",
      timeLeft: "22:59",
      bidders: "101 people are bidding",
    },
    {
      image: "/assets/overline/overline37.png",
      title: "Tellus duis neque fringilla pulvinar gravida",
      price: "2.55 ETH",
      timeLeft: "22:59",
      bidders: "101 people are bidding",
    },
    {
      image: "/assets/overline/overline38.png",
      title: "Odio lacus neque ultricies purus eget",
      price: "3.55 ETH",
      timeLeft: "22:59",
      bidders: "101 people are bidding",
    },
  ];

  return (
    <Box bg="nft_black" py={20} px={{ base: 4, md: 8 }} color="nft_white">
      {/* Section Header */}
      <Stack spacing={8} textAlign="center" mb={12}>
        <Text fontSize="sm" color="nft_lightgrey" textTransform="uppercase">
          OVERLINE
        </Text>
        <Heading fontSize={{ base: "3xl", md: "4xl" }} mb={4}>
          Most popular live auctions
        </Heading>

        {/* Category Pills */}
        <Flex justify="center" gap={4} flexWrap="wrap">
          {["Architecture", "Photography", "Games", "Music"].map((category) => (
            <Box
              key={category}
              px={4}
              py={2}
              borderRadius="md"
              border="1px"
              borderColor="nft_darkgrey"
              color="nft_lightgrey"
              _hover={{ borderColor: "nft_white", color: "nft_white" }}
              cursor="pointer"
              fontSize="sm"
            >
              {category}
            </Box>
          ))}
        </Flex>
      </Stack>

      {/* Auction Cards Grid */}
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(6, 1fr)",
        }}
        gap={6}
        mb={12}
      >
        {auctions.map((auction, index) => (
          <Box
            key={index}
            bg="nft_dark"
            borderRadius="xl"
            overflow="hidden"
            borderColor="nft_darkgrey"
          >
            <Box position="relative" height="400px">
              <Image
                src={auction.image}
                alt={auction.title}
                position="absolute"
                borderRadius="xl"
                top={0}
                left={0}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>

            <Box p={4}>
              <Text fontWeight="medium" mb={3} noOfLines={2}>
                {auction.title}
              </Text>

              <Flex justify="space-between" align="center" mb={2}>
                <Flex align="center" gap={2} color="nft_lightgrey">
                  <Icon as={BiTimeFive} />
                  <Text fontSize="sm">{auction.timeLeft}</Text>
                </Flex>
                <Box
                  bg={"#111137"}
                  display={"inline-block"}
                  px={2}
                  py={0}
                  mb={0}
                  borderRadius={"3px"}
                >
                  <Text color="nft_lightblue" fontSize="sm">
                    {auction.price}
                  </Text>
                </Box>
              </Flex>
              <Divider />
              <Flex pt={2} justify="space-between" align="center">
                <Text fontSize="xs" color="nft_lightgrey">
                  {auction.bidders}
                </Text>
                <Icon
                  as={AiOutlineHeart}
                  color="nft_lightgrey"
                  cursor="pointer"
                  _hover={{ color: "nft_white" }}
                />
              </Flex>
            </Box>
          </Box>
        ))}
      </Grid>

      {/* Show More Button */}
      <Flex justify="center">
        <Button variant="outline">Show me more</Button>
      </Flex>
    </Box>
  );
};

export default Overline3;
