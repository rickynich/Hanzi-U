import {
	Flex,
	HStack,
	Radio,
	RadioGroup,
	Stack,
	useRadioGroup,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useDeck } from "../Context/DeckContext";
import RadioCard from "./RadioCard";

function Answers(props) {
	const [value, setValue] = useState();
	const { choices, setChoices, questionNum, checkAnswer } = props;
	const { radioVal, setRadioVal } = useState()
	const { getRootProps, getRadioProps } = useRadioGroup({
		name: "framework",
		defaultValue: "react",
		onChange: setValue

	});
	// console.log("Choices in answer Choices", choices);
	// console.log("value", value)

	useEffect(() => {
		checkAnswer(value)
	}, [questionNum])

	const group = getRootProps();
	return (
		<Flex w="100%" justify="center">
			<RadioGroup onChange={setValue} value={value} size="lg">
				<Stack spacing={4} direction="row">
					{choices.map((choice) => {
						const radio = getRadioProps({ choice })
						return (
							<RadioCard value={choice.character} {...radio}>
								{choice.character}
							</RadioCard>
						)
					})}
				</Stack>
			</RadioGroup>
		</Flex>
	);
}

export default Answers;
	// return (
	// 	<HStack {...group}>
	// 		{choices.map((value) => {
	// 			const radio = getRadioProps({ value });
	// 			return (
	// 				<RadioCard key={value} {...radio}>
	// 					{value}
	// 				</RadioCard>
	// 			);
	// 		})}
	// 	</HStack>
	// );
	// useEffect(() => {
	// 	const shuffleArray = () => {
	// 		const array = [...choices]
	// 		let currentIndex = array.length;
	// 		let tempVal;
	// 		let randomIndex;
	// 		console.log("Choices in shuffleArray AnswerChoices component", array)
	// 		while (0 !== currentIndex) {
	// 			randomIndex = Math.floor(Math.random() * currentIndex);
	// 			console.log("Random index", randomIndex)
	// 			currentIndex -= 1;
	// 			tempVal = array[currentIndex];
	// 			array[currentIndex] = array[randomIndex];
	// 			array[randomIndex] = tempVal;
	// 		}
	// 		setChoices(array)
	// 	};
	// 	shuffleArray()
	// }, [questionNum])
