import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThemeProvider, Box } from "@chakra-ui/react";

// antique white: #FAEBD7
function Card(props) {
	return (
		<>
			<Box w="200px" h="15vh" boxShadow="lg" bg="gray.200" rounded="md">
				<p>{props.character}</p>
			</Box>
		</>
	);
}

export default Card;
