import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Deck() {
    const [characters, setCharacters] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)
    const { deckId } = useParams();
    // const [characters, setCharacters] = useState(() => {
    //         const response = fetch(`/api/decks/1/characters`)
    //         const responseData = response.json()
    //         console.log("response data", response)
    //         setCharacters(responseData);
    // })



	// useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch(`/api/decks/1/characters`)
    //         const responseData = await response.json();
    //         console.log("response data", responseData)
    //         setCharacters(responseData);
    //     }
    //     fetchData()
    //     setIsLoaded(true)
    // }, []);
	useEffect(() => {
        fetch(`/api/decks/${deckId}`)
            .then(response => response.json())
            .then(responseData => setCharacters(responseData))
            .then(setIsLoaded(true))
    }, [deckId]);

    console.log("characters from State", characters)
    // console.log(isLoaded)

    const charComponents = []
    if (characters.length > 0) {
        charComponents = characters.map((char) => {
                return (
                    <li key={char.id}>
                        {char}
                    </li>
                );
        }); 
    }

    return isLoaded && (
		<>
            <h1>Character List: </h1>
            { characters.length > 0 ? <ul>{characters[1]}</ul> : null }
		</>
	);
}
export default Deck;