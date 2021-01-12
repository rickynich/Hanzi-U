import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThemeProvider, Box } from "@chakra-ui/react";

// antique white: #FAEBD7
function Card(props) {
	console.log("Card props", props)
	return (
		<>
			<Box w="200px" h="15vh" boxShadow="lg" rounded="md">
				<p>{props.character.character}</p>
				<p>{props.character.definition}</p>
			</Box>
		</>
	);
}

export default Card;
