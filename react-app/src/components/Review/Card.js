import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThemeProvider, Box, Text, Button } from "@chakra-ui/react";

// antique white: #FAEBD7
function Card(props) {
	// console.log("Card props", props);
	return (
		<Box>
			<Box w="300px" h="300px" boxShadow="lg" rounded="md" bg="gray.200">
				<Box bg="#FAEBD7">
					<Text fontSize="4em" textAlign={["left", "center"]}>
						{props.character.character}
					</Text>
				</Box>
				<Box h="15vh" textAlign={["left"]}>
					<Text>Pinyin: {props.character.pinyin}</Text>
					<Text>Definition: {props.character.definition}</Text>
					<Text>Hint/reminder: {props.character.hint}</Text>
				</Box>
				<Button>View Card</Button>
			</Box>
		</Box>
	);
}

export default Card;
