import React, { useState } from "react";
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
  // InputLeftAddon,
  Checkbox,
  //  CheckboxGroup,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export const Payment = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";
  return (
    <div className="Main">
      <h1>Confirm Your Order Details</h1>
      <div className="Body">
        <div className="div1">
          <div className="del">
            <div>Delevery Address</div>
            <div>
              <p id="change">Change</p>
            </div>
          </div>
          <div className="name">
            <div>
              <FormLabel>First Name</FormLabel>
              <h3>Abhishek Giri</h3>
            </div>
            <div>
              <FormLabel>Last Name</FormLabel>
              <h2>Giri</h2>
            </div>
          </div>
          <div className="address">
            <FormLabel>Address Line 1</FormLabel>
            <h3>Motihari, Bihar</h3>
          </div>
          <div className="address">
            <FormLabel>Address Line 2(optional)</FormLabel>
            <h3>Motihari</h3>
          </div>
          <div className="Zip">
            <div>
              <FormLabel>City</FormLabel>
              <h3>Motihari</h3>
            </div>

            <div>
              <FormLabel>State</FormLabel>
              <h3>Bihar</h3>
            </div>
            <div>
              <FormLabel>Zip</FormLabel>
              <h3>845401</h3>
            </div>
          </div>
          <div className="address">
            <FormLabel>Phone</FormLabel>
            <h3>9546562142</h3>
          </div>
          <div className="address">
            <FormLabel>
              Email (We require your email to send you receipts and order
              updates)
            </FormLabel>
            <h3>arakr0436@gmail.com</h3>
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
                  <Input type="text" id="inp" placeholder="123 234 456 657" />

                  <FormLabel id="label">Expiration</FormLabel>
                  <Input type="text" id="inp" placeholder="MM/YY" />
                  <FormLabel id="label">CVV</FormLabel>
                  <Input type="text" id="inp" placeholder="XYZ" />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          
          <Button colorScheme='blue' className="btn">Procced to Payment </Button>
        </div>

        {/* div two area------------------------------------------------------------------- */}

        <div className="Div2">
          <div className="date">
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Select placeholder="Select country">
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
              </Select>
            </FormControl>
          </div>
          <hr className="hr" />
          <div className="meals">
            <div>6 meals</div>
            <div id="price2">$78.98</div>
          </div>
          <hr className="hr" />
          <div className="shadow">
            <div className="discount1">
              <div>6 meals discount</div>
              <div id="price">$10.89</div>
            </div>
            <div className="discount2">
              <div id="p">subtotal</div>
              <div id="price2">$59.80</div>
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
            <div id="price2"> $1.10</div>
          </div>
          <div className="Mymeal">
            <p id="para">My Meals</p>
            <br />
            <div className="items">
              <div className="item-div">
                <div>
                  <span>
                    <p id="para1">1</p>
                  </span>
                </div>
                <div className="img-div">
                  <img
                    src="https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_90,w_90/v1637012875/production-meal-without-background-image-3c327134-2073-4b4a-9e97-a81597e5d689.png"
                    alt=""
                    id="img2"
                  />
                </div>
                <div className="item-name">
                  <h2 id="meal-name">Steak Peppercorn</h2>
                </div>
              </div>
              <br />
              <hr className="hr" color="grey" />

              <div className="item-div">
                <div>
                  <span>
                    <p id="para1">1</p>
                  </span>
                </div>
                <div className="img-div">
                  <img
                    src="https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_90,w_90/v1637012875/production-meal-without-background-image-3c327134-2073-4b4a-9e97-a81597e5d689.png"
                    alt=""
                    id="img2"
                  />
                </div>
                <div className="item-name">
                  <h2 id="meal-name">Steak Peppercorn</h2>
                </div>
              </div>
              <br />
              <hr className="hr" color="grey" />

              <div className="item-div">
                <div>
                  <span>
                    <p id="para1">1</p>
                  </span>
                </div>
                <div className="img-div">
                  <img
                    src="https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_90,w_90/v1637012875/production-meal-without-background-image-3c327134-2073-4b4a-9e97-a81597e5d689.png"
                    alt=""
                    id="img2"
                  />
                </div>
                <div className="item-name">
                  <h2 id="meal-name">Steak Peppercorn</h2>
                </div>
              </div>
              <hr className="hr" color="grey" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
