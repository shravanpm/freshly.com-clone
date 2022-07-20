import {
	Flex,
	Spacer,
	Image,
	Center,
	HStack,
	Button,
	Link,
} from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import React from "react";
import styles from "./Navbar.module.css";
// import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
	// const handleIconClick = () => {
	// 	console.log("clicked");
	// };
	return (
		<Flex
			className={styles.navbarHP}
			gap={{ sm: "5px", md: "15px", lg: "20px" }}
		>
			{/* Logo */}
			<Center>
				<Image
					width="100px"
					src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5fc4feea074f5b86a6c62285_freshly-logo-R.svg"
					alt="logo"
				/>
			</Center>

			<Spacer />
			{/* Middle menu */}
			<Center>
				<HStack gap={{ sm: "5px", md: "10px", lg: "20px" }}>
					<Link className={`${styles.linksHome} ${styles.hide}`}>
						Plans & Menu
					</Link>
					<Link className={`${styles.linksHome} ${styles.hide}`}>
						How it Works
					</Link>
					<Link className={`${styles.linksHome} ${styles.hide}`}>Gifts</Link>
					<Link className={`${styles.linksHome} ${styles.hide}`}>
						Refer a Friend
					</Link>
					<Link
						href="http://localhost:3000/help"
						className={`${styles.linksHome} ${styles.hide}`}
					>
						Help
					</Link>
				</HStack>
			</Center>

			<Spacer />
			{/* Buttons */}
			<Center>
				<HStack>
					<Button
						colorScheme="black"
						variant="ghost"
						size={{ sm: "xs", md: "md", lg: "lg" }}
						className={styles.hide}
					>
						Login
					</Button>
					<Button
						size={{ sm: "xs", md: "md", lg: "lg" }}
						className={`${styles.hide}`}
						colorScheme="messenger"
						variant="solid"
						borderRadius="0"
					>
						Sign Up
					</Button>
				</HStack>
			</Center>

			{/* <Center>
				<GiHamburgerMenu
					className={styles.HamburgerIcon}
					onClick={handleIconClick}
				/>
			</Center> */}
		</Flex>
	);
};

export default Navbar;

// #3167ff
