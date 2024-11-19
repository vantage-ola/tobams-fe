import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface CustomButtonProps extends ButtonProps {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<CustomButtonProps> = ({
  children,
  variant = "solid",
  size = "md",
  ...props
}) => {
  const getButtonStyles = () => {
    const baseStyles = {
      fontFamily: "Sora, sans-serif",
      borderRadius: "12px",
      transition: "all 0.2s ease-in-out",
      _hover: {
        transform: "translateY(-2px)",
      },
    };

    const sizeStyles = {
      sm: {
        px: "20px",
        py: "8px",
        fontSize: "12px",
      },
      md: {
        px: "24px",
        py: "12px",
        fontSize: "16px",
      },
      lg: {
        px: "32px",
        py: "16px",
        fontSize: "18px",
      },
    };

    const variantStyles = {
      solid: {
        background: "linear-gradient(-45deg, #2a27c9 60%, #6666FF 100%) ",
        color: "white",
        position: "relative",
        boxShadow: "0 0 10px rgba(82, 76, 255, 0.3)",
        _before: {
          content: '""',
          position: "absolute",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.2), rgba(82,76,255,0.2))",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
        _hover: {
          background: "linear-gradient(-45deg, #2a27c9 60%, #6666FF 100%)",
          boxShadow: "0 0 15px rgba(82, 76, 255, 0.4)",
          _disabled: {
            background: "nft_darkgrey",
            boxShadow: "none",
          },
        },
        _active: {
          background: "linear-gradient(-45deg, #2a27c9 60%, #6666FF 100%)",
        },
        _disabled: {
          background: "nft_darkgrey",
          opacity: 0.6,
          cursor: "not-allowed",
          boxShadow: "none",
          _hover: {
            transform: "none",
          },
          _before: {
            display: "none",
          },
        },
      },
      outline: {
        bg: "transparent",
        color: "nft_lightgrey",
        border: "2px solid",
        borderColor: "nft_lightgrey",
        boxShadow: "0 0 10px rgba(82, 76, 255, 0.3)",
        _hover: {
          background: "linear-gradient(-45deg, #2a27c9 60%, #6666FF 100%)",
          color: "white",
          _disabled: {
            bg: "transparent",
            borderColor: "nft_darkgrey",
            color: "nft_darkgrey",
          },
        },
        _disabled: {
          borderColor: "nft_darkgrey",
          color: "nft_darkgrey",
          opacity: 0.6,
          cursor: "not-allowed",
          _hover: {
            transform: "none",
          },
        },
      },
      ghost: {
        bg: "transparent",
        color: "nft_darkblue",
        _hover: {
          bg: "nft_darkblue",
          color: "white",
          _disabled: {
            bg: "transparent",
            color: "nft_darkgrey",
          },
        },
        _disabled: {
          color: "nft_darkgrey",
          opacity: 0.6,
          cursor: "not-allowed",
          _hover: {
            transform: "none",
          },
        },
      },
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };
  };

  return (
    <ChakraButton {...props} sx={getButtonStyles()}>
      {children}
    </ChakraButton>
  );
};

export default Button;
