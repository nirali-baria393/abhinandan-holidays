import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { destinations, site } from '../data/site'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="cols">
            <div>
              <img className="brand-img foot" src="/logo.jpg" alt="Abhinandan Holidays logo" />
              <h4>{site.name}</h4>
              <p>{site.tagline}</p>
            </div>
            <div>
              <h4>International</h4>
              {destinations.filter((d) => d.region === 'International').map((d) => <Link key={d.name} to="/destinations">{d.name}</Link>)}
            </div>
            <div>
              <h4>Domestic</h4>
              {destinations.filter((d) => d.region === 'Domestic').map((d) => <Link key={d.name} to="/destinations">{d.name}</Link>)}
            </div>
            <div>
              <h4>Company</h4>
              <Link to="/destinations">Destinations</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div>
              <h4>Contact</h4>
              <a href={`tel:+${site.whatsapp}`}>{site.phone}</a>
              <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <p>{site.address}</p>
            </div>
          </div>
          <p className="copy">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </footer>
      <a className="wa" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <MessageCircle />
      </a>
    </>
  )
}
