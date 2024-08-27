import React, { Fragment } from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx"
import { Card } from "./Card.jsx"
import { Footer } from "./Footer.jsx"

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Card />
			</div>
			<Footer />
		</>
	);
};

export default Home;
