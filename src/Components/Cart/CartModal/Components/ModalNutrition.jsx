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

function ModalNutrition({ data }) {
  return (
    <>
      <Box backgroundColor={"white"} mt="10px" paddingLeft="10px">
        <Stack paddingBottom="10px" borderBottom="1px solid">
          <Text>
            <b>What is inside</b>
          </Text>
          <Text>Information per serving</Text>
          <SimpleGrid columns={2}>
            <Box
              borderRight={"1px solid"}
              borderBottom={"1px solid"}
              padding="20px"
            >
              <Text>
                <b>Calories</b>
              </Text>
              <Heading as="h4" size="lg">
                {data.calories}
              </Heading>
            </Box>
            <Box borderBottom={"1px solid"} p="20px">
              <Text>
                <b>Carbs</b>
              </Text>
              <Heading as="h4" size="lg">
                {data.carbs}
              </Heading>
            </Box>
            <Box borderRight={"1px solid"} p="20px">
              <Text>
                <b>Total Fat</b>
              </Text>
              <Heading as="h4" size="lg">
                {data.totalFat}
              </Heading>
            </Box>
            <Box p="20px">
              <Text>
                <b>Protein</b>
              </Text>
              <Heading as="h4" size="lg">
                {data.protein}
              </Heading>
            </Box>
          </SimpleGrid>
        </Stack>
        <Center color="blue" cursor="pointer" h="50px">
          <Text>Show Complete Information</Text>
        </Center>
      </Box>
    </>
  );
}

export default ModalNutrition;
