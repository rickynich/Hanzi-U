import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { RiAncientGateLine } from "react-icons/ri";
// import { AiOutlineClose } from "react-icons/ai";
import { Flex, HStack, MenuIcon, Stack, Text } from "@chakra-ui/react";
import Logo from "./Logo";

// const MenuToggle = ({ toggle, isOpen }) => {
// 	//will show and hide menu using display
// 	return (
// 		<Box display={{ base: "block", md: "none" }} onClick={toggle}>
// 			{isOpen ? <AiOutlineClose /> : <MenuIcon />}
// 		</Box>
// 	);
// };

const NavBarContainer = (props) => {
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			w="100%"
			mb={8}
			p={3}
			fontWeight="bold"
			// bg="blue"
			// color="black"
			opacity="0.8"
			bg={["gray.200"]}
			color={["black", "black", "primary.700", "primary.700"]}
			// borderBottom="1px solid red"
		>
			{props.children}
		</Flex>
	);
};

const NavBar = ({ authenticated, setAuthenticated }) => {
	const [isOpen, setIsOpen] = useState(false);

	// const toggle = () => setIsOpen(!isOpen);

	return (
		<Flex>
			<NavBarContainer>
				<HStack>
					<Logo />
					{/* <NavLink to="/landing" exact={true} activeClassName="active">
						Landing
					</NavLink> */}
				</HStack>

				<HStack>
					{authenticated && <NavLink to="/users" exact={true} activeClassName="active">
						<Stack spacing="0" direction="column" align="center">
							<RiAncientGateLine size="30px" />
							<Text>Students</Text>
						</Stack>
					</NavLink>}
					{!authenticated && (
						<>
							<NavLink to="/login" exact={true} activeClassName="active">
								Login
							</NavLink>
							<NavLink to="/sign-up" exact={true} activeClassName="active">
								Sign Up
							</NavLink>
						</>
					)}
					{authenticated && <LogoutButton setAuthenticated={setAuthenticated} />}
				</HStack>
			</NavBarContainer>
		</Flex>
	);
};

export default NavBar;
