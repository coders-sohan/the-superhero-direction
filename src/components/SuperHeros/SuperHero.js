import React, { useEffect, useState } from "react";
import SuperHeroCart from "../SuperHeroCart/SuperHeroCart";
import './SuperHero.css';

const SuperHero = () => {
	const [superHeros, setSuperHeros] = useState([]);
	useEffect(() => {
		fetch(`./superhero.JSON`)
			.then(res => res.json())
			.then(data => setSuperHeros(data));
	}, []);
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-9 my-5">
					<div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
						{superHeros.map(superHero => (
							<SuperHeroCart
								key={superHero.key}
								superHero={superHero}
							></SuperHeroCart>
						))}
					</div>
				</div>
				<div className="col-lg-3 my-5 px-3 py-5 bg-cart text-center h-50">
                    <h2>Total Added: </h2>
					<h6 className="mt-4">Total Cost: </h6>
					<button className="mt-4 btn btn-outline-info">Buy now</button>
                </div>
			</div>
		</div>
	);
};

export default SuperHero;
