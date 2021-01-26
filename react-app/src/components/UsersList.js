import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function UsersList() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch("/api/users/");
			const responseData = await response.json();
			console.log(responseData);
			if (responseData.users.exp) setUsers(users.exp.sort()); //not working...
			let sUsers = responseData.users;
			// sUsers.sort((a,b ) => (a.exp > b.exp) ? 1: -1)
			setUsers(sUsers);
		}
		fetchData();
	}, []);

	console.log(users);
	const userComponents = users
		.slice(0).sort((a, b) => a.exp > b.exp ? -1:1)
		.map((user) => {
			console.log("user in users", user)
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
		<Container height="100%">
			<Heading
				size="md"
				fontWeight="normal"
				lineHeight={1.5}
				textAlign={["center", "center", "left", "left"]}
			>
				Student Leaderboard:{" "}
			</Heading>
			<Text opacity="0.8" mb={6}>
				{userComponents}
			</Text>
		</Container>
	);
}

export default UsersList;
