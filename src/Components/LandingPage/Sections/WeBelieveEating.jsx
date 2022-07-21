import { Box, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import styles from "./sections.module.css"

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
                        width="120px"
						colorScheme="messenger"
						variant="solid"
						borderRadius="0"
					>
						Learn More
					</Button>
				</Flex>
			</Box>

            {/* Right image */}
		</Box>
	);
};

export default WeBelieveEating;
