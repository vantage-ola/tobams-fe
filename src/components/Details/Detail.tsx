import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Avatar,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaRegClock } from "react-icons/fa";
import Button from "../Button/Button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample bid history data
const bidHistoryData = [
  { time: "12:00", bid: 1.5 },
  { time: "12:30", bid: 2.2 },
  { time: "13:00", bid: 3.0 },
  { time: "13:30", bid: 4.0 },
  { time: "14:00", bid: 5.0 },
  { time: "14:30", bid: 5.25 },
];

const Detail = () => {
  return (
    <Box
      bg="nft_black"
      color="nft_white"
      p={{ base: 4, md: 6, lg: 8 }}
      borderRadius="lg"
      boxShadow="2xl"
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        align={{ base: "center", lg: "start" }}
        justify="space-between"
        gap={{ base: 4, md: 6 }}
      >
        {/* Left Image Section */}
        <Box
          flex={{ base: "1", lg: "1" }}
          width={{ base: "100%", lg: "auto" }}
          mb={{ base: 4, lg: 0 }}
        >
          <Image
            src="assets/detail/artwork.png"
            alt="NFT Artwork"
            borderRadius="lg"
            boxShadow="lg"
            loading="lazy"
            width="100%"
            height="auto"
            objectFit="cover"
          />
        </Box>

        {/* Right Content Section */}
        <Box flex={{ base: "1", lg: "1" }} width={{ base: "100%", lg: "auto" }}>
          <VStack spacing={{ base: 4, md: 6 }} align="stretch" width="100%">
            <Heading
              size={{ base: "md", md: "lg" }}
              color="nft_white"
              textAlign={{ base: "center", lg: "left" }}
            >
              Dui accumsan leo vestibulum ornare
            </Heading>

            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="nft_lightgrey"
              textAlign={{ base: "center", lg: "left" }}
            >
              Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
              pulvinar ultricies dolor feugiat aliquam commodo.
            </Text>

            {/* Creator and Collection Info */}
            <Flex
              direction={{ base: "column", md: "row" }}
              align="center"
              justify="center"
              gap={{ base: 2, md: 4 }}
              width="100%"
            >
              <HStack spacing={2} align="center">
                <Avatar src={"https://i.pravatar.cc/50?img=3"} size="sm" />
                <Text fontSize="sm" color="nft_lightgrey">
                  Creator{" "}
                  <Text as="span" fontWeight="bold">
                    @brook_sim
                  </Text>
                </Text>
              </HStack>
              <HStack
                spacing={2}
                align="center"
                mr={{ base: 3, md: 0 }}
                mt={{ base: 2, md: 0 }}
              >
                <Avatar size="sm" name="Collection" />
                <Text fontSize="sm" color="nft_lightgrey">
                  Collection{" "}
                  <Text as="span" fontWeight="bold">
                    Afterlife
                  </Text>
                </Text>
              </HStack>
            </Flex>

            {/* Price and Time Left */}
            <Flex
              direction={{ base: "column", md: "row" }}
              align="center"
              justify="space-between"
              bg="nft_dark"
              p={{ base: 2, md: 4 }}
              borderRadius="md"
              width="100%"
              gap={{ base: 2, md: 0 }}
            >
              <VStack spacing={1} align={{ base: "center", md: "start" }}>
                <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
                  5.25 ETH
                </Text>
                <Text fontSize="sm" color="nft_lightgrey">
                  Current price
                </Text>
              </VStack>
              <VStack spacing={1} align={{ base: "center", md: "end" }}>
                <HStack align="center" spacing={1}>
                  <FaRegClock />
                  <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
                    22:59 min
                  </Text>
                </HStack>
                <Text fontSize="sm" color="nft_lightgrey">
                  Ends 01.01.2022
                </Text>
              </VStack>
            </Flex>

            {/* Place a Bid Button */}
            <Button width="100%">Place a bid</Button>

            {/* History of Bids */}
            <Box width="100%">
              <Text
                fontSize="sm"
                color="nft_lightgrey"
                mb={2}
                textAlign={{ base: "center", lg: "left" }}
              >
                History of bids (12 people are bidding)
              </Text>
              <Box bg="nft_dark" borderRadius="md" p={4}>
                <ResponsiveContainer width="100%" height={150}>
                  <LineChart data={bidHistoryData}>
                    <CartesianGrid stroke="#2a2a2a" strokeDasharray="3 3" />
                    <XAxis
                      dataKey="time"
                      stroke="#888888"
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis stroke="#888888" tick={{ fontSize: 10 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#2a2a2a",
                        borderColor: "#888888",
                        color: "#ffffff",
                        fontSize: "10px",
                      }}
                      cursor={{ stroke: "#888888", strokeWidth: 1 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="bid"
                      stroke="#4f9efc"
                      strokeWidth={2}
                      dot={{ fill: "#4f9efc", r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Detail;
