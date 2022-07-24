import React, { useEffect, useState } from "react";
import {
	Box,
	Flex,
	Heading,
	HStack,
	Image,
	Select,
	SimpleGrid,
	Stack,
	Center,
	Tag,
	Text,
} from "@chakra-ui/react";
import Navbar from "../../Components/LandingPage/components/Navbar";
import { CommonQstns } from "../../Components/MenuPlans/CommonQstns";
import { Footer } from "../../Components/Footer";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getData } from "../../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { MenuCard } from "../../Components/MenuPlans/MenuCard";
export const MenuPlans = () => {
	let [searchParams, setSearchParams] = useSearchParams();
	const urlcategory = searchParams.get("category");
	const [category, setCategory] = useState(urlcategory || "");
	const dispatch = useDispatch();
	const handleCategory = (e) => {
		const { value } = e.target;
		// console.log(value);
		setCategory(value);
	};
	const data = useSelector((state) => state.appReducer.data);
	const navigate = useNavigate();

	useEffect(() => {
		let Category = searchParams.get("category") || category;
		if (!category) {
			Category = "";
		}
		let params;
		if (Category) {
			params = { category: category };
		} else {
			setSearchParams("");
			dispatch(getData());
		}
		setSearchParams(params);
		dispatch(getData(params));
	}, [category]);

	return (
		<Box backgroundColor={"rgb(255,253,247)"}>
			{/*----------------------------------- Navbar -----------------------------------  */}
			<Navbar />

			{/* ---------------------------------- Banner ----------------------------------- */}
			<Center w="60%" m="auto">
				<Stack mt="80px" mb="40px">
					<Center>
						<Image
							src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192ce7669f68694a8b969af_Group%20(8).svg"
							alt="img"
						/>
					</Center>
					<Heading>Flexible plans that fit your life</Heading>
					<Text fontWeight={"500"}>
						We offer anywhere from 4–12 meals per week, with meals as low as
						$8.99 each. The bigger your box, the more you’ll save—and you can
						always pause, cancel, or change your plan at any time.
					</Text>
				</Stack>
			</Center>

			{/*------------------------------------- Plans Block -------------------------------------*/}
			<SimpleGrid columns={[1, 2, 5]} gap="10px" w="95%" mt="50px" m="auto">
				<Box>
					<Box
						backgroundImage="url('https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9d75bbb20e8074e602_Rectangle%20108.jpg')"
						h="150px"
						backgroundSize="cover"
						onClick={() => {
							navigate("/deliverydate");
						}}
						borderRadius={"20px"}
						cursor="pointer"
						w="230px"
					></Box>
					<Heading mt="10px" fontSize={"30px"} color={"rgb(53,116,113)"}>
						{`4-5 Meals`}
					</Heading>
				</Box>

				<Box>
					<Box
						backgroundImage="url('https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9d5fc8ef6e6127d841_Rectangle%20108-1.jpg')"
						h="150px"
						backgroundSize="cover"
						borderRadius={"20px"}
						onClick={() => {
							navigate("/deliverydate");
						}}
						cursor="pointer"
						w="230px"
					>
						<Tag
							backgroundColor={"rgb(133,229,198)"}
							fontWeight="bold"
							p="5px 15px"
							m="10px 0px"
							ml="-70px"
							borderRadius={"15px"}
						>
							Save up to $12
						</Tag>
					</Box>
					<Heading mt="10px" fontSize={"30px"} color={"rgb(53,116,113)"}>
						{`6-7 Meals`}
					</Heading>
				</Box>

				<Box>
					<Box
						backgroundImage="url('https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9c24f1e287b2ea6a19_Rectangle%20108-2.jpg')"
						h="150px"
						backgroundSize="cover"
						borderRadius={"20px"}
						cursor="pointer"
						onClick={() => {
							navigate("/deliverydate");
						}}
						w="230px"
					>
						<Tag
							backgroundColor={"rgb(133,229,198)"}
							fontWeight="bold"
							p="5px 15px"
							m="10px 0px"
							ml="-70px"
							borderRadius={"15px"}
						>
							Save up to $20
						</Tag>
					</Box>
					<Heading mt="10px" fontSize={"30px"} color={"rgb(53,116,113)"}>
						{`8-9 Meals`}
					</Heading>
				</Box>

				<Box>
					<Box
						backgroundImage="url('https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9d58c6a6a96a2ad5ef_Rectangle%20108-3.jpg')"
						h="150px"
						backgroundSize="cover"
						borderRadius={"20px"}
						onClick={() => {
							navigate("/deliverydate");
						}}
						cursor="pointer"
						w="230px"
					>
						<Tag
							backgroundColor={"rgb(133,229,198)"}
							fontWeight="bold"
							p="5px 15px"
							m="10px 0px"
							ml="-70px"
							borderRadius={"15px"}
						>
							Save up to $27
						</Tag>
					</Box>
					<Heading mt="10px" fontSize={"30px"} color={"rgb(53,116,113)"}>
						{`10-11 Meals`}
					</Heading>
				</Box>

				<Box>
					<Box
						backgroundImage="url('https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9ccb70a3f88391e136_Rectangle%20108-4.jpg')"
						h="150px"
						backgroundSize="cover"
						borderRadius={"20px"}
						onClick={() => {
							navigate("/deliverydate");
						}}
						cursor="pointer"
						w="230px"
					>
						<Tag
							backgroundColor={"rgb(133,229,198)"}
							fontWeight="bold"
							p="5px 15px"
							m="10px 0px"
							ml="-70px"
							borderRadius={"15px"}
						>
							Save up to $33
						</Tag>
					</Box>
					<Heading mt="10px" fontSize={"30px"} color={"rgb(53,116,113)"}>
						{`12 Meals`}
					</Heading>
				</Box>
			</SimpleGrid>
			<Stack mt="20px">
				<Center>
					<Text color="rgb(53,116,121)" fontWeight={"semibold"}>
						Shipping and tax added at checkout
					</Text>
				</Center>
				<Box mt="1px">
					<Center m="20px 0px">
						<Box
							backgroundColor={"rgb(49,103,255)"}
							color="white"
							p="10px 20px"
							fontSize={"22"}
						>
							Get Started
						</Box>
					</Center>
				</Box>
			</Stack>
			{/* ---------------------------------- On the menu block ---------------------------------- */}
			<Box mt="15px">
				<Center w="60%" m="auto">
					<Stack>
						<Box>
							<Heading>On the Menu</Heading>
						</Box>
						<Box>
							<Text>
								Whatever your lifestyle, Freshly’s got you covered—with
								gluten-free, dairy-free, plant-based, carb-smart, and
								calorie-conscious meal options! Our heat-&-eat breakfasts,
								low-lift lunches, and done-for-you dinners provide an effortless
								alternative to everyday cooking, with nutritious prepared meals
								delivered fresh to your door. Explore this week’s dishes and
								start eating better:
							</Text>
						</Box>
					</Stack>
				</Center>
			</Box>
			{/* ------------------------------ filter selecting option ------------------------------ */}
			<Flex w="40%" m="auto" mt="20px">
				<Text color="rgb(140,140,140)">Menu Category :</Text>
				<Box w="100px" fontSize={"12px"} ml="10px" pt="4px" pb="20px">
					<Select
						placeholder="All Meals"
						fontSize={"12px"}
						h="22px"
						w="180px"
						fontWeight={"semibold"}
						value={category}
						onChange={handleCategory}
					>
						<option value="PurePlant">Purely Plant</option>
						<option value="SignatureCollection">Signature Collection</option>
						<option value={"FreshlyFitted"}> FreshlyFit</option>
						<option value={"ProteinSides"}>Proteins & Sides</option>
					</Select>
				</Box>
			</Flex>
			{/* -------------------------------- rendering product --------------------------------  */}
			<Box
				w="97%"
				mt="20px"
				m="auto"
				pt="15px"
				pl="20px"
				// mb="-100px"
				backgroundColor="white"
			>
				<SimpleGrid columns={[1, 2, 4]}>
					{data.length !== 0 &&
						data.map((meal) => <MenuCard data={meal} key={meal.id} />)}
				</SimpleGrid>
			</Box>
			{/* ------------------------------ footer banner and below ------------------------------*/}

			<Box h="fit-content">
				<Box w="60%" m="auto" pt="50px">
					<Stack>
						<Heading>For Every Diet & Lifestyle</Heading>
						<Text fontWeight={"500"}>
							We’re here to make every dish delicious and nutritious, with
							prepared meals that satisfy a wide range of tastes—all
							meticulously crafted to meet your dietary wants and needs.
						</Text>
					</Stack>
				</Box>
				<Flex
					justifyContent={"space-between"}
					p="0px 10px 0px 0px"
					pt="50px"
					pb="30px"
				>
					{[
						{
							img: "https://assets-global.website-files.com/5d03b4e130118314af624b20/620001104582091be7236479_Freshly_Iconography_DietaryIcons-03-p-500.png",
							title: "Purely Plant",
							subTitle: "Plant-based meals for everyone",
						},
						{
							img: "https://assets-global.website-files.com/5d03b4e130118314af624b20/6200014b6c9c4f739d8a120f_Freshly_Iconography_DietaryIcons-05-p-500.png",
							title: "Gluten Free",
							subTitle: "Certified by the Gluten Intolerance Group",
						},
						{
							img: "https://assets-global.website-files.com/5d03b4e130118314af624b20/62000182acc5e0f3435178cb_Freshly_Iconography_DietaryIcons-02-p-500.png",
							title: "Dairy Free Meals",
							subTitle: "Dairy free prepared meals for all tastes",
						},
						{
							img: "https://assets-global.website-files.com/5d03b4e130118314af624b20/620002995a9c84ce8cc5dc3b_Freshly_Iconography_DietaryIcons-01-p-500.png",
							title: "Carb-Smart",
							subTitle: "Chef-crafted low-carb meals",
						},
						{
							img: "https://assets-global.website-files.com/5d03b4e130118314af624b20/620002cf09966d7359a8b2e8_Freshly_Iconography_DietaryIcons-04-p-500.png",
							title: "Calorie-Conscious",
							subTitle: "Low-calorie meal plan with perfect portions",
						},
					].map((item, index) => (
						<Stack key={index} w="200px">
							<Image src={item.img} />
							<Heading as="h5" size="md">
								{item.title}
							</Heading>
							<Center w="80%" m="auto">
								<Text>{item.subTitle}</Text>
							</Center>
						</Stack>
					))}
				</Flex>
			</Box>
			{/* -------------------------------- common questions -------------------------------- */}
			<Box>
				<Box backgroundColor={"white"} pt="15px">
					<br />
					<Box m="auto">
						<CommonQstns />
					</Box>
				</Box>
			</Box>
			{/* ------------------------------------- footer ------------------------------------- */}
			<Box>
				<Box>
					<Footer />
				</Box>
			</Box>
		</Box>
	);
};
