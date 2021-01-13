//React
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

//Chakra
import { Button } from "@chakra-ui/react";
import { useDeck } from "../Context/DeckContext";

//context:

//custom components:

function QuizPage() {
	const decks = useDeck(); //uses DeckContext
	const history = useHistory();
	console.log("decks in QuizPage", decks);

	const handleClick = (deckId) => {
		history.push(`/decks/${deckId}`);
	};
	if (decks.length == 0) return null;
	const deckComponents = decks.map((deck) => {
		return (
			<li key={deck.id}>
				<Button onClick={() => handleClick(deck.id)} id={deck.id}>
					{deck.name}
				</Button>
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
export default QuizPage;
