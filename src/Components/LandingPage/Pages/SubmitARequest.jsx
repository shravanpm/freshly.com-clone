import {
	Box,
	Flex,
	Text,
	InputGroup,
	InputLeftElement,
	Input,
	Spacer,
	FormControl,
	FormLabel,
	Button,
	FormHelperText,
	Heading,
  Textarea,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";
import HelpNavbar from "./Help/HelpNavbar";
import Footer from "./Help/Footer";

const SubmitARequest = () => {
	return (
		<Box backgroundColor="#fffdf7">
			<HelpNavbar />
			<Flex w="90%" m="auto" mt="30px">
				<Text>Freshly {">"} Submit a request</Text>
				<Spacer />
				<InputGroup w="200px">
					<InputLeftElement
						pointerEvents="none"
						children={<SearchIcon color="gray.500" />}
					/>
					<Input bg="white" borderRadius="20px" placeholder="Search" />
				</InputGroup>
			</Flex>

			{/* Form */}
			<Box w="40%" m="5%" align="left">
				<Heading size="lg" mb="30px">Submit a request</Heading>
				<FormControl>
					<FormLabel>Your email address</FormLabel>
					<Input bg="white" type="email" />
					<FormLabel mt="20px">Subject</FormLabel>
					<Input bg="white" type="email" />
					<FormLabel mt="20px">Tell us about your issue:</FormLabel>
					<Input bg="white" type="email" />
					<FormLabel mt="20px">How can we help you?</FormLabel>
					<Textarea bg="white" type="email" />
					<FormHelperText>
						Please describe what you need help with and someone will get back to
						you! Our average response time for support requests during business
						hours is just 30 minutes... zoom, zoom!
					</FormHelperText>
          <FormLabel mt="20px">Attachments (optional)</FormLabel>
          <Input align="left" border="none" type="file" />
				</FormControl>
        <Button color="white" bg="green.800" mt="40px" w="150px">Submit</Button>
			</Box>

      <Footer />
		</Box>
	);
};

export default SubmitARequest;
