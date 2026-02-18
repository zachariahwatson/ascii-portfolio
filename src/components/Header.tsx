import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header>
      <nav className="p-4 flex items-center justify-end gap-4 ascii-border ascii-text">
        <Link to="/work">work</Link>
        <Link to="/about">about</Link>
      </nav>
    </header>
  )
}
