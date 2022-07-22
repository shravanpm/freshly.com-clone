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
                <Checkbox colorScheme="green" defaultChecked>
                  Receive SMS text message updates on my orders
                </Checkbox>
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
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            vel minima voluptate dicta quibusdam doloremque temporibus soluta
            quaerat possimus sint molestias earum reiciendis nihil ab at,
            praesentium, ipsum autem rerum?
          </h2>
        </div>
      </div>
    </div>
  );
};
