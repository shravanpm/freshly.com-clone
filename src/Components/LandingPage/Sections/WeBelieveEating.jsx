import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import React from "react";
import styles from "./sections.module.css";

const WeBelieveEating = () => {
	return (
		<Box className={styles.weBelieveMainBox}>
			{/* Left text */}
			<Box className={styles.weBelieveBox}>
				<Flex direction="column" gap="20px">
					<Text fontSize="40px" fontWeight="600">
						We believe eating right should be easy for everyone.
					</Text>
					<Text>
						Each Freshly meal is perfectly sized for 1 person to enjoy at 1
						sitting. Our fully-prepared meals are delivered fresh, and ready to
						eat in 3 minutes. Learn More
					</Text>
					<Button
						width={{ sm: "100%", md: "120px", lg: "120px", xl: "120px" }}
						colorScheme="messenger"
						variant="solid"
						borderRadius="0"
					>
						Learn More
					</Button>
				</Flex>
			</Box>

			{/* Right image */}
			<Box className={styles.imageBox}>
				<Image
					src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f1275059fd961964f53287_22_Homepage_EatingBetterEasy_BG_866x708.jpg"
					alt="image"
				/>
			</Box>
		</Box>
	);
};

export default WeBelieveEating;
