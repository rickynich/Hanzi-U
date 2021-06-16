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

// antique white: #FAEBD7
function Card(props) {
	const [deck, setDeck] = useDeckUpdate(); //uses DeckUpdateContext
	const [card, setCard] = useCardUpdate(); //uses CardUpdateContext
	// const card = useCardUpdate(); //uses CardUpdateContext

	const [curChar, setCurChar] = useState();

	const characters = deck.characters;

	const { isOpen, onOpen, onClose } = useDisclosure();

	const charComponents =
		deck &&
		characters.map((character) => {
			return (
				<Box
					mb={7}
					onClick={() => {
						onOpen();
						setCard(character.id);
						// await setCurChar(character.id);
						// console.log("deck is", deck);
						console.log("setCard is :", card);
						console.log("curChar is :", curChar);
						console.log("character", character);
						console.log("character.pinyin", character.pinyin);
						console.log("character.definition", character.definition);
						console.log("character.hint", character.hint);
						console.log("character.id", character.id);
						// console.log("Characters ", characters[0].character);
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
										{character.character}
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
												<Text>{character.pinyin}</Text>
											</Flex>
											<Flex justify="space-between" mb={3}>
												<Text>Definition: </Text>
												<Text align="end">{character.definition}</Text>
											</Flex>
											<Flex justify="space-between" mb={3}>
												<Text>Decomposition: </Text>
												<Text>{character.decomposition}</Text>
											</Flex>
											<Flex justify="space-between" mb={3}>
												<Text>Hint: </Text>
												<Text align="end">{character.hint}</Text>
											</Flex>
										</Flex>
									</ModalBody>

									<ModalFooter>
										<Button
											id={character.id}
											onClick={async () => {
												await setCard(character.id + 1)
												await setCurChar(character.id++);
												console.log("curChar is ", curChar);
												console.log(typeof character.id)
												console.log(
													"character ifd + 1 ",
													character.id,", "+ (character.id + 1)
												);
											}}
										>
											Next Card
										</Button>
									</ModalFooter>
								</ModalContent>
							</Modal>
						</Container>
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
		</Flex>
	);
}

export default Card;
