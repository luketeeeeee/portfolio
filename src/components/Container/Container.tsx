type ContainerProps = {
	children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
	return (
		<div className="my-0 flex h-full w-full flex-col items-center xs:w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12">
			{children}
		</div>
	);
};
