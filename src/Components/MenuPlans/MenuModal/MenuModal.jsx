import React from "react";
import { ModalBody, ModalCloseButton } from "@chakra-ui/react";
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
import { useDispatch } from "react-redux";

import { MenuModalTitle } from "./Components/ModalTitle";
import { MenuModalDesc } from "./Components/ModalDesc";

import { MenuModalIngredient } from "./Components/ModalIngredients";
import ModalNutrition from "./Components/ModalNutrition";
import { addToCart } from "../../../Redux/AppReducer/action";

export const MenuModal = ({ data }) => {
  const dispatch = useDispatch();
  const handleAdd = (payload) => {
    dispatch(addToCart(payload));
  };
  return (
    <>
      <Box
        h={"150px"}
        // borderBottom="1px solid"
        paddingRight="22px"
        paddingLeft="22px"
        mb="-10px"
      >
        <Box h="40px">
          <ModalCloseButton />
        </Box>
        <Flex justifyContent={"space-between"}>
          <MenuModalTitle data={data} />
        </Flex>
      </Box>

      <ModalBody>
        <Flex
          justifyContent={"space-between"}
          h="400px"
          overflow={"scroll"}
          w="100%"
          backgroundColor="rgb(247,247,247)"
        >
          <Box w="46%" mt="15px">
            <Stack>
              <Center>
                <Image w="90%" h="180px" src={data.img_1} alt="image" />
              </Center>
              <Center>
                <Image w="90%" h="180px" src={data.img_2} alt="image" />
              </Center>
            </Stack>
          </Box>

          <Box w="52%" ml="1px" mt="15px">
            <Box>
              <MenuModalDesc data={data} />
            </Box>
            {/* Ingredients Starting */}
            <Box>
              <MenuModalIngredient data={data} mt="10px" />
            </Box>
            {/* Ingredients ends */}
            {/* nutrition */}
            <ModalNutrition data={data} mt="10px" />
            {/* Nutrition Ends */}
          </Box>
        </Flex>
      </ModalBody>
    </>
  );
};
