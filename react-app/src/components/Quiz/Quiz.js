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
	const [questionDeck, setQuestionDeck] = useState([]); //each question will have 3 characters as possible answers, and one pinyin prompt (the q)
	const [score, useScore] = useState(0);
	const [answerChoices, setAnswerChoices] = useState([]);
	const [characterQuestion, setCharacterQuestion] = useState({});
	
	if (!deck) return null;
	// question will be the {character} and the [randomized answers]
	// useEffect(() => {
	//     const shuffledAnswerOptions = quizCharacters.map((character) => this.shuffleArray(question.answers))
	//     setCharacterQuestion(quizQuestions[0])
	// })
	let array = deck.characters

	const shuffleArray = (array) => {
		let currentIndex = array.length;
		let tempVal;
		let randomIndex;
		console.log("array going in ", array)
		let randomizedArray = []

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			console.log("randomIndex", randomIndex);
			console.log("currentIndex", currentIndex);
			// And swap it with the current element.
			tempVal = array[currentIndex];
			console.log("Current Index at array to set to tempVal", tempVal)
			array[currentIndex] = array[randomIndex];
			// randomizedArray[currentIndex] = array[randomIndex]
			// randomizedArray[randomIndex] = tempVal;
			// setQuestionDeck(array[randomIndex])
			console.log("(array[currentIndex]) = array[randomIndex]  ", array[randomIndex]);
			array[randomIndex] = tempVal;
		}
		console.log("Array after shuffle", array)
		// console.log("randomized after loop", randomizedArray)
		return array;
	};
	shuffleArray(array)
	console.log("Quesiton deck: ",questionDeck)
	console.log("deck selected in quiz", deck);

	// const getQuestions = () => {

	// }
	return (
		<>
			<h1>Welcome to the {deck.name} quiz, time to start!</h1>
			<Question questionDeck={deck}>A question will appear</Question>
		</>
	);
}

export default Quiz;
