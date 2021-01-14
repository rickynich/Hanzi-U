import React, { useState, useEffect } from "react";
import { useDeck } from "../Context/DeckContext";
//custom components:
import Answer from "./AnswerChoice";

function Question(props) {
      console.log("Question Component - questionDeck", props.questionDeck.characters[0].character)
	return (
		<>
                  <h1>{props.questionDeck.characters[0].character}</h1>
            <Answer>Answer Choice 1 (A character)</Answer>
            <Answer>Answer Choice 2 (A character)</Answer>
            <Answer>Answer Choice 3 (A character)</Answer>
            <p>a reveal character.hint button</p>
		</>
	);
}

export default Question;
