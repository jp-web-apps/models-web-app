
interface Props {
  children: React.ReactNode
  className?: string
}

export function Container ({ children, className }: Props) {
  return (<div className={`w-11/12 lg:w-[700px] ${className}`}>{children}</div>)
}