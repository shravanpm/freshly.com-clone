import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Heading,
  useColorModeValue,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Image
              w={"150px"}
              h="60px"
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5fc4feea074f5b86a6c62285_freshly-logo-R.svg"
              alt="FRESHLY.com"
            />
            <Stack direction={"row"} spacing={6}>
              <Text>© Freshly Inc.</Text>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading fontSize={22}>Company</Heading>
            <Link to={"#"}>Careers</Link>
            <Link to={"#"}>Press</Link>
            <Link to={"#"}>Contact us</Link>
            <Link to={"#"}>Terms</Link>
            <Link to={"#"}>Privacy</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading fontSize={22}>Learn More</Heading>
            <Link to={"#"}>Plans & Menu</Link>
            <Link to={"#"}>Why Freshly?</Link>
            <Link to={"#"}>Gifts</Link>
            <Link to={"#"}>Refer a friend</Link>
            <Link to={"#"}>FAQs</Link>
            <Link to="#">Blogs</Link>
          </Stack>
          <Stack align={"flex-start"} justify='space-evenly' >
            {/* last div for button and icon */}
            <Heading fontSize={22}>Join Us</Heading>
            <Stack direction={"row"} spacing={6} fontSize="2rem" margin={'10rem'}>
              <Box>
                <FaTwitter />
              </Box>
              <Box>
                <FaYoutube />
              </Box>
              <Box>
                <FaInstagram />
              </Box>
              <Box>
                <FaPinterest />
              </Box>
            </Stack>
            <Box>
              <Button
                h={"50px"}
                w={"180px"}
                bg={"black"}
                color="white"
                _hover={{
                  bg: "black",
                }}
              >
                <Flex>
                  <FaApple />
                  <Text>
                    Download on the <br />
                    App Store
                  </Text>
                </Flex>
              </Button>
            </Box>
            <Box>
              <Button
                h={"50px"}
                w={"180px"}
                bg={"black"}
                color="white"
                _hover={{
                  bg: "black",
                }}
              >
                <Flex>
                  <FaGooglePlay />
                  <Text>
                    Get it on <br />
                    Google Play
                  </Text>
                </Flex>
              </Button>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
