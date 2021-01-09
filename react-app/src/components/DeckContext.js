import React, { useContext, useState } from 'react'

const DeckContext = React.createContext()

export function useDeck() {
    return useContext(DeckContext)
}

export function DeckProvider({ children }) {
    const [decks, setDecks] = useState([])

    return (
        <DeckContext.Provider value={decks}>
            {children}
        </DeckContext.Provider>
    )
}