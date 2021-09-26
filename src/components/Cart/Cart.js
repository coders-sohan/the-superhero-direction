import React from "react";
import "./Cart.css";

const Cart = props => {
	const { cart } = props;
	let total = 0;
	for (const superHero of cart) {
		total = total + superHero.salary;
	}
	return (
		<div>
			<h2>Total Added: {props.cart.length}</h2>
			<h6 className="mt-4">Total Cost: {total}</h6>
			<div className="my-4">
				{cart.map(person => (
					<ShowName key={person.key} person={person}></ShowName>
				))}
			</div>
			<button className="mt-4 btn btn-outline-info">Buy now</button>
		</div>
	);
};

const ShowName = props => {
	return (
		<div className="card cart-card mb-3">
			<div className="row align-items-center g-0">
				<div className="col-md-4 text-right">
					<img
						src={props.person.img}
						className="img-fluid rounded-start"
						alt={props.person.name}
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h6 className="card-title d-flex justify-content-between">
							<span>Name:</span> <span>{props.person.name}</span>
						</h6>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
