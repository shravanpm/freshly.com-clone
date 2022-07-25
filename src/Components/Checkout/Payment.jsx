import React, { useEffect, useState } from "react";
import "./Payment.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Stack,
  Box,
  Button,
  Heading,
  // InputLeftAddon,
  Checkbox,
  //  CheckboxGroup,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavbarSecond from "../NavbarSecond";
import { CommonQstns } from "../MenuPlans/CommonQstns";

export const Payment = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);
  const [cartTotal, setCartTotal] = useState({
    regTotal: 0,
    currentTotal: 0,
  });
  const [payment, setPayment] = useState({});
  const cartData = useSelector((state) => state.appReducer.cart);
  const navigate = useNavigate();
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

  const handlePayment = (e) => {
    const { id, value } = e.target;
    setPayment({
      ...payment,
      [id]: value,
    });
  };

  const handleNavigate = () => {
    if (!(payment.card && payment.otp && payment.exp)) {
      alert("Fill in Payment Details");
      return;
    }
    navigate("/thankyou");
  };

  const isError = input === "";
  const user = useSelector((state) => state.checkoutReducer.user);

  useEffect(() => {
    //when cartData changes it triggers, calculating sum again
    handlePriceChange(cartData.length);
  }, [cartData]);
  return (
    <div className="Main">
      <NavbarSecond />
      <Flex
        w="80%"
        m="auto"
        justifyContent={"space-between"}
        p="0px 30px"
        pt="30px"
      >
        <Box>
          <Heading size={"md"}>Confirm Your Order Details</Heading>
        </Box>
        <Box>
          <Heading size="md">Order Summary</Heading>
        </Box>
      </Flex>

      <div className="Body" style={{ height: "100vh", overflow: "scroll" }}>
        <Flex>
          <Stack className="div1">
            <div className="del">
              <div>
                <Heading size="md">Delivery Address</Heading>
              </div>
              <div>
                <p id="change">Change</p>
              </div>
            </div>
            <div className="name" style={{ margin: " auto", width: "88%" }}>
              <div style={{ width: "50%", textAlign: "left" }}>
                <FormLabel>First Name</FormLabel>
                <h3>{user?.fName}</h3>
              </div>
              <div style={{ width: "50%", textAlign: "left" }}>
                <FormLabel>Last Name</FormLabel>
                <h2>{user?.sName}</h2>
              </div>
            </div>
            <div className="address">
              <FormLabel>Address Line 1</FormLabel>
              <h3>{user?.add1}</h3>
            </div>
            <div className="address">
              <FormLabel>Address Line 2(optional)</FormLabel>
              <h3>{user?.add2}</h3>
            </div>
            <div className="Zip">
              <div>
                <FormLabel>City</FormLabel>
                <h3>{user?.city}</h3>
              </div>

              <div>
                <FormLabel>State</FormLabel>
                <h3>{user?.state}</h3>
              </div>
              <div>
                <FormLabel>Zip</FormLabel>
                <h3>{user?.zip}</h3>
              </div>
            </div>
            <div className="address">
              <FormLabel>Phone</FormLabel>
              <h3>{user?.phone}</h3>
            </div>
            <div className="address">
              <FormLabel>
                Email (We require your email to send you receipts and order
                updates)
              </FormLabel>
              <h3>{user?.email}</h3>
            </div>
            <hr id="hr" />
            <div className="address">
              <FormLabel>Payment Information</FormLabel>
              <Accordion defaultIndex={[0]} allowMultiple className="acc">
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" className="box">
                        PayPal
                        <img
                          src="https://res.cloudinary.com/freshly/image/upload/q_auto:good,dpr_auto/v1494958610/icon-paypal-sm_oeazjr"
                          alt=""
                          id="paypal"
                        />
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" className="box">
                        Credit Card
                        <img
                          src="https://res.cloudinary.com/freshly/image/upload/q_auto:good,dpr_auto/v1494958610/icon-cc-amex_wdkyqy"
                          alt=""
                        />
                        <span>
                          <img
                            src="https://res.cloudinary.com/freshly/image/upload/q_auto:good,dpr_auto/v1494958610/icon-cc-discover_dmdrsr"
                            alt=""
                          />
                        </span>
                        <span>
                          <img
                            src="https://res.cloudinary.com/freshly/image/upload/q_auto:good,dpr_auto/v1494958610/icon-cc-mastercard_fpfsrz"
                            alt=""
                          />
                        </span>
                        <span>
                          <img
                            src="https://res.cloudinary.com/freshly/image/upload/q_auto:good,dpr_auto/v1494958610/icon-cc-visa_gbqvb5"
                            alt=""
                          />
                        </span>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <FormLabel id="label">Credit Card Number</FormLabel>
                    <Input
                      type="text"
                      id="card"
                      onChange={handlePayment}
                      placeholder="123 234 456 657"
                    />

                    <FormLabel id="label">Expiration</FormLabel>
                    <Input
                      type="text"
                      id="exp"
                      onChange={handlePayment}
                      placeholder="MM/YY"
                    />
                    <FormLabel id="label">CVV</FormLabel>
                    <Input
                      type="text"
                      id="otp"
                      onChange={handlePayment}
                      placeholder="XYZ"
                    />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>

            <Button
              colorScheme="blue"
              className="btn"
              onClick={() => {
                handleNavigate();
              }}
            >
              Procced to Payment{" "}
            </Button>
          </Stack>

          {/* div two area------------------------------------------------------------------- */}

          <div className="Div2" style={{ paddingTop: "20px", h: "600px" }}>
            <div className="date">
              <FormControl>
                <FormLabel>Delivery Date</FormLabel>
                <Select placeholder="Select Delivery date">
                  <option>25 Monday 2022</option>
                  <option>26 Tuesday 2022</option>
                  <option>27 Wednesday 2022</option>
                </Select>
              </FormControl>
            </div>
            <hr className="hr" />
            <div className="meals">
              <div>{`${cartData.length} meals`}</div>
              <div id="price2">{`$${cartTotal.regTotal}`}</div>
            </div>
            <hr className="hr" />
            <div className="shadow">
              <div className="discount1">
                <div>{`${cartData.length} meals discount`}</div>
                <div id="price">{`$${(
                  Number(cartTotal.regTotal) - Number(cartTotal.currentTotal)
                ).toFixed(2)}`}</div>
              </div>
              <div className="discount2">
                <div id="p">subtotal</div>
                <div id="price2">{`$${cartTotal.currentTotal}`}</div>
              </div>
            </div>
            <hr className="hr" />
            <div className="shiping">
              <div>Shiping</div>
              <div id="price2"> $14.10</div>
            </div>
            <hr className="hr" />
            <div className="shiping">
              <div>Tax</div>
              <div id="price2"> $1.10</div>
            </div>
            <hr className="hr" />
            <div className="shiping">
              <div id="p">Total</div>
              <div id="price2">
                {" "}
                {`$${(Number(cartTotal.currentTotal) + 15.2).toFixed(2)}`}
              </div>
            </div>
            <div className="Mymeal" style={{ overflow: "scroll" }}>
              <p id="para">My Meals</p>
              <br />
              <div className="items">
                {cartData.map((item, index) => (
                  <div
                    style={{
                      borderBottom: "2px solid gray",
                      paddingBottom: "10px",
                    }}
                    key={item.id}
                  >
                    <div className="item-div" key={item.id}>
                      <div>
                        {" "}
                        <span>
                          <p id="para1">{index + 1}</p>{" "}
                        </span>{" "}
                      </div>
                      <div className="img-div">
                        {" "}
                        <img src={item.img} alt="" id="img2" />
                      </div>
                      <div className="item-name">
                        <h2 id="meal-name">{item.title}</h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Flex>
      </div>
    </div>
  );
};
