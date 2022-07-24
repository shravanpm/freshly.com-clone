import React from "react";
import { Flex, Image, Button, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const OnTheMenu = () => {
	return (
		<Box
			backgroundImage="url('https://images.unsplash.com/photo-1624811533744-f85d5325d49c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
			backgroundRepeat="no-repeat"
			backgroundSize="cover"
			h="fit-content"
			p="35px"
		>
			<Box
				bg="white"
				w={{ sm: "97%", md: "80%", lg: "70%" }}
				m="auto"
				p="40px"
				align="left"
			>
				<Text fontSize="40px" fontWeight="bold" mb="10px">
					On the menu
				</Text>
				<Text mb="30px">
					Each Freshly meal is perfectly sized for 1 person to enjoy at 1
					sitting. Our fully-prepared meals are delivered fresh, and ready to
					eat in 3 minutes.
				</Text>
				<Flex gap="20px" justify="space-between" mb="30px">
					<Box>
						<Image
							// boxSize="200px"
							h="150px"
							borderRadius="20px"
							src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg"
						/>
						<Text fontWeight="bold">Steak Peppercorn</Text>
						<Text fontSize="14px">500 Cal | Gluten Free |</Text>
						<Text fontSize="13px">Single-Serve</Text>
					</Box>
					<Box>
						<Image
							h="150px"
							borderRadius="20px"
							src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8686c6708c070e7d41_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg"
						/>
						<Text fontWeight="bold">Homestyle Chicken</Text>
						<Text fontSize="14px">560 Cal | Gluten Free |</Text>
						<Text fontSize="13px">Single-Serve</Text>
					</Box>
					<Box>
						<Image
							h="150px"
							borderRadius="20px"
							src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b89b735739065897a4f_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg"
						/>
						<Text fontWeight="bold">Cauliflower Beef</Text>
						<Text fontSize="14px">490 Cal | Gluten Free |</Text>
						<Text fontSize="13px">Single-Serve</Text>
					</Box>
				</Flex>

				<Flex gap="20px" justify="space-between">
					<Box>
						<Image
							h="150px"
							borderRadius="20px"
							src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8bdf3b65081fd159c6_production-meal-image-f0de55be-d691-4ade-bc26-b4a8aedaa1fe-p-500.jpeg"
						/>
						<Text fontWeight="bold">Sausage Baked Penne</Text>
						<Text fontSize="14px">470 Cal | Gluten Free |</Text>
						<Text fontSize="13px">Single-Serve</Text>
					</Box>
					<Box>
						<Image
							h="150px"
							borderRadius="20px"
							src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8e6dd23b60cb122654_production-meal-image-92ec0fc1-d352-4720-9b83-96798ab8d2de.jpeg"
						/>
						<Text fontWeight="bold">Savory-Sweet Chicken</Text>
						<Text fontSize="14px">480 Cal | Gluten Free |</Text>
						<Text fontSize="13px">Single-Serve</Text>
					</Box>
					<Box>
						<Image
							h="150px"
							borderRadius="20px"
							src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640046931cb5d54bd5472_production-meal-image-7a62bb89-9bcb-4f1f-9f0f-d8372698d48e.jpeg"
						/>
						<Text fontWeight="bold">Chicken Parm</Text>
						<Text fontSize="14px">410 Cal | Gluten Free |</Text>
						<Text fontSize="13px">Single-Serve</Text>
					</Box>
				</Flex>
				<Link to="/plansandmenus">
					<Button
						w="100%"
						borderRadius="0"
						colorScheme="messenger"
						variant="solid"
						mt="30px"
					>
						View Plans & Menu
					</Button>
				</Link>
			</Box>
		</Box>
	);
};

export default OnTheMenu;
