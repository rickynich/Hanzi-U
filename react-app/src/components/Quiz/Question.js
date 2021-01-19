// import { Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
// import { useDeck } from "../Context/DeckContext";
//custom components:


function Question(props) {
      const {questionNum} = props
	return (
		<Flex direction="column" mb="30px" align="center">
			<Text fontWeight="bold">{props.questionDeck[questionNum].pinyin}</Text>
			<Text>{props.questionDeck[questionNum].definition}</Text>
		</Flex>
	);
}

export default Question;


