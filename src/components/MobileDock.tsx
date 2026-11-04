import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, MessageCircle, Compass } from 'lucide-react'
import { site } from '../data/site'

// Thin scroll-progress line (all screens) + a thumb-reach action dock (phones only).
export default function MobileDock() {
  const [p, setP] = useState(0)
  const [hide, setHide] = useState(false)
  useEffect(() => {
    let last = window.scrollY
    const on = () => {
      const y = window.scrollY
      if (Math.abs(y - last) > 8) { setHide(y > last && y > 240); last = y }
      const h = document.documentElement.scrollHeight - window.innerHeight
      setP(h > 0 ? Math.min(1, window.scrollY / h) : 0)
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on) }
  }, [])
  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${p})` }} aria-hidden="true" />
      <nav className={`dock ${hide ? 'away' : ''}`} aria-label="Quick actions">
        <a href={`tel:${site.phone.replace(/\s/g, '')}`}><Phone size={20} /><span>Call</span></a>
        <Link to="/contact" className="main" aria-label="Plan my trip"><i><Compass size={26} /></i><span>Plan my trip</span></Link>
        <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={20} /><span>WhatsApp</span></a>
      </nav>
    </>
  )
}
