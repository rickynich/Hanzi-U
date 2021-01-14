import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Chakra
// import { SimpleGrid } from "@chakra-ui/react";

//context:
import { useDeck } from "../Context/DeckContext";
import Answers from "./AnswerChoices";
//custom components
import Question from "./Question";

//you need to render 2 random characters, and at least 2 answer choices (multiple choice) (let's go with 3)
// one of those answer choices needs to be correct. So the answer will have it's actual pinyin/defintion rendered
//only the pinyin will be provided. A show hint option will be added on as something from the correct answer which will already be there

function Quiz() {
	const { deckId } = useParams();
	const decks = useDeck(); //uses DeckContext
	console.log("Decks ", decks)
	const [questionNum, setQuestionNum] = useState(0);
	const [deck, setDeck] = useState(decks[deckId - 1]);
	const [score, useScore] = useState(0);
	// const [correctAnswer, setCorrectAnswer] = useState([]);
	const [clickedAnswer, setClickedAnswer] = useState();

	if (!deck) return null;

	console.log("Deck ---- ", deck);

	let array = deck.characters;
	const shuffleArray = (array) => {
		let currentIndex = array.length;
		let tempVal;
		let randomIndex;
		// console.log("array going in ", array);
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			// And swap it with the current element.
			tempVal = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = tempVal;
		}
		// console.log("Array after shuffle", array);
		return array;
	};
	shuffleArray(array)
	// let shuffleDeck = shuffleArray(array);
	// setDeck(shuffleDeck);
	// useEffect(() => {
	// 	if (!deck) return null;
	// 	let shuffleDeck = shuffleArray(deck.characters);
	// 	setDeck(shuffleDeck)
	// }, [])

	console.log("deck in quiz", deck);
	let correctAnswer = deck.characters[questionNum];
	console.log("Correct answer outside nextQuestion function:", correctAnswer);

	const nextQuestion = () => {
		setQuestionNum(questionNum + 1);
		// console.log("Deck.characters ", deck.characters);
		// console.log("Deck.characters @ questionNum", deck.characters[questionNum]);
		correctAnswer = deck.characters[questionNum];
		console.log("Correct answer:", correctAnswer);
	};

	const answerChoices = () => {
		//answer choices can come from both(all) decks!
	
		let tempVal;
		let randomIndex; 

		let choices = [correctAnswer]//start with the correct answer
		// console.log("Correct answer should be", correctAnswer);
		let array = deck.characters
		while (choices.length < 4) {
			let randomAnswer = array[(Math.floor(Math.random() * array.length))];
			console.log("Random Answer ", randomAnswer)
			if (correctAnswer !== randomAnswer && !choices.includes(randomAnswer) ) {
				choices.push(randomAnswer)
			}
		}
		console.log("Question choices", choices)
		// choices.push()
		// console.log(props.questionDeck.characters[questionNum])
		// while (choices.length < 4) {
		// }
		return choices
	};
	let choices = answerChoices()

	// console.log("deck.characters", deck.characters)
	console.log("questionNum", questionNum);
	return (
		<>
			{!deck ? (
				<p>No deck yet</p>
			) : (
				<>
					<h1>Welcome to the {deck.name} quiz, time to start!</h1>
					<Answers questionNum={questionNum} choices={choices} />
					<Question questionDeck={deck.characters} questionNum={questionNum}>
						A question will appear
					</Question>
					<p>Reveal a hint</p>
					<Button onClick={nextQuestion}>Next question</Button>
				</>
			)}
		</>
	);
}

export default Quiz;

// TODOs:
/*
make a result page for when last quesiton is reached

*/
