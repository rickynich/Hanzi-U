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

// antique white: #FAEBD7
function CardModal(props) {
	const [deck, setDeck] = useDeckUpdate(); //uses DeckUpdateContext
	const [card, setCard] = useCardUpdate(); //uses CardUpdateContext
	// const card = useCardUpdate(); //uses CardUpdateContext

    const [curChar, setCurChar] = useState();
    console.log("------------CardModal component card", card)

	const { isOpen, onOpen, onClose } = useDisclosure();

			return (
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
								{card.character}
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
										<Text>{card.pinyin}</Text>
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
									onClick={async () => {
										// await setCard(card.id + 1);
										// await setCurChar(card.id++);
										console.log("curChar is ", curChar);
										console.log(typeof card.id);
										console.log(
											"card ifd + 1 ",
											card.id,
											", " + (card.id + 1)
										);
									}}
								>
									Next Card
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
				</Container>
			);
}

export default CardModal;
