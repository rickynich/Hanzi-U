// import { Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
// import { useDeck } from "../Context/DeckContext";
//custom components:


function Question(props) {
      const {questionNum} = props
	return (
		<>
			<Text>pinyin: {props.questionDeck[questionNum].pinyin}</Text>
			<Text>definition: {props.questionDeck[questionNum].definition}</Text>
		</>
	);
}

export default Question;


