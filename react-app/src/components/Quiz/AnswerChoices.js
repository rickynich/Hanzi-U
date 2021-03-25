import {
	Flex,
	RadioGroup,
	Stack,
	useRadioGroup,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import RadioCard from "./RadioCard";

function Answers(props) {
	const [value, setValue] = useState();
	const { choices, questionNum, checkAnswer } = props;
	const { getRootProps, getRadioProps } = useRadioGroup({
		name: "framework",
		defaultValue: "react",
		onChange: setValue

	});


	useEffect(() => {
		checkAnswer(value)
	}, [questionNum])

	const group = getRootProps();
	return (
		<Flex w="100%" justify="center">
			<RadioGroup
				onChange={setValue}
				value={value}
				size="lg"
				mb="30px"
				// onClick={() => {
				// 	nextQuestion();
				// 	setAnswerSubmitted(true);
				// }}
			>
				<Stack spacing={4} direction="row">
					{choices.map((choice) => {
						const radio = getRadioProps({ choice });
						return (
							<RadioCard value={choice.character} {...radio}>
								{choice.character}
							</RadioCard>
						);
					})}
				</Stack>
			</RadioGroup>
		</Flex>
	);
}

export default Answers;