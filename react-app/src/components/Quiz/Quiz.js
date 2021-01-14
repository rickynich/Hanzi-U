import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Chakra
// import { SimpleGrid } from "@chakra-ui/react";

//context:
import { useDeck } from "../Context/DeckContext";
//custom components
import Question from "./Question";

//you need to render 2 random characters, and at least 2 answer choices (multiple choice) (let's go with 3)
// one of those answer choices needs to be correct. So the answer will have it's actual pinyin/defintion rendered
//only the pinyin will be provided. A show hint option will be added on as something from the correct answer which will already be there

function Quiz() {
	const { deckId } = useParams();
	const decks = useDeck(); //uses DeckContext
    
	const [deck, setDeck] = useState(decks[deckId - 1]);
	const [quizCharacters, setQuizCharacters] = useState([]); //each question will have 3 characters as possible answers, and one pinyin prompt (the q)
	const [score, useScore] = useState(0);
	const [answerChoices, setAnswerChoices] = useState([]);
	const [characterQuestion, setCharacterQuestion] = useState({});
    
    if (!deck) return null;
	// question will be the {character} and the [randomized answers]
	// useEffect(() => {
	//     const shuffledAnswerOptions = quizCharacters.map((character) => this.shuffleArray(question.answers))
	//     setCharacterQuestion(quizQuestions[0])
	// })

	const shuffleArray = (array) => {
		let currentIndex = array.length,
			tempVal,
			randomIndex;
	};

	console.log("deck selected in quiz", deck);

	// const getQuestions = () => {

	// }
	return (
		(
			<>
				<h1>Welcome to the {deck.name} quiz, time to start!</h1>
				<Question>A question will appear</Question>
			</>
		)
	);
}

export default Quiz;
