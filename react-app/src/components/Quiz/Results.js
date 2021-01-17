// import { Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { authenticate } from "../../services/auth";
// import { useDeck } from "../Context/DeckContext";
//custom components:

function Results(props) {
	const { score } = props;
    const [user, setUser] = useState();
    const history = useHistory();
    const { deckId } = useParams();

	useEffect(() => {
		(async () => {
			const user = await authenticate();

			console.log("User in useEffect for Home", user);
			if (!user.errors) {
				setUser(user);
				console.log("SetUser in Results component", user);
			}
		})();
	}, []);

	const handleClick = (path) => {
		history.push(`/${path}`);
	};

    return (
			<Container>
				<Stack justify="center" textAlign="center" p={6} spacing="16px">
                    <Heading>You scored {score} out of 20</Heading>
                    <Text>Study up on: </Text>
					<Button
						onClick={() => {
							window.location.reload();
						}}
					>
						Take again
					</Button>
					<Button onClick={() => handleClick(`quiz`)}>Quizzes</Button>
				</Stack>
			</Container>
		);
}

export default Results;
