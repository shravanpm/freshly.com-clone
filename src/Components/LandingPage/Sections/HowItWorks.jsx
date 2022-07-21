import React from "react";
import { Flex, Image, Text, Box } from "@chakra-ui/react";

const HowItWorks = () => {
	return (
		<Box bg="#fef9eb" p="20px" height="fit-content">
			<Text fontSize="35px" fontWeight="bold" mt="10px" mb="30px">
				How it works
			</Text>
			<Flex
				gap="20px"
				justify="space-evenly"
				align="center"
				direction={{ sm: "column", md: "row", lg: "row" }}
			>
				<Box align="center" w="200px" h="fit-content">
					<Image
						mb="20px"
						src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19dbc5f55c4206158f7_choose-your-meals%20(1).svg"
					/>
					<Text fontSize="20px" fontWeight="bold">
						Choose Your Meals
					</Text>
					<Text>Rotating menu of 50+ balanced dishes.</Text>
				</Box>
				<Box align="center" w="200px" h="fit-content">
					<Image
						mt="-10px"
						mb="20px"
						src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b358b954d12f769ba_we-cook-deliver%20(1).svg"
					/>
					<Text fontSize="20px" fontWeight="bold">
						We Cook & Deliver
					</Text>
					<Text>Fully-cooked meals sent fresh, not frozen.</Text>
				</Box>
				<Box align="center" w="200px" h="fit-content">
					<Image
						mb="20px"
						src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b53e85f79fe3374c5_chill-reheat.svg"
					/>
					<Text fontSize="20px" fontWeight="bold">
						Chill & Reheat
					</Text>
					<Text>Refrigerate meals & reheat in 3 minutes.</Text>
				</Box>
				<Box align="center" w="200px" h="fit-content">
					<Image
						mb="20px"
						src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b83b282277e15a7af_eat-repeat.svg"
					/>
					<Text fontSize="20px" fontWeight="bold">
						Eat & Repeat
					</Text>
					<Text>Change meals, skip a week, or cancel any time.</Text>
				</Box>
			</Flex>
		</Box>
	);
};

export default HowItWorks;
