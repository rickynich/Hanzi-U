import { Button } from "@chakra-ui/react";
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
	const [questionNum, setQuestionNum] = useState(0);
	const [deck, setDeck] = useState(decks[deckId - 1]);
	const [questionDeck, setQuestionDeck] = useState([]);
	const [score, useScore] = useState(0);
	const [correctAnswer, setCorrectAnswer] = useState();
	const [clickedAnswer, setClickedAnswer] = useState();

	if (!deck) return null;

	let array = deck.characters;

	const shuffleArray = (array) => {
		let currentIndex = array.length;
		let tempVal;
		let randomIndex;
		console.log("array going in ", array);
		let randomizedArray = [];

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			console.log("randomIndex", randomIndex);
			console.log("currentIndex", currentIndex);
			// And swap it with the current element.
			tempVal = array[currentIndex];
			console.log("Current Index at array to set to tempVal", tempVal);
			array[currentIndex] = array[randomIndex];
			console.log(
				"(array[currentIndex]) = array[randomIndex]  ",
				array[randomIndex]
			);
			array[randomIndex] = tempVal;
		}
		console.log("Array after shuffle", array);
		// console.log("randomized after loop", randomizedArray)
		return array;
	};
	shuffleArray(array);

	console.log("Question deck: ", questionDeck);
	console.log("deck selected in quiz", deck);

	const nextQuestion = () => {
		setQuestionNum(questionNum + 1);
	};

	const answerChoices = () => {
		//answer choices can come from both(all) decks!
		let choices = [];
		// console.log(props.questionDeck.characters[questionNum])
		while (choices.length < 4) {}
	};

	return (
		<>
			<h1>Welcome to the {deck.name} quiz, time to start!</h1>
			<Question questionDeck={deck} questionNum={questionNum}>A question will appear</Question>
			<Button onClick={() => nextQuestion()}>Next question</Button>
		</>
	);
}

export default Quiz;
