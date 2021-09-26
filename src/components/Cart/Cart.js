import React from "react";

const Cart = (props) => {
	const {cart} = props;
	let total = 0;
	for (const superHero of cart) {
		total = total + superHero.salary;
	}
	return (
		<div>
			<h2>Total Added: {props.cart.length}</h2>
			<h6 className="mt-4">Total Cost: {total}</h6>
			<button className="mt-4 btn btn-outline-info">Buy now</button>
		</div>
	);
};

export default Cart;
