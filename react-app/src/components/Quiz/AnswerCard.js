import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThemeProvider, Box, Text } from "@chakra-ui/react";

// antique white: #FAEBD7
function AnswerCard(props) {
	// console.log("Card props", props);
	return (
		<Box>
			<Box w="300px" h="30vh" boxShadow="lg" rounded="md" bg="gray.200">
				<Box bg="#FAEBD7">
					<Text>Character: {props.character.character}</Text>
				</Box>
				<Box h="15vh">
					<Text>Pinyin: {props.character.pinyin}</Text>
					<Text>Definition: {props.character.definition}</Text>
					<Text>Hint/reminder: {props.character.hint}</Text>
				</Box>
			</Box>
		</Box>
	);
}

export default AnswerCard;
