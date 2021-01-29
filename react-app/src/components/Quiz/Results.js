// import { Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {
	useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { authenticate } from "../../services/auth";
// import { useDeck } from "../Context/DeckContext";
//custom components:

function Results(props) {
	const { score, wrongAnswers } = props;
	const [user, setUser] = useState();
	const history = useHistory();

	useEffect(() => {
		(async () => {
			const user = await authenticate();

			console.log("User in useEffect for Results", user.id);
			if (!user.errors) {
				setUser(user);
			}
			let res = await fetch(`/api/users/${user.id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ exp: score }),
			});
			res = await res.json();
			// console.log("res", res);
			if (res.errors) {
				alert(res.errors[0]);
				return;
			}
		})();
	}, []);

	const handleClick = (path) => {
		history.push(`/${path}`);
	};

	const scoreFeedback = (score) => {
		console.log("Score:", score)
		if (score === 20) return "You got a 100%! Awesome!"
		if (17 < score < 20) return "Awesome job!"
		if (15 <= score <= 17) return "Great work!"
		if (10 < score < 15) return "Nice!"
		else return "Keep at it!"
	}

	return (
		<Container height="100%">
			<Stack justify="center" textAlign="center" p={6} spacing="16px">
				<Heading>You scored {score} out of 20</Heading>
				<Text>{scoreFeedback(score)} Points gained: {score}</Text>
				<Text fontWeight="bold">Study up on: </Text>
				{wrongAnswers.map((wrongAnswer) => {
					return <Text fontSize="30px">{wrongAnswer}</Text>;
				})}
				<Button
					onClick={() => {
						window.location.reload();
					}}
				>
					Take again
				</Button>
				<Button onClick={() => handleClick(`quiz`)}>Quizzes</Button>
				<Button onClick={() => handleClick(``)}>Home</Button>
			</Stack>
		</Container>
	);
}

export default Results;
