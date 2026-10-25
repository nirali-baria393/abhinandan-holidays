import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  ['/', 'Home'],
  ['/destinations', 'Explore Destinations'],
  ['/services', 'Services'],
  ['/about', 'About'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo"><img className="brand-img" src="/logo.jpg" alt="" />Abhinandan <span>Holidays</span></Link>
        <nav className={`nav ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end className={({ isActive }) => (isActive ? 'active' : '')}>{label}</NavLink>
          ))}
          <NavLink to="/login">Login</NavLink>
          <Link to="/contact" className="btn sm">Plan my trip</Link>
        </nav>
        <button className="menu-btn" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
