import React from "react";
import card1 from "../Components/Images/card1.png";
import card2 from "../Components/Images/card2.jpg";
import card3 from "../Components/Images/card3.png";
import card4 from "../Components/Images/card4.png";
import "./Card.css";

function Card() {
	return (
		<div>
			<section id="cards">
				<h1 className="text-center p-3">Why SkootHat?</h1>
				<div className="container container1">
					<div className="row my-5">
						<div className="col-lg-3 col-md-6 mb-3">
							<div className="card ">
								<img
									src={card1}
									className="card-img-top p-5"
									alt="Ads that are retail-aware"
								/>
								<div className="card-body">
									<h5 className="card-title text-center">
										Ads that are retail-aware
									</h5>
									<p className="card-text pb-5 mt-4">
										We do not look at ads in isolation. We bring together retail
										and ad metrics together to drive objective driven growth
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-3">
							<div className="card ">
								<img
									src={card2}
									className="card-img-top p-2 "
									alt="Automation at the core"
								/>
								<div className="card-body">
									<h5
										className="card-title text-center"
										style={{ marginTop: "-20px !important" }}
									>
										Automation at the core
									</h5>
									<span className="card-text">
										We know how hard you have had to work to find the big and
										small opportunities to optimize ads. Time to relax - we
										provide automated recommendations that can be reviewed and
										accepted with a click of a button.
									</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-3">
							<div className="card">
								<img
									src={card3}
									className="card-img-top p-5"
									alt="Budget Planning"
								/>
								<div className="card-body">
									<h5 className="card-title text-center">Budget Planning</h5>
									<p className="card-text">
										Making scientific decisions on how much to spend on new
										launched SKUs or focus SKU’s was almost non-existent –
										u.n.t.i.l t.o.d.a.y. We will help you plan your budgets and
										stick to them
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 ">
							<div className="card">
								<img
									src={card4}
									className="card-img-top p-5"
									alt="Fissure in Sandstone"
								/>
								<div className="card-body pb-5">
									<h5 className="card-title text-center">
										Ready-made insights
									</h5>
									<p className="card-text pb-5">
										There are granular, detailed keyword by keyword insights and
										then there are 1 line insights. Well, we give you both, and
										more!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container container1">
					<div className="row ">
						<div className="col-lg-6 image"></div>
						<div className="col-lg-6 my-5 ">
							<h1 className="text-center">GET IN TOUCH WITH US!</h1>
							<div className="container mt-5">
								<form>
									<div className="mb-3">
										<input
											type="text"
											className="form-control form-control-lg "
											placeholder="What's your name?"
										/>
									</div>
									<div className="mb-3 mt-5">
										<input
											type="email"
											className="form-control form-control-lg "
											placeholder="What's your email?"
										/>
									</div>
									<div className="mb-3 mt-5">
										<textarea
											rows={"5"}
											type="text"
											className="form-control form-control-lg "
											placeholder="What would you like to say?"
										/>
									</div>

									<button
										type="submit"
										class="btn btn-color offset-2 w-75 btn-lg text-center my-4"
									>
										CONTACT US
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Card;
