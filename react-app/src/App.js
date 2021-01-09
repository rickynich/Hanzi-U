import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import CharactersList from "./components/Deck";
import User from "./components/User";
import DeckList from "./components/DeckList";
import { authenticate } from "./services/auth";
import { DeckProvider } from "./components/DeckContext"

// export const DeckContext = React.createContext()

function App() {
	const [authenticated, setAuthenticated] = useState(false);
	const [loaded, setLoaded] = useState(false);
  // const [decks, setDecks] = useState([]);

	useEffect(() => {
		(async () => {
			const user = await authenticate();
			if (!user.errors) {
				setAuthenticated(true);
			}
			setLoaded(true);
		})();
	}, []);

	// useEffect(() => {
	// 	async function fetchData() {
	// 		const response = await fetch("/api/decks/");
	// 		const responseData = await response.json();
	// 		setDecks(responseData);
	// 	}
  //   fetchData();

	// }, []);

	if (!loaded) {
		return null;
	}

  return (
		<DeckProvider>
			<BrowserRouter>
				<NavBar setAuthenticated={setAuthenticated} />
				<Route path="/login" exact={true}>
					<LoginForm
						authenticated={authenticated}
						setAuthenticated={setAuthenticated}
					/>
				</Route>
				<Route path="/sign-up" exact={true}>
					<SignUpForm
						authenticated={authenticated}
						setAuthenticated={setAuthenticated}
					/>
				</Route>
				<ProtectedRoute
					path="/users"
					exact={true}
					authenticated={authenticated}
				>
					<UsersList />
				</ProtectedRoute>
				<ProtectedRoute
					path="/users/:userId"
					exact={true}
					authenticated={authenticated}
				>
					<User />
				</ProtectedRoute>
				<ProtectedRoute
					path="/decks/:deckId"
					exact={true}
					authenticated={authenticated}
				>
					<CharactersList />
				</ProtectedRoute>
				<ProtectedRoute
					path="/decks"
					exact={true}
					authenticated={authenticated}
				>
					<DeckList />
				</ProtectedRoute>
				<ProtectedRoute path="/" exact={true} authenticated={authenticated}>
					<h1>My Home Page</h1>
				</ProtectedRoute>
			</BrowserRouter>
		</DeckProvider>
	);
}

export default App;
