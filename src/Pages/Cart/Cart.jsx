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
  CircularProgress,
  Select,
} from "@chakra-ui/react";

import Card from "../../Components/Cart/Card";
import axios from "axios";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { clearCart, getData } from "../../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "../../Components/Cart/Sidebar";
import CartBox from "../../Components/Cart/CartBox";
import { CgShoppingCart } from "react-icons/cg";
import CustomerSupport from "../../Components/CustomerSupport";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { getDate, postDate } from "../../Redux/DateSelectorReducer/action";

function Cart() {
  const [sidebarVisible, toggleSidebar] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  const data = useSelector((state) => state.appReducer.data);
  const loading = useSelector((state) => state.appReducer.isLoading);

  const navigate = useNavigate();

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

  const token = useSelector((state) => state.authReducer.token);

  const dates = [
    { date: " Monday, Jul 25", id: 1 },
    { date: " Tuesday, Jul 26", id: 2 },
    { date: " Wednesday, Jul 27", id: 3 },
    { date: " Thursday, Jul 28", id: 4 },
    { date: " Friday, Jul 29", id: 5 },
    { date: " Saturday, Jul 30", id: 6 },
    { date: " Sunday, Jul 31", id: 7 },
    { date: " Monday, Aug 1", id: 8 },
    { date: " Tuesday, Aug 2", id: 9 },
    { date: " Wednesday, Aug 3", id: 10 },
    { date: " Thursday, Aug 4", id: 11 },
    { date: " Friday, Aug 5", id: 12 },
    { date: " Saturday, Aug 6", id: 13 },
    { date: " Sunday, Aug 7", id: 14 },
    { date: " Monday, Aug 8", id: 15 },
    { date: " Tuesday, Aug 9", id: 16 },
  ];
  const date =
    useSelector((state) => state.dateReducer.selectedDate) || dates[0].date;

  const cartData = useSelector((state) => state.appReducer.cart);
  const foods = data.filter((food) => {
    if (diet.length === 0) {
      return food;
    } else {
      for (let i = 0; i < diet.length; i++) {
        if (food[diet[i]]) {
          return food;
        }
      }
    }
  });

  const clearCartFn = () => {
    //clear all products in cart
    dispatch(clearCart());
  };

  const handleGoToPrePage = () => {
    navigate("/deliverydate");
  };

  const handleSidebarToggle = () => {
    // sidebar will be show and hide function
    toggleSidebar(!sidebarVisible);
  };

  const handlePriceChange = (p) => {
    //  Product total will be calculated w.r.t number of products in cart
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

  const handleSelectedDeliveryDate = (e) => {
    // setSelectedDeliveryDate(e.target.value);
    dispatch(postDate(e.target.value));
  };
  const handleGoToCheckOut = () => {
    navigate("/checkout");
  };

  const handleCheckbox = (e) => {
    // filtering w.r.t diet and it uses redux
    const option = e.target.value;
    let newDiet = [...diet];
    if (diet.includes(option)) {
      newDiet.splice(newDiet.indexOf(option), 1);
    } else {
      newDiet.push(option);
    }
    setDeit(newDiet);
  };

  useEffect(() => {
    //when cartData changes it triggers, calculating sum again
    handlePriceChange(cartData.length);
  }, [cartData]);

  useEffect(() => {
    //filtering done by routing and json server

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

      <Box w="75%" p="10px" mr="-10px">
        {/* --------------------------------------- Navbar Starts--------------------------------- */}
        <Flex justifyContent={"space-between"} p="10px" bgColor={"white"}>
          <Flex cursor={"pointer"} onClick={handleGoToPrePage}>
            <ChevronLeftIcon pt="2px" h="6" w="6" color={"blue"} />
            <Box pt="0px" color="blue" pl="0px" variant="ghost">
              Back
            </Box>
          </Flex>
          <Box w="200px">
            <Select placeholder={date} onChange={handleSelectedDeliveryDate}>
              {dates.map((date) => {
                if (date.date !== date) {
                  return <option key={date.id}>{date.date}</option>;
                }
              })}
            </Select>
          </Box>
          <Box>
            <CustomerSupport />
          </Box>
        </Flex>
        {/* --------------------------------------- Navbar Ends --------------------------------------- */}

        {/* --------------------------------  choose Meals and sort bar -------------------------------- */}
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

        {/* --------------------------------  choose Meals and sort ends -------------------------------- */}

        {/* ------------------------ left box which contain products and sidebar ------------------------ */}
        <Flex>
          {/* Left Side bar */}

          {/* Passing whole value from parent to child  */}
          {sidebarVisible && (
            <Sidebar
              handleCheckbox={handleCheckbox}
              category={category}
              setCategory={setCategory}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          )}

          {/* --------------------------------- Product Rendering div --------------------------------- */}

          <Box
            w={"100%"}
            h="80vh"
            overflow={"scroll"}
            p="20px"
            position={"sticky"}
          >
            {loading && <CircularProgress isIndeterminate value={"50"} />}
            {!loading && (
              <SimpleGrid minChildWidth="170px" spacing={30}>
                {foods.length !== 0
                  ? foods.map((food) => <Card data={food} key={food.id} />)
                  : null}
              </SimpleGrid>
            )}
          </Box>
        </Flex>
      </Box>

      {/* ----------------------------------- Left Side Box ends here ----------------------------------- */}

      {/* -------------------------------- cart in right side of the page -------------------------------- */}

      <Box
        backgroundColor="rgb(254,254,255)"
        w="25%"
        h="80vh"
        position="sticky"
      >
        {/* ---------------------  Delivery date and clear all button --------------------- */}

        <Flex
          p="10px"
          pt="20px"
          bgColor={"white"}
          justifyContent={"space-between"}
        >
          <Flex>
            <Box pt="10px">
              <Text fontSize={"13px"}>
                My Delivery for: <b>{date}</b>
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

        {/* ---------------------  Delivery date and clear all button --------------------- */}

        <Stack mt="30px" h="60vh">
          {cartData.length == 0 && (
            <Box mt="180px">
              <Text fontWeight={"semibold"}>
                Get started by adding at least 4 meals{" "}
              </Text>
            </Box>
          )}
          {cartData.length !== 0 && <CartBox cartTotal={cartTotal} />}
        </Stack>

        {/* Bottom right cart button section, Total sum, offer and checkout button */}

        <Box h="25vh">
          {/* --------------------- Offer amount showing box --------------------- */}
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

          {/* ------------------------- Subtotal final box ------------------------- */}
          <Flex justifyContent={"space-between"} p="5px">
            <Flex p="8px 10px 0px 0px">
              {cartData.length !== 0 && (
                <Flex>
                  <Box paddingLeft={"5px"}>
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

                    <Text fontWeight={"700"} ml="5px">
                      {`$ ${cartTotal.currentTotal}`}
                    </Text>
                  </Flex>
                </Flex>
              )}
            </Flex>
            <Flex
              p="5px 10px"
              border="3px solid rgb(209,208,209)"
              borderRadius={"20px"}
              pt="0px"
            >
              <Icon as={CgShoppingCart} w={7} h={7} pt="2px" />
              <Text as="b" ml="2" pt="2px" color={"red"}>
                {cartData.length}
              </Text>
            </Flex>
          </Flex>

          {/* ------------------------------- Checkout button -------------------------------   */}
          <Box p="0px 10px 0px 10px" mt="10px">
            <Button
              w="100%"
              colorScheme={
                cartData.length < 4
                  ? `gray`
                  : `${cartData.length > 12 ? `gray` : "blue"}`
              }
              disabled={cartData.length < 4 || cartData.length > 12}
              onClick={handleGoToCheckOut}
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
