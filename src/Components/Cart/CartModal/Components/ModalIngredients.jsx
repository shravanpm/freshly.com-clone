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

function CartModalIngredient({ data }) {
  return (
    <>
      <Box p="10px" backgroundColor={"white"} mt="10px">
        <Text>
          <b>Ingredients</b>
        </Text>
        <SimpleGrid columns={3} gap="10px" mt="10px">
          {[
            { img: data.ing1_Img, name: data.ing1_name },
            { img: data.ing2_Img, name: data.ing2_name },
            { img: data.ing3_Img, name: data.ing3_name },
            { img: data.ing4_Img, name: data.ing4_name },
            { img: data.ing5_Img, name: data.ing5_name },
            { img: data.ing6_Img, name: data.ing6_name },
          ].map((ing, index) => (
            <Stack key={index}>
              {ing.img && (
                <Box>
                  <Box>
                    <Image src={ing.img} alt="image" w="70px" h="70px" />
                  </Box>
                  <Box>
                    <Text fontSize={"12px"}>{ing.name}</Text>
                  </Box>
                </Box>
              )}
            </Stack>
          ))}
        </SimpleGrid>
        <Center color="blue" cursor="pointer" h="50px">
          <Text>Show Complete Ingredients</Text>
        </Center>
      </Box>
    </>
  );
}

export default CartModalIngredient;
