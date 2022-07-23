import React from "react";
import { Flex, Image, Button, Text, Box} from "@chakra-ui/react";
import Slider from "./Slider";
import { Link as RouterLink } from "react-router-dom";

const FlexiblePlans = () => {
	return (
		<Box bg="#fef9eb" p="20px" align="center">
			<Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192ce7669f68694a8b969af_Group%20(8).svg" />
			<Text fontSize="40px" fontWeight="bold">
				Flexible plans that fit your life
			</Text>
			<Text mb="60px" mt="10px" as="span">
				We offer anywhere from 4–12 meals per week, with meals as low as{" "}
			</Text>
			<Text style={{ display: "inline", color: "teal", fontWeight: "bold" }}>
				$8.99 each.
			</Text>{" "}
			<Text style={{ display: "inline", fontWeight: "bold" }}>
				The bigger your box, the more you’ll save{" "}
			</Text>
			<Text>
				and you can always pause, cancel, or change your plan at any time.
			</Text>
			<Flex gap="20px" justify="space-between" mt="40px">
				<Box>
					<Image
						w="200px"
						borderRadius="20px"
						src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9d75bbb20e8074e602_Rectangle%20108.jpg"
					/>
					<Text style={{ color: "teal" }} fontSize="25px" fontWeight="bold">
						4-5 Meals
					</Text>
				</Box>
				<Box>
					<Image
						w="200px"
						borderRadius="20px"
						src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9d5fc8ef6e6127d841_Rectangle%20108-1.jpg"
					/>
					<Text style={{ color: "teal" }} fontSize="25px" fontWeight="bold">
						6-7 Meals
					</Text>
				</Box>
				<Box>
					<Image
						w="200px"
						borderRadius="20px"
						src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9c24f1e287b2ea6a19_Rectangle%20108-2.jpg"
					/>
					<Text style={{ color: "teal" }} fontSize="25px" fontWeight="bold">
						8-9 Meals
					</Text>
				</Box>
				<Box>
					<Image
						w="200px"
						borderRadius="20px"
						src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9d58c6a6a96a2ad5ef_Rectangle%20108-3.jpg"
					/>
					<Text style={{ color: "teal" }} fontSize="25px" fontWeight="bold">
						10-11 Meals
					</Text>
				</Box>
				<Box>
					<Image
						w="200px"
						borderRadius="20px"
						src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9ccb70a3f88391e136_Rectangle%20108-4.jpg"
					/>
					<Text style={{ color: "teal" }} fontSize="25px" fontWeight="bold">
						12 Meals
					</Text>
				</Box>
			</Flex>
			<Text my="30px" style={{ color: "teal" }} fontWeight="500">
				Shipping and tax added at checkout
			</Text>
			<RouterLink color="green.800" to="/signup">
				<Button colorScheme="messenger" variant="solid" borderRadius="0">
					Sign Up Now
				</Button>
			</RouterLink>
			<Text fontSize="45px" fontWeight="700" mt="70px" mb="40px">
				What Others Are Saying
			</Text>
			<Slider />
		</Box>
	);
};

export default FlexiblePlans;
