interface Props {
  children: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
}

export function Container({ children, className, size }: Props) {
  if (size === "md") {
    return (
      <div className={`w-11/12 lg:w-[700px] m-auto ${className}`}>
        {children}
      </div>
    );
  }
  return (
    <div className={`w-11/12 lg:w-10/12 m-auto ${className}`}>{children}</div>
  );
}
