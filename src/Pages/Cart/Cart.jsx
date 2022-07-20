import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Button,
  Heading,
  Text,
  Stack,
  Checkbox,
  RadioGroup,
  Radio,
  SimpleGrid,
} from "@chakra-ui/react";

import Card from "../../Components/Cart/Card";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { getData } from "../../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const [sidebarVisible, toggleSidebar] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  const data = useSelector((state) => state.appReducer.data);

  const dispatch = useDispatch();
  const urlcategory = searchParams.get("category");

  const [category, setCategory] = useState(urlcategory || "");
  const urlSortBy = searchParams.get("_sort");

  const [sortBy, setSortBy] = useState(urlSortBy || "");

  const [diet, setDeit] = useState([]);
  const foods = data.filter((food) => {
    if (diet.length === 0) {
      return food;
    } else {
      let foodData = [];
      for (let i = 0; i < diet.length; i++) {
        if (food[diet[i]]) {
          return food;
        }
      }
    }
  });
  // console.log(foods);
  //Modal

  const handleModal = (v) => {
    // BasicUsage(v);
  };
  const handleSidebarToggle = () => {
    toggleSidebar(!sidebarVisible);
  };

  const handleCheckbox = (e) => {
    const option = e.target.value;
    let newDiet = [...diet];
    if (diet.includes(option)) {
      console.log("hello");
      newDiet.splice(newDiet.indexOf(option), 1);
    } else {
      newDiet.push(option);
    }
    setDeit(newDiet);
    // console.log(diet);
  };

  useEffect(() => {
    let Category = searchParams.get("category") || category;
    if (!category) {
      Category = "";
    }

    let SortBy = searchParams.get("sortBy") || sortBy;

    let getParams;
    if (Category && SortBy) {
      getParams = {
        category: category,
        _sort: sortBy,
        _order: "desc",
      };
    } else if (Category) {
      getParams = {
        category: category,
      };
    } else if (SortBy) {
      getParams = {
        _sort: sortBy,
        _order: "desc",
      };
    } else {
      setSearchParams("");
      dispatch(getData());
    }

    setSearchParams(getParams);
    dispatch(getData(getParams));
  }, [sortBy, category]);

  return (
    <Flex backgroundColor={"rgb(254,253,246)"}>
      {/* Left container */}
      <Box
        w="75%"
        // border={"1px solid red"}
        h="800px"
        p="10px"
        mr="-10px"
      >
        <Flex
          justifyContent={"space-between"}
          // border="1px solid blue"
          p="10px"
          bgColor={"white"}
        >
          <Box>Back</Box>
          <Box>Date</Box>
          <Box>Customer Support</Box>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          p="5px 10px"
          borderTop="5px solid rgb(254,249,235)"
          borderBottom="5px solid rgb(254,249,235)"
        >
          <Box>
            <Heading as="h6" size="sm" pt="5px">
              Choose Meals
            </Heading>
          </Box>

          <Box>
            <Button bg="rgb(254,249,235)" onClick={handleSidebarToggle}>
              <Text color="blue">Sort & Filter</Text>
            </Button>
          </Box>
        </Flex>
        <Flex border="solid 1px violet">
          {/* Left Side bar */}
          {sidebarVisible && (
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
                      <Radio value="SignatureCollection">
                        Signature Collection
                      </Radio>
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
          )}
          {/* Product Rendering div */}
          <Box
            w={"100%"}
            h="80vh"
            border="1px solid green"
            overflow={"scroll"}
            p="20px"
          >
            <SimpleGrid minChildWidth="170px" spacing={30}>
              {foods.length !== 0
                ? foods.map((food) => <Card data={food} key={food.id} />)
                : null}
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
      {/* Right Side Cart Box*/}
      <Box
        backgroundColor="rgb(254,254,255)"
        w="25%"
        h="100vh"
        border="1px solid blue"
      >
        <Flex
          // border="1px solid blue"
          p="10px"
          pt="20px"
          bgColor={"white"}
          justifyContent={"space-between"}
        >
          <Flex>
            <Box>
              <Text>
                My Delivery for: <b>Date</b>
              </Text>
            </Box>
          </Flex>
          <Box>
            <Button variant={"link"}>
              <Text color="blue" textDecoration={"underline"}>
                Clear all
              </Text>
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Cart;
