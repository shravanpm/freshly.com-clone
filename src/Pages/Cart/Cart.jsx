import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Button,
  Heading,
  Text,
  useDisclosure,
  Stack,
  Checkbox,
  RadioGroup,
  Radio,
  SimpleGrid,
} from "@chakra-ui/react";
import Card from "../../Components/Cart/Card";
import axios from "axios";

function Cart() {
  const [sidebarVisible, toggleSidebar] = useState(false);
  const [data, setData] = useState([]);

  const handleSidebarToggle = () => {
    toggleSidebar(!sidebarVisible);
  };

  useEffect(() => {
    return axios({
      url: "http://localhost:8080/foods",
      method: "GET",
    }).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <Flex backgroundColor={"rgb(254,253,246)"}>
      {/* Left container */}
      <Box
        w="70%"
        // border={"1px solid red"}
        h="800px"
        p="10px"
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
                    <Checkbox>Gluten Free</Checkbox>
                    <Checkbox>Carb Conscious</Checkbox>
                    <Checkbox>Plant-Based</Checkbox>
                    <Checkbox>Dairy-Free</Checkbox>
                  </Stack>
                </Box>

                <Box>
                  <Heading as="h6" size="sm" pt="5px" textAlign={"left"}>
                    Categories :
                  </Heading>
                  <RadioGroup onChange={() => {}} value={""}>
                    <Stack textAlign={"left"}>
                      <Radio value="">Full Menu</Radio>
                      <Radio value="2">Signature Collection</Radio>
                      <Radio value="3">Purely Plant</Radio>
                      <Radio value="2">Freshly Fit</Radio>
                      <Radio value="3">Proteins & Sides</Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
                <Box>
                  <Heading as="h5" size="sm" pt="5px" textAlign={"left"}>
                    Sort By :
                  </Heading>
                </Box>
                <Box>
                  <Heading as="h6" size="sm" pt="5px" textAlign={"left"}>
                    Categories :
                  </Heading>
                  <RadioGroup onChange={() => {}} value={""}>
                    <Stack textAlign={"left"}>
                      <Radio value="">Default</Radio>
                      <Radio value="2">Calories</Radio>
                      <Radio value="3">Carbs</Radio>
                      <Radio value="2">Protein</Radio>
                      <Radio value="3">Total Fat</Radio>
                      <Radio value="3">Sodium</Radio>
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
            p="10px"
          >
            <SimpleGrid columns={[3, 4]} spacing={10}>
              {data.length != 0
                ? data.map((food) => <Card data={food} key={food.id} />)
                : null}
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
      {/* Right Side Cart Box*/}
      <Box
        backgroundColor="rgb(254,254,255)"
        w="30%"
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
