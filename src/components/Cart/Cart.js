import React from "react";

const Cart = props => {
	console.log(props);
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
				{
					cart.map(person => <ShowName key={person.key} person={person}></ShowName>)
				}
			</div>
			<button className="mt-4 btn btn-outline-info">Buy now</button>
		</div>
	);
};

const ShowName = props => {
	console.log(props);
	return(
		<div className="card">
			<p className="text-black">"<span className="fw-bold">Name:</span> {props.person.name}"</p>
		</div>
	);
}

export default Cart;
