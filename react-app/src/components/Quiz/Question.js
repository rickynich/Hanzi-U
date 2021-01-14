import { Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useDeck } from "../Context/DeckContext";
//custom components:
import Answer from "./AnswerChoice";

function Question(props) {
	
	// const [answerChoices, setAnswerChoices] = useState([])
	const [correctAnswer, setCorrectAnswer] = useState();
	const [clickedAnswer, setClickedAnswer] = useState();
      const [score, setScore] = useState(0);
      const [value, setValue] = useState("1")
      const {questionNum} = props
	// const nextQuestion = () => {
	// 	setQuestionNum(questionNum + 1);
	// };

	//Make answer choices into Radio, render random wrong answers to go alongside right one. Make function to do this
	//answer array:
	//set index 0 to the right answer
	//set index 1 and 2 to be different answers, but not the same as index 0
	//shuffle the answer array
      // const answerChoices = () => {
      //       //answer choices can come from both(all) decks!
	// 	let choices = [];
	// 	// console.log(props.questionDeck.characters[questionNum])
	// 	while (choices.length < 4) {}
	// };

	const shuffleArray = (ansArray) => {
		let currentIndex = ansArray.length,
			temporaryValue,
			randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = ansArray[currentIndex];
			ansArray[currentIndex] = ansArray[randomIndex];
			ansArray[randomIndex] = temporaryValue;
		}

		return ansArray;
	};
      //can just pass the function results for an answer to the answerChoice component, so that stuff can be moved to and come from the Quiz component 
	return (
		<>
			<RadioGroup onChange={() => setValue(value)} value={value}>
				<Stack direction="row">
					<Radio value="1">Answer Choice 1 (A character)</Radio>
					<Radio value="2">Answer Choice 2 (A character)</Radio>
					<Radio value="3">Answer Choice 3 (A character)</Radio>
				</Stack>
			</RadioGroup>
			<h1>{props.questionDeck.characters[questionNum].character}</h1>
			<p>a reveal character.hint button</p>
			
		</>
	);
}

export default Question;

// TODOs:
/*
make a result page for when last quesiton is reached

*/
