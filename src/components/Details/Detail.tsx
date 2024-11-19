import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Avatar,
  Button,
  Stack,
  Progress,
} from "@chakra-ui/react";

const Detail = () => {
  return (
    <Box
      bg="nft_black"
      color="nft_white"
      p={8}
      borderRadius="lg"
      boxShadow="xl"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={6}
      >
        {/* Left Image Section */}
        <Box flex="1" position="relative">
          <Image
            src="assets/detail/artwork.png"
            alt="NFT Artwork"
            borderRadius="lg"
            boxShadow="lg"
          />
        </Box>

        {/* Right Content Section */}
        <Box flex="1">
          <Stack spacing={6}>
            <Heading size="lg" color="nft_white">
              Dui accumsan leo vestibulum ornare
            </Heading>
            <Text fontSize="md" color="nft_lightgrey">
              Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
              pulvinar ultricies dolor feugiat aliquam commodo.
            </Text>

            {/* Creator and Collection Info */}
            <Flex align="center" gap={4}>
              <Flex align="center" gap={2}>
                <Avatar size="sm" name="Creator" />
                <Text fontSize="sm" color="nft_lightgrey">
                  Creator{" "}
                  <Text as="span" fontWeight="bold">
                    @brook_sim
                  </Text>
                </Text>
              </Flex>
              <Flex align="center" gap={2}>
                <Avatar size="sm" name="Collection" />
                <Text fontSize="sm" color="nft_lightgrey">
                  Collection{" "}
                  <Text as="span" fontWeight="bold">
                    Afterlife
                  </Text>
                </Text>
              </Flex>
            </Flex>

            {/* Price and Bid Info */}
            <Flex align="center" justify="space-between">
              <Box>
                <Text fontSize="xl" fontWeight="bold">
                  5.25 ETH
                </Text>
                <Text fontSize="sm" color="nft_lightgrey">
                  Current price
                </Text>
              </Box>
              <Box>
                <Text fontSize="xl" fontWeight="bold">
                  22:59 min
                </Text>
                <Text fontSize="sm" color="nft_lightgrey">
                  Time left
                </Text>
              </Box>
            </Flex>

            {/* Place a Bid Button */}
            <Button
              size="lg"
              bg="nft_darkblue"
              _hover={{ bg: "nft_lightblue" }}
              color="nft_white"
              width="100%"
            >
              Place a bid
            </Button>

            {/* Bid History */}
            <Box>
              <Text fontSize="sm" color="nft_lightgrey" mb={2}>
                History of bids (12 people are bidding)
              </Text>
              <Progress
                value={65}
                size="sm"
                colorScheme="blue"
                bg="nft_darkgrey"
              />
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Detail;
