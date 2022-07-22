import React, { useState } from "react";
import "./Checkout.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Stack,
  // InputLeftAddon,
  Checkbox,
  //  CheckboxGroup
} from "@chakra-ui/react";
export const Checkout = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";
  return (
    <div className="Main">
      <div className="Body">
        <div className="div1">
          <FormControl isInvalid={isError}>
            <div className="name">
              <div>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="email"
                  value={input}
                  onChange={handleInputChange}
                />
                {!isError ? (
                  <FormHelperText>
                    Enter the email you'd like to receive the newsletter on.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>can't be empty</FormErrorMessage>
                )}
              </div>
              <div>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="email"
                  value={input}
                  onChange={handleInputChange}
                />
                {/* {!isError ? (
                  <FormHelperText>
                    Enter the email you'd like to receive the newsletter on.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>can't be empty</FormErrorMessage>
                )} */}
              </div>
            </div>
            <div className="address">
              <FormLabel>Address Line 1</FormLabel>
              <Input type="email" value={input} onChange={handleInputChange} />
              {!isError ? (
                <FormHelperText>
                  Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>can't be empty</FormErrorMessage>
              )}
            </div>
            <div className="address">
              <FormLabel>Address Line 2(optional)</FormLabel>
              <Input type="email" value={input} onChange={handleInputChange} />
              {/* {!isError ? (
                  // <FormHelperText>
                  //   Enter the email you'd like to receive the newsletter on.
                  // </FormHelperText>
                ) : (
                  // <FormErrorMessage>can't be empty</FormErrorMessage>
                )} */}
            </div>
            <div className="Zip">
              <div>
                <FormLabel>City</FormLabel>
                <Input placeholder="First name" />
              </div>

              <div>
                <FormLabel>State</FormLabel>
                <Select placeholder="Select State">
                  <option>NewYork</option>
                  <option>Callifornia</option>
                  <option>Albama</option>
                  <option>Los Vegas</option>
                </Select>
              </div>
              <div>
                <FormLabel>Zip</FormLabel>
                <Input placeholder="First name" />
              </div>
            </div>
            <div className="address">
              <FormLabel>Phone</FormLabel>
              {/* <InputLeftAddon children='+91' /> */}
              <Input
                type="tel"
                min={10}
                value={input}
                onChange={handleInputChange}
              />
              {!isError ? (
                <FormHelperText>
                  phone should you'd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>
                  Is not a valid phone number. Please enter a 10-digit phone
                  number.
                </FormErrorMessage>
              )}
            </div>
            <div id="checkbox">
              <Stack spacing={5} direction="row">
                {/* <Checkbox colorScheme="green" defaultChecked>
                  Receive SMS text message updates on my orders
                </Checkbox> */}
              </Stack>
            </div>
            <div className="address">
              <FormLabel>
                Email (We require your email to send you receipts and order
                updates)
              </FormLabel>
              <Input type="email" value={input} onChange={handleInputChange} />
              {!isError ? (
                <FormHelperText>
                  Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>can't be empty</FormErrorMessage>
              )}
            </div>
          </FormControl>
        </div>
       
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
            < p id="para">My Meals</p>
            <br />
             <div className="items">
                  <div className="item-div">
                     <div  > <span><p id="para1">1</p> </span> </div>
                     <div className="img-div"> <img src="https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_90,w_90/v1637012875/production-meal-without-background-image-3c327134-2073-4b4a-9e97-a81597e5d689.png" alt=""  id="img2"/></div>
                     <div className="item-name"><h2 id="meal-name">Steak Peppercorn</h2></div>
                  </div>
                  <br/>
                  <hr className="hr" color="grey"/>

                  <div className="item-div">
                     <div  > <span><p id="para1">1</p> </span> </div>
                     <div className="img-div"> <img src="https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_90,w_90/v1637012875/production-meal-without-background-image-3c327134-2073-4b4a-9e97-a81597e5d689.png" alt=""  id="img2"/></div>
                     <div className="item-name"><h2 id="meal-name">Steak Peppercorn</h2></div>
                  </div>
                  <br/>
                  <hr className="hr" color="grey"/>

                  <div className="item-div">
                     <div  > <span><p id="para1">1</p> </span> </div>
                     <div className="img-div"> <img src="https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_90,w_90/v1637012875/production-meal-without-background-image-3c327134-2073-4b4a-9e97-a81597e5d689.png" alt=""  id="img2"/></div>
                     <div className="item-name"><h2 id="meal-name">Steak Peppercorn</h2></div>
                  </div>
                  <hr className="hr" color="grey"/>

             </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};
