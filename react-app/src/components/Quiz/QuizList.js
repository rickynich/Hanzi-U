//React
import React from "react";
import { useHistory } from "react-router-dom";

//Chakra
import { Button, Flex, Heading, HStack } from "@chakra-ui/react";
import { useDeck } from "../Context/DeckContext";

//context:

//custom components:

function QuizPage() {
	const decks = useDeck(); //uses DeckContext
	const history = useHistory();

	const handleClick = (deckId) => {
		history.push(`/decks/${deckId}`);
	};
	if (decks.length == 0) return null;
	const deckComponents = decks.map((deck) => {
		return (
			<>
				<Button onClick={() => handleClick(deck.id)} id={deck.id}>
					{deck.name}
				</Button>
			</>
		);
	});

	return (
		<Flex direction="column">
			<Heading size="lg" mb={3} mr={3}>
				Deck List:{" "}
			</Heading>
			<HStack mb={6}>{deckComponents}</HStack>
		</Flex>
	);
}
export default QuizPage;
