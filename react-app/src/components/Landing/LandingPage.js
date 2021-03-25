import React from "react";
import { Link } from "react-router-dom";

//Chakra UI
import { Box, Button, Flex, Image, Heading, Stack } from "@chakra-ui/react";

function LandingPage() {
	return (
		<Flex
			align="center"
			justify={{ base: "center", md: "space-around", xl: "space-between" }}
			direction={{ base: "column-reverse", md: "row" }} //responsive styling based on width. md for 48 em and up
			wrap="no-wrap"
			minH="70vh"
			px={8} //padding left and right
			mb={16} //margin bottom
			height="100%"
		>
			<Stack
				spacing={4}
				w={{ base: "80%", md: "40%" }}
				align={["center", "center", "flex-start"]} //also based on breakpoints, goes center for base
			>
				<Heading
					size="xl"
					fontWeight="bold"
					textAlign={["center", "center", "left", "left"]}
				>
					Welcome to Hanzi U!
				</Heading>
				<Heading
					size="md"
					opacity="0.8"
					fontWeight="normal"
					lineHeight={1.5}
					textAlign={["center", "center", "left", "left"]}
				>
					Learn Chinese characters(hanzi) the practical way - based on frequency
					of appearance! 快了， 快乐学习!
				</Heading>
				<Link to="/sign-up">
					<Button
						variantColor="primary"
						borderRadius="8px"
						py="4"
						px="4"
						lineHeight="1"
						size="md"
						// rightIcon="chevron-right"
					>
						Create account
					</Button>
				</Link>
			</Stack>
			<Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
				<Image
					src={require("../images/bruno-aguirre-qfZKpM0wjd8-unsplash.jpg")}
					size="100%"
					rounded="1rem"
					shadow="2xl"
					alt="splash image"
				/>
			</Box>
		</Flex>
	);
}

export default LandingPage;