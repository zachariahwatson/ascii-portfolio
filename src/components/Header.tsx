import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import { Home, Menu, X } from 'lucide-react'

export default function Header() {
  return (
    <header>
      <nav className="p-4 flex items-center justify-end gap-4 border">
        <Link to="/work">work</Link>
        <Link to="/about">about</Link>
      </nav>
    </header>
  )
}
