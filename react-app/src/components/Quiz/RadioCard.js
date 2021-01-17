import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThemeProvider, Box, Text, useRadio } from "@chakra-ui/react";

// antique white: #FAEBD7
function RadioCard(props) {
	const { getInputProps, getCheckboxProps } = useRadio(props);

	const input = getInputProps();
	const checkbox = getCheckboxProps();
	return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        _hover={{
          background: "blue",
          color: "red"
        }}
        px={5}
        py={3}
        
        fontSize={["25px", "50px"]}
      >
        {props.children}
      </Box>
    </Box>
  )
}


export default RadioCard;

// return (
// 	<Box>
// 		<Box w="300px" h="30vh" boxShadow="lg" rounded="md" bg="gray.200">
// 			<Box bg="#FAEBD7">
// 				<Text>Character: {props.character.character}</Text>
// 			</Box>
// 			<Box h="15vh">
// 				<Text>Pinyin: {props.character.pinyin}</Text>
// 				<Text>Definition: {props.character.definition}</Text>
// 				<Text>Hint/reminder: {props.character.hint}</Text>
// 			</Box>
// 		</Box>
// 	</Box>
// );