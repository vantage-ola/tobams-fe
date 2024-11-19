import {
  Box,
  Flex,
  Text,
  Image,
  AvatarGroup,
  Avatar,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

const AuctionCard = ({
  image,
  title,
  ethPrice,
  timeLeft,
  avatars,
  bids,
  likes,
}: any) => {
  return (
    <Box
      bg="nft_black"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={4}
      maxW="sm"
      textAlign="center"
      borderWidth="1px"
    >
      <Image loading="lazy" src={image} alt={title} borderRadius="md" mb={4} />
      <Text fontWeight="bold" fontSize="lg" mb={2} color="nft_white">
        {title}
      </Text>

      <Box
        bg={"#111137"}
        display={"inline-block"}
        px={2}
        py={1}
        mb={2}
        borderRadius={"3px"}
      >
        <Text color="nft_lightblue" fontSize="sm">
          {ethPrice} ETH
        </Text>
      </Box>
      <Divider />

      <Flex align="center" justify="space-between" p={3} mb={4}>
        <Flex align="center" gap={2}>
          <Icon as={BiTimeFive} color="nft_lightgrey" />
          <Text color="nft_lightgrey" fontSize="xs">
            {timeLeft}
          </Text>
        </Flex>
        <Text color="nft_lightgrey" fontSize="xs">
          {bids} people are bidding
        </Text>
      </Flex>
      <Flex justify="space-between" align="center">
        <AvatarGroup size="sm" max={3}>
          {avatars.map((avatar: string, index: number) => (
            <Avatar key={index} src={avatar} />
          ))}
        </AvatarGroup>
        <Flex align="center" gap={2}>
          <Icon as={AiOutlineHeart} color="nft_red" />
          <Text color="nft_lightgrey">{likes}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

const LatestLiveAuctions = () => {
  const auctionItems = [
    {
      image: "assets/live_auctions/Auctions.png",
      title: "Vulputate felis purus viverra morbi facilisi eget",
      ethPrice: "3.19",
      timeLeft: "2:41 min left",
      avatars: [
        "https://i.pravatar.cc/50?img=3",
        "https://i.pravatar.cc/50?img=1",
        "https://i.pravatar.cc/50?img=6",
      ],
      bids: 35,
      likes: 120,
    },
    {
      image: "assets/live_auctions/Auctions2.png",
      title: "Dui accumsan leo vestibulum ornare eu",
      ethPrice: "1.11",
      timeLeft: "22:59 min left",
      avatars: [
        "https://i.pravatar.cc/50?img=8",
        "https://i.pravatar.cc/50?img=9",
        "https://i.pravatar.cc/50?img=20",
      ],
      bids: 101,
      likes: 570,
    },
    {
      image: "assets/live_auctions/Auctions3.png",
      title: "Senectus adipiscing nascetur accumsan etiam",
      ethPrice: "1.63",
      timeLeft: "37:01 min left",
      avatars: [
        "https://i.pravatar.cc/50?img=56",
        "https://i.pravatar.cc/50?img=32",
        "https://i.pravatar.cc/50?img=53",
      ],
      bids: 12,
      likes: 98,
    },
  ];

  return (
    <Box bg="nft_black" py={8} mt={40}>
      <Text
        color="nft_white"
        fontSize="2xl"
        fontWeight="bold"
        textAlign="center"
        mb={6}
      >
        Latest live auctions
      </Text>
      <Flex justify="center" gap={6} wrap="wrap">
        {auctionItems.map((item, index) => (
          <AuctionCard key={index} {...item} />
        ))}
      </Flex>
    </Box>
  );
};

export default LatestLiveAuctions;
