import React from "react";
import { SiAngellist, SiLinkedin } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { Flex, Grid, HStack } from "@chakra-ui/react";


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
			as="nav"
			align="center"
			justify="center"
			// direction="row-reverse"
			wrap="wrap"
			w="100%"
			mt={8}
			p={3}
			fontWeight="bold"
			opacity="0.8"
			bg={["gray.200"]}
			color={["black", "black", "primary.700", "primary.700"]}
			// borderBottom="1px solid red"
			position="sticky"
			bottom="0"
			className="Footer container"
		>
			{props.children}
		</Flex>
	);
};

const Footer = () => {
	return (
		<FooterContainer>
			{/* <Flex isInline="true" direction="row-reverse" width="100px"> */}
			<Flex className="Icon cluster" width="auto">
				<Flex mx="6px">
					<a
						href="https://www.linkedin.com/in/nicholas-richard-77a9a066/"
						m="20px"
					>
						<SiLinkedin size="29px" />
					</a>
				</Flex>
				<Flex mx="6px">
					<a href="https://github.com/rickynich/Hanzi-U" target="_blank">
						<AiOutlineGithub size="30px" />
					</a>
				</Flex>
				<Flex mx="6px">
					<a href="https://angel.co/u/nicholas-richard">
						<SiAngellist size="28px" />
					</a>
				</Flex>
				<Flex mx="6px">
					<a href={`mailto:nrich414@gmail.com`}>
						<FaEnvelope size="28px" />
					</a>
				</Flex>
			</Flex>
		</FooterContainer>
	);
};

export default Footer;
