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

export const Nutrition = () => {
  return (
    <>
      <Box>
        <Box borderBottom={"1px solid"}>
          <Heading as="h4">Nutrition Facts</Heading>
        </Box>
        <Box borderBottom={"3px solid"}>
          <Text>1 Serving Per Container</Text>
          <Flex justifyContent={"space-between"}>
            <Text fontWeight={"semibold"}>Serving Size</Text>
            <Text fontWeight={"semibold"}>1 Tray (380g)</Text>
          </Flex>
        </Box>
        <Box borderBottom={"3px solid"}>
          <Text fontWeight={"semibold"}>Amount Per Serving</Text>
          <Flex justifyContent={"space-between"}>
            <Heading as="h5" size="lg">
              Calories
            </Heading>
            <Heading as="h5" size="lg">
              560
            </Heading>
          </Flex>
        </Box>
        <Box borderBottom={"1px solid"}>
          <Flex justifyContent={"space-between"}>
            <Text fontWeight={"semibold"}></Text>
            <Text fontWeight={"semibold"}>% Daily Value*</Text>
          </Flex>
        </Box>
        <Box borderBottom={"1px solid"}>
          <Flex justifyContent={"space-between"}>
            <Text fontWeight={"semibold"}>Total Fat 27g</Text>
            <Text fontWeight={"semibold"}>35%</Text>
          </Flex>
        </Box>
        <Box borderBottom={"1px solid"} ml="10px">
          <Flex justifyContent={"space-between"}>
            <Text fontWeight={"semibold"}>Saturated Fat 10g</Text>
            <Text>50%</Text>
          </Flex>
        </Box>
        <Box borderBottom={"1px solid"}>
          <Flex justifyContent={"space-between"}>
            <Text pl="10px">Trans Fat 0g</Text>
            <Text fontWeight={"semibold"}></Text>
          </Flex>
        </Box>
        <Box borderBottom={"1px solid"}>
          <Flex justifyContent={"space-between"}>
            <Text fontWeight={"semibold"}>Cholesterol 155mg</Text>
            <Text fontWeight={"semibold"}>52%</Text>
          </Flex>
        </Box>
        <Box borderBottom={"1px solid"}>
          <Flex justifyContent={"space-between"}>
            <Text fontWeight={"semibold"}>Sodium 560mg</Text>
            <Text fontWeight={"semibold"}>24%</Text>
          </Flex>
        </Box>
        <Box borderBottom={"1px solid"}>
          <Flex justifyContent={"space-between"}>
            <Text fontWeight={"semibold"}>Total Carbohydrates 35g</Text>
            <Text fontWeight={"semibold"}>13%</Text>
          </Flex>
        </Box>
        <Box borderBottom={"1px solid"}>
          <Flex justifyContent={"space-between"}>
            <Text pl="10px">Dietary Fiber 6g</Text>
            <Text fontWeight={"semibold"}>21%</Text>
          </Flex>
        </Box>
        <Box borderBottom={"1px solid"} ml="10px">
          <Flex justifyContent={"space-between"}>
            <Text fontWeight={"semibold"}>Total Sugars 4g</Text>
            <Text fontWeight={"semibold"}></Text>
          </Flex>
        </Box>
        <Box borderBottom={"1px solid"} ml="20px">
          <Flex justifyContent={"space-between"}>
            <Text fontWeight={"semibold"}>Includes 0g Added Sugars</Text>
            <Text fontWeight={"semibold"}>0%</Text>
          </Flex>
        </Box>
        <Box borderBottom={"3px solid"}>
          <Flex justifyContent={"space-between"}>
            <Text fontWeight={"semibold"}>Protein 46g</Text>
            <Text fontWeight={"semibold"}></Text>
          </Flex>
        </Box>
        <Box borderBottom={"1px solid"}>
          <Flex justifyContent={"space-between"}>
            <Text fontWeight={"semibold"}>Vitamin D 0mcg</Text>
            <Text fontWeight={"semibold"}>0%</Text>
          </Flex>
        </Box>
        <Box borderBottom={"1px solid"}>
          <Flex justifyContent={"space-between"}>
            <Text fontWeight={"semibold"}>Calcium 390mg</Text>
            <Text fontWeight={"semibold"}>30%</Text>
          </Flex>
        </Box>
        <Box borderBottom={"1px solid"}>
          <Flex justifyContent={"space-between"}>
            <Text fontWeight={"semibold"}>Iron 4mg</Text>
            <Text fontWeight={"semibold"}>20%</Text>
          </Flex>
        </Box>
        <Box borderBottom={"1px solid"}>
          <Flex justifyContent={"space-between"}>
            <Text fontWeight={"semibold"}>Potassium 1175mg</Text>
            <Text fontWeight={"semibold"}>25%</Text>
          </Flex>
        </Box>
        <Box mt="20px">
          <Text fontWeight={"semibold"} fontSize={"12px"} letterSpacing="3">
            * The % Daily Value (DV) tells you how much a nutrient in a serving
            of food contributes to a daily diet. 2,000 calories a day is used
            for general nutrition advice.
          </Text>
        </Box>
        <Box mt="20px">
          <Text fontSize={"12px"} letterSpacing="3">
            Given our rotating menu of ingredients and meals, nutrition info may
            vary depending on slight recipe variations in our different
            kitchens. While the info and ingredients found here are meant to
            give you a general idea of a meal’s nutrition facts, please always
            check the physical label on the meal you’re about to eat for the
            most up-to-date information.
          </Text>
        </Box>
      </Box>
    </>
  );
};
