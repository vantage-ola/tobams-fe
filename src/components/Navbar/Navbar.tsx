import {
  Flex,
  Box,
  Button,
  Center,
  Link,
  Icon,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Box px={4} borderBottom={1}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Flex>
          {/*Left Most Side Icon */}
          <QuestionOutlineIcon />
        </Flex>

        {/*Middle Links */}
        <Flex position="absolute" left="50%" transform="translateX(-50%)">
          <Stack direction={"row"} spacing={4}>
            <Link>Auctions</Link>
            <Link>RoadMap</Link>
            <Link>Discover</Link>
            <Link>Community</Link>
          </Stack>
        </Flex>

        {/*Right Most Side Buttons */}
        <Flex>
          <Stack direction={"row"} spacing={4}>
            <Button>Contact</Button>
            <Button>My Account</Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
