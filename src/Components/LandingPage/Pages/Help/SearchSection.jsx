import React from "react";
import { Box, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import styles from "./Help.module.css";

const SearchSection = () => {
	return (
		<Box className={styles.helpSearch}>
			<InputGroup w="50%" m="auto">
				<InputLeftElement
					mt="15%"
					pointerEvents="none"
					children={<SearchIcon color="gray.500" />}
				/>
				<Input mt="15%" bg="white" borderRadius="20px" placeholder="Search" />
			</InputGroup>
		</Box>
	);
};

export default SearchSection;
