import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import ActorsCart from "../ActorsCart/ActorsCart";
import "./Actors.css";

const Actors = () => {
	const [actor, setActor] = useState([]);
	const [cart, setCart] = useState([]);
	// call JSON file
	useEffect(() => {
		fetch(`./fastandfurious.JSON`)
			.then(res => res.json())
			.then(data => setActor(data));
	}, []);
	const handleAddToCart = actor => {
		const newCart = [...cart];
		// set condition for prevent duplicate
		if (newCart.includes(actor)) {
			alert("This person is already added");
		} else {
			setCart([...cart, actor]);
		}
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-9 my-5">
					<div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
						{/* looping and sending data to cart to display */}
						{actor.map(actor => (
							<ActorsCart
								key={actor.key}
								actor={actor}
								handleAddToCart={handleAddToCart}
							></ActorsCart>
						))}
					</div>
				</div>
				<div className="col-lg-3 my-5 px-3 py-5 bg-cart text-center h-50">
					<Cart cart={cart}></Cart>
				</div>
			</div>
		</div>
	);
};

export default Actors;
