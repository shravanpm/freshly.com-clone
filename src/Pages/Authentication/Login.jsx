import React from "react";
import {
  Heading,
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <Flex
        direction={"column"}
        justify={"space-evenly"}
        align="center"
        w={"30%"}
        h={"30rem"}
        m={"10rem auto"}
        bg="whiteAlpha.900"
      >
        <Heading fontSize={"4rem"}>Log In</Heading>
        <Flex
          h={"70%"}
          w={"100%"}
          direction={"column"}
          justify={"space-evenly"}
        >
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder="you@domain.com" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input placeholder="Enter your password" />
          </FormControl>

          <Button mt={2} colorScheme="blue" type="submit">
            Submit
          </Button>
          <Flex justify={"space-around"}>
            <Text color={"blue"}>
              <Link to="#">Forgot password ?</Link>
            </Text>
            <Text color={"blue"}>
              Don't have an account? <Link to="#">Get Started</Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
