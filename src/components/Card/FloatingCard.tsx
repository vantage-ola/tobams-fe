import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
// not in use,
interface NFTCard {
  id: number;
  src: string;
  price: string;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

interface FloatingNFTCardsProps {
  isStatic: boolean; // Prop to control movement
}

const FloatingNFTCards: React.FC<FloatingNFTCardsProps> = ({ isStatic }) => {
  const [cards, setCards] = useState<NFTCard[]>([]);

  useEffect(() => {
    // Create random NFT cards
    const newCards = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      src: `assets/hero/hero${i + 1}.png`, // Replace with your NFT images
      price: `${(2.5 + Math.random() * 0.5).toFixed(2)} ETH`, // Random price
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 60 + Math.random() * 20, // Reduced size
      speedX: Math.random() * 0.6 - 0.3, // Random horizontal speed
      speedY: Math.random() * 0.6 - 0.3, // Random vertical speed
    }));

    // Position cards statically if movement is off
    if (isStatic) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      newCards.forEach((card, i) => {
        const angle = (i / newCards.length) * 2 * Math.PI; // Distribute evenly in a circular layout
        card.x = centerX + Math.cos(angle) * 150 - card.size / 2; // Adjust X position
        card.y = centerY + Math.sin(angle) * 150 - card.size / 2; // Adjust Y position
        card.speedX = 0;
        card.speedY = 0; // Stop movement
      });
    }

    setCards(newCards);
  }, [isStatic]);

  useEffect(() => {
    if (isStatic) return; // Skip animation if movement is disabled

    let animationFrameId: number;

    const animate = () => {
      setCards((prevCards) =>
        prevCards.map((card) => {
          let { x, y, speedX, speedY } = card;

          // Bounce off screen edges
          if (x + card.size > window.innerWidth || x < 0) speedX *= -1;
          if (y + card.size > window.innerHeight || y < 0) speedY *= -1;

          return {
            ...card,
            x: x + speedX,
            y: y + speedY,
            speedX,
            speedY,
          };
        }),
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isStatic]);

  return (
    <Box position="relative" width="100%" height="100%">
      {cards.map((card) => (
        <Box
          key={card.id}
          position="absolute"
          top={card.y}
          left={card.x}
          textAlign="center"
          width={`${card.size}px`}
          height={`${card.size + 20}px`} // Adding space for price
        >
          {/* NFT Image */}
          <Box
            width={`${card.size}px`}
            height={`${card.size}px`}
            backgroundImage={`url(${card.src})`}
            backgroundSize="cover"
            backgroundPosition="center"
            borderRadius="10px"
            boxShadow="0 0 20px rgba(81, 76, 255, 0.6)" // Glowing effect
          />
          {/* NFT Price */}
          <Text
            fontSize="12px"
            color="nft_lightgrey"
            fontWeight="bold"
            mt="5px"
          >
            {card.price}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default FloatingNFTCards;
