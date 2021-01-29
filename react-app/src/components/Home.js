import { Box, Button, ButtonGroup, Flex, Heading, Text, VStack } from "@chakra-ui/react";
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
			height="100%"
		>
			<Heading mb={10}>
				<strong>Welcome to Hanzi U, {user.username}!</strong>
			</Heading>
			<ButtonGroup mb={12}>
				<Button
					width="150px"
					onClick={() => handleClick("decks")}
					height="150px"
					width="115px"
					m={3}
					colorScheme="red"
					bg="#A3262A"
					// borderRadius="3px"
					// borderColor="yellow"
					_active={{
						bg: "#dddfe2",
						transform: "scale(0.98)",
						borderColor: "#bec3c9",
					}}
					_hover={{
						bg: "#ebedf0",
						color: "#A3262A",
						// borderColor: "#A3262A",
					}}
				>
					<VStack>
						<Text>Review</Text>
						<Text>学习</Text>
					</VStack>
				</Button>
				<Button
					width="150px"
					onClick={() => handleClick("quiz")}
					height="150px"
					width="115px"
					m={3}
					colorScheme="red"
					bg="#A3262A"
					// borderRadius="3px"
					// borderColor="yellow"
					_active={{
						bg: "#dddfe2",
						transform: "scale(0.98)",
						borderColor: "#bec3c9",
					}}
					_hover={{
						bg: "#ebedf0",
						color: "#A3262A",
						// borderColor: "#A3262A",
					}}
				>
					<VStack>
						<Text>Quiz</Text>
						<Text>小考试</Text>
					</VStack>
				</Button>
				<Button
					width="150px"
					onClick={() => handleClick("users")}
					height="150px"
					width="115px"
					m={3}
					colorScheme="red"
					bg="#A3262A"
					// borderRadius="3px"
					// borderColor="yellow"
					_active={{
						bg: "#dddfe2",
						transform: "scale(0.98)",
						borderColor: "#bec3c9",
					}}
					_hover={{
						bg: "#ebedf0",
						color: "#A3262A",
						// borderColor: "#A3262A",
					}}
				>
					<VStack>
						<Text>Leaderboard</Text>
						<Text>计分板</Text>
					</VStack>
				</Button>
			</ButtonGroup>
			<Box w={{ md: "30%" }}>
				{/* <UsersList size="md"  height="10px"/> */}
				<Image
					src={require("./images/clark-gu-thaqlzZPgl4-unsplash.jpg")}
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
