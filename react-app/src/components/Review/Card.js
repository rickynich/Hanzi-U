import React, { useState, useEffect } from "react";

//chakra UI:
import { Box, Text, Button, Container, Flex, Stack } from "@chakra-ui/react";
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	// ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";

//context:
import { useCardUpdate, useDeckUpdate } from "../Context/DeckContext";

//components
import CardModal from "./CardModal";

// antique white: #FAEBD7
function Card(props) {
	const [deck, setDeck] = useDeckUpdate(); //uses DeckUpdateContext
	const [card, setCard] = useCardUpdate(); //uses CardUpdateContext
	// const card = useCardUpdate(); //uses CardUpdateContext

	const [curChar, setCurChar] = useState(1);
	const [selected, setSelected] = useState(false);

	const characters = deck.characters;

	const { isOpen, onOpen, onClose } = useDisclosure();

	// useEffect(() => {
	// 	setCard(card.id);
	// }, [selected])
	
	useEffect(() => {
		console.log("useEffect setCard is :", card);
	}, [card])

	const charComponents =
		deck &&
		characters.map((character) => {
			return (
				<Box
					mb={7}
					id={character.id}
					onClick={(e) => {
						onOpen();
						console.log("=========== e", e)
						console.log("(before) setCard from context is :", card); // + 1 error
						setCard(e.target.id);
						console.log("(after) setCard from context is :", card); // + 1 error
						setCurChar(character.id);
						setSelected(true);
						// console.log("deck is", deck);
						console.log("local curChar is :", curChar);
						console.log("mapped character", character);
						console.log("mapped character.pinyin", character.pinyin);
						console.log("Characters ", characters);
					}}
					as="button"
				>
					<Box
						w="300px"
						h="370px"
						boxShadow="lg"
						rounded="md"
						bg="gray.200"
						overflowY="auto"
						overflowX="hidden"
						wrap
					>
						<Box bg="#A3262A">
							<Text fontSize="5em" textAlign={["left", "center"]} color="white">
								{character.character}
							</Text>
						</Box>
						<Box h="15vh" textAlign={["left"]} mt={3}>
							<Stack
								spacing="16px"
								textAlign="end"
								fontFamily='"Goudy Bookletter 1911", sans-serif'
								padding={5}
							>
								<Flex justify="space-between" direction="row">
									<Text fontWeight="bold">Pinyin: </Text>
									<Text>{character.pinyin}</Text>
								</Flex>
								<Flex justify="space-between">
									<Text fontWeight="bold">Definition: </Text>
									<Text> {character.definition}</Text>
								</Flex>
								<Flex justify="space-between">
									<Text fontWeight="bold">Hint: </Text>
									<Text>{character.hint}</Text>
								</Flex>
								{/* <Flex justify="space-between">
							<Text fontWeight="bold">Decomposition: </Text>
							<Text>{character.decomposition}</Text>
						</Flex> */}
							</Stack>
						</Box>
						{/* <CardModal
							isOpen={isOpen}
							onClose={onClose}
							autoFocus="true"
							blockScrollOnMount={false}
							isCentered
							overflowWrap="break-word"
						/> */}
					</Box>
				</Box>
			);
		});

	return (
		<Flex
			m={6}
			wrap="wrap"
			direction="row"
			justify="space-between"
			spacing={10}
		>
			{charComponents}
			{card ? (
				<Container>
					<Modal
						isOpen={isOpen}
						onClose={onClose}
						autoFocus="true"
						blockScrollOnMount={false}
						isCentered
						overflowWrap="break-word"
					>
						<ModalOverlay />
						<ModalContent>
							<Text fontSize="6em" textAlign={["center"]} mt={6}>
								{characters[card].character}
							</Text>
							<ModalCloseButton />
							<ModalBody mt={4}>
								<Flex
									justify="space-between"
									overflowWrap="break-word"
									direction="column"
									p={18}
									fontSize={22}
								>
									<Flex justify="space-between" mb={3}>
										<Text>Pinyin: </Text>
										<Text>{characters[card].pinyin}</Text>
									</Flex>
									<Flex justify="space-between" mb={3}>
										<Text>Definition: </Text>
										<Text align="end">{card.definition}</Text>
									</Flex>
									<Flex justify="space-between" mb={3}>
										<Text>Decomposition: </Text>
										<Text>{card.decomposition}</Text>
									</Flex>
									<Flex justify="space-between" mb={3}>
										<Text>Hint: </Text>
										<Text align="end">{card.hint}</Text>
									</Flex>
								</Flex>
							</ModalBody>

							<ModalFooter>
								<Button
									id={card.id}
									onClick={ () => {
										// setCard(card.id + 1);
										// setCurChar(card.id++);
										console.log("curChar is ", curChar);
										console.log(typeof card.id);
										// console.log("card id + 1 ", card.id, ", " + (card.id + 1));
									}}
								>
									Next Card
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
				</Container>
			) : (
				<div />
			)}
		</Flex>
	);
}

export default Card;
