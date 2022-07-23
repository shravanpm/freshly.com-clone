import React from "react";

import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Nutrition } from "../../../Cart/CartModal/Components/Nutrition";

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
              <Text size="md" fontWeight={"semibold"}>
                Calories
              </Text>
              <Heading as="h4" size="lg">
                {data.calories}
              </Heading>
              <Box
                w="100%"
                h="4px"
                mt="5px"
                backgroundColor={"rgb(237,237,237)"}
              >
                <Box
                  w={`${(Number(data.calories) / 2000) * 100}%`}
                  h="4px"
                  mt="5px"
                  backgroundColor={"rgb(31,86,206)"}
                ></Box>
              </Box>
            </Box>
            <Box borderBottom={"1px solid"} p="20px">
              <Text fontWeight={"semibold"}>Carbs</Text>
              <Heading as="h4" size="lg">
                {data.carbs}
              </Heading>
              <Box
                w="100%"
                h="4px"
                mt="5px"
                backgroundColor={"rgb(237,237,237)"}
              >
                <Box
                  w={`${(Number(data.carbs) / 130) * 100}%`}
                  h="4px"
                  mt="5px"
                  backgroundColor={"rgb(51,187,119)"}
                ></Box>
              </Box>
            </Box>
            <Box borderRight={"1px solid"} p="20px">
              <Text fontWeight={"semibold"}>Total Fat</Text>
              <Heading as="h4" size="lg">
                {data.totalFat}
              </Heading>
              <Box
                w="100%"
                h="4px"
                mt="5px"
                backgroundColor={"rgb(237,237,237)"}
              >
                <Box
                  w={`${(Number(data.totalFat) / 65) * 100}%`}
                  h="4px"
                  mt="5px"
                  backgroundColor={"rgb(255,98,28)"}
                ></Box>
              </Box>
            </Box>
            <Box p="20px">
              <Text fontWeight={"semibold"}>Protein</Text>
              <Heading as="h4" size="lg">
                {data.protein}
              </Heading>
            </Box>
          </SimpleGrid>
        </Stack>
        <Box cursor="pointer">
          {/* <Text>Show Complete Information</Text> */}
          <Accordion>
            <AccordionItem>
              <AccordionButton>
                <Text
                  color="blue"
                  fontWeight={"semibold"}
                  fontSize="14px"
                  letterSpacing={"3"}
                >
                  Show Complete Information
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Nutrition />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </>
  );
}

export default ModalNutrition;
