import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import React, { useMemo } from "react";

interface CustomButtonProps extends ButtonProps {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const baseStyles = {
  fontFamily: "Sora, sans-serif",
  borderRadius: "12px",
  transition: "all 0.2s ease-in-out",
  _hover: {
    transform: "translateY(-2px)",
  },
};

const sizeStyles = {
  sm: { px: "20px", py: "8px", fontSize: "12px" },
  md: { px: "24px", py: "12px", fontSize: "16px" },
  lg: { px: "32px", py: "16px", fontSize: "18px" },
};

const variantStyles = {
  solid: {
    background: "linear-gradient(-45deg, #2a27c9 60%, #6666FF 100%)",
    color: "white",
    position: "relative",
    boxShadow: "0 0 10px rgba(82, 76, 255, 0.3)",
    _hover: {
      background: "linear-gradient(-45deg, #2a27c9 60%, #6666FF 100%)",
      boxShadow: "0 0 15px rgba(82, 76, 255, 0.4)",
    },
    _disabled: {
      background: "nft_darkgrey",
      opacity: 0.6,
      cursor: "not-allowed",
      boxShadow: "none",
      _hover: { transform: "none" },
    },
  },
  outline: {
    bg: "transparent",
    color: "nft_lightgrey",
    border: "2px solid",
    borderColor: "nft_lightgrey",
    _hover: {
      background: "linear-gradient(-45deg, #2a27c9 60%, #6666FF 100%)",
      color: "white",
    },
    _disabled: {
      borderColor: "nft_darkgrey",
      color: "nft_darkgrey",
      opacity: 0.6,
      cursor: "not-allowed",
      _hover: { transform: "none" },
    },
  },
  ghost: {
    bg: "transparent",
    color: "nft_darkblue",
    _hover: {
      bg: "nft_darkblue",
      color: "white",
    },
    _disabled: {
      color: "nft_darkgrey",
      opacity: 0.6,
      cursor: "not-allowed",
      _hover: { transform: "none" },
    },
  },
};

const Button: React.FC<CustomButtonProps> = ({
  children,
  variant = "solid",
  size = "md",
  ...props
}) => {
  const buttonStyles = useMemo(() => {
    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };
  }, [variant, size]);

  return (
    <ChakraButton {...props} sx={buttonStyles}>
      {children}
    </ChakraButton>
  );
};

export default Button;
