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
  Icon,
} from "@chakra-ui/react";

import Card from "../../Components/Cart/Card";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { clearCart, getData } from "../../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "../../Components/Cart/Sidebar";
import CartBox from "../../Components/Cart/CartBox";
import { CgShoppingCart } from "react-icons/cg";

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
  const [cartTotal, setCartTotal] = useState({
    regTotal: 0,
    currentTotal: 0,
  });

  const cartData = useSelector((state) => state.appReducer.cart);
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

  const clearCartFn = () => {
    dispatch(clearCart());
  };

  const handleSidebarToggle = () => {
    toggleSidebar(!sidebarVisible);
  };

  const handlePriceChange = (p) => {
    if (p < 6) {
      setCartTotal({
        ...cartTotal,
        currentTotal: (11.79 * p).toFixed(2),
        regTotal: (11.79 * p).toFixed(2),
      });
    } else if (p < 8) {
      setCartTotal({
        ...cartTotal,
        currentTotal: (9.99 * p).toFixed(2),
        regTotal: (11.79 * p).toFixed(2),
      });
    } else if (p < 10) {
      setCartTotal({
        ...cartTotal,
        currentTotal: (9.49 * p).toFixed(2),
        regTotal: (11.79 * p).toFixed(2),
      });
    } else if (p < 12) {
      setCartTotal({
        ...cartTotal,
        currentTotal: (9.29 * p).toFixed(2),
        regTotal: (11.79 * p).toFixed(2),
      });
    } else if (p === 12) {
      setCartTotal({
        ...cartTotal,
        currentTotal: (8.99 * p).toFixed(2),
        regTotal: (11.79 * p).toFixed(2),
      });
    }
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
  };

  useEffect(() => {
    handlePriceChange(cartData.length);
  }, [cartData]);

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
        <Flex>
          {/* Left Side bar */}
          {sidebarVisible && (
            <Sidebar
              handleCheckbox={handleCheckbox}
              category={category}
              setCategory={setCategory}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          )}
          {/* Product Rendering div */}
          <Box w={"100%"} h="80vh" overflow={"scroll"} p="20px">
            <SimpleGrid minChildWidth="170px" spacing={30}>
              {foods.length !== 0
                ? foods.map((food) => <Card data={food} key={food.id} />)
                : null}
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
      {/* Right Side Cart Box*/}
      <Box backgroundColor="rgb(254,254,255)" w="25%" h="100vh">
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
          {cartData.length !== 0 && (
            <Box>
              <Button variant={"link"} onClick={clearCartFn}>
                <Text color="blue" textDecoration={"underline"}>
                  Clear all
                </Text>
              </Button>
            </Box>
          )}
        </Flex>
        <Stack mt="30px">
          {cartData.length == 0 && <Box mt="180px">Some Random Text</Box>}
          {<CartBox cartTotal={cartTotal} />}
        </Stack>
        {/* Bottom right cart button section */}
        <Box h="25vh">
          {cartData.length > 5 && (
            <Box textAlign={"left"} p="10px 0px 0px 10px">
              <Text
                backgroundColor={"green"}
                p="2px 5px"
                w="140px"
                color="white"
                fontWeight={"500"}
              >
                {`You saved $${(
                  cartTotal.regTotal - cartTotal.currentTotal
                ).toFixed(2)}`}
              </Text>
            </Box>
          )}

          {/* Subtotal */}
          <Flex justifyContent={"space-between"} paddingRight="10px" pt="10px">
            <Flex p="0px 0px 0px 10px">
              {cartData.length !== 0 && (
                <Box>
                  <Box>
                    <Text fontWeight={"700"}>{`Subtotal`}</Text>
                  </Box>
                  <Flex paddingRight={"0px"}>
                    {cartData.length > 5 && (
                      <Text
                        pl="5px"
                        as="s"
                        color={"rgb(208,208,208)"}
                        fontWeight={"700"}
                      >{`$ ${cartTotal.regTotal}`}</Text>
                    )}

                    <Text fontWeight={"700"} ml="10px">
                      {`  $ ${cartTotal.currentTotal}`}
                    </Text>
                  </Flex>
                </Box>
              )}
            </Flex>
            <Flex p="5px 12px" borderRadius={"20px"} pt="0px">
              <Icon as={CgShoppingCart} w={7} h={7} pt="0px" />
              <Text as="b" ml="2" pt="0px" color={"red"}>
                {cartData.length}
              </Text>
            </Flex>
          </Flex>
          <Box p="0px 10px 0px 10px" mt="10px">
            <Button
              w="100%"
              colorScheme={
                cartData.length < 4
                  ? `gray`
                  : `${cartData.length > 12 ? `gray` : "blue"}`
              }
              disabled={cartData.length < 4 || cartData.length > 12}
            >
              {cartData.length < 4
                ? `Add ${4 - cartData.length} To Continue`
                : `${
                    cartData.length > 12
                      ? `Remove ${cartData.length - 12} To Continue`
                      : "Next"
                  }`}
            </Button>
          </Box>
          {cartData.length > 3 && cartData.length < 12 && (
            <Box pt="5px">
              <Text as="b" color="rgb(53,116,113)">
                The more you add, the more you'll save
              </Text>
            </Box>
          )}
        </Box>
      </Box>
    </Flex>
  );
}

export default Cart;
