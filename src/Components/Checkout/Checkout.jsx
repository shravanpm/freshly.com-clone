import React from "react";
import "./Checkout.css";
import { Input, Stack, Select, Checkbox, Button } from "@chakra-ui/react";

export const Checkout = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="div1">
          Hello div 1
          <Stack>
            <div className="input">
              <div>
                {/* <label id="one">First Name</label> */}
                <h1>First Name</h1>
                <Input focusBorderColor="blue.400" />
              </div>
              <div>
                <label htmlFor="input">Last Name</label>
                <Input focusBorderColor="blue.400" />
              </div>
            </div>
          </Stack>
          <div>
            <label htmlFor="input">Address</label>
            <Input placeholder="Address" size="md" />
          </div>
          <div>
            <label htmlFor="input">Address Line 2 ( optional)</label>
            <Input placeholder="Address" size="md" />
          </div>
          <div className="container2">
            <div>
              <label htmlFor="">City</label>
              <Input focusBorderColor="blue.400" />
            </div>
            <div>
              <label htmlFor="">State</label>
              <Select placeholder="Bihar">
                <option value="option1">Bihar</option>
                <option value="option2">Andhra Pradesh</option>
                <option value="option3">Karnataka</option>
                <option value="option3">Madhya Pradesh</option>
                <option value="option3">Asam</option>
                <option value="option3">Delhi</option>
                <option value="option3">Chhatisgarh</option>
              </Select>
            </div>
            <div>
              <label htmlFor="">Zip</label>
              <Input focusBorderColor="blue.400" />
            </div>
          </div>
          <div>
            <label htmlFor="">Phone</label>
            <Input focusBorderColor="blue.400" />
          </div>
          <div>
            <label htmlFor=""></label>
            <Checkbox defaultChecked>
              Receive SMS text message updates on my orders
            </Checkbox>
          </div>
          <div>
            <label htmlFor="">
              Email (We require your email to send you receipts and order
              updates)
            </label>
            <Input focusBorderColor="blue.400" />
          </div>
          <hr />
          <div>
            <div className="total">
              <div>
                <h2>Total</h2>
              </div>
              <div>
                <h2>$72.80</h2>
              </div>
            </div>
            <Button colorScheme="blue" className="btn">
              Next
            </Button>
          </div>
        </div>

        <div className="div2"> hello div 2</div>
      </div>
    </div>
  );
};
