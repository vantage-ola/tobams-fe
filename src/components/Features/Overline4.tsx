import {
  Box,
  Flex,
  Stack,
  Text,
  Icon,
  Image,
  Divider,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  FaUser,
  FaPaintBrush,
  FaUserFriends,
  FaEthereum,
} from "react-icons/fa";

const Overline4 = () => {
  const stats = [
    { icon: FaUser, value: "300k", label: "Users Active" },
    { icon: FaPaintBrush, value: "52.5k", label: "Artworks" },
    { icon: FaUserFriends, value: "17.5k", label: "Artists" },
    { icon: FaEthereum, value: "35.58", label: "ETH Spent" },
  ];

  const galleryItems = [
    { price: "1.51 ETH", image: "/assets/nfts/nft.png" },
    { price: "3.25 ETH", image: "/assets/nfts/nft8.png" },
    { price: "3.82 ETH", image: "/assets/nfts/nft2.png" },
    { price: "2.77 ETH", image: "/assets/nfts/nft3.png" },
    { price: "1.61 ETH", image: "/assets/nfts/nft4.png" },
    { price: "2.29 ETH", image: "/assets/nfts/nft5.png" },
    { price: "2.03 ETH", image: "/assets/nfts/nft6.png" },
    { price: "3.69 ETH", image: "/assets/nfts/nft7.png" },
    { price: "3.69 ETH", image: "/assets/nfts/nft8.png" },
    { price: "3.69 ETH", image: "/assets/nfts/nft9.png" },
    { price: "3.69 ETH", image: "/assets/nfts/nft10.png" },
    { price: "3.69 ETH", image: "/assets/nfts/nft11.png" },
    { price: "3.69 ETH", image: "/assets/nfts/nft12.png" },
    { price: "3.69 ETH", image: "/assets/nfts/nft13.png" },
    { price: "3.69 ETH", image: "/assets/nfts/nft14.png" },
    { price: "3.69 ETH", image: "/assets/nfts/nft15.png" },
    { price: "3.69 ETH", image: "/assets/nfts/nft6.png" },
    { price: "3.69 ETH", image: "/assets/nfts/nft11.png" },
  ];

  return (
    <Box>
      <Divider
        width={{ base: "95%", md: "80%" }}
        mx="auto"
        my={{ base: 4, md: 8 }}
        borderColor="gray.700"
      />
      <Box color="white" py={{ base: 6, md: 12 }} px={{ base: 2, md: 4 }}>
        {/* Stats Section */}
        <Wrap
          justify="center"
          spacing={{ base: 4, md: 16 }}
          mb={{ base: 10, md: 20 }}
        >
          {stats.map((stat, index) => (
            <WrapItem key={index}>
              <VStack
                align="center"
                spacing={{ base: 1, md: 2 }}
                textAlign="center"
              >
                <Icon
                  as={stat.icon}
                  boxSize={{ base: 5, md: 6 }}
                  color="nft_white"
                />
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
                  {stat.value}
                </Text>
                <Text fontSize={{ base: "xs", md: "sm" }} color="nft_darkgrey">
                  {stat.label}
                </Text>
              </VStack>
            </WrapItem>
          ))}
        </Wrap>

        {/* Call-to-Action Card */}
        <Box
          position="relative"
          maxW={{ base: "100%", md: "1200px" }}
          mx="auto"
          mb={{ base: 8, md: 16 }}
          borderRadius="2xl"
          overflow="hidden"
          px={{ base: 2, md: 0 }}
        >
          <Image
            src={"/assets/overline/overline_section.png"}
            alt="Overline Section"
            w="full"
            h="auto"
            objectFit="cover"
            loading="lazy"
          />
        </Box>

        {/* Gallery Section nfts */}
        <Box overflow="hidden" px={{ base: 1, md: 4 }}>
          <Flex
            gap={{ base: 2, md: 4 }}
            overflowX="auto"
            pb={6}
            sx={{
              "&::-webkit-scrollbar": {
                height: "4px",
              },
              "&::-webkit-scrollbar-track": {
                bg: "gray.900",
                borderRadius: "full",
              },
              "&::-webkit-scrollbar-thumb": {
                bg: "gray.700",
                borderRadius: "full",
              },
            }}
          >
            {galleryItems.map((item, index) => (
              <Stack
                key={index}
                spacing={1}
                flex="0 0 auto"
                align="center"
                w={{ base: "50px", md: "60px" }}
              >
                <Image
                  src={item.image}
                  alt={`NFT ${index + 1}`}
                  w={{ base: "50px", md: "60px" }}
                  h={{ base: "50px", md: "60px" }}
                  borderRadius="xl"
                  objectFit="cover"
                  transition="transform 0.2s"
                  _hover={{ transform: "scale(1.05)" }}
                  loading="lazy"
                />
                <Text
                  fontSize={{ base: "2xs", md: "xs" }}
                  color="gray.400"
                  textAlign="center"
                  isTruncated
                >
                  {item.price}
                </Text>
              </Stack>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Overline4;
