import React from "react";
import { Box, Grid, GridItem, Button } from "@chakra-ui/react";

const questions = [
	"What is Freshly?",
	"How Does Your Service Work?",
	"Meal Plans & Pricing",
	"About the Meals",
	"Dietary & Nutritional Information",
	"Packaging & Recycling",
	"Managing My Subscription",
	"All Things App",
	"Managing an Order",
	"Payment & Promotions",
	"Delivery & Shipping",
	"Technical Support",
];

const HelpQuestions = () => {
	return (
		<Box w="80%" m="3% auto">
			<Grid templateColumns="repeat(3, 1fr)" gap={6}>
				{questions.map((el,ind) => (
					<GridItem w="100%" h="10" key={ind}>
						{" "}
						<Button w="25vw" colorScheme="teal" variant="outline">
							{el}
						</Button>
					</GridItem>
				))}
			</Grid>
			<Button w="100%" colorScheme="teal" variant="outline" mt="20px">
				Our Commitment to Food Safety
			</Button>
		</Box>
	);
};

export default HelpQuestions;
