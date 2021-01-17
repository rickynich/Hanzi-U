import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

//Chakra
import { Image } from "@chakra-ui/react";
import { authenticate } from "../services/auth";

function Home(props) {
	const [user, setUser] = useState({});
	const history = useHistory();

	useEffect(() => {
		(async () => {
			const user = await authenticate();

			console.log("User in useEffect for Home", user);
			if (!user.errors) {
				setUser(user);
				console.log("SetUser in home", user);
			}
		})();
	}, []);

	const handleClick = (path) => {
		history.push(`/${path}`);
	};
	// console.log("Home page props", props)
	return (
		<>
			<h1>
				<strong>Welcome, {user.username}!</strong>
			</h1>
			<Button onClick={() => handleClick("decks")}>Review</Button>{" "}
			{/*Put icon in here with leftIcon or rightIcon=<Iconname/> */}
			<Button onClick={() => handleClick("quiz")}>Quiz Yourself!</Button>
		</>
	);
}
export default Home;
