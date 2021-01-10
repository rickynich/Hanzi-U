import React, { useState, useEffect, useContext } from "react";
// import { DeckContext } from "../App";
import { NavLink } from "react-router-dom";
import { useDeck } from "./DeckContext";

function DeckList() {
	const [characters, setCharacters] = useState([{ character: "是" }]);
	const [deck, setDeck] = useState();
	const [isLoaded, setIsLoaded] = useState(false);
	const decks = useDeck(); //uses DeckContext
	const decksArray = decks.decks;

	console.log("deck at 0 from useDeck deck", decks.decks[0]);
	console.log("refactored to show array of decks", decksArray);
	console.log("characters", characters);
	
	const deckComponents = decksArray.map((deck) => {
		console.log("deck in the deckComponents loop", deck);
		return (
			<li key={deck.id}>
				{/* <NavLink to={`/decks/${deck.id}`}>{deck.name}</NavLink> */}
				<button
					onClick={(e) => {
						setDeck(decks[e.target.value]);
						console.log("e.target.value", e.target.value)
						console.log("Deck after button push", deck)
						charComponents()
					}}
					>
					{deck.name}
				</button>
			</li>
		);
	});

	//maps over all the characters in a deck and renders 
	const charComponents = decksArray[0].characters.map((character) => {
		console.log("deck in the charComponents loop", deck);
		console.log("character in the map of the charComponent", character.character)
		return (
				<li key={character.id}>
					{/* <NavLink to={`/decks/${deck.id}`}>{deck.name}</NavLink> */}
					<p>{character.character}</p>
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
		</>
	);
}
export default DeckList;

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