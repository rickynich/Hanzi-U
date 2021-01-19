import React from "react";
import { Box, Text, Button, Container, Spacer } from "@chakra-ui/react";
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
	// const renderModal = () => {
	// 	return <ModalCard character={props.character}></ModalCard>
	// }

	return (
		<Box mb={7}>
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
				{/* <Button onClick={onOpen}>View Card</Button> */}
				<Container>
					<Button onClick={onOpen}>View Card</Button>

					<Modal isOpen={isOpen} onClose={onClose}>
						<ModalOverlay />
						<ModalContent>
							<Text fontSize="4em" textAlign={["left", "center"]}>
								{props.character.character}
							</Text>
							<ModalCloseButton />
							<ModalBody>
								<Text>Pinyin: {props.character.pinyin}</Text>
								<Text>Definition: {props.character.definition}</Text>
								<Text>Hint/reminder: {props.character.hint}</Text>
							</ModalBody>

							<ModalFooter justifyContent="space-between">
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
