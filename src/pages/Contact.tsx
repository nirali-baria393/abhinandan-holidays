import { Instagram, MapPin, Phone } from 'lucide-react'
import { site } from '../data/site'
import EnquiryForm from '../components/EnquiryForm'

export default function Contact() {
  return (
    <>
      <section className="page-hero"><h1>Contact Us</h1><p>Tell us where you want to go.</p></section>
      <section className="section">
        <div className="container split">
          <ul className="contact-list">
            <li><Phone /><a href={`tel:+${site.whatsapp}`}>{site.phone}</a></li>
            <li><MapPin /><span>{site.address}</span></li>
            <li><Instagram /><a href={site.instagram} target="_blank" rel="noreferrer">@abhinandan_holidays36</a></li>
          </ul>
          <div style={{ boxShadow: '0 10px 40px rgba(0,0,0,.08)', borderRadius: 14 }}><EnquiryForm /></div>
        </div>
      </section>
    </>
  )
}
