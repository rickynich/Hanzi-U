import React from "react";
import { SiAngellist, SiLinkedin } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { Flex, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// const MenuToggle = ({ toggle, isOpen }) => {
// 	//will show and hide menu using display
// 	return (
// 		<Box display={{ base: "block", md: "none" }} onClick={toggle}>
// 			{isOpen ? <AiOutlineClose /> : <MenuIcon />}
// 		</Box>
// 	);
// };

const FooterContainer = (props) => {
	return (
		<Flex
			// as="nav"
			align="flex-end"
			justify="space-between"
			// wrap="wrap"
			w="100%"
			mt={8}
			p={3}
			fontWeight="bold"
			// bg="blue"
			// color="black"
			opacity="0.8"
			bg={["gray.200"]}
			color={["black", "black", "primary.700", "primary.700"]}
			// borderBottom="1px solid red"
			position="absolute"
			bottom="0"
			// direction="column"
			// minHeight="90vh"
		>
			{props.children}
		</Flex>
	);
};

const Footer = () => {
	return (
		<FooterContainer>
			{/* <Flex isInline="true" direction="row-reverse" width="100px"> */}
			<Flex >
				<a href="https://www.linkedin.com/in/nicholas-richard-77a9a066/">
					<SiLinkedin size="30px" />
				</a>{" "}
				<a href="https://github.com/rickynich/Hanzi-U" target="_blank">
					<AiOutlineGithub size="30px" />
				</a>
				<a href="https://angel.co/u/nicholas-richard">
					<SiAngellist size="30px" />
				</a>{" "}
			</Flex>
		</FooterContainer>
	);
};

export default Footer;
