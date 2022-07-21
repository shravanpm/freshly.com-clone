import { Box, Flex, Text, Button, Image, Input } from "@chakra-ui/react";
import React from "react";
import styles from "./sections.module.css";

const HealthyMeals = () => {
	return (
		<Box className={styles.healthyMealsMainBox}>
			{/* Left image */}

			<Box className={styles.imageBox}>
				<Image
					src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f1274f0c096f517bb89ed5_22_Homepage_HealthyMealsDelivered_866x708.jpg"
					alt="image"
				/>
			</Box>
			{/* Right text */}
			<Box className={styles.healthyMealsBox}>
				<Flex direction="column" gap="20px">
					<Text fontSize="40px" fontWeight="600">
						Healthy Meals Delivered Weekly
					</Text>
					<Input placeholder="freshly@freshly.com" />
					<Input placeholder="zip" />
					<Button
						width={{ sm: "100%", md: "120px", lg: "120px", xl: "120px" }}
						colorScheme="messenger"
						variant="solid"
						borderRadius="0"
					>
						Get Started
					</Button>
					<Text>
						Already have an account?<span>Log in.</span>
					</Text>
					<Text>
						By continuing, you agree to our <span>Terms{" "}</span>and{" "}
						<span>Privacy Policy</span>
						{" "}& will receive emails from Freshly.
					</Text>
				</Flex>
			</Box>
		</Box>
	);
};

export default HealthyMeals;
