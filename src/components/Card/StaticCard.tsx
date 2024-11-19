import React from "react";
import { Box, Text, Center } from "@chakra-ui/react";

const StaticNFTCards: React.FC = () => {
  // Define static positions for the 6 cards around the center
  const cards = [
    { id: 1, src: "assets/hero/hero7.png", x: -550, y: -250, price: "2.5 ETH" },
    {
      id: 2,
      src: "assets/hero/hero_new.png",
      x: 260,
      y: -280,
      price: "3.2 ETH",
    },
    { id: 3, src: "assets/hero/hero3.png", x: -600, y: -80, price: "2.8 ETH" },
    { id: 4, src: "assets/hero/hero4.png", x: 380, y: 100, price: "3.0 ETH" },
    { id: 5, src: "assets/hero/hero5.png", x: -450, y: 100, price: "3.5 ETH" },
    { id: 6, src: "assets/hero/hero6.png", x: 460, y: -80, price: "2.9 ETH" },
  ];

  return (
    <Box position="absolute" width="100%" height="100%" zIndex={-1}>
      {cards.map((card) => (
        <Box
          key={card.id}
          position="absolute"
          left={`calc(50% + ${card.x}px)`} // Static x-offset
          top={`calc(50% + ${card.y}px)`} // Static y-offset
          textAlign="center"
          width="120px"
          height="140px" // Includes space for the price
        >
          {/* NFT Image */}
          <Box
            width="80px"
            height="80px"
            backgroundImage={`url(${card.src})`}
            backgroundSize="cover"
            backgroundPosition="center"
            borderRadius="10px"
            boxShadow="0 0 20px rgba(81, 76, 255, 0.6)" // Glowing effect
          />
          {/* NFT Price */}
          <Center>
            <Text fontSize="12px" color="white" mr={9} fontWeight="bold">
              {card.price}
            </Text>
          </Center>
        </Box>
      ))}
    </Box>
  );
};

export default StaticNFTCards;
