import { useDeck } from "../Context/DeckContext";
//custom components:
import Card from "../Card";

function Question() {
    

	return (
		deck && (
			<>
				<h1>A question will be rendered here</h1>
			</>
		)
	);
}

export default Question;
