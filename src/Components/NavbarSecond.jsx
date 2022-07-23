import { Icon, textDecoration } from '@chakra-ui/react';
import React from 'react'
import { TbChevronRight, } from "react-icons/tb";
import { GrCircleQuestion } from "react-icons/gr";
import { TiArrowSortedDown } from "react-icons/ti";
import styled from 'styled-components';
import CustomerSupport from './CustomerSupport';
import { Link } from 'react-router-dom';
function NavbarSecond() {
  const [isOpen, setIsOpen] = React.useState([
    "Plans", "Day", "Meals", "Checkout"
  ]);
  return (

    <div>
      < NavebarWrapper >

        <div >

          <img src="data:image/png;base64,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"
            alt="logo"
            width={100}
            height={100} />

        </div>
        <div >

          <RouteWrapper style={{ paddingTop: "10px" }}>
            <div > Plans</div>

            <div style={{ padding: "5px 8px " }}>
              <Icon as={TbChevronRight} />
            </div>
            <div>Day</div>
            <div style={{ padding: "5px 8px " }}>
              <Icon as={TbChevronRight} />
            </div>
            <div>Meals</div>

            <div style={{ padding: "5px 8px " }}>

              <Icon as={TbChevronRight} />
            </div>
            <div>Checkout</div>
          </RouteWrapper>

        </div>


        <div>
          <RouteWrapper>

            <div style={{ paddingTop: "15px" }}>
              <Icon as={GrCircleQuestion} />
            </div>

            <div style={{ padding: "5px", textDecoration: "underline", color: "blue" }}>

            </div>
            <div style={{ padding: "5px " }}>
              <CustomerSupport />
            </div>
          </RouteWrapper>
        </div>





      </NavebarWrapper>


    </div>
  )
}

export default NavbarSecond
const NavebarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  height: 70px;

  background-color: white
 

 
  `
const RouteWrapper = styled.div`
 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`

