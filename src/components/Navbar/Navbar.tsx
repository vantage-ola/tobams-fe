import { Flex, Box, Link, Stack, useBreakpointValue } from "@chakra-ui/react";
import NftIcon from "../Icon/NftIcon";
import Button from "../Button/Button";

const Navbar = () => {
  const isMobileOrTablet = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      px={4}
      borderBottom={21}
      color={"nft_lightgrey"}
      fontSize={"sm"}
      fontWeight={"bold"}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {!isMobileOrTablet && (
          <Flex>
            <NftIcon boxSize={8} color={"nft_darkblue"} />
          </Flex>
        )}

        {!isMobileOrTablet && (
          <Flex position="absolute" left="50%" transform="translateX(-50%)">
            <Stack direction={"row"} spacing={4}>
              <Link _hover={{ textDecoration: "none" }}>Auctions</Link>
              <Link _hover={{ textDecoration: "none" }}>Roadmap</Link>
              <Link _hover={{ textDecoration: "none" }}>Discover</Link>
              <Link _hover={{ textDecoration: "none" }}>Community</Link>
            </Stack>
          </Flex>
        )}
        {/* Centered NftIcon for mobile/tablet */}
        {isMobileOrTablet && (
          <Flex justify="center" width="100%">
            <NftIcon boxSize={10} color={"nft_darkblue"} />
          </Flex>
        )}
        {!isMobileOrTablet && (
          <Flex>
            <Stack direction={"row"} spacing={4}>
              <Button variant="outline" size="sm">
                Contact
              </Button>
              <Button size="sm">My Account</Button>
            </Stack>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
