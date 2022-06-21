import React from "react";

import "./Solution.css";

import solutions1 from "../Components/Images/solutions1.png";
import solutions2 from "../Components/Images/solutions2.jpg";
import endreport from "../Components/Images/endreporting.png";
import analyze from "../Components/Images/analyze.jpg";
import comming from "../Components/Images/commingsoon.png";

function Solution() {
	return (
		<>
			<section id="solution-1">
				<div className="container container1">
					<div className="row">
						<div className="col-lg-6 ">
							<h1 className="action-title mt-5">Actionable Retail data</h1>
							<p className="action-details">
								Marketplace ecosystems like Amazon, Flipkart are vast and more
								importantly – fragmented. For example, There is no one platform
								where you can find Amazon’s retail data and ads data in one
								place. We know what that means – either you spend hours finding
								data from different sources and putting them together in an
								excel file, or you end up making growth decisions in silos – but
								you probably never give up. We don’t know how you are doing this
								but we are here to change this.
							</p>
							<p className="action-details">
								We bring all retail, ads, inventory data together in one single
								platform so that you can take retail-aware growth decisions. We
								will enable you to:
							</p>
							<div>
								<div className="d-flex">
									<div>
										<div className="circle shadow-2">
											<i class="fas fa-2x fa-check p-1"></i>
										</div>
									</div>
									<div>
										<h6 className="mt-2 text ms-3">
											Use retail analytics to drive better advertising decisions
										</h6>
									</div>
								</div>
								<div className="d-flex mt-3">
									<div>
										<div className="circle shadow-2">
											<i class="fas fa-2x fa-check p-1"></i>
										</div>
									</div>
									<div>
										<h6 className="mt-2 text ms-3">
											Get timely recommendations on product level metrics
										</h6>
									</div>
								</div>
								<div className="d-flex mt-3">
									<div>
										<div className="circle shadow-2">
											<i class="fas fa-2x fa-check p-1"></i>
										</div>
									</div>
									<div>
										<h6 className="mt-2 text ms-3">
											Use retail analytics to drive better advertising decisions
										</h6>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							<img
								src={solutions1}
								alt="solutions1"
								width={"350px"}
								className="m-lg-5 solutions1"
							/>
						</div>
					</div>
				</div>
			</section>

			<section id="solution-2">
				<div className="container container1">
					<div className="row mt-3">
						<div className="col-lg-6">
							<img
								src={solutions2}
								width={"350px"}
								className="m-lg-5 costoptimization"
								alt="costoptimization"
							/>
						</div>
						<div className="col-lg-6">
							<h1 className="action-title mt-5">Optimize your ad spends</h1>
							<p className="action-details">
								Marketplace ad ecosystem is constantly changing - cost per
								clicks go up and down based on many factors like competitor ad
								strategy, customer interests, your own ad objectives etc. You
								keep sorting and filtering data to find opportunities for
								optimization, but it is never enough. We don’t know how you have
								not run out of patience yet but we are here to change this.
							</p>
							<p className="action-details">
								We bring you a robust optimization tool that highlights exactly
								what parameters need attention and provide automated
								recommendations on resolution. We enable you to:
							</p>
							<div>
								<div className="d-flex">
									<div>
										<div className="circle shadow-2">
											<i class="fas fa-2x fa-check p-1"></i>
										</div>
									</div>
									<div>
										<h6 className="mt-2 text ms-3">
											Get automated recommendations on campaign optimization;
											apply recommendations with single click
										</h6>
									</div>
								</div>
								<div className="d-flex mt-3">
									<div>
										<div className="circle shadow-2">
											<i class="fas fa-2x fa-check p-1"></i>
										</div>
									</div>
									<div>
										<h6 className="mt-2 text ms-3">
											Automate rule-based daily activities (ex. increasing bids
											for high performing keywords)
										</h6>
									</div>
								</div>
								<div className="d-flex mt-3">
									<div>
										<div className="circle shadow-2">
											<i class="fas fa-2x fa-check p-1"></i>
										</div>
									</div>
									<div>
										<h6 className="mt-2 text ms-3">
											Eliminate wasteful spends in real time and focus your
											funds on areas that matter
										</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="solution-3">
				<div className="container container1">
					<div className="row mt-5">
						<div className="col-lg-6">
							<h1 className="action-title mt-5">End to end reporting</h1>
							<p className="action-details">
								Ad reporting is complex with infinite rows in an excel sheet, no
								data visualization and no end in sight! We don’t know how your
								eyes are not hurting already but we are here to change this.
							</p>
							<p className="action-details">
								We bring you simple reporting tools that are flexible to your
								needs. We will enable you to:{" "}
							</p>
							<div>
								<div className="d-flex">
									<div>
										<div className="circle shadow-2">
											<i class="fas fa-2x fa-check p-1"></i>
										</div>
									</div>
									<div>
										<h6 className="mt-2 text ms-3">
											Get automated recommendations on campaign optimization;
											apply recommendations with single click
										</h6>
									</div>
								</div>
								<div className="d-flex mt-3">
									<div>
										<div className="circle shadow-2">
											<i class="fas fa-2x fa-check p-1"></i>
										</div>
									</div>
									<div>
										<h6 className="mt-2 text ms-3">
											Automate rule-based daily activities (ex. increasing bids
											for high performing keywords)
										</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<img
								src={endreport}
								width={"400px"}
								alt="endreporting"
								className="m-lg-5  endreporting"
							/>
						</div>
					</div>
				</div>
			</section>
			<section id="solution-4">
				<div className="container conteiner1">
					<div className="row mt-5">
						<div className="col-lg-6">
							<img
								src={analyze}
								width={"400px"}
								alt="analyze"
								className="m-lg-5 analyze"
							/>
						</div>
						<div className="col-lg-6">
							<span className="action-title mt-5">
								Analyze the full picture
							</span>
							<span>
								<img
									src={comming}
									alt="commingsoon"
									width={"70px"}
									style={{ marginBottom: "22px" }}
								/>
							</span>
							<p className="action-details">
								Ad strategies cannot be run in isolation without understanding
								how your competitors are performing. To improve your share of
								voice and share of sales, you have to know white spaces left out
								by competitors and double down on those.
							</p>
							<p className="action-details">We will enable you to:</p>
							<div>
								<div className="d-flex">
									<div>
										<div className="circle shadow-2">
											<i class="fas fa-2x fa-check p-1"></i>
										</div>
									</div>
									<div>
										<h6 className="mt-2 text ms-3">
											Get indexed data for your competitors strong and weak
											areas
										</h6>
									</div>
								</div>
								<div className="d-flex mt-3">
									<div>
										<div className="circle shadow-2">
											<i class="fas fa-2x fa-check p-1"></i>
										</div>
									</div>
									<div>
										<h6 className="mt-2 text ms-3">
											Get share of voice and share of sales with respect to your
											competitors so you can make better advertising decisions
											to better spend your money
										</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Solution;
