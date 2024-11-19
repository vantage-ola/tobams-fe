import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Avatar,
  Stack,
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
      p={8}
      borderRadius="lg"
      boxShadow="2xl"
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="start"
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
            loading="lazy"
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

            {/* Price and Time Left */}
            <Flex
              align="center"
              justify="space-between"
              bg="nft_dark"
              p={4}
              borderRadius="md"
            >
              <Box>
                <Text fontSize="2xl" fontWeight="bold">
                  5.25 ETH
                </Text>
                <Text fontSize="sm" color="nft_lightgrey">
                  Current price
                </Text>
              </Box>
              <Box>
                <Text fontSize="2xl" fontWeight="bold">
                  <FaRegClock /> 22:59 min
                </Text>
                <Text fontSize="sm" color="nft_lightgrey">
                  Ends 01.01.2022
                </Text>
              </Box>
            </Flex>

            {/* Place a Bid Button */}
            <Button>Place a bid</Button>

            {/* History of Bids */}
            <Box>
              <Text fontSize="sm" color="nft_lightgrey" mb={2}>
                History of bids (12 people are bidding)
              </Text>
              <Box bg="nft_dark" borderRadius="md" p={4}>
                <ResponsiveContainer width="100%" height={150}>
                  <LineChart data={bidHistoryData}>
                    <CartesianGrid stroke="#2a2a2a" strokeDasharray="3 3" />
                    <XAxis dataKey="time" stroke="#888888" />
                    <YAxis stroke="#888888" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#2a2a2a",
                        borderColor: "#888888",
                        color: "#ffffff",
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
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Detail;
