import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./ActorsCart.css";

const ActorsCart = props => {
	// fontawesome icons
	const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
	const facebookIcon = <FontAwesomeIcon icon={faFacebook} />;
	const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
	const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
	// destructuring
	const { name, role, age, country, salary, img } = props.actor;
	return (
		<div className="col">
			<div className="card h-100">
				<img src={img} className="card-img rounded-circle" alt={name} />
				<div className="card-body text-center">
					<h2 className="card-title fw-normal text-center py-4 m-0">
						<span className="fw-bold">{name}</span>
					</h2>
					<h5 className="card-title fw-normal py-2 m-0 d-flex justify-content-between">
						<span className="fw-bold">Role:</span> <span>{role}</span>
					</h5>
					<h5 className="card-title fw-normal py-2 m-0 d-flex justify-content-between">
						<span className="fw-bold">Age:</span> <span>{age}</span>
					</h5>
					<h5 className="card-title fw-normal py-2 m-0 d-flex justify-content-between">
						<span className="fw-bold">Country:</span> <span>{country}</span>
					</h5>
					<h5 className="card-title fw-normal py-2 m-0 d-flex justify-content-between">
						<span className="fw-bold">Salary:</span> <span>${salary}</span>
					</h5>
				</div>
				<div className="card-footer pb-3 text-center">
					<button
						className="btn btn-bg"
						onClick={() => props.handleAddToCart(props.actor)}
					>
						Add to cart <span style={{ marginLeft: "3px" }}>{cartIcon}</span>
					</button>
				</div>
				<div className="py-2 mt-3 social-bg text-center bg-secondary rounded-bottom">
					<a className="mx-3 social-icon" href="https://facebook.com">
						{facebookIcon}
					</a>
					<a className="mx-3 social-icon" href="https://twitter.com">
						{twitterIcon}
					</a>
					<a className="mx-3 social-icon" href="https://instagram.com">
						{instagramIcon}
					</a>
				</div>
			</div>
		</div>
	);
};

export default ActorsCart;
