import React, { useState, useEffect } from "react";
import { useDeck } from "../Context/DeckContext";
//custom components:
import Answer from "./AnswerChoice";

function Question() {
	return (
		<>
            <h1>A question(pinyin and definition) will be rendered here</h1>
            <Answer>Answer Choice 1 (A character)</Answer>
            <Answer>Answer Choice 2 (A character)</Answer>
            <Answer>Answer Choice 3 (A character)</Answer>
            <p>a reveal character.hint button</p>
		</>
	);
}

export default Question;
