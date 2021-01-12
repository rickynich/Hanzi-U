import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

//context:
import { useDeck } from "./DeckContext";
//custom components:
import Card from "./Card"

function DeckList() {
	const [isLoaded, setIsLoaded] = useState(false);
	const decks = useDeck(); //uses DeckContext
	const decksArray = decks.decks;
	const deckStarter = decksArray[0]
	const [deck, setDeck] = useState( deckStarter);

	// console.log("Starting deck state useState", deck)
	const [characters, setCharacters] = useState([deckStarter.characters]);

	console.log("characters", characters);
	
	const deckComponents = decksArray.map((deck) => {
		// console.log("deck in the deckComponents loop", deck);
		//try nesting the characters map in here!
		return (
			<li key={deck.id}>
				{/* <NavLink to={`/decks/${deck.id}`}>{deck.name}</NavLink> */}
				<button
					id={deck.id}
					onClick={(e) => {
						setDeck(decks[e.target.id]);
						console.log("e.target.value", e.target.id);
						// console.log("Deck after button push", deck);
						// charComponents(deck)
					}}
				>
					{deck.name}
				</button>
				{/* <ul>{charComponents(deck)}</ul> */}
			</li>
		);
	});

	
	const charComponents = deck.characters.map((character) => {
		// console.log("deck in the charComponents loop", deck);
		// console.log("character in the map of the charComponent", character.character)
		return (
				<li key={character.id}>
					{/* <NavLink to={`/decks/${deck.id}`}>{deck.name}</NavLink> */}
				<p>{character.character} - {character.pinyin} - {character.definition}</p>
				</li>
			);
	});

		return (
			<>
			<h1>Deck List: </h1>
			<ul>{deckComponents}</ul>
			{/* <ul>{decks.decks[0].name}</ul> */}
			<h1>Deck Hanzi:</h1>
			<ul>{charComponents}</ul>
			{/* <Card character={characters[0]}>{charComponents}</Card> */}
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