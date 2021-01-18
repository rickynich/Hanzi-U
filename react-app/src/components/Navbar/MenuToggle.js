import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { RiAncientGateLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Box, MenuIcon } from "@chakra-ui/react";

const MenuToggle = ({ toggle, isOpen }) => {
	//will show and hide menu using display
	return (
		<>
			<Box display={{ base: "block", md: "none" }} onClick={toggle}>
			{isOpen ? <AiOutlineClose /> : <MenuIcon />}
			</Box>
		</>
	);
};
