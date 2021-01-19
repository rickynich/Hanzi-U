
//Might be able to get rid of this component


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Deck() {
	const [characters, setCharacters] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const { deckId } = useParams();


	const updateChars = async () => {
		let res = await fetch(
			deckId ? `/api/decks/${deckId}` : "/api/decks"
		);
		res = await res.json();
		if (!res.errors) setCharacters(res.characters);
		else alert(res.errors[0]);
	};

	useEffect(() => {
		updateChars();
	}, [deckId]);

	console.log("characters from State", characters);

	let charComponents = [];
	if (characters.length > 0) {
		charComponents = characters.map((char) => {
			return <li key={char.id}>{char}</li>;
		});
	}

	return (
		isLoaded && (
			<>
				{characters.length > 0 ? <ul>{characters[2]}</ul> : null}
			</>
		)
	);
}
export default Deck;
