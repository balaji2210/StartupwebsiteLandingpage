import React from "react";
import "./Hero.css";
import brand from "../Components/Images/brand.png";
import content1 from "../Components/Images/bg.svg";

function Hero() {
	const scrollToSolution = () => {
		window.scroll(0, 750);
	};
	const scrollToFeatures = () => {
		window.scroll(0, 2870);
	};
	const scrollToContact = () => {
		window.scroll(0, 3650);
	};

	return (
		<>
			<section id="hero">
				<div className="container container1">
					<nav className="navbar navbar-expand-lg navbar-light">
						<div className="container">
							<div className="navbar-brand me-2">
								<img src={brand} width={"200px"} alt="brandicon" />
							</div>

							{/* <button
								className="navbar-toggler text-white"
								type="button"
								data-mdb-toggle="collapse"
								data-mdb-target="#navbarButtonsExample"
								aria-controls="navbarButtonsExample"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<i className="fas fa-bars"></i>
							</button> */}

							<div
								className="collapse navbar-collapse"
								id="navbarButtonsExample"
							>
								<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									<li className="nav-item"></li>
								</ul>

								<div className="d-flex align-items-center">
									<div
										type="button"
										className="btn text-white fs"
										onClick={scrollToSolution}
									>
										solutions
									</div>
									<div
										type="button"
										className="btn text-white fs"
										onClick={scrollToFeatures}
									>
										features
									</div>
									<div
										className="btn text-white fs"
										role="button"
										onClick={scrollToContact}
									>
										contact
									</div>
								</div>
							</div>
						</div>
					</nav>
				</div>

				<div className="container container1 text-white">
					<div className="row ">
						<div className="col-lg-6 content">
							Ecommerce Ad management and Optimization platform
							<div className="pt-4 subtext">
								Fully integrated e-commerce solution to monitor retail and ad
								metrics, optimize ad campaigns and profitably scale growth on
								Amazon
							</div>
							<div className="row g-3 align-items-center my-4">
								<div className="col-md-8  ">
									<input
										type="text"
										className="form-control form-control-lg w-100"
										placeholder="Enter your Email"
									/>
								</div>
								<div className="col-md-4  btn btn-lg btn-orange ">
									GET STARTED
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<img
								className="content1 ms-lg-5"
								src={content1}
								alt="hero-icon"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
