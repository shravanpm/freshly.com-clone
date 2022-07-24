import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/LandingPage/Pages/HomePage";

import Cart from "../Pages/Cart/Cart";
import { Plans } from "../Pages/Plans/plans";
import DateSelector from "../Pages/DateSelector/DateSelector";
import { MenuPlans } from "../Pages/MenuPlans/MenuPlans";
import { Login } from "../Pages/Authentication/Login";
import { SignUp } from "../Pages/Authentication/SignUp";
import { Checkout } from "./Checkout/Checkout";
import Help from "./LandingPage/Pages/Help/Help";
import SubmitARequest from "./LandingPage/Pages/SubmitARequest";
import RequiredAuth from "./RequiredAuth";
import { Payment } from "./Checkout/Payment";
import { Thankyou } from "./Checkout/Thankyou";

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/help" element={<Help />} />
			<Route path="/submitARequest" element={<SubmitARequest />} />
			<Route
				path="/cart"
				element={
					<RequiredAuth>
						<Cart />
					</RequiredAuth>
				}
			/>
			<Route
				path="/deliverydate"
				element={
					<RequiredAuth>
						<DateSelector />
					</RequiredAuth>
				}
			/>
			<Route path="/plans" element={<Plans />} />
			<Route
				path="/payment"
				element={
					<RequiredAuth>
						<Payment />
					</RequiredAuth>
				}
			/>
			<Route path="/thankyou" element={<Thankyou />} />
			<Route path="/plansandmenus" element={<MenuPlans />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
			<Route
				path="/checkout"
				element={
					<RequiredAuth>
						<Checkout />
					</RequiredAuth>
				}
			/>
		</Routes>
	);
};

export default AllRoutes;
