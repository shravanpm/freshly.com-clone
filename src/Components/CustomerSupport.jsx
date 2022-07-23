import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,

    color,
    textDecoration,


} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
//   import { TiArrowSortedDown } from "react-icons/ti";

function CustomerSupport() {
    return (
        <div>
            <Menu>

                <MenuButton as={Button} rightIcon={<ChevronDownIcon style={{color:"blue"}}/>} style={{backgroundColor:"white", borderRadius:"0%" ,color:"blue" ,textDecoration:"underline"}}>

                   
               Customer Support
                </MenuButton>
                <MenuList>
                    <MenuItem as={Button} style={{borderBottom:"1px solid #ededed" ,margin:"2px"}}>
                    Live Chat</MenuItem>
                    <MenuItem as={Button} style={{borderBottom:"1px solid #ededed" ,margin:"2px"}}>support@freshly.com</MenuItem>
                    <MenuItem as={Button} style={{borderBottom:"1px solid #ededed" ,margin:"2px"}}>1-844-373-7459</MenuItem>
                  
                </MenuList>
            </Menu>
        </div>
    )
}

export default CustomerSupport