import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
//Chakra
import { SimpleGrid } from "@chakra-ui/react";

//context:
import { useDeck } from "./DeckContext";
//custom components:
import Card from "./Card";

function Quiz() {
	const decks = useDeck(); //uses DeckContext
    const { deckId } = useParams();

	const decksArray = decks.decks;
	const deckStarter = decksArray[deckId-1];
    const [deck, setDeck] = useState(deckStarter);
    
    console.log("deck from context", deckStarter, deck);
	return decksArray && (
		<>
            <h1>Welcome to the quiz</h1>
            <h1>{deck.name}</h1>
		</>
	);
}

export default Quiz;
