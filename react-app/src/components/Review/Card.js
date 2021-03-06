import React, { useState } from "react";
import {
	Box,
	Text,
	Button,
	Container,
	Flex,
	Stack,
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
	const [curChar, setCurChar] = useState(0);
	const { characters } = props;
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box
			mb={7}
			onClick={() => {
				onOpen();
				setCurChar(props.character.id);
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
						{props.character.character}
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
							<Text>{props.character.pinyin}</Text>
						</Flex>
						<Flex justify="space-between">
							<Text fontWeight="bold">Definition: </Text>
							<Text> {props.character.definition}</Text>
						</Flex>
						<Flex justify="space-between">
							<Text fontWeight="bold">Hint: </Text>
							<Text>{props.character.hint}</Text>
						</Flex>
						{/* <Flex justify="space-between">
							<Text fontWeight="bold">Decomposition: </Text>
							<Text>{props.character.decomposition}</Text>
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
								{props.character.character}
							</Text>
							<ModalCloseButton />
							<ModalBody mt={4}>
								<Flex
									justify="space-between"
									overflowWrap= "break-word"
									direction="column"
									p={18}
									fontSize={22}
								>
									<Flex justify="space-between" mb={3}>
										<Text>Pinyin: </Text>
										<Text>{props.character.pinyin}</Text>
									</Flex>
									<Flex justify="space-between" mb={3}>
										<Text>Definition: </Text>
										<Text align="end">{props.character.definition}</Text>
									</Flex>
									<Flex justify="space-between" mb={3}>
										<Text>Decomposition: </Text>
										<Text>{props.character.decomposition}</Text>
									</Flex>
									<Flex justify="space-between" mb={3}>
										<Text>Hint: </Text>
										<Text align="end">{props.character.hint}</Text>
									</Flex>
								</Flex>
							</ModalBody>

							<ModalFooter>
								<Button id={props.character.id}>Next Card</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
				</Container>
			</Box>
		</Box>
	);
}

export default Card;
