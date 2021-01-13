import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Home(props) {
    const [user, setUser] = useState({});
    const history = useHistory();

	// useEffect(() => {
	// 	if (!userId) {
	// 		return;
	// 	}
	// 	(async () => {
	// 		const response = await fetch(`/api/users/${userId}`);
	// 		const user = await response.json();
	// 		setUser(user);
	// 	})();
	// }, [userId]);
	const handleClick = (path) => {
		history.push(`/${path}`);
	};

	return (
		<>
			<h1>
				<strong>Welcome, {props.email}!</strong>
			</h1>
			<Button onClick={() => handleClick("decks")}>Review</Button>{" "}
			{/*Put icon in here with leftIcon or rightIcon=<Iconname/> */}
			<Button onClick={() => handleClick("quiz")}>Quiz Yourself!</Button>
		</>
	);
}
export default Home;
