const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
	return (
		<Link href={to}>
			<Text display="block" {...rest}>
				{children}
			</Text>
		</Link>
	);
};
