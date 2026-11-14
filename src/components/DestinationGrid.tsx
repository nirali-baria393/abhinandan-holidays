import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Clock } from 'lucide-react'
import { places } from '../data/itineraries'
import Img from './Img'

export default function DestinationGrid() {
  const [tab, setTab] = useState<'International' | 'Domestic'>('International')
  const [q, setQ] = useState('')
  const list = places.filter((p) => p.region === tab && p.name.toLowerCase().includes(q.trim().toLowerCase()))
  const count = (r: string) => places.filter((p) => p.region === r).length
  return (
    <>
      <div className="dg-top">
        <div className="tabs">
          {(['International', 'Domestic'] as const).map((t) => (
            <button key={t} className={tab === t ? 'on' : ''} onClick={() => setTab(t)}>{t} <small>{count(t)}</small></button>
          ))}
        </div>
        <label className="dg-search"><Search size={16} /><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search a place" aria-label="Search destinations" /></label>
      </div>
      <div className="dgrid">
        {list.map((p) => (
          <Link className={`dcard ${p.image ? '' : 'plain'}`} key={p.slug} to={`/destinations/${p.slug}`}>
            {p.image && <Img src={p.image} alt={p.name} />}
            {!p.image && <span className="dmark">{p.name.slice(0, 1)}</span>}
            {p.nights && <span className="dchip"><Clock size={12} /> {p.nights}N / {p.days}D</span>}
            <div className="dtext">
              <h3>{p.name}</h3>
              <small>{p.tagline}</small>
            </div>
          </Link>
        ))}
        {list.length === 0 && <p className="dempty">No destination found. Tell us where you want to go and we will plan it.</p>}
      </div>
    </>
  )
}
