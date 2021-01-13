import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThemeProvider, Box, Text } from "@chakra-ui/react";

// antique white: #FAEBD7
function Card(props) {
	console.log("Card props", props);
	return (
		<div display="flex">
			<Box w="400px" h="15vh" boxShadow="lg" rounded="md" bg="gray.200">
				<Box>{props.character.character}</Box>
				<Box>
					<Text>{props.character.definition}</Text>
				</Box>
			</Box>
		</div>
	);
}

export default Card;
