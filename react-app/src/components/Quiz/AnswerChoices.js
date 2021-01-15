import {
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
	const [value, setValue] = useState("1");
	let { choices } = props;

	const { getRootProps, getRadioProps } = useRadioGroup({
		name: "framework",
		defaultValue: "react",
		onChange: console.log,
	});
	console.log("Choices in answer Choices", choices);

	const shuffleArray = (array) => {
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
	shuffleArray(choices);

	const group = getRootProps();
	return (
		<>
			<RadioGroup defaultValue="1">
				<Stack spacing={4} direction="row">
					<Radio value="1">Answer Choice 1 {choices[0].character}</Radio>
					<Radio value="2">Answer Choice 2 {choices[1].character}</Radio>
					<Radio value="3">Answer Choice 3 {choices[2].character}</Radio>
					{/* <Radio value="4">Answer Choice 4 {choices[3].character}</Radio> */}
				</Stack>
			</RadioGroup>
		</>
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

