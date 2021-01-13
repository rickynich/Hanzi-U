import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
//Chakra
import { SimpleGrid } from "@chakra-ui/react";

//context:
import { useDeck } from "../Context/DeckContext";


//you need to render 2 random characters, and at least 2 answer choices (multiple choice) (let's go with 3)
// one of those answer choices needs to be correct. So the answer will have it's actual pinyin/defintion rendered
//only the pinyin will be provided. A show hint option will be added on as something from the correct answer which will already be there

function Quiz() {
	const decks = useDeck(); //uses DeckContext
    const { deckId } = useParams();

    const [deck, setDeck] = useState(decks[deckId - 1]);
    const [questions, setQuestions] = useState([])//each question will have 3 characters as possible answers, and one pinyin prompt (the q)
    const [score, useScore] = useState(0)
    const [responses, setResponses] = useState(0)
    
    console.log("deck from context", deck);

    // const getQuestions = () => {

    // }
	return deck && (
		<>
            <h1>Welcome to the {deck.name} quiz</h1>
		</>
	);
}

export default Quiz;
