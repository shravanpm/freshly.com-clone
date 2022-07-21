

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPlans } from '../../Redux/PlansReducer/action'
import styled from 'styled-components';
const PlanTable = () => {

    const foodPlans = useSelector(state => state.plansReducer.plans)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlans())

    }
        , [])

    console.log(foodPlans)

    return (

        <div>
            <PlanTableContainer>
                <table style={{ margin: 'auto', width: "95%" }}>

                    <thead>
                        <tr >
                            {foodPlans.map(plan => {
                                return <th key={plan.id} style={{ padding: "0px" }} >
                                    <PlanTableContainer2 >
                                        <div style={{ fontSize: "0.8em", fontWeight: "500" }}>{`${plan.title} meals`}</div>
                                        <div style={{
                                            fontSize: '0.5em',
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
                                return <td key={plan.id} style={{ padding: "0px" }} >
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
   
    `
const PlanTableContainer2 = styled.div`
    
 width: 100%;
height: 100px;
 border: 1px solid #ededed;
 border-collapse: collapse;
 padding:5%;
 padding-top: 20%
 `









