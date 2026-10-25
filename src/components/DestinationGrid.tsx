import { useState } from 'react'
import { destinations } from '../data/site'
import Img from './Img'

export default function DestinationGrid({ limit }: { limit?: number }) {
  const [tab, setTab] = useState<'International' | 'Domestic'>('International')
  const list = destinations.filter((d) => d.region === tab).slice(0, limit)
  return (
    <>
      <div className="tabs">
        {(['International', 'Domestic'] as const).map((t) => (
          <button key={t} className={tab === t ? 'on' : ''} onClick={() => setTab(t)}>{t}</button>
        ))}
      </div>
      <div className="grid">
        {list.map((d) => (
          <article className="card" key={d.name}>
            <Img src={d.image} alt={d.name} />
            <span className="tag">{d.region}</span>
            <div className="text">
              <h3>{d.name}</h3>
              <small>{d.blurb}</small>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
