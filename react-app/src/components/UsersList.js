import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

//Leaderboard
function UsersList() {
	const [users, setUsers] = useState([]);
	const history = useHistory();

	useEffect(() => {
		async function fetchData() {
			const response = await fetch("/api/users/");
			const responseData = await response.json();
			if (responseData.users.exp) setUsers(users.exp.sort()); //not working...
			let sUsers = responseData.users;
			setUsers(sUsers);
		}
		fetchData();
	}, []);

	const userComponents = users
		.slice(0)
		.sort((a, b) => (a.exp > b.exp ? -1 : 1)) //sort users based on exp, highest at top
		.map((user) => {
			return (
				<Flex justify="space-between">
					<NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
					<Text opacity={.8}>{user.exp}</Text>
				</Flex>
			);
		});
	const handleClick = (path) => {
		history.push(`/${path}`);
	};

	return (
		<Container height="100%" width="400px">
			<Heading
				size="md"
				fontWeight="normal"
				lineHeight={1.5}
				textAlign={["center", "center", "left", "left"]}
				as="u"
			>
				Student Leaderboard:{" "}
			</Heading>
			<Text opacity="1" mb={6}>
				{userComponents}
			</Text>
			{/* <Button justify="center" onClick={() => handleClick(``)}>
				Return Home
			</Button> */}
		</Container>
	);
}

export default UsersList;
