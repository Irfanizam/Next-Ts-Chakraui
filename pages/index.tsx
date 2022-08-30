import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import { Image } from "@chakra-ui/react";
import MenuItem from "../components/navItem";
import { Text } from "@chakra-ui/react";

const IndexPage = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex height={500} width={500}>
      <Box boxSize="sm">
        <Image src="/image/pwa.jpg" alt="/image/pwa.jpg" padding={5} />
      </Box>
      <Flex>
        <Stack
          spacing={6}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
          position="absolute"
          top={30}
          right={5}
        >
          <MenuItem to="/">
            <Link href={"/posts/home"}>Home</Link>
          </MenuItem>
          <MenuItem to="/">
            <Link href={"/posts/about"}>About</Link>
          </MenuItem>
          <MenuItem to="/">
            <Link href={"/posts/contact"}>Contact</Link>
          </MenuItem>
          <MenuItem to="/">
            <Link href={"/posts/gallery"}>Gallery</Link>
          </MenuItem>
          <MenuItem to="/">
            <Link href={"/posts/services"}>Services</Link>
          </MenuItem>
        </Stack>
        <Flex>
          <Stack position="absolute" top={200} left={20}>
            <Text fontSize="35px" color="black" fontWeight={700}>
              How to start your own business ! <br></br>
              Will you ready ?
            </Text>
          </Stack>
          <Stack position="absolute" top={350} left={20}>
            <Text fontSize="20px" color="black" fontWeight={400}>
              WE help individuals or Organizations to start their <br></br>
              business or start-up by giving them in depth theory <br></br>and
              practical sessions.
            </Text>
          </Stack>
        </Flex>
      </Flex>
      <Box boxSize="sm">
        <Image
          src="/image/laptop.jpg"
          alt="/image/laptop.jpg"
          position="absolute"
          top={60}
          right={5}
        />
      </Box>
      <Flex position="absolute" top={500} left={20}>
        <Button colorScheme="purple" size="lg">
          Join Now
        </Button>
      </Flex>
    </Flex>
  );
};

export default IndexPage;
