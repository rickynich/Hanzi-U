import {
	Button,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";
// import { useDeck } from "../Context/DeckContext";
//custom components:

function HintButton(props) {
	const { correctAnswer } = props;
	return (
			<Popover>
				<PopoverTrigger>
					<Button>Reveal a hint</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverArrow />
					<PopoverCloseButton />
					<PopoverHeader>Hint: </PopoverHeader>
					<PopoverBody>{correctAnswer.hint}</PopoverBody>
				</PopoverContent>
			</Popover>
	);
}

export default HintButton;
