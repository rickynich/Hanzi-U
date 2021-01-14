// import { Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
// import { useDeck } from "../Context/DeckContext";
//custom components:


function Question(props) {
      const {questionNum} = props
	return (
		<>
			<h1>pinyin: {props.questionDeck[questionNum].pinyin}</h1>
			<h1>definition: {props.questionDeck[questionNum].definition}</h1>
		</>
	);
}

export default Question;


