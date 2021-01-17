import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import {
	Box,
	Button,
	ButtonGroup,
	Container,
	Image,
	Input,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from "@chakra-ui/react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SignUpForm from "./SignUpForm";

const LoginForm = ({ authenticated, setAuthenticated }) => {
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
		<>
			{/* <Box boxSize="xl">
				<Image
					src={require("../images/bruno-aguirre-qfZKpM0wjd8-unsplash.jpg")}
          alt="splash image"
          height="50%"
          width="100%"
				/>
			</Box> */}
			<Box
				bg="blue.200"
				width="350px"
				margin="10px"
				p={5}
				boxShadow="sm"
				rounded="lg"
			>
				<Tabs
					variant="soft-rounded"
					colorScheme="blue"
					isFitted
					m={2}
					defaultIndex={0}
				>
					<TabList>
						<Tab>Login</Tab>
						<Tab>Sign Up</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							{/* Login form: */}
							<form onSubmit={onLogin}>
								<div>
									{errors.map((error) => (
										<div>{error}</div>
									))}
								</div>
								<div>
									<label htmlFor="email">Email</label>
									<Input
										name="email"
										type="text"
										placeholder="Email"
										value={email}
										onChange={updateEmail}
									/>
								</div>
								<div>
									<label htmlFor="password">Password</label>
									<Input
										name="password"
										type="password"
										placeholder="Password"
										value={password}
										onChange={updatePassword}
									/>
									<Stack spacing={2}>
										<Button type="submit">Login</Button>
										<Button type="submit">Sign Up Here</Button>
									</Stack>
									{/* <Link href="/sign-up">Sign up here</Link> */}
								</div>
							</form>
						</TabPanel>
						<TabPanel>
							<SignUpForm></SignUpForm>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</>
	);
};

export default LoginForm;
