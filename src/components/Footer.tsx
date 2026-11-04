import { Link } from 'react-router-dom'
import { MessageCircle, Phone, Instagram, Facebook, MapPin } from 'lucide-react'
import { destinations, site } from '../data/site'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="cols">
            <div className="f-brand">
              <img className="brand-img foot" src="/logo.png" alt="Abhinandan Holidays logo" />
              <h4>{site.name}</h4>
              <p>{site.tagline}</p>
              <div className="f-quick">
                <a href={`tel:+${site.whatsapp}`} aria-label="Call"><Phone size={18} /></a>
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a>
                <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
                <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.name + ' Ankleshwar')}`} target="_blank" rel="noreferrer" aria-label="Map"><MapPin size={18} /></a>
              </div>
            </div>
            <div className="f-chips">
              <h4>International</h4>
              {destinations.filter((d) => d.region === 'International').map((d) => <Link key={d.name} to="/destinations">{d.name}</Link>)}
            </div>
            <div className="f-chips">
              <h4>Domestic</h4>
              {destinations.filter((d) => d.region === 'Domestic').map((d) => <Link key={d.name} to="/destinations">{d.name}</Link>)}
            </div>
            <div className="f-co">
              <h4>Company</h4>
              <Link to="/destinations">Destinations</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="f-ct">
              <h4>Contact</h4>
              <a href={`tel:+${site.whatsapp}`}>{site.phone}</a>
              <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
              <p>{site.address}</p>
            </div>
          </div>
          <p className="copy">GST No: {site.gst}<br />© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </footer>
      <a className="wa" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <MessageCircle />
      </a>
    </>
  )
}
