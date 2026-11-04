import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { site } from '../data/site'

const links = [
  ['/', 'Home'],
  ['/destinations', 'Explore Destinations'],
  ['/services', 'Services'],
  ['/about', 'About'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo"><img className="brand-img" src="/logo.png" alt="" />Abhinandan <span>Holidays</span></Link>
        <nav className={`nav ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end className={({ isActive }) => (isActive ? 'active' : '')}>{label}</NavLink>
          ))}
          <Link to="/contact" className="btn sm">Plan my trip</Link>
          <div className="nav-foot">
            <a href={`tel:${site.phone.replace(/\s/g, '')}`}><Phone size={16} /> {site.phone}</a>
            <span>{site.address}</span>
          </div>
        </nav>
        <button className="menu-btn" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
