import { Icon, textDecoration } from "@chakra-ui/react";
import React from "react";
import { TbChevronRight } from "react-icons/tb";
import { GrCircleQuestion } from "react-icons/gr";
import { TiArrowSortedDown } from "react-icons/ti";
import styled from "styled-components";
import CustomerSupport from "./CustomerSupport";
import { Link, useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

function NavbarSecond() {

	const id = window.location.pathname
	console.log(id)





	return (
		<div>
			<NavebarWrapper>
				<div>
					<RouterLink to="/">
						<img
							src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5fc4feea074f5b86a6c62285_freshly-logo-R.svg"
							alt="logo"
							width={100}
							height={100}
						/>
					</RouterLink>
				</div>
				<div>
					<RouteWrapper style={{ paddingTop: "10px" }}>
						{/* {id === "/checkout" ?   {}:{}} */}

						{id === "/deliverydate" ? <div style={{ display: "flex" }}>
							<Link to="/plans" style={{
								textDecoration: "underline",
								color: "blue",
							}}>Plans</Link>

							<div style={{ padding: "5px 8px " }}>
								<Icon as={TbChevronRight} />
							</div>

							<div>Date</div>

							<div style={{ padding: "5px 8px " }}>
								<Icon as={TbChevronRight} />
							</div>

							<div>Meals</div>

							<div style={{ padding: "5px 8px " }}>
								<Icon as={TbChevronRight} />
							</div>

							<div>Checkout</div>

						</div>
							: id === "/plans" ?
								<div style={{ display: "flex" }}>
									<div>Plans</div>
									<div style={{ padding: "5px 8px " }}>
										<Icon as={TbChevronRight} />
									</div>
									<div>Date</div>

									<div style={{ padding: "5px 8px " }}>
										<Icon as={TbChevronRight} />
									</div>

									<div>Meals</div>

									<div style={{ padding: "5px 8px " }}>
										<Icon as={TbChevronRight} />
									</div>

									<div>Checkout</div>

								</div>






								: id === "/checkout" ?

									<div style={{ display: "flex" }}>




										<Link to="/plans" style={{
											textDecoration: "underline",
											color: "blue",
										}}>Plans</Link>

										<div style={{ padding: "5px 8px " }}>
											<Icon as={TbChevronRight} />
										</div>



										<Link to="/deliverydate" style={{
											textDecoration: "underline",
											color: "blue",
										}}>Date</Link>

										<div style={{ padding: "5px 8px " }}>
											<Icon as={TbChevronRight} />
										</div>

										<Link to="/plansandmenus" style={{
											textDecoration: "underline",
											color: "blue",
										}}>Meals</Link>

										<div style={{ padding: "5px 8px " }}>
											<Icon as={TbChevronRight} />
										</div>
										<div>Checkout</div>

									</div>

									:
									<div style={{ display: "flex" }}>
										<div>Plans</div>
										<div style={{ padding: "5px 8px " }}>
											<Icon as={TbChevronRight} />
										</div>
										<div>Date</div>

										<div style={{ padding: "5px 8px " }}>
											<Icon as={TbChevronRight} />
										</div>

										<div>Meals</div>

										<div style={{ padding: "5px 8px " }}>
											<Icon as={TbChevronRight} />
										</div>

										<div>Checkout</div>

									</div>
									
						}




					</RouteWrapper>
				</div>


        <div>
          <RouteWrapper>
            <div style={{ paddingTop: "15px" }}>
              <Icon as={GrCircleQuestion} />
            </div>

						<div
							style={{
								padding: "5px",
								textDecoration: "underline",
								color: "blue",
							}}
						>

						</div>
						<div style={{ padding: "5px " }}>
							<CustomerSupport />
						</div>
					</RouteWrapper>
				</div>
			</NavebarWrapper>
		</div>
	);

}

export default NavbarSecond;
const NavebarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  height: 70px;

  background-color: white;
`;
const RouteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const dateWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
