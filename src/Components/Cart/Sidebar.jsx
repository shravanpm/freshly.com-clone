import React from "react";

import {
  Box,
  Heading,
  Stack,
  Checkbox,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";

export const Sidebar = ({
  handleCheckbox,
  category,
  setCategory,
  sortBy,
  setSortBy,
}) => {
  return (
    <>
      <Box
        w="25%"
        // border="1px solid red"
        h="80vh"
        overflow={"scroll"}
        pb="50px"
      >
        <Stack w="160px" p="5px">
          <Box>
            <Heading as="h5" size="sm" pt="5px" textAlign={"left"}>
              Filter :
            </Heading>
          </Box>
          <Box>
            <Heading as="h6" size="sm" pt="5px" textAlign={"left"}>
              Diet :
            </Heading>
            <Stack>
              <Checkbox value="GlutenFree" onChange={handleCheckbox}>
                Gluten Free
              </Checkbox>
              <Checkbox value="CarbCautious" onChange={handleCheckbox}>
                Carb Conscious
              </Checkbox>
              <Checkbox value="PlantBased" onChange={handleCheckbox}>
                Plant-Based
              </Checkbox>
              <Checkbox value="DiaryFree" onChange={handleCheckbox}>
                Dairy-Free
              </Checkbox>
            </Stack>
          </Box>

          <Box>
            <Heading as="h6" size="sm" pt="5px" textAlign={"left"}>
              Categories :
            </Heading>
            <RadioGroup onChange={setCategory} value={category}>
              <Stack textAlign={"left"}>
                <Radio value="">Full Menu</Radio>
                <Radio value="SignatureCollection">Signature Collection</Radio>
                <Radio value="PurePlant">Purely Plant</Radio>
                <Radio value="FreshlyFitted">Freshly Fit</Radio>
                <Radio value="ProteinSides">Proteins & Sides</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box>
            <Heading as="h5" size="sm" pt="5px" textAlign={"left"}>
              Sort By :
            </Heading>
          </Box>
          <Box>
            <Heading as="h6" size="xs" pt="5px" textAlign={"left"}>
              Nutritional Macros :
            </Heading>
            <RadioGroup onChange={setSortBy} value={sortBy}>
              <Stack textAlign={"left"}>
                <Radio value="">Default</Radio>
                <Radio value="calories">Calories</Radio>
                <Radio value="carbs">Carbs</Radio>
                <Radio value="protein">Protein</Radio>
                <Radio value="totalFat">Total Fat</Radio>
                <Radio value="sodium">Sodium</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
