import React from "react";

import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../Redux/AppReducer/action";

export const CartModalTitle = ({ data }) => {
  const dispatch = useDispatch();
  const handleAdd = (payload) => {
    dispatch(addToCart(payload));
  };
  return (
    <>
      <Stack>
        <Text size="md" fontSize={"16px"} color="blackAlpha.1000" w="130%">
          <b>{data.title}</b>
        </Text>
        <Text size={"xs"} fontSize="14px" as="i" color="blackAlpha.700">
          {data.subTitle}
        </Text>
        <Flex justifyContent={"space-between"}>
          <Flex mr="100px">
            {data.highlight.split(",").map((item, index) => (
              <Button size="xs" mr="5px" key={index}>{`${item}`}</Button>
            ))}
          </Flex>
          <Spacer />
          <Box>
            <Button
              size="sm"
              colorScheme="blue"
              onClick={() => {
                handleAdd(data);
              }}
            >
              + Add
            </Button>
          </Box>
        </Flex>
      </Stack>
    </>
  );
};
