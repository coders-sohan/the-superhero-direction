import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<div className="container header-bg text-white py-4 rounded-header">
			<div className="text-center">
				<h1 className="display-5 m-0 fw-bold">Make an Justice Leagues Team</h1>
				<p className="mt-3">
					For saving the world and everything form Dark-side. Bat-Man,
					Super-Man, Wonder-Woman, Aqua-Man, Flash, all of the super hero fight
					for world.
				</p>
				<p className="display-5 m-0 fw-bold">
					Total Budget: <b>70 Million</b>
				</p>
			</div>
		</div>
	);
};

export default Header;
