import React, { useContext, useState, useEffect } from "react";

const DeckContext = React.createContext();
const DeckUpdateContext = React.createContext();
const CardUpdateContext = React.createContext();

export function useDeck() { 
	return useContext(DeckContext);
}

export function useDeckUpdate() { 
	return useContext(DeckUpdateContext);
}

export function useCardUpdate() { 
	return useContext(CardUpdateContext);
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

	useEffect(() => {
		console.log("Selected deck in context is", selectedDeck)
	}, [selectedDeck])
	useEffect(() => {
		async function fetchData() {
			const response = await fetch("/api/decks/${id}"); //${id}
			const responseData = await response.json();
			setDecks(responseData.decks); //set to responseData.decks
		}
		fetchData();
		console.log("Selected card in context is", selectedCard)
	}, [selectedCard])
	
    return (
			<DeckContext.Provider value={decks}>
				<CardUpdateContext.Provider value={setSelectedCard}>
					{children}
				</CardUpdateContext.Provider>
			</DeckContext.Provider>
		);
}
