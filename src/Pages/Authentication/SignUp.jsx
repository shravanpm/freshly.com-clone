import React, { useReducer, useState } from "react";
import styled from "styled-components";
import {
  Heading,
  Input,
  Button,
  Flex,
  Text,
  Stack,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { Register } from "../../Redux/AuthReducer/action";
import { REGISTER_SUCCESS } from "../../Redux/AuthReducer/actionTypes";


const initState={
  name:'freshly',
  email:'',
  password:'Freshly@123',
  username:'Fresly',
  mobile:0,
  description:'OrderFromFreshly',
}

const reducer=(state,action)=>{
  switch(action.type){
    // case 'name':
    //   return{
    //     ...state,
    //     name:action.payload,
    //   }
      case 'email':
      return{
        ...state,
        email:action.payload,
      }
      // case 'password':
      // return{
      //   ...state,
      //   password:action.payload,
      // }
      // case 'username':
      // return{
      //   ...state,
      //   username:action.payload,
      // }
      case 'mobile':
      return{
        ...state,
        mobile:action.payload,
      }
     
      default:
        return state;
  }
}



export const SignUp = () => {
  const [state,setter]= useReducer(reducer,initState);
  const dispatch= useDispatch();
  const navigate= useNavigate();
  

  const handleChange = () => {
   
    dispatch(Register(state))
    .then(r=>{
      if(r===REGISTER_SUCCESS){
        console.log('loginSuccess',state)
        //  navigate('/',{replace:true})
      }
    })
  };
  return (
    <>
      <SignUpWrapper>
        <SignUpBox>
          <Box>
            <Heading size={"3xl"}>Dinner’s ready!</Heading>
          </Box>
          <Box>
            <Heading>Chef-prepared, healthy meals delivered weekly</Heading>
          </Box>
          <form style={{ display: "flex", gap: "20px", padding: "3%" }}>
            <Input
              placeholder="Email"
              flex={2}
            
              value={state.email}
              onChange={(e)=>
                setter({type:'email',payload:e.target.value})}
            />
            <Input
              placeholder="Zip"
              flex={1}
             
              value={state.mobile}
              onChange={(e)=>
                setter({type:'mobile',payload:e.target.value})}
            />
            <Button
              bg={"blue"}
              color={"white"}
              fontSize={"25px"}
              flex={1}
              _hover={{
                bg: "blue",
              }}
              onClick={handleChange}
            >
              Continue
            </Button>
          </form>
          <Stack p={4} m={"0px 40px"}>
            <Flex>
              <Text>Already have an account?</Text>
              <Text color={"blue"}>
                <Link to="#">Login</Link>
              </Text>
            </Flex>
            <Flex>
              <Text>
                By continuing, you agree to our <span color="blue">Terms</span>{" "}
                and Privacy Policy & will receive emails from Freshly.
              </Text>
            </Flex>
          </Stack>
        </SignUpBox>
      </SignUpWrapper>
    </>
  );
};

const SignUpWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://res.cloudinary.com/freshly/image/upload/c_crop,g_auto,dpr_auto,q_30,w_1500,h_900/v1494958610/joinnow-southchicken.jpg");
  background-repeat: no-repeat;
  margin: auto;
  display: flex;
`;

const SignUpBox = styled.div`
  width: 50%;
  height: 50vh;
  border: 1px solid red;
  background-color: white;
  opacity: 0.8;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
