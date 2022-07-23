import React, { useState } from "react";

import { Box, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export function MenuModalIngredient({ data }) {
  return (
    <>
      <Box p="10px" backgroundColor={"white"} mt="10px" h="fit-content">
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
        <Box cursor="pointer" h="fit-content">
          <Accordion>
            <AccordionItem h="fit-content">
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text
                    color="blue"
                    fontWeight={"semibold"}
                    fontSize="14px"
                    letterSpacing={"3"}
                  >
                    Show Complete Ingredients
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                <Box>
                  <Text fontSize={"12px"} letterSpacing="3" fontWeight="500">
                    Chicken Breast, Green Beans, Macaroni (Water, Brown Rice
                    Flour, Potato Starch, Tapioca Starch, Whole Egg, Egg White,
                    Xanthan Gum, Vinegar), Water, Cheddar Cheese (Cheddar Cheese
                    (Cultured Pasteurized Milk, Salt, Enzymes, Annatto), Potato
                    And Corn Starches (Anti-Caking Agents), Natamycin (Natural
                    Mold Inhibitor)), Half & Half (Milk, Cream), Almonds, Pepper
                    Jack Cheese (Monterey Jack Cheese With Jalapeno Peppers
                    [Cultured Pasteurized Milk, Jalapeno Peppers, Salt,
                    Enzymes], Potato and Corn Starches (Anti-Caking Agents),
                    Natamycin (Natural Mold Inhibitor)), Vinegar, Onion, Garlic,
                    Butternut Squash, Expeller Pressed Canola Oil, Sea Salt,
                    Rice Flour, Paprika, Cassava Flour, Sunflower Powder
                    Lecithin, Spices, Rosemary Extract (Salt, Natural Extract),
                    Baking Soda, Xanthan Gum. Contains: Egg, Milk, Tree Nuts
                    (Almonds). Manufactured in a facility that uses egg, tree
                    nuts, milk, fish, shellfish, and soy.
                  </Text>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {/* <Accordion>
          
          </Accordion> */}
        </Box>
      </Box>
    </>
  );
}
