import React from "react";
import { Box, Flex, Stack, Text, Icon, Image, Divider } from "@chakra-ui/react";
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
      <Divider width="80%" mx="auto" my={8} />
      <Box color="white" py={12} px={4}>
        {/* Stats Section */}
        <Flex justify="center" gap={16} mb={20} flexWrap="wrap">
          {stats.map((stat, index) => (
            <Stack key={index} align="center" spacing={2}>
              <Icon as={stat.icon} boxSize={6} color="nft_white" />
              <Text fontSize="3xl" fontWeight="bold">
                {stat.value}
              </Text>
              <Text fontSize="sm" color="nft_darkgrey">
                {stat.label}
              </Text>
            </Stack>
          ))}
        </Flex>

        {/* Call-to-Action Card */}
        <Box
          position="relative"
          maxW="1200px"
          mx="auto"
          mb={16}
          borderRadius="2xl"
          overflow="hidden"
        >
          <Image
            src={"/assets/overline/overline_section.png"}
            alt="Overline Section"
            w="full"
            h="auto"
            objectFit="cover"
          />
        </Box>
        {/* Gallery Section nfts */}
        <Box overflow="hidden" px={4}>
          <Flex
            gap={4}
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
              <Stack key={index} spacing={1} flex="0 0 auto" align="center">
                <Image
                  src={item.image}
                  alt={`NFT ${index + 1}`}
                  w="60px"
                  h="60px"
                  borderRadius="xl"
                  objectFit="cover"
                  transition="transform 0.2s"
                  _hover={{ transform: "scale(1.05)" }}
                />
                <Text fontSize="xs" color="gray.400" textAlign="center">
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
