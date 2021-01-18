import { Button, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signUp } from "../../services/auth";

const SignUpForm = ({ authenticated, setAuthenticated }) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");

	const onSignUp = async (e) => {
		e.preventDefault();
		if (password === repeatPassword) {
			const user = await signUp(username, email, password);
			if (!user.errors) {
				setAuthenticated(true);
			}
		}
	};

	const updateUsername = (e) => {
		setUsername(e.target.value);
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	const updateRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
	};

	if (authenticated) {
		return <Redirect to="/" />;
	}

	return (
		<form onSubmit={onSignUp}>
			<Stack spacing={4}>
				<div>
					<label></label>
					<Input
						type="text"
						name="username"
						onChange={updateUsername}
						value={username}
						bg="white"
						placeholder="Username"
					></Input>
				</div>
				<div>
					<label></label>
					<Input
						type="text"
						name="email"
						onChange={updateEmail}
						value={email}
						bg="white"
						placeholder="Email"
					></Input>
				</div>
				<div>
					<label></label>
					<Input
						type="password"
						name="password"
						onChange={updatePassword}
						value={password}
						bg="white"
						placeholder="Password"
					></Input>
				</div>
				<div>
					<label></label>
					<Input
						type="password"
						name="repeat_password"
						onChange={updateRepeatPassword}
						value={repeatPassword}
						required={true}
						bg="white"
						placeholder="Repeat Password"
					></Input>
				</div>
				<Button type="submit" boxShadow="md">Sign Up</Button>
			</Stack>
		</form>
	);
};

export default SignUpForm;
