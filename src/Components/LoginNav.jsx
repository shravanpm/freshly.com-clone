import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const LoginNav = () => {
	return (
		<>
			<Box bg="white">
				<Flex
					h={"12vh"}
					p={"1% 2%"}
					justify="space-between"
					alignItems={"center"}
					boxShadow={"base"}
					fontSize={"1rem"}
					color="gray.700"
				>
					<Flex flex={1} justify="space-between">
						<Link to="#">Plans & Menu</Link>
						<Link to="#">About</Link>
						<Link to="#">For Bussiness</Link>
						<Link to="#">Gifts</Link>
					</Flex>
					<Flex flex={2} justify={"center"}>
						<Link to="/">
							<Image
								h={"10vh"}
								w={"20vh"}
								src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5fc4feea074f5b86a6c62285_freshly-logo-R.svg"
								alt="FRESHLY"
							/>
						</Link>
					</Flex>
					<Flex flex={1} justify="space-between" alignItems="center">
						<Link to="#">Get $30</Link>
						<Link to="#">Help</Link>
						<Link to="#">Login</Link>
						<Button
							bg={"blue"}
							color="white"
							borderRadius={"none"}
							_hover={{
								bg: "blue",
							}}
						>
							<Link to="/signup"> Sign Up</Link>
						</Button>
					</Flex>
				</Flex>
			</Box>
		</>
	);
};
