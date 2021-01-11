import React, { useContext, useState, useEffect } from "react";

const DeckContext = React.createContext();

export function useDeck() {
	return useContext(DeckContext);
}

export function DeckProvider({ children }) {
    const [decks, setDecks] = useState([]);
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

    return <DeckContext.Provider value={ decks }>{children}</DeckContext.Provider>;
}
