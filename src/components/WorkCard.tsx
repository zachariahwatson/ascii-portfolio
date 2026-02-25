interface Props {
  children?: React.ReactNode
  className?: string
}

export default function WorkCard({ children, className = '' }: Props) {
  return <div className={`border ascii h-full ${className}`}>{children}</div>
}
