import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useDeck } from "../Context/DeckContext";


function Answers(props) {
	const [value, setValue] = useState("1");
	let {choices} = props
	console.log("Choices in answer Choices", choices)
	return (
		<>
			<RadioGroup onChange={() => setValue(value)} value={value}>
				<Stack direction="row">
					<Radio value="1">Answer Choice 1 (A character)</Radio>
					<Radio value="2">Answer Choice 2 (A character)</Radio>
					<Radio value="3">Answer Choice 3 (A character)</Radio>
				</Stack>
			</RadioGroup>
		</>
	);
}

export default Answers;
