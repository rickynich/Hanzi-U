import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Chakra
// import { SimpleGrid } from "@chakra-ui/react";
import { Button, Flex } from "@chakra-ui/react";

//context:
import { useDeck } from "../Context/DeckContext";
import Answers from "./AnswerChoices";
//custom components
import Question from "./Question";

function Quiz() {
	const { deckId } = useParams();
	const decks = useDeck(); //uses DeckContext
	console.log("Decks ", decks);
	const [questionNum, setQuestionNum] = useState(0);
	const [deck, setDeck] = useState(decks[deckId - 1]);
	const [end, setEnd] = useState(false);
	const [score, setScore] = useState(0);
	const [correctAnswer, setCorrectAnswer] = useState({});
	const [clickedAnswer, setClickedAnswer] = useState();
	const [choices, setChoices] = useState([])

	useEffect(() => {
		if (decks.length == 0) return
		const currentDeck = decks[deckId - 1];
		console.log("currentDeck", currentDeck)
		setDeck(currentDeck);
		setCorrectAnswer(currentDeck.characters[questionNum])
		const answerChoices = (correctChoice) => {
			let choices = [correctChoice]; //start with the correct answer
			let array = currentDeck.characters;
			while (choices.length < 3) {
				let randomAnswer = array[Math.floor(Math.random() * array.length)];
				console.log("Random Answer ", randomAnswer);
				if (correctChoice !== randomAnswer && !choices.includes(randomAnswer)) {
					choices.push(randomAnswer);
				}
			}
			console.log("Question choices", choices);
			return choices;
		};
		let choices = answerChoices(currentDeck.characters[questionNum]);
		setChoices(choices)
	}, [questionNum, decks])
	
	console.log("deck in quiz", deck);
	if (!deck) return null;
	

	

	const nextQuestion = () => {
		if (questionNum == deck.characters.length - 1) {
			console.log("You've reached the end");
			setEnd(true);
		}
		setQuestionNum(questionNum + 1);
		// correctAnswer = deck.characters[questionNum];
		console.log("Correct answer:", correctAnswer);
	};

	const checkAnswer = (answer) => {
		if (answer === correctAnswer) {
			setScore(score + 1);
		}
		console.log("In checkAnswer", answer);
	};

	// console.log("deck.characters", deck.characters)
	console.log("questionNum", questionNum);
	return (
		<>
			{end ? (
				<p>You've reached the end</p>
			) : (
				<Flex direction="column" align="center">
					<h1>Welcome to the {deck.name} quiz!</h1>
					<Answers
						questionNum={questionNum}
							choices={choices}
							setChoices={setChoices}
						checkAnswer={checkAnswer}
					/>
					<Question questionDeck={deck.characters} questionNum={questionNum}>
						A question will appear
					</Question>
					<p>Reveal a hint</p>
					<Button onClick={nextQuestion}>Next question</Button>
				</Flex>
			)}
		</>
	);
}

export default Quiz;

// TODOs:
/*
make a result page for when last quesiton is reached

*/
	//Graveyard
	// let array = deck.characters;
	// const shuffleArray = (array) => {
	// 	let currentIndex = array.length;
	// 	let tempVal;
	// 	let randomIndex;
	// 	// console.log("array going in ", array);
	// 	// While there remain elements to shuffle...
	// 	while (0 !== currentIndex) {
	// 		// Pick a remaining element...
	// 		randomIndex = Math.floor(Math.random() * currentIndex);
	// 		currentIndex -= 1;
	// 		// And swap it with the current element.
	// 		tempVal = array[currentIndex];
	// 		array[currentIndex] = array[randomIndex];
	// 		array[randomIndex] = tempVal;
	// 	}
	// 	// console.log("Array after shuffle", array);
	// 	return array;
	// };
	// shuffleArray(array);
	// let shuffleDeck = shuffleArray(array);
	// setDeck(shuffleDeck);
	// useEffect(() => {
	// 	if (!deck) return null;
	// 	let shuffleDeck = shuffleArray(deck.characters);
	// 	setDeck(shuffleDeck)
	// }, [])
