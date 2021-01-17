import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
// import react-app / public / logo.png

export default function Logo() {
	return (
		<Box width="50px">
			<NavLink to="/" exact={true} activeClassName="active">
				<Image alt="logo" src={"/logo.png"} />
			</NavLink>
		</Box>
	);
}
