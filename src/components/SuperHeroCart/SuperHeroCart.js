import React from "react";
import "./SuperHeroCart.css";

const SuperHeroCart = props => {
	const { name, role, age, country, salary, img } = props.superHero;
	return (
		<div className="col">
			<div className="card h-100">
				<img src={img} className="card-img rounded-circle" alt={name} />
				<div className="card-body">
					<h5 className="card-title fw-normal">Name: {name}</h5>
					<h5 className="card-title fw-normal">Role: {role}</h5>
					<h5 className="card-title fw-normal">Age: {age}</h5>
					<h5 className="card-title fw-normal">Country: {country}</h5>
					<h5 className="card-title fw-normal">Salary: ${salary}</h5>
				</div>
				<div className="card-footer text-center">
					<button className="btn btn-bg">Add to cart</button>
				</div>
			</div>
		</div>
	);
};

export default SuperHeroCart;
