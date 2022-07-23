import React from "react";

import { Box, Flex, Spacer, Stack, Tag, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../Redux/AppReducer/action";

export const MenuModalTitle = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Stack>
        <Text size="md" fontSize={"16px"} color="blackAlpha.1200" w="130%">
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
                p="5px 15px"
                mr="5px"
                key={index}
                fontSize="12px"
                backgroundColor={"rgb(184,255,250)"}
              >{`${item}`}</Tag>
            ))}
          </Flex>
          <Spacer />
          <Box></Box>
        </Flex>
      </Stack>
    </>
  );
};
