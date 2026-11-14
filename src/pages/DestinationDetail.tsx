import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Clock, MessageCircle, Phone } from 'lucide-react'
import { placeBySlug } from '../data/itineraries'
import { site } from '../data/site'

export default function DestinationDetail() {
  const { slug = '' } = useParams()
  const p = placeBySlug(slug)
  if (!p) return <Navigate to="/destinations" replace />
  const label = p.nights ? `${p.name} (${p.nights} Nights / ${p.days} Days)` : p.name
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi, I would like a quote for the ${label} package.`)}`
  return (
    <>
      <section className="page-hero dhero">
        <div className="container">
          <Link to="/destinations" className="dback"><ArrowLeft size={16} /> All destinations</Link>
          <h1>{p.name}</h1>
          <p>{p.tagline}</p>
          <div className="dmeta">
            <span>{p.region}</span>
            {p.nights && <span><Clock size={14} /> {p.nights} Nights / {p.days} Days</span>}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container dlayout">
          <div>
            {p.itinerary.length > 0 ? (
              <ol className="timeline">
                {p.itinerary.map((d) => (
                  <li key={d.n}>
                    <span className="dn">Day {d.n}</span>
                    <div><h3>{d.title}</h3>{d.text && <p>{d.text}</p>}</div>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="dempty">We plan {p.name} trips on request. Tell us your dates and budget and we will send a day-by-day itinerary.</p>
            )}
            <p className="dnote">Itineraries are a guide. Sightseeing depends on weather, opening times and permits, and can be adjusted to your dates and budget.</p>
          </div>
          <aside className="dside">
            <h3>Plan this trip</h3>
            <p>Get a quote for {p.name} with flights, visa help and hotels.</p>
            <a className="btn" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Get a quote on WhatsApp</a>
            <a className="btn ghost" href={`tel:${site.phone.replace(/\s/g, '')}`}><Phone size={18} /> {site.phone}</a>
          </aside>
        </div>
      </section>
    </>
  )
}
