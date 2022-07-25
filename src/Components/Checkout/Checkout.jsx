import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { addUserData } from "../../Redux/Checkout/action";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Stack,
  Button,
  // InputLeftAddon,
  Checkbox,
  Flex,
  Box,
  Heading,
  Text,
  //  CheckboxGroup
} from "@chakra-ui/react";
import NavbarSecond from "../NavbarSecond";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CommonQstns } from "../MenuPlans/CommonQstns";
export const Checkout = () => {
  const [input, setInput] = useState("");
  // const [address1, setAddress1] = useState("");
  // const [address, setAddress] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  const [cartTotal, setCartTotal] = useState({
    regTotal: 0,
    currentTotal: 0,
  });
  const [value, setValue] = useState("");
  const handleValue = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const [payment, setPayment] = useState({});
  const [user, setUser] = useState({});
  const cartData = useSelector((state) => state.appReducer.cart);
  const [cartDetails, setCartDetails] = useState({});
  const dispatch = useDispatch();
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
  };

  const handleGoToPayment = () => {
    if (
      !(
        user.fName &&
        user.sName &&
        user.add1 &&
        user.zip &&
        user.city &&
        user.phone &&
        user.email
      )
    ) {
      alert("Data is missing");
      return;
    }
    const payload = {
      ...user,
      state: value || "NewYork",
    };
    dispatch(addUserData(payload));
    navigate("/payment");
  };

  const isError = input === "";
  useEffect(() => {
    //when cartData changes it triggers, calculating sum again
    handlePriceChange(cartData.length);
  }, [cartData]);
  return (
    <div>
      <div className="Main">
        <Box position={"sticky"} zIndex="999">
          <NavbarSecond />
        </Box>
        <Box>
          <div className="Body" style={{ overflow: "scroll" }}>
            <Flex justifyContent={"space-between"} textAlign="left">
              <Box w="55%">
                <Heading size="lg">Checkout</Heading>
              </Box>
              <Box w="45%" pl="15px">
                <Heading>Order Summary</Heading>
              </Box>
            </Flex>
            <Flex>
              <div className="div1">
                <Box>
                  <FormControl>
                    <div
                      className="name"
                      style={{ width: "78%", margin: "auto" }}
                    >
                      <div>
                        <FormLabel>First Name</FormLabel>
                        <Input type="text" id="fName" onChange={handleChange} />
                      </div>
                      <div>
                        <FormLabel>Last Name</FormLabel>
                        <Input type="text" id="sName" onChange={handleChange} />
                      </div>
                    </div>
                    <div className="address" style={{ marginLeft: "20px" }}>
                      <FormLabel>Address Line 1</FormLabel>
                      <Input type="text" id="add1" onChange={handleChange} />
                    </div>
                    <div className="address" style={{ marginLeft: "20px" }}>
                      <FormLabel>Address Line 2(optional)</FormLabel>
                      <Input type="text" id="add2" onChange={handleChange} />
                    </div>
                    <div className="Zip">
                      <div>
                        <FormLabel>City</FormLabel>
                        <Input type="text" id="city" onChange={handleChange} />
                      </div>

                      <div>
                        <FormLabel>State</FormLabel>
                        <Select
                          placeholder="Select State"
                          value={value}
                          onChange={handleValue}
                        >
                          <option value="NewYork">NewYork</option>
                          <option value="California">Callifornia</option>
                          <option value="Albama">Albama</option>
                          <option value="Los Vegas">Los Vegas</option>
                        </Select>
                      </div>
                      <div>
                        <FormLabel>Zip</FormLabel>
                        <Input type="text" id="zip" onChange={handleChange} />
                      </div>
                    </div>
                    <div className="address" style={{ marginLeft: "20px" }}>
                      <FormLabel>Phone</FormLabel>
                      <Input type="text" id="phone" onChange={handleChange} />
                    </div>
                    <div id="checkbox">
                      <Stack spacing={5} direction="row"></Stack>
                    </div>
                    <div className="address" style={{ marginLeft: "20px" }}>
                      <FormLabel>
                        Email (We require your email to send you receipts and
                        order updates)
                      </FormLabel>
                      <Input type="text" id="email" onChange={handleChange} />
                    </div>
                    <Button
                      colorScheme="blue"
                      className="btn"
                      onClick={handleGoToPayment}
                    >
                      Procced to Payment{" "}
                    </Button>
                  </FormControl>
                </Box>
              </div>

              <div className="Div2">
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
                  <div>{`${cartData.length} Meals`}</div>
                  <div id="price2">{`$${cartTotal.regTotal}`}</div>
                </div>
                <hr className="hr" />
                <div className="shadow">
                  <div className="discount1">
                    <div>{`${cartData.length} Meals Discount`}</div>
                    <div id="price">{`$${(
                      Number(cartTotal.regTotal) -
                      Number(cartTotal.currentTotal)
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
                <div className="Mymeal">
                  <p id="para">My Meals</p>
                  <br />
                  <div className="items" h="max-content">
                    {cartData.map((item, index) => (
                      <div
                        style={{
                          borderBottom: "2px solid gray",
                          paddingBottom: "10px",
                        }}
                        key={index}
                      >
                        <div className="item-div" key={item.id}>
                          <div>
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
        </Box>
        <Box mt="20px">
          <CommonQstns />
        </Box>
      </div>
    </div>
  );
};
