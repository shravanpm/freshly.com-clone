import React, { useState } from "react";
import {
	Heading,
	Flex,
	Input,
	Button,
	FormControl,
	FormLabel,
	Text,
	Box,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/AuthReducer/action";
import { LOGIN_SUCCESS } from "../../Redux/AuthReducer/actionTypes";
import { Footer } from "../../Components/Footer";
import { LoginNav } from "../../Components/LoginNav";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const isLoading = useSelector((state) => state.authReducer.isLoading);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = () => {
		if (email && password) {
			let params = {
				email,
				password,
			};
			dispatch(login(params)).then((r) => {
				if (r === LOGIN_SUCCESS) {
					// console.log("logindone", email);
					navigate("/plans");
				}
			});
		}
	};
	return (
		<Box bg="#fef9eb">
			<LoginNav />
			<Flex
				direction={"column"}
				justify={"space-evenly"}
				align="center"
				w={"30%"}
				h={"30rem"}
				m={"5rem auto"}
				p={2}
			>
				<Heading fontSize={"4rem"}>Log In</Heading>
				<Flex
					h={"70%"}
					w={"100%"}
					direction={"column"}
					justify={"space-evenly"}
				>
					<FormControl isRequired>
						<FormLabel>Email</FormLabel>
						<Input
							placeholder="you@domain.com"
							type={"email"}
							bg="white"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</FormControl>
					<FormControl isRequired>
						<FormLabel>Password</FormLabel>
						<Input
							placeholder="Enter your password"
							type={"password"}
							bg="white"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</FormControl>

					<Button
						mt={2}
						colorScheme="blue"
						onClick={handleLogin}
						isLoading={isLoading}
					>
						Submit
					</Button>
					<Flex justify={"space-around"}>
						<Text color={"blue"} fontSize="14px">
							<Link to="#">Forgot password ?</Link>
						</Text>
						<Text color={"blue"} fontSize="14px">
							Don't have an account? <Link to="/signup">Get Started</Link>
						</Text>
					</Flex>
				</Flex>
			</Flex>
			<Footer />
		</Box>
	);
};
