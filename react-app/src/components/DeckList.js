import React, { useState, useEffect, useContext } from "react";
// import { NavLink } from "react-router-dom";

//Chakra
import { Button, SimpleGrid } from "@chakra-ui/react";

//context:
import { useDeck } from "./DeckContext";
//custom components:
import Card from "./Card";

function DeckList() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [deck, setDeck] = useState();
	const decks = useDeck(); //uses DeckContext
	
	let decksArray = decks.decks;

	if (decks.length == 0) return null;

	const deckComponents = decksArray.map((deck) => {
		return (
			<li key={deck.id}>
				<Button
					id={deck.id}
					onClick={() => {
						setDeck(deck);
						// console.log("e.target.value", e.target.id);
						// console.log("Deck after button push", deck);
						// charComponents(deck)
					}}
				>
					{deck.name}
				</Button>
			</li>
		);
	});

	const charComponents = deck && deck.characters.map((character) => {
		return (
			<>
				<Card character={character} />
			</>
		);
	});

	return (
		<>
			<h1>Deck List: </h1>
			<ul>{deckComponents}</ul>
			{/* <ul>{decks.decks[0].name}</ul> */}
			<h1>Deck Hanzi:</h1>
			<SimpleGrid columns={2} spacing={10}>
				{charComponents}
			</SimpleGrid>
		</>
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
