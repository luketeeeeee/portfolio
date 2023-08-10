type ContainerProps = {
	children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
	return (
		<div className="mx-auto my-0 flex h-full w-7/12 flex-col items-center">
			{children}
		</div>
	);
};
