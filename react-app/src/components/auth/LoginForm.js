import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import {
	Box,
	Button,
	Flex,
	Input,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from "@chakra-ui/react";
import SignUpForm from "./SignUpForm";

const LoginForm = ({ authenticated, setAuthenticated, formTab }) => {
	const [errors, setErrors] = useState([]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onLogin = async (e) => {
		e.preventDefault();
		const user = await login(email, password);
		if (!user.errors) {
			setAuthenticated(true);
		} else {
			setErrors(user.errors);
		}
	};
	const demoLogin = async (e) => {
		// e.preventDefault();
		const user = await login("demo@aa.io", "password");
		if (!user.errors) {
			setAuthenticated(true);
		} else {
			setErrors(user.errors);
		}
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	if (authenticated) {
		return <Redirect to="/" />;
	}

	return (
		<Flex justify="center" mb="40%">
			{/* <Box boxSize="xl">
				<Image
					src={require("../images/bruno-aguirre-qfZKpM0wjd8-unsplash.jpg")}
          alt="splash image"
          height="50%"
          width="100%"
				/>
			</Box> */}
			<Box
				bg="#CC232A"
				width="350px"
				margin="10px"
				p={5}
				boxShadow="sm"
				rounded="lg"
				textAlign="center"
			>
				<Tabs
					variant="soft-rounded"
					colorScheme="red"
					bg="yellow.50"
					isFitted
					m={2}
					defaultIndex={formTab}
					rounded="lg"
				>
					<TabList>
						<Tab>Login</Tab>
						<Tab>Sign Up</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							{/* Login form: */}
							<form onSubmit={onLogin}>
								<Stack spacing={4}>
									<div>
										{errors.map((error) => (
											<div>{error}</div>
										))}
									</div>
									<div>
										<label htmlFor="email"></label>
										<Input
											name="email"
											type="text"
											placeholder="Email"
											value={email}
											onChange={updateEmail}
											placeholder="Email"
											bg="white"
										/>
									</div>
									<div>
										<label htmlFor="password"></label>
										<Input
											name="password"
											type="password"
											placeholder="Password"
											value={password}
											onChange={updatePassword}
											placeholder="password"
											bg="white"
										/>
									</div>
									<Button type="submit" boxShadow="md">
										Login
									</Button>
									<Button onClick={() => demoLogin()} boxShadow="md">Demo Login</Button>
								</Stack>
							</form>
						</TabPanel>
						<TabPanel>
							<SignUpForm></SignUpForm>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</Flex>
	);
};

export default LoginForm;
