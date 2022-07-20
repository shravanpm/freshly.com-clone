import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Help from "../Pages/Help";
import SubmitARequest from "../Pages/SubmitARequest";

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/help" element={<Help />} />
			<Route path="/submitARequest" element={<SubmitARequest />} />
		</Routes>
	);
};

export default AllRoutes;
