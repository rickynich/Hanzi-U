import React, { useState, useEffect, useContext } from "react";
// import { DeckContext } from "../App";
import { NavLink } from "react-router-dom";
import { useDeck } from "./DeckContext";

function DeckList() {
	// const decks = useContext(DeckContext)
	const [characters, setCharacters] = useState([{ character: "是" }]);
	const decks = useDeck();
	const decksArray = decks.decks;
	console.log(decks.decks[0]);
	console.log(decksArray);

	// useEffect(() => {
	// 	async function fetchData() {
	// 		const response = await fetch(`/api/decks/${deckId}`);
	// 		const responseData = await response.json();
	// 		console.log("response data", responseData);
	// 		setCharacters(responseData);
	// 	}
	// 	fetchData();
	// 	setIsLoaded(true);
	// }, [deckId]);

	// const getDeck = (deckId) => {
	// 	fetch(`/api/decks/${deckId}`)
	// 		.then((response) => response.json())
	// 		.then((responseData) => setCharacters(responseData));
	// 	console.log("Hit it! In the getDeck function. characters:", characters);
	// };
	// console.log("characters", characters);


	const deckComponents = decksArray.map((deck) => {
		console.log("deck in the deckComponents loop", deck);
		return (
			<li key={deck.id}>
				{/* <NavLink to={`/decks/${deck.id}`}>{deck.name}</NavLink> */}
				<button
					onClick={() => {
						// getDeck(deck.id);
					}}
				>
					{deck.name}
				</button>
			</li>
		);
	});
	const charComponents = characters.map((character) => {
		console.log("deck in the charComponents loop", character);
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
