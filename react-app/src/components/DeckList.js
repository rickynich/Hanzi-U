import React, { useState, useEffect, useContext } from "react";
import { DeckContext } from "../App";
import { NavLink } from "react-router-dom";

function DeckList() {
	const decks = useContext(DeckContext)
	const decksArray = decks.decks
	console.log(decks.decks[0]);
	console.log(decksArray)

	const deckComponents = decksArray.map((deck) => {
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
			{/* <ul>{decks.decks[0].name}</ul> */}
		</>
	);
}
export default DeckList;
