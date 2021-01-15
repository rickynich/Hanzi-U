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
	console.log("value", value)
	useEffect(() => {
		const shuffleArray = () => {
			const array = [...choices]
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
			setChoices(array)
		};
		shuffleArray()
	}, [questionNum])

	const group = getRootProps();
	return (
		<Flex w="100%" justify="center">
			<RadioGroup onChange={setValue} value={value}>
				<Stack spacing={4} direction="row">
					{choices.map((choice) => {
						const radio = getRadioProps({ choice })
						console.log("const radio... whatever that does ", radio)
						// console.log("choice in the choices map", choice)
						return (
							<RadioCard value={choice.character} {...radio}>
								{choice.character}
							</RadioCard>
						)
					})}
					{/* <RadioCard value="1">Answer Choice 1 {choices[0].character}</RadioCard>
					<RadioCard value="2">Answer Choice 2 {choices[1].character}</RadioCard>
					<RadioCard value="3">Answer Choice 3 {choices[2].character}</RadioCard> */}
					{/* <Radio value="4">Answer Choice 4 {choices[3].character}</Radio> */}
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

