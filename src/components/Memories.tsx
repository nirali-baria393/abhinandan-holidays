import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Plane } from 'lucide-react'
import { memories, memoryPlaces } from '../data/memories'
import Img from './Img'

const codes: Record<string, string> = {
  Singapore: 'SIN', Bali: 'DPS', Dubai: 'DXB', Malaysia: 'KUL', Vietnam: 'SGN', 'Abu Dhabi': 'AUH', Himachal: 'KUU',
  Goa: 'GOI', Darjeeling: 'IXB', 'Hong Kong': 'HKG', 'Sri Lanka': 'CMB', Thailand: 'HKT', Bengaluru: 'BLR',
}

export default function Memories() {
  const [place, setPlace] = useState('All')
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const film = useRef<HTMLDivElement>(null)
  const list = memories.filter((m) => place === 'All' || m.place === place)
  const cur = list[i % list.length]
  const go = (d: number) => setI((x) => (x + d + list.length) % list.length)
  const pick = (p: string) => { setPlace(p); setI(0) }

  useEffect(() => {
    if (paused || list.length < 2) return
    const t = setInterval(() => setI((x) => (x + 1) % list.length), 5000)
    return () => clearInterval(t)
  }, [paused, list.length])

  useEffect(() => {
    const el = film.current?.children[i % list.length] as HTMLElement | undefined
    if (el && film.current) film.current.scrollTo({ left: el.offsetLeft - film.current.clientWidth / 2 + el.clientWidth / 2, behavior: 'smooth' })
  }, [i, list.length])

  const live = place === 'All' ? cur.place : place

  return (
    <div className="journal" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="stamps">
        {memoryPlaces.map((p, n) => (
          <button key={p} className={`stamp ${place === p ? 'on' : ''} ${place === 'All' && live === p ? 'live' : ''}`} style={{ ['--rot' as string]: `${((n * 7) % 11) - 5}deg` }} onClick={() => pick(p)}>
            <b>{p === 'All' ? 'ALL' : codes[p] || p.slice(0, 3).toUpperCase()}</b>
            <span>{p === 'All' ? 'Trips' : p}</span>
          </button>
        ))}
      </div>

      <div className="stage" key={cur.file}>
        <div className="shot">
          <img className="blur" src={cur.file} alt="" aria-hidden="true" />
          <Img src={cur.file} alt={`${cur.place}: ${cur.note}`} />
          <div className="postmark"><b>{cur.place.toUpperCase()}</b><span>Abhinandan Holidays</span></div>
        </div>
        <div className="pass">
          <div className="pass-top"><Plane size={16} /> BOARDING PASS <em>Guest memory</em></div>
          <div className="route">
            <div><small>FROM</small><b>STV</b><span>Surat</span></div>
            <div className="line"><Plane size={20} className="fly" /></div>
            <div><small>TO</small><b>{codes[cur.place] || cur.place.slice(0, 3).toUpperCase()}</b><span>{cur.place}</span></div>
          </div>
          <p className="pass-note">“{cur.note}”</p>
          <div className="pass-meta">
            <div><small>PASSENGER</small><b>Happy guests</b></div>
            <div><small>SEAT</small><b>{String((i % 30) + 1).padStart(2, '0')}A</b></div>
            <div><small>MEMORY</small><b>{String((i % list.length) + 1).padStart(2, '0')}/{String(list.length).padStart(2, '0')}</b></div>
          </div>
          <div className="barcode" />
          <div className="bar"><i key={`${cur.file}${paused}`} className={paused ? 'paused' : ''} /></div>
          <div className="pass-nav">
            <button onClick={() => go(-1)} aria-label="Previous"><ArrowLeft size={18} /></button>
            <button onClick={() => go(1)} aria-label="Next"><ArrowRight size={18} /></button>
          </div>
        </div>
      </div>

      <div className="film" ref={film}>
        {list.map((m, n) => (
          <button key={m.file} className={n === i % list.length ? 'on' : ''} onClick={() => setI(n)} aria-label={`${m.place}: ${m.note}`}>
            <img src={m.file} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  )
}
