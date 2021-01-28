import React from "react";
import {
	Box,
	Text,
	Button,
	Container,
	HStack,
} from "@chakra-ui/react";
// import ModalCard from "./ModalCard";
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

// antique white: #FAEBD7
function Card(props) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box mb={7} onClick={onOpen} as="button">
			<Box w="300px" h="300px" boxShadow="lg" rounded="md" bg="gray.200">
				<Box bg="#A3262A">
					<Text fontSize="4em" textAlign={["left", "center"]} color="white">
						{props.character.character}
					</Text>
				</Box>
				<Box h="15vh" textAlign={["left"]} mt={3}>
					<Text>Pinyin: {props.character.pinyin}</Text>
					<Text>Definition: {props.character.definition}</Text>
					<Text>Hint/reminder: {props.character.hint}</Text>
				</Box>
				<Container>
					<Modal isOpen={isOpen} onClose={onClose} autoFocus="true">
						<ModalOverlay />
						<ModalContent>
							<Text fontSize="4em" textAlign={["left", "center"]}>
								{props.character.character}
							</Text>
							<ModalCloseButton />
							<ModalBody>
								<HStack>
									<Text>Pinyin: </Text>
									<Text>{props.character.pinyin}</Text>
								</HStack>
								<HStack>
									<Text>Definition: </Text>
									<Text>{props.character.definition}</Text>
								</HStack>
								<HStack>
									<Text>Hint/reminder: </Text>
									<Text>{props.character.hint}</Text>
								</HStack>
							</ModalBody>

							<ModalFooter>
								{/* <Button variant="ghost" mr={3}>
									Add to deck
								</Button> */}
								<Button>Next Card</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
				</Container>
			</Box>
		</Box>
	);
}

export default Card;
