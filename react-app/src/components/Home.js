import { Box, Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

//Chakra
import { Image } from "@chakra-ui/react";
import { authenticate } from "../services/auth";
import UsersList from "./UsersList";

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
		<Flex
			align="center"
			direction="column"
			justify={{ base: "center", md: "space-around", xl: "space-between" }}
		>
			<Heading mb={10}>
				<strong>Welcome, {user.username}!</strong>
			</Heading>
			<ButtonGroup mb={12}>
				<Button width="150px" onClick={() => handleClick("decks")}>
					Review
				</Button>
				{/*Put icon in here with leftIcon or rightIcon=<Iconname/> */}
				<Button width="150px" onClick={() => handleClick("quiz")}>
					Quiz Yourself
				</Button>
				<Button width="150px" onClick={() => handleClick("users")}>
					Leaderboard
				</Button>
			</ButtonGroup>
			<Box w={{ md: "30%" }}>
				<UsersList size="md" />
				<Image
					src={require("images/clark-gu-thaqlzZPgl4-unsplash.jpg")}
					size="100%"
					rounded="1rem"
					shadow="2xl"
					alt="home image"
					w={{ base: "80%", sm: "60%", md: "100%" }}
				/>
			</Box>
		</Flex>
	);
}
export default Home;
