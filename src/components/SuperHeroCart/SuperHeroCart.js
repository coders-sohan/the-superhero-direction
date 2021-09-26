import React from "react";
import "./SuperHeroCart.css";

const SuperHeroCart = props => {
	const { name, role, age, country, salary, img } = props.superHero;
	return (
		<div className="col">
			<div className="card h-100">
				<img src={img} className="card-img rounded-circle" alt={name} />
				<div className="card-body text-center">
					<h5 className="card-title fw-normal py-2 m-0"><span className="fw-bold">Name:</span> {name}</h5>
					<h5 className="card-title fw-normal py-2 m-0"><span className="fw-bold">Role:</span> {role}</h5>
					<h5 className="card-title fw-normal py-2 m-0"><span className="fw-bold">Age:</span> {age}</h5>
					<h5 className="card-title fw-normal py-2 m-0"><span className="fw-bold">Country:</span> {country}</h5>
					<h5 className="card-title fw-normal py-2 m-0"><span className="fw-bold">Salary:</span> ${salary}</h5>
				</div>
				<div className="card-footer pb-3 text-center">
					<button className="btn btn-bg">Add to cart</button>
				</div>
			</div>
		</div>
	);
};

export default SuperHeroCart;
