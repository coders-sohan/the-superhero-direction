import React, { useEffect, useState } from "react";
import SuperHeroCart from "../SuperHeroCart/SuperHeroCart";

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
				<div className="col-lg-3 my-5 p-5 bg-info h-50">
                    <h1>cart</h1>
                </div>
			</div>
		</div>
	);
};

export default SuperHero;
