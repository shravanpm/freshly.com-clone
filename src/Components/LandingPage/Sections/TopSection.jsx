import React from "react";
import {
	Flex,
	Image,
	VStack,
	HStack,
	Button,
	Text,
	Box,
	Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const TopSection = () => {
	return (
		<Box w="100%" bg="#fef9eb">
			{/* Top section */}
			{/* Left image */}
			<Flex direction={{ sm: "column", md: "column", lg: "row" }}>
				<Box maxH="400px" w={{ sm: "100%", md: "100%", lg: "50%" }}>
					<Image
						src="TopImage1_HP.png"
						alt="logo"
						height={{ sm: "auto", md: "auto", lg: "400px" }}
					/>
				</Box>
				{/* Right part top section */}
				<Box
					bg="#85e5c6"
					maxH="400px"
					w={{ sm: "100%", md: "100%", lg: "50%" }}
				>
					<VStack>
						<Text fontSize="45px" fontWeight="bold" p="20px">
							Balanced Meal for busy lives.
						</Text>
						<HStack p="20px">
							<RouterLink to="/plans">
								<Button
									borderColor="blue"
									color="blue"
									bg="white"
									variant="solid"
									borderRadius="0"
								>
									Explore Meals
								</Button>
							</RouterLink>
							<RouterLink to="/signup">
								<Button
									colorScheme="messenger"
									variant="solid"
									borderRadius="0"
								>
									Get Started
								</Button>
							</RouterLink>
						</HStack>
						<Text fontSize="15px" fontWeight="bold" p="20px">
							Enjoy flexible weekly plans, with meals as low as
							<Link color="blue">$8.99/serving</Link>. The bigger your box, the
							more you'll save!
						</Text>
					</VStack>
				</Box>
			</Flex>
		</Box>
	);
};

export default TopSection;
