import {
	Flex,
	Spacer,
	Image,
	Center,
	HStack,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	Text,
	Box,
	Input,
} from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import React from "react";
import styles from "./Navbar.module.css";
// import { GiHamburgerMenu } from "react-icons/gi";
import { useDisclosure } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import {
	FaFacebookMessenger,
	FaTwitter,
	FaWhatsapp,
	FaPinterest,
} from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {

	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Flex
			className={styles.navbarHP}
			gap={{ sm: "5px", md: "15px", lg: "20px" }}
		>
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
			{/* Middle menu */}
			<Center>
				<HStack gap={{ sm: "5px", md: "10px", lg: "20px" }}>
					<RouterLink
						to="/plansandmenus"
						className={`${styles.linksHome} ${styles.hide}`}
					>
						Plans & Menu
					</RouterLink>
					<RouterLink to="/" className={`${styles.linksHome} ${styles.hide}`}>
						How it Works
					</RouterLink>
					<RouterLink to="/" className={`${styles.linksHome} ${styles.hide}`}>
						Gifts
					</RouterLink>
					<RouterLink
						to="/"
						className={`${styles.linksHome} ${styles.hide}`}
						onClick={onOpen}
					>
						Refer a Friend
					</RouterLink>

					{/* ***************************************************** */}

					<Modal isOpen={isOpen} onClose={onClose}>
						<ModalOverlay />
						<ModalContent minW="700px">
							{/* <ModalHeader>Modal Title</ModalHeader> */}
							<ModalCloseButton bg="#669966" borderRadius="50%" color="white" />
							<ModalBody p="0">
								<Flex>
									<Box>
										<Image
											src="https://origin.xtlo.net/type=creativeArchive:clientId=234960547:creativeArchiveId=7109037448615810170:version=5:coreAssetsVersion=1544591110405/img/POP_UP_1655201914801.jpg"
											alt="modal"
											height="100%"
										/>
									</Box>
									<Box align="center" p="20px">
										<Text fontSize="30px" color="green.900" fontWeight="bold">
											12 Free Meals for Friends, $30 Just for You!
										</Text>
										<Text
											fontSize="16px"
											color="green.900"
											fontWeight="600"
											mt="10px"
										>
											Refer your friends and earn $30 for each friend who joins!
										</Text>
										<Text
											fontSize="12px"
											color="green.900"
											fontWeight="500"
											mt="30px"
										>
											Enter your email to get your share link
										</Text>
										<HStack mt="10px">
											<Input placeholder="Your email" borderRadius="50px" />
											<Button
												bg="#669966"
												color="white"
												borderRadius="50px"
												px="25px"
											>
												Enter
											</Button>
										</HStack>
										<HStack mt="10px">
											<Button
												bg="#669966"
												color="white"
												borderRadius="50px"
												px="25px"
												w="150px"
												leftIcon={<MdEmail />}
											>
												EMAIL
											</Button>
											<Button
												colorScheme="facebook"
												borderRadius="50px"
												px="25px"
												w="150px"
												leftIcon={<GrFacebookOption />}
											>
												FACEBOOK
											</Button>
										</HStack>
										<HStack mt="10px">
											<Button
												colorScheme="messenger"
												borderRadius="50px"
												px="25px"
												w="150px"
												leftIcon={<FaFacebookMessenger />}
											>
												MESSENGER
											</Button>
											<Button
												colorScheme="twitter"
												borderRadius="50px"
												px="25px"
												w="150px"
												leftIcon={<FaTwitter />}
											>
												TWITTER
											</Button>
										</HStack>
										<HStack mt="10px">
											<Button
												colorScheme="whatsapp"
												borderRadius="50px"
												px="25px"
												w="150px"
												leftIcon={<FaWhatsapp />}
											>
												WHATSAPP
											</Button>
											<Button
												bg="#bd081c"
												color="white"
												borderRadius="50px"
												px="25px"
												w="150px"
												leftIcon={<FaPinterest />}
											>
												PINTEREST
											</Button>
										</HStack>

										<Box mt="30px">
											<Text fontSize="12px">
												How It Works | My Stats | Powered by Extole
											</Text>
										</Box>
									</Box>
								</Flex>
							</ModalBody>
						</ModalContent>
					</Modal>

					{/* ************************************************ */}
					<RouterLink
						to="/help"
						href="http://localhost:3000/help"
						className={`${styles.linksHome} ${styles.hide}`}
					>
						Help
					</RouterLink>
				</HStack>
			</Center>

			<Spacer />
			{/* Buttons */}
			<Center>
				<HStack>
					<RouterLink to="/login">
						<Button
							colorScheme="black"
							variant="ghost"
							size={{ sm: "xs", md: "md", lg: "lg" }}
							className={styles.hide}
						>
							Login
						</Button>
					</RouterLink>
					<RouterLink to="/signup">
						<Button
							size={{ sm: "xs", md: "md", lg: "lg" }}
							className={`${styles.hide}`}
							colorScheme="messenger"
							variant="solid"
							borderRadius="0"
						>
							Sign Up
						</Button>
					</RouterLink>
				</HStack>
			</Center>
		</Flex>
	);
};

export default Navbar;

// #3167ff
