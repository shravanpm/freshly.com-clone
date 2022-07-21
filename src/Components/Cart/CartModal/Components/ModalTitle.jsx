import React from "react";

import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

export const CartModalTitle = ({ data }) => {
  return (
    <>
      <Stack>
        <Text size="md" fontSize={"16px"} color="blackAlpha.1000">
          <b>{data.title}</b>
        </Text>
        <Text size={"xs"} fontSize="14px" as="i" color="blackAlpha.700">
          {data.subTitle}
        </Text>
        <Flex justifyContent={"space-between"}>
          <Flex w="90%" mr="100px">
            {data.highlight.split(",").map((item, index) => (
              <Button size="xs" mr="5px" key={index}>{`${item}`}</Button>
            ))}
          </Flex>
          <Box>
            <Button size="sm" colorScheme="blue">
              + Add
            </Button>
          </Box>
        </Flex>
      </Stack>
    </>
  );
};
