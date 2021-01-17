import React from "react";
import { Link } from "react-router-dom";

//Chakra UI
import { Box, Button, Flex, Image, Heading, Stack, Text } from "@chakra-ui/react";

function LandingPage() {
	return (
		<Flex
			align="center"
			justify={{ base: "center", md: "space-around", xl: "space-between" }}
			direction={{ base: "column-reverse", md: "row" }}
			wrap="no-wrap"
			minH="70vh"
			px={8}
			mb={16}
		>
			<Stack
				spacing={4}
				w={{ base: "80%", md: "40%" }}
				align={["center", "center", "flex-start", "flex-start"]}
			>
				<Heading
					as="h1"
					size="xl"
					fontWeight="bold"
					color="primary.800"
					textAlign={["center", "center", "left", "left"]}
				>
					Welcome to Hanzi U!
				</Heading>
				<Heading
					as="h2"
					size="md"
					color="primary.800"
					opacity="0.8"
					fontWeight="normal"
					lineHeight={1.5}
					textAlign={["center", "center", "left", "left"]}
				>
					Hanzi U is a character learning app based on frequency of appearance.
					Happy studying!
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
						Create an account!
					</Button>
				</Link>
			</Stack>
			<Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
				<Image
					src={require("../images/bruno-aguirre-qfZKpM0wjd8-unsplash.jpg")}
					size="100%"
					rounded="1rem"
					shadow="2xl"
				/>
			</Box>
		</Flex>
	);
}

export default LandingPage;