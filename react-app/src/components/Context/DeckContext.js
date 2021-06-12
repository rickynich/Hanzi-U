import React, { useContext, useState, useEffect } from "react";

const DeckContext = React.createContext();

export function useDeck() { 
	return useContext(DeckContext);
}

export function DeckProvider({ children }) {
	const [decks, setDecks] = useState([]);
	const [selectedDeck, setSelectedDeck] = useState()
	const [selectedCard, setSelectedCard] = useState()

	useEffect(() => {
		async function fetchData() {
			const response = await fetch("/api/decks/"); //${id}
			const responseData = await response.json();
			setDecks(responseData.decks); //set to responseData.decks
		}
        fetchData();
	}, []);
	// console.log("DECKS in context:", decks)
	// if(decks.length == 0) return null 
	
    return <DeckContext.Provider value={ decks }>{children}</DeckContext.Provider>;
}
