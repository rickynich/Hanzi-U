import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Chakra
// import { SimpleGrid } from "@chakra-ui/react";
import {
	Box,
	Button,
	ButtonGroup,
	Flex,
	Text,
} from "@chakra-ui/react";

//context:
import { useDeck } from "../Context/DeckContext";
import Answers from "./AnswerChoices";
//custom components
import Question from "./Question";
import Results from "./Results";
import HintButton from "./HintButton";

function Quiz() {
	const { deckId } = useParams();
	const decks = useDeck(); //uses DeckContext
	const [questionNum, setQuestionNum] = useState(0);
	const [deck, setDeck] = useState(decks[deckId - 1]);
	const [end, setEnd] = useState(false);
	const [score, setScore] = useState(0);
	const [correctAnswer, setCorrectAnswer] = useState({});
	const [wrongAnswers, setWrongAnswers] = useState([]);
	const [choices, setChoices] = useState([]);
	const [answerSubmitted, setAnswerSubmitted] = useState(false);

	useEffect(() => {
		if (decks.length == 0) return;
		const currentDeck = decks[deckId - 1];
		setDeck(currentDeck);
		setCorrectAnswer(currentDeck.characters[questionNum]);

		const answerChoices = (correctChoice) => {
			let choices = [correctChoice]; //start with the correct answer
			let array = currentDeck.characters;
			while (choices.length < 3) {
				let randomAnswer = array[Math.floor(Math.random() * array.length)];
				if (correctChoice !== randomAnswer && !choices.includes(randomAnswer)) {
					choices.push(randomAnswer);
				}
			}
			return choices;
		};
		const shuffleArray = (answers) => {
			const array = [...answers];
			let currentIndex = array.length;
			let tempVal;
			let randomIndex;
			while (0 !== currentIndex) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				tempVal = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = tempVal;
			}
			return array;
		};
		let choices = shuffleArray(
			answerChoices(currentDeck.characters[questionNum])
		);
		setChoices(choices);
	}, [questionNum, decks]);

	if (!deck) return null;

	const nextQuestion = () => {
		if (questionNum === deck.characters.length - 1) {
			setEnd(true);
		}
		setQuestionNum(questionNum + 1);
	};

	const checkAnswer = (answer) => {
		let correctChar = correctAnswer.character;
		if (answer == correctChar && correctChar) {
			setScore(score + 1);
		} else if (!wrongAnswers.includes(answer)) {
			let array = [...wrongAnswers];
			array.push(answer);
			setWrongAnswers(array);
		}
	};

	return (
		<>
			{end ? (
				<Results score={score} wrongAnswers={wrongAnswers} />
			) : (
				<>
					<Flex
						direction="column"
						align="center"
						m={6}
						height="100%"
						width="400px"
					>
						<Text mb={8} fontSize={20} as="u">{deck.name} - Question {questionNum + 1}</Text>
						<Answers
							questionNum={questionNum}
							choices={choices}
							setChoices={setChoices}
								checkAnswer={checkAnswer}
								nextQuestion={nextQuestion}
								setAnswerSubmitted={setAnswerSubmitted}
							mb={6}
						/>
						<Question
							questionDeck={deck.characters}
							questionNum={questionNum}
						/>
						<Box>
							<ButtonGroup>
								<HintButton correctAnswer={correctAnswer} />
								<Button
									colorScheme="blue"
									onClick={() => {
										nextQuestion();
										setAnswerSubmitted(true);
									}}
								>
									Next question
								</Button>
							</ButtonGroup>
						</Box>
						<Text m="20px">Current score: {score}</Text>
						<Button
							onClick={() => {
								window.location.reload();
							}}
						>
							Restart
						</Button>
					</Flex>
				</>
			)}
		</>
	);
}

export default Quiz;

