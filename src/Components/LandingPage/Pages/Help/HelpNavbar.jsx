import React from "react";
import { Box, Flex, Center, Image, Spacer } from "@chakra-ui/react";
import styles from "../../components/Navbar.module.css";
import { Link as RouterLink } from "react-router-dom";

const HelpNavbar = () => {
	return (
		<Box className={styles.navbarHP}>
			<Flex>
				{/* Logo */}
				<Center>
					<RouterLink to="/">
						<Image
							width="100px"
							src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5fc4feea074f5b86a6c62285_freshly-logo-R.svg"
							alt="logo"
						/>
					</RouterLink>
				</Center>

				<Spacer />

				<Flex gap="30px">
					<RouterLink to="/submitARequest" color="green.800">
						Submit a request
					</RouterLink>
					<RouterLink color="green.800" to="/login">
						Sign In
					</RouterLink>
				</Flex>
			</Flex>
		</Box>
	);
};

export default HelpNavbar;
