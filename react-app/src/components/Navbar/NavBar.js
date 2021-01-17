import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { RiAncientGateLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Box, Flex, MenuIcon } from "@chakra-ui/react";
// RiAncientGateLine;

const MenuToggle = ({ toggle, isOpen }) => {
	//will show and hide menu using display
	return (
		<Box display={{ base: "block", md: "none" }} onClick={toggle}>
			{isOpen ? <AiOutlineClose /> : <MenuIcon />}
		</Box>
	);
};

const NavBarContainer = (props) => {
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			w="100%"
			mb={8}
			p={8}
			// bg={["primary.500", "primary.500", "transparent", "transparent"]}
			// color={["black", "white", "primary.700", "primary.700"]}
			{...props}
		>
			{props.children}
		</Flex>
	);
};

const NavBar = ({ setAuthenticated }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Flex>
			<NavBarContainer>
				<Flex>
					<NavLink to="/" exact={true} activeClassName="active">
						Home
					</NavLink>
					<NavLink to="/landing" exact={true} activeClassName="active">
						Landing
					</NavLink>
				</Flex>

				<Flex>
					<NavLink to="/login" exact={true} activeClassName="active">
						Login
					</NavLink>

					<NavLink to="/sign-up" exact={true} activeClassName="active">
						Sign Up
					</NavLink>
					<LogoutButton setAuthenticated={setAuthenticated} />
				</Flex>

				{/* <NavLink to="/users" exact={true} activeClassName="active">
				Users
			</NavLink> */}

				{/* <NavLink to="/decks" exact={true} activeClassName="active">
				Decks
			</NavLink>

			<NavLink to="/quiz" exact={true} activeClassName="active">
        Quizzes
			</NavLink> */}
			</NavBarContainer>
		</Flex>
	);
};

export default NavBar;
