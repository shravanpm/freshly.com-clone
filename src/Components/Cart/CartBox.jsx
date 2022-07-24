import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Stack,
  Box,
  SimpleGrid,
  HStack,
  Image,
  Text,
  Flex,
  Button,
  Heading,
} from "@chakra-ui/react";
import { addToCart, removeFromCart } from "../../Redux/AppReducer/action";

function CartBox({ cartTotal }) {
  const cartData = useSelector((state) => state.appReducer.cart);
  const dispatch = useDispatch();
  const handleAdd = (payload) => {
    dispatch(addToCart(payload));
  };
  const handleDelete = (payload) => {
    dispatch(removeFromCart(payload));
  };
  return (
    <>
      <Stack h="60vh" overflow={"scroll"}>
        <Stack paddingLeft={"20px"}>
          {cartData.map((meal, index) => (
            <Flex w="95%" key={index}>
              <Box w="30%" pt="10px">
                <Image src={meal.img} w="100%" h="50px" alt="image" />
              </Box>
              <Box w="55%" textAlign={"left"} paddingLeft="10px" pt="15px">
                <Heading size={"xs"}>{meal.title}</Heading>
              </Box>
              <Box w="15%">
                <Stack>
                  <Box m="auto">
                    <Button
                      size={"sm"}
                      color={"blue"}
                      variant="ghost"
                      onClick={() => {
                        handleAdd(meal);
                      }}
                    >
                      <AddIcon />
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      size={"sm"}
                      variant="ghost"
                      onClick={() => {
                        handleDelete(meal.id);
                      }}
                    >
                      <MinusIcon />
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Flex>
          ))}
          {cartData.length !== 0 && (
            <Box>
              <Stack mt="40px">
                <Heading as="h6" size={"sm"}>
                  Order Summary
                </Heading>
                {/* meal count and total with normal price */}
                <Flex justifyContent={"space-between"} fontSize="12px">
                  <Box>
                    <Text
                      fontWeight={"semibold"}
                    >{`${cartData.length} Meals`}</Text>
                  </Box>
                  <Box paddingRight={"20px"}>
                    <Text
                      fontWeight={"semibold"}
                    >{`$ ${cartTotal.regTotal}`}</Text>
                  </Box>
                </Flex>
                {/* meal discount */}
                <Flex justifyContent={"space-between"} fontSize="12px">
                  <Box>
                    <Text
                      fontWeight={"semibold"}
                    >{`${cartData.length} Meals Discount`}</Text>
                  </Box>
                  <Box paddingRight={"20px"}>
                    <Text fontWeight={"semibold"} color="green">{`-$ ${(
                      cartTotal.regTotal - cartTotal.currentTotal
                    ).toFixed(2)}`}</Text>
                  </Box>
                </Flex>
                {/* Sub Total */}
                <Flex justifyContent={"space-between"}>
                  <Box>
                    <Text fontWeight={"700"}>{`Subtotal`}</Text>
                  </Box>
                  <Box paddingRight={"20px"}>
                    <Text
                      fontWeight={"700"}
                    >{`$ ${cartTotal.currentTotal}`}</Text>
                  </Box>
                </Flex>
              </Stack>
            </Box>
          )}
        </Stack>
      </Stack>
    </>
  );
}

export default CartBox;
