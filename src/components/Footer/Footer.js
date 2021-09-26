import React from "react";

const Footer = () => {
	const year = Date().slice(10, 15);
	return (
		<div className="text-center text-muted">
			<p>&copy; Copy write protected by Fast and Furious {year}</p>
		</div>
	);
};

export default Footer;
