import React from "react";
import Navbar from "../components/Navbar";
import { Box, Image } from "@chakra-ui/react";
import HowItWorks from "../Sections/HowItWorks";
import OnTheMenu from "../Sections/OnTheMenu";
import FlexiblePlans from "../Sections/FlexiblePlans";
import TopSection from "../Sections/TopSection";
import WeBelieveEating from "../Sections/WeBelieveEating";
import HealthyMeals from "../Sections/HealthyMeals";
import { Footer } from "../../Footer";

const HomePage = () => {
	return (
		<Box w="100vw">
			<Navbar />
			<TopSection />
			<HowItWorks />
			<OnTheMenu />
			<FlexiblePlans />
			<WeBelieveEating />
			<HealthyMeals />
			<Image
				src="companiesBottomHP.png"
				alt="bottom"
				height={{ sm: "auto", md: "auto", lg: "auto" }}
			/>
			<Footer />
		</Box>
	);
};

export default HomePage;
