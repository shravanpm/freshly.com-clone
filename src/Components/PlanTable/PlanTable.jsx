

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPlans } from '../../Redux/PlansReducer/action'
import styled from 'styled-components';
import { StarIcon } from '@chakra-ui/icons';

const PlanTable = () => {

    const foodPlans = useSelector(state => state.plansReducer.plans)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlans())

    }
        , [])

 

    return (

        <div>
            <div >
                <MostPopularWrapper>
                 
          <div><StarIcon w={3} h={3} /></div>  
           <div style={{paddingLeft: "0.5rem"}}>Most Popular</div>
          
        
           
            
            </MostPopularWrapper>
            </div>

            <PlanTableContainer>
                <table style={{ margin: 'auto', width: "95%" }}>

                    <thead>
                        <tr >
                            {foodPlans.map(plan => {

                                return <th key={plan.id} style={  plan.id===3 ? { backgroundColor:"#b6f0dd", padding: "0px"} : {padding: "0px"} }>
                                    <PlanTableContainer2 >
                                        <div style={{ fontSize: "1em", fontWeight: "500"}}>{`${plan.title} meals`}</div>
                                        <div style={{
                                            fontSize: '0.7em',
                                            fontWeight: '400',
                                        }}>{`${plan.pricePerMeal} / meal`}</div>
                                    </ PlanTableContainer2 >
                                </th>
                            }
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {foodPlans.map(plan => {
                                return <td key={plan.id}   style={  plan.id===3 ? { backgroundColor:"#b6f0dd", padding: "0px"} : {padding: "0px"} } >
                                    <PlanTableContainer2 >


                                        <div
                                            style={{
                                                color: '#d0d0d0',
                                                textDecoration: 'line-through',

                                            }}
                                        >{plan.totalPrice}</div>
                                        <div
                                            style={{
                                                color: '#357471',
                                            }}
                                        >{plan.discount}</div>

                                    </PlanTableContainer2 >
                                </td>
                            }

                            )}
                        </tr>
                    </tbody>
                </table>
            </PlanTableContainer>
        </div>
    )
}



export default PlanTable
const PlanTableContainer = styled.div`
   
    
    align-items: center;
    margin: auto;
    width: 90%;
    height: 100%;
    background-color: #fffdf7;
   
    padding: 20px;
    padding-top: 5px;
   
    `
const PlanTableContainer2 = styled.div`
    
 width: 100%;
height: 100px;
 border: 1px solid #ededed;
 border-collapse: collapse;
 padding:5%;
 padding-top: 20%;
`
const MostPopularWrapper = styled.div`
    text-align: left;
    padding-left: 26.9em;
    font-size: small;
    color: #357471;
display: flex;

`










