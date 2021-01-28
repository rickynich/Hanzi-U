//React:
import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

//Chakra:
import { Button, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";

//context:
import { useDeck } from "../Context/DeckContext";
//custom components:
import Card from "./Card";

function DeckList() {
	const [deck, setDeck] = useState();
	const decks = useDeck(); //uses DeckContext
	const [selected, setSelected] = useState(false);

	if (decks.length == 0) return null;

	const deckComponents = decks.map((deck) => {
		return (
			<Button
				id={deck.id}
				onClick={() => {
					setDeck(deck);
					setSelected(true);
				}}
				height="150px"
				width="115px"
				m={3}
				colorScheme="blue"
			>
				<VStack>
					<Text>{deck.name}</Text>
					<Text>第 {deck.id}</Text>
				</VStack>
			</Button>
		);
	});

	const charComponents =
		deck &&
		deck.characters.map((character) => {
			return <Card character={character} />;
		});

	return (
		<Flex height="200%" direction="column" width="100%" align="center">
			<Heading size="lg" mb={3} mr={3}>
				Decks:{" "}
			</Heading>
			<Flex mb={6} justify="space-around" width="40%">
				{deckComponents}
			</Flex>
			<Flex>
				{selected && (
					<Heading mb={3} size="lg">
						Deck Hanzi:
					</Heading>
				)}
			</Flex>
			<Flex
				m={6}
				wrap="wrap"
				direction="row"
				justify="space-between"
				spacing={10}
			>
				{charComponents}
			</Flex>
		</Flex>
	);
}
export default DeckList;
