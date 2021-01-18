// import { Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { authenticate } from "../../services/auth";
// import { useDeck } from "../Context/DeckContext";
//custom components:

function Results(props) {
	const { score, wrongAnswers } = props;
    const [user, setUser] = useState();
    const history = useHistory();
    const { deckId } = useParams();
    const {expGained, setExpGained} = useState(0)

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
    
    // const handleExp = () => {
	// 		fetch("http://localhost:5000/api/users/exp", {
	// 			method: "POST",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			body: JSON.stringify({
	// 				exp: score,
	// 			}),
	// 		})  .then((response) => console.log(response.json()))
	// 			// .then((response) => response.json())
	// 			// .then((json) => {
	// 			// 	const accessToken = json.access_token;
	// 			// 	this.props.onLogin(accessToken);
	// 			// })
	// 			.catch((error) => {
	// 				console.log("Error in exp post", error)
	// 			});
    // };

    // handleExp()


    return (
			<Container>
				<Stack justify="center" textAlign="center" p={6} spacing="16px">
                    <Heading>You scored {score} out of 20</Heading>
                <Text>Study up on: </Text>
                {wrongAnswers.map((wrongAnswer) => {
                    return (
                        <Text>
                            {wrongAnswer}
                        </Text>
                    )
                })}
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
