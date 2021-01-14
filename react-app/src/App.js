import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { authenticate } from "./services/auth";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import { DeckProvider } from "./components/Context/DeckContext"
import UsersList from "./components/UsersList";
import User from "./components/User";
import DeckList from "./components/Review/DeckList";
import Home from "./components/Home"
import QuizPage from "./components/Quiz/QuizList";
import Quiz from "./components/Quiz/Quiz";

function App() {
	const [authenticated, setAuthenticated] = useState(false);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			const user = await authenticate();
			if (!user.errors) {
				setAuthenticated(true);
			}
			setLoaded(true);
		})();
	}, []);

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
					<Quiz />
				</ProtectedRoute>
				<ProtectedRoute
					path="/decks"
					exact={true}
					authenticated={authenticated}
				>
					<DeckList />
				</ProtectedRoute>
				<ProtectedRoute
					path="/quiz"
					exact={true}
					authenticated={authenticated}
				>
					<QuizPage />
				</ProtectedRoute>
				<ProtectedRoute path="/" exact={true} authenticated={authenticated}>
					<Home>My Home Page</Home>
				</ProtectedRoute>
			</BrowserRouter>
		</DeckProvider>
	);
}

export default App;
