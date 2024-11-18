import { SearchIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  Input,
  InputRightElement,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";

const HeroSearchBar = () => {
  return (
    <InputGroup maxW="md" size="lg" w="full">
      <Input
        // reduce placeholder fontsize
        placeholder="Items, collections and creators"
        _placeholder={{ color: "nft_lightgrey" }}
        _focus={{ borderColor: "gray.600" }}
        bg={"nft_white"}
      />
      //TODO Dropdown
      <InputRightElement transform="rotate(90deg)">
        <SearchIcon color="nft_darkblue" />
      </InputRightElement>
    </InputGroup>
  );
};

export default HeroSearchBar;
