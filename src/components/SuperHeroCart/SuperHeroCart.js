import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./SuperHeroCart.css";

const SuperHeroCart = props => {
	const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
	const facebookIcon = <FontAwesomeIcon icon={faFacebook} />;
	const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
	const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
	const { name, role, age, country, salary, img } = props.superHero;
	return (
		<div className="col">
			<div className="card h-100">
				<img src={img} className="card-img rounded-circle" alt={name} />
				<div className="card-body text-center">
					<h5 className="card-title fw-normal py-2 m-0">
						<span className="fw-bold">Name:</span> {name}
					</h5>
					<h5 className="card-title fw-normal py-2 m-0">
						<span className="fw-bold">Role:</span> {role}
					</h5>
					<h5 className="card-title fw-normal py-2 m-0">
						<span className="fw-bold">Age:</span> {age}
					</h5>
					<h5 className="card-title fw-normal py-2 m-0">
						<span className="fw-bold">Country:</span> {country}
					</h5>
					<h5 className="card-title fw-normal py-2 m-0">
						<span className="fw-bold">Salary:</span> ${salary}
					</h5>
				</div>
				<div className="card-footer pb-3 text-center">
					<button className="btn btn-bg">
						Add to cart <span style={{ marginLeft: "3px" }}>{cartIcon}</span>
					</button>
					<div className="py-2 mt-3 social-bg bg-secondary rounded">
						<a className="mx-3 social-icon" href="https://facebook.com">{facebookIcon}</a>
						<a className="mx-3 social-icon" href="https://twitter.com">{twitterIcon}</a>
						<a className="mx-3 social-icon" href="https://instagram.com">{instagramIcon}</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SuperHeroCart;
