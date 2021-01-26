//React
import React from "react";
import { useHistory } from "react-router-dom";

//Chakra
import { Button, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
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
			<Button
				id={deck.id}
				onClick={() => handleClick(deck.id)}
				height="140px"
				width="100px"
				colorScheme="red"
			>
				<VStack>
					<Text>{deck.name}</Text>
					<Text>第 {deck.id}</Text>
				</VStack>
			</Button>
		);
	});

	return (
		<Flex direction="column" height="100%" width="100%" align="center">
			<Heading size="lg" mb={3} mr={3}>
				Deck List:{" "}
			</Heading>
			<Flex mb={6} justify="space-around" width="40%">{deckComponents}</Flex>
		</Flex>
	);
}
export default QuizPage;
