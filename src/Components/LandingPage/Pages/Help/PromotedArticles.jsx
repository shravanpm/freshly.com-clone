import React from "react";
import { Box, Text, Grid, GridItem, Link } from "@chakra-ui/react";

const questions = [
	"What is Freshly?",
	"What should I know before I order?",
	"How much do your meal plans cost?",
	"How many servings are in a meal?",
	"How do I heat up my meals?",
	"Do the meals have a use-by date, and can I freeze my meals?",
	"Where are your meals cooked?",
	"What am I committing to with a subscription?",
	"How do I cancel a subscription?",
	"Where do you deliver?",
];

const PromotedArticles = () => {
	return (
		<Box align="left" w="80%" m="auto" mb="40px">
			<Text fontSize="25px" mb="30px">Promoted articles</Text>
			<Grid templateColumns="repeat(3, 1fr)" gap={6} mt="15px">
				{questions.map((el,ind) => (
					<GridItem w="100%" h="10" key={ind}>
						{" "}
						<Box borderBottom="1px" borderColor="gray.300" h="60px">
							<Link
								color="teal.700"
								w="25vw"
								colorScheme="teal"
								variant="outline"
							>
								{el}
							</Link>
						</Box>
					</GridItem>
				))}
			</Grid>
		</Box>
	);
};

export default PromotedArticles;
