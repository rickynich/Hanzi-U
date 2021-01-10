import React, { useContext, useState, useEffect } from "react";

const DeckContext = React.createContext();

export function useDeck() {
	return useContext(DeckContext);
}

//could use a function here that somehow uses useParams to fetch specific deck characters

export function DeckProvider({ children }) {
    const [decks, setDecks] = useState([]);
    const [characters, setCharacters] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch("/api/decks/");
			const responseData = await response.json();
			setDecks(responseData);
		}
        fetchData();
        setLoaded(true);
	}, []);
	console.log("DECKS in context:", decks)
	const decksArray = decks.decks;
	// useEffect(() => {
	// 	if (loaded) {
	// 		decksArray.map((deck) => {
	// 			fetch(`/api/decks/${deck.deck.id}`)
	// 				.then((response) => response.json())
	// 				.then((responseData) => setCharacters(responseData));
	// 			console.log("in the context useEffect. characters:", characters);
	// 		})
			
	// 	}
	// }, [loaded])

	console.log("characters", characters);


    return <DeckContext.Provider value={ decks }>{children}</DeckContext.Provider>;
}
