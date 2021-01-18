import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function UsersList() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch("/api/users/");
			const responseData = await response.json();
			setUsers(responseData.users);
		}
		fetchData();
	}, []);

	const userComponents = users.map((user) => {
		return (
			<Flex justify="space-between">
				{/* <li key={user.id}> */}
					<NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
					<Text>{user.exp}</Text>
				{/* </li> */}
			</Flex>
		);
	});

	return (
		<Container>
			<Heading>Student Leaderboard: </Heading>
			<Text>{userComponents}</Text>
		</Container>
	);
}

export default UsersList;
