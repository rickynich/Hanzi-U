import { useDeck } from "../Context/DeckContext";
//custom components:
import Card from "../Card";
import Answer from "./AnswerChoice";

function Question() {
	return (
		<>
            <h1>A question(pinyin and defunutuin) will be rendered here</h1>
            <Answer>Answer Choice 1 (A character)</Answer>
            <Answer>Answer Choice 2 (A character)</Answer>
            <Answer>Answer Choice 3 (A character)</Answer>
		</>
	);
}

export default Question;
