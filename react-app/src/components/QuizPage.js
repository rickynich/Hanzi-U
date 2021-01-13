import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

//Chakra

//context:
import { useDeck } from "./DeckContext";
//custom components:
import Card from "./Card";
import { Button } from "@chakra-ui/react";

function QuizPage() {
	const [isLoaded, setIsLoaded] = useState(false);
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
