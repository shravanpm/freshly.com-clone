import React from 'react'
import styled from 'styled-components'
import { Heading,Input,Button } from '@chakra-ui/react'

export const SignUp = () => {
  return (
    <>
       <SignUpWrapper>
          <SignUpBox>
                   <Heading size={'3xl'}>Dinner’s ready!</Heading>
                   <Heading>Chef-prepared, healthy meals delivered weekly</Heading>
                   <form>
                    <Input />
                    <Input/>
                    <Input/>
                    <Button>Continue</Button>
                   </form>
          </SignUpBox>
       </SignUpWrapper>
    </>
  )
}

const SignUpWrapper= styled.div`
 width:100%;
 height:100vh;
 background:url('https://res.cloudinary.com/freshly/image/upload/c_crop,g_auto,dpr_auto,q_30,w_1500,h_900/v1494958610/joinnow-southchicken.jpg');
 background-repeat:no-repeat;
 margin:auto;
 display:flex;
 align-items:center;

`;

  const SignUpBox=styled.div`
  width:50%;
  height:50vh;
  border:1px solid red;
  background-color:white;
  opacity:0.8;
  margin:auto;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  `
