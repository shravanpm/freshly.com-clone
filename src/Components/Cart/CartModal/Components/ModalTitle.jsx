import React from "react";

import { Box, Button, Flex, Spacer, Stack, Tag, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../Redux/AppReducer/action";

export const CartModalTitle = ({ data }) => {
  const dispatch = useDispatch();
  const handleAdd = (payload) => {
    const payloadData = {
      id: payload.id,
      title: payload.title,
      img: payload.img_2,
    };

    dispatch(addToCart(payloadData));
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
              <Tag
                size="xs"
                p="0px 10px"
                mr="5px"
                key={index}
                fontSize="12px"
              >{`${item}`}</Tag>
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
