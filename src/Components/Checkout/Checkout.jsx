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
  Button,
  // InputLeftAddon,
  Checkbox,
  //  CheckboxGroup
} from "@chakra-ui/react";
import NavbarSecond from "../NavbarSecond";
export const Checkout = () => {
  const [input, setInput] = useState("");
  const [address1, setAddress1] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";
  return (
    <div>
      <NavbarSecond/>
    <div className="Main">
      <div className="Body">
        <div className="div1">
          <FormControl>
            <div className="name">
              <div>
                <FormLabel>First Name</FormLabel>
                <Input type="text"  id="inp"/>
              </div>
              <div>
                <FormLabel>Last Name</FormLabel>
                <Input type="text"  id="inp"/>
                
              </div>
            </div>
            <div className="address">
              <FormLabel>Address Line 1</FormLabel>
              <Input type="text"  id="inp"/>
            </div>
            <div className="address">
              <FormLabel>Address Line 2(optional)</FormLabel>
              <Input type="text"  id="inp"/>
             
            </div>
            <div className="Zip">
              <div>
                <FormLabel>City</FormLabel>
                <Input type="text"  id="inp"/>
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
                <Input type="text"  id="inp"/>
              </div>
            </div>
            <div className="address">
              <FormLabel>Phone</FormLabel>
              <Input type="text"  id="inp"/>
            </div>
            <div id="checkbox">
              <Stack spacing={5} direction="row">
      
              </Stack>
            </div>
            <div className="address">
              <FormLabel>
                Email (We require your email to send you receipts and order
                updates)
              </FormLabel>
              <Input type="text"  id="inp"/>
            </div>
            <Button colorScheme='blue' className="btn" >Procced to Payment </Button>
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
    </div>
    
  );
};
