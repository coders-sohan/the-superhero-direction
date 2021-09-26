import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import SuperHeroCart from "../SuperHeroCart/SuperHeroCart";
import "./SuperHero.css";

const SuperHero = () => {
	const [superHeros, setSuperHeros] = useState([]);
	const [cart, setCart] = useState([]);
	// call JSON file
	useEffect(() => {
		fetch(`./superhero.JSON`)
			.then(res => res.json())
			.then(data => setSuperHeros(data));
	}, []);
	const handleAddToCart = superHero => {
		const newCart = [...cart];
		// set condition for prevent duplicate
		if (newCart.includes(superHero)) {
			alert("This person is already added");
		} else {
			setCart([...cart, superHero]);
		}
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-9 my-5">
					<div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
						{/* looping and sending data to cart to display */}
						{superHeros.map(superHero => (
							<SuperHeroCart
								key={superHero.key}
								superHero={superHero}
								handleAddToCart={handleAddToCart}
							></SuperHeroCart>
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

export default SuperHero;
