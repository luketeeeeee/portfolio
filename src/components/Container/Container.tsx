type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <div className="w-7/12 mx-auto my-0 justify-center h-full flex">{children}</div>;
};
