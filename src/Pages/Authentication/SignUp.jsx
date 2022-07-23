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
import { useNavigate } from "react-router-dom";
import { Register } from "../../Redux/AuthReducer/action";
import { REGISTER_SUCCESS } from "../../Redux/AuthReducer/actionTypes";
import { Faq } from "../../Components/Faq";
import NavbarSecond from "../../Components/NavbarSecond";

const initState = {
	name: "freshly",
	email: "",
	password: "",
	username: "Fresly",
	mobile: "12345678",
	description: "OrderFromFreshly",
};

const reducer = (state, action) => {
	switch (action.type) {
		case "email":
			return {
				...state,
				email: action.payload,
			};

		case "password":
			return {
				...state,
				password: action.payload,
			};

		default:
			return state;
	}
};

export const SignUp = () => {
	const [state, setter] = useReducer(reducer, initState);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = () => {
		dispatch(Register(state)).then((r) => {
			if (r === REGISTER_SUCCESS) {
				// console.log('loginSuccess',state)
				navigate("/login", { replace: true });
			}
		});
	};
	return (
		<>
			<Box style={{ position: "sticky", top: 0, zIndex: 999 }}>
				<NavbarSecond />
			</Box>
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
							onChange={(e) =>
								setter({ type: "email", payload: e.target.value })
							}
						/>
						<Input
							placeholder="Zip"
							flex={1}
							value={state.password}
							onChange={(e) =>
								setter({ type: "password", payload: e.target.value })
							}
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
								<Link to="/login">Login</Link>
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
			<Faq />
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
	height: fit-content;
	background-color: white;
	opacity: 0.8;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 3%;
`;
