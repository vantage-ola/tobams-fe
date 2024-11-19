import { SearchIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  Input,
  InputRightElement,
  Box,
  Select,
  Flex,
} from "@chakra-ui/react";

const HeroSearchBar = () => {
  return (
    <Box position="relative" maxW="xl" w="full">
      <InputGroup size="lg">
        <Input
          placeholder="Items, collections and creators"
          _placeholder={{
            color: "nft_lightgrey",
            fontSize: "sm",
          }}
          _focus={{
            borderColor: "gray.600",
            boxShadow: "none",
          }}
          color={"nft_lightgrey"}
          bg="nft_white"
          pr="200px" // Make space for the dropdown
          borderRadius="13px"
          height="56px"
        />
        <InputRightElement width="auto" right="2" height="full">
          <Flex align="center">
            <Box height="30px" mx={3} />
            <Select
              variant="unstyled"
              defaultValue="Category"
              mr={2}
              cursor="pointer"
              color="gray.600"
              fontWeight="medium"
              fontSize="sm"
              width="120px"
              icon={
                <Box
                  as="span"
                  transform="rotate(90deg)"
                  fontSize="10px"
                  ml={-2}
                  mt={2}
                >
                  ›
                </Box>
              }
            >
              <option value="Category">Category</option>
              <option value="Art">Art</option>
              <option value="Music">Music</option>
              <option value="Gaming">Gaming</option>
              <option value="Photography">Photography</option>
            </Select>
            <SearchIcon
              color="nft_darkblue"
              boxSize={5}
              mr={2}
              cursor="pointer"
              _hover={{ color: "nft_lightblue" }}
            />
          </Flex>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default HeroSearchBar;
