// import { Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { authenticate } from "../../services/auth";
// import { useDeck } from "../Context/DeckContext";
//custom components:

function Results(props) {
    const { score } = props;
    const [user, setUser] = useState()

    	useEffect(() => {
				(async () => {
					const user = await authenticate();

					console.log("User in useEffect for Home", user);
					if (!user.errors) {
                        setUser(user);
						console.log("SetUser in Results component", user);
					}
				})();
			}, []);
  
	return (
		<>
            <Heading>You scored {score} out of 20</Heading>
		</>
	);
}

export default Results;
