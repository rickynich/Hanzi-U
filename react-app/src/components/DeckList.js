import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function DeckList() {
	const [decks, setDecks] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const response = await fetch("/api/decks/");
			const responseData = await response.json();
			setDecks(responseData);
		}
		fetchData();
	}, []);
	
	console.log(decks)
	const deckComponents = decks.map((deck) => {
		return (
			<li key={deck.id}>
				<NavLink to={`/decks/${deck.id}`}>{deck.name}</NavLink>
			</li>
		);
	});

	return (
			<>
				<h1>Deck List: </h1>
                <ul>{deckComponents}</ul>
			</>
	);
}
export default DeckList;
