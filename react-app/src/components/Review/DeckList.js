//React:
import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

//Chakra:
import {
	Button,
	Flex,
	Heading,
	HStack,
} from "@chakra-ui/react";

//context:
import { useDeck } from "../Context/DeckContext";
//custom components:
import Card from "./Card";

function DeckList() {
	const [deck, setDeck] = useState();
	const decks = useDeck(); //uses DeckContext

	if (decks.length == 0) return null;

	const deckComponents = decks.map((deck) => {
		return (
			<Button
				id={deck.id}
				onClick={() => {
					setDeck(deck);
				}}
			>
				{deck.name}
			</Button>
		);
	});

	const charComponents =
		deck &&
		deck.characters.map((character) => {
			return <Card character={character} />;
		});

	return (
		<Flex direction="column" height="100%">
			<Flex>
				<Heading size="lg" mb={3} mr={3}>
					Deck List:{" "}
				</Heading>
				<HStack mb={6}>{deckComponents}</HStack>
			</Flex>
			<Flex>
				<Heading mb={3} size="lg">
					Deck Hanzi:
				</Heading>
			</Flex>
			<Flex m={6} wrap="wrap" direction="row" justify="space-between" spacing={10}>
				{charComponents}
			</Flex>
		</Flex>
	);
}
export default DeckList;

//Graveyard:

// useEffect(() => {
// 	async function fetchData() {
// 		const response = await fetch(`/api/decks/${deck}`);
// 		const responseData = await response.json();
// 		console.log("response data", responseData);
// 		setCharacters(responseData);
// 	}
// 	fetchData();
// 	setIsLoaded(true);
// }, [deck]);
// const getDeck = (deckId) => {
// 	fetch(`/api/decks/${deckId}`)
// 		.then((response) => response.json())
// 		.then((responseData) => setCharacters(responseData));
// 	console.log("Hit it! In the getDeck function. characters:", characters);
// };

//maps over all the characters in a deck and renders

// function charComponents(deck) {
// 	let deckCharacters = deck.characters
// 	// console.log("characters in deck", deckCharacters);
// 	deckCharacters.map((character) => {
// 		// console.log("deck in the charComponents loop", deck);
// 		// console.log("character in the map of the charComponent", character.character)
// 		return (
// 			<li key={character.id}>
// 				{/* <NavLink to={`/decks/${deck.id}`}>{deck.name}</NavLink> */}
// 				<p>{character.character}</p>
// 			</li>
// 		);
// 	});
// }
