import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Plane, FileCheck, Sparkles, Globe2, Calendar, MapPin, Star, ChevronRight, MessageSquare, Route, BadgeCheck, Bike, Sailboat, TrainFront, Waves, Ship, Wind, ShieldCheck, Send, Phone } from 'lucide-react'
import { trustImage, adventures, destinations, featured, heroImage, partners, press, reviews, googleReviews, tripPhotos, site, themes, trust } from '../data/site'
import Memories from '../components/Memories'
import Img from '../components/Img'
import Row from '../components/Row'
import EnquiryForm from '../components/EnquiryForm'

const wa = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
const actIcons = { bike: Bike, boat: Sailboat, train: TrainFront, waves: Waves, ship: Ship, wind: Wind }

export default function Home() {
  const [sel, setSel] = useState(0)
  const [theme, setTheme] = useState(0)
  const [filter, setFilter] = useState<'All' | 'International' | 'Domestic'>('All')
  const search = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const to = String(new FormData(e.currentTarget).get('to') || '')
    window.open(wa(`Hi, I want to plan a trip to ${to}.`), '_blank')
  }
  const subscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = String(new FormData(e.currentTarget).get('email') || '')
    window.open(wa(`Hi, please send me package updates at ${email}.`), '_blank')
  }
  const list = destinations.filter((d) => filter === 'All' || d.region === filter)
  const cur = list[sel] ?? list[0]
  const ticker = Array.from({ length: 12 }, (_, i) => <span key={i}>#AbhinandanHolidays</span>)

  return (
    <>
      <section className="hero3">
        <div className="container hero3-grid">
          <div className="hero3-text">
            <span className="kicker">Ankleshwar · Gujarat · Worldwide</span>
            <h1>Your next story starts <em>here.</em></h1>
            <p>Flights, visas and hand-crafted holidays, planned around you by the team at {site.name}.</p>
            <form className="searchbar" onSubmit={search}>
              <Search size={18} style={{ alignSelf: 'center', marginLeft: 12, color: '#62708a' }} />
              <input name="to" required placeholder="Where to?" />
              <button className="btn" type="submit" aria-label="Plan my trip"><span className="lbl">Plan my trip</span><Send size={18} className="go" /></button>
            </form>
            <div className="quick">
              {['Vietnam', 'Bali', 'Kashmir', 'Kerala'].map((n) => (
                <a key={n} href={wa(`Hi, I want to plan a trip to ${n}.`)} target="_blank" rel="noreferrer">{n}</a>
              ))}
            </div>
          </div>
          <div className="hero3-art hide-m">
            <div className="arch a1"><Img src={heroImage} alt="Beach" /></div>
            <div className="arch a2"><Img src={destinations[0].image} alt="Vietnam" /></div>
            <div className="arch a3"><Img src={destinations.find((d) => d.name === 'Kashmir')!.image} alt="Kashmir" /></div>
            <span className="badge b1"><Plane size={16} /> Flights</span>
            <span className="badge b2"><FileCheck size={16} /> Visas</span>
            <span className="badge b3"><Sparkles size={16} /> Custom holidays</span>
          </div>
        </div>
      </section>      <div className="container"><EnquiryForm floating /></div>

      <div className="ticker hide-m"><div>{ticker}{ticker}</div></div>

      <section className="section">
        <div className="container">
          <div className="itin-head">
            <div>
              <span className="eyebrow">Popular itineraries</span>
              <h2>Pick a place, we'll plan the rest</h2>
            </div>
            <div className="chips">
              {(['All', 'International', 'Domestic'] as const).map((c) => (
                <button key={c} className={filter === c ? 'on' : ''} onClick={() => { setFilter(c); setSel(0) }}>{c === 'All' ? 'All Destinations' : c}</button>
              ))}
            </div>
          </div>
          <div className="showcase">
            <article className="spot">
              <Img key={cur.name} src={cur.image} alt={cur.name} />
              <div className="spot-text">
                <span className="tag-flat">{cur.region}</span>
                <h3>{cur.name}</h3>
                <p>{cur.blurb}</p>
                <div className="spot-actions">
                  <a className="btn" href={wa(`Hi, please share details for ${cur.name}.`)} target="_blank" rel="noreferrer">Get a custom quote</a>
                  <Link className="btn ghost" to="/destinations">See all</Link>
                </div>
              </div>
            </article>
            <ul className="picker">
              {list.map((d, i) => (
                <li key={d.name}>
                  <button className={d.name === cur.name ? 'on' : ''} onClick={() => setSel(i)}>
                    <Img src={d.image} alt={d.name} />
                    <span><b>{d.name}</b><small>{d.blurb}</small></span>
                    <ChevronRight size={18} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="tags-panel">
            <div className="section-head" style={{ margin: '0 auto', textAlign: 'center' }}>
              <span className="eyebrow">Why choose us</span>
              <h2>Why choose Abhinandan Holidays?</h2>
              <p>One team for the whole trip, from the first idea to the flight home.</p>
            </div>
            <div className="ltags">
              {[
                [Sparkles, 'Made for you', 'Custom', 'Every itinerary is shaped around your dates, budget and pace.'],
                [Plane, 'Best fares', 'Flights', 'Domestic and international tickets booked at honest fares.'],
                [FileCheck, 'Full support', 'Visas', 'Documents and guidance for a smooth visa approval.'],
                [Globe2, 'India & abroad', 'Worldwide', 'From Kashmir and Kerala to Bali, Vietnam and Dubai.'],
              ].map(([Icon, label, title, text], i) => {
                const I = Icon as typeof Sparkles
                return (
                  <div className={`tag-wrap k${i}`} key={title as string}>
                    <span className="strap" />
                    <article className="ltag">
                      <span className="hole" />
                      <span className="n">0{i + 1}</span>
                      <div className="ic"><I size={22} /></div>
                      <small>{label as string}</small>
                      <h3>{title as string}</h3>
                      <p>{text as string}</p>
                    </article>
                  </div>
                )
              })}
            </div>
            <div style={{ textAlign: 'center' }}><Link to="/contact" className="btn">Talk to us</Link></div>
          </div>
        </div>
      </section>
      <section className="section hide-m">
        <div className="container">
          <div className="section-head" >
            <span className="eyebrow">Holiday packages by theme</span>
            <h2>Choose the way you travel</h2>
          </div>
          <div className="themes">
            {themes.map((th, i) => (
              <div
                key={th.label}
                role="button"
                tabIndex={0}
                className={`theme ${i === theme ? 'on' : ''}`}
                onMouseEnter={() => setTheme(i)}
                onClick={() => setTheme(i)}
                onFocus={() => setTheme(i)}
              >
                <Img src={th.image} alt={th.label} />
                <div className="theme-card">
                  <b>{th.label}</b>
                  <small>{th.text}</small>
                  <a className="btn sm" href={wa(`Hi, I want a ${th.label} package.`)} target="_blank" rel="noreferrer">Enquire</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container feature">
          <Img src={featured.image} alt={featured.title} />
          <div className="body">
            <span className="eyebrow">Upcoming group trip</span>
            <h2>{featured.title}</h2>
            <p><Calendar size={16} /> {featured.date} · {featured.days}</p>
            <p><MapPin size={16} /> {featured.route}</p>
            <a className="btn" href={wa('Hi, I want details of the Vietnam group departure.')} target="_blank" rel="noreferrer">Enquire now</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" style={{ margin: '0 auto 32px', textAlign: 'center' }}>
            <span className="eyebrow">How it works</span>
            <h2>Your trip in four easy steps</h2>
          </div>
          <ol className="steps">
            {[
              [MessageSquare, 'Tell us your plan', 'Share your dates, budget and who is travelling.'],
              [Route, 'Get your itinerary', 'We design a custom day-by-day plan with clear costs.'],
              [BadgeCheck, 'We handle bookings', 'Flights, visas and stays, confirmed for you.'],
              [Plane, 'Travel with ease', 'Pack your bags. We stay in touch through the trip.'],
            ].map(([Icon, title, text], i) => {
              const I = Icon as typeof Plane
              return (
                <li key={title as string}>
                  <span className="big">0{i + 1}</span>
                  <div className="dot"><I size={22} /></div>
                  <h3>{title as string}</h3>
                  <p>{text as string}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Activities</span>
            <h2>Adventures worth chasing</h2>
          </div>
          <Row className="row acts">
            {adventures.map((a, i) => {
              const I = actIcons[a.icon]
              return (
                <a className={`act ${i % 2 ? 'alt' : ''}`} key={a.place} href={wa(`Hi, I want a ${a.place} trip with: ${a.activity}.`)} target="_blank" rel="noreferrer">
                  <div className="act-pic">
                    <Img src={a.image} alt={a.activity} />
                    <span className="act-ic"><I size={18} /></span>
                  </div>
                  <div className="act-text">
                    <small>{a.place}</small>
                    <b>{a.activity}</b>
                    <em>{a.note}</em>
                  </div>
                </a>
              )
            })}
          </Row>
        </div>
      </section>

      <section className="section alt hide-m">
        <div className="container trust3">
          <div className="trust3-photo">
            <Img src={trustImage} alt="Happy travellers" />
            <span className="trust3-badge"><ShieldCheck size={18} /> Planned around you</span>
          </div>
          <div className="trust3-body">
            <span className="eyebrow">Why travellers trust us</span>
            <h2>Why travellers trust Abhinandan Holidays</h2>
            <ol className="trust3-list">
              {trust.map((t, i) => (
                <li key={t.title}>
                  <span className="t3-num">0{i + 1}</span>
                  <div>
                    <h3>{t.title}</h3>
                    <p>{t.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link to="/contact" className="t3-link">Plan your trip with us <ChevronRight size={18} /></Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head" style={{ margin: '0 auto 32px', textAlign: 'center' }}>
            <span className="eyebrow">Reviews &amp; testimonials</span>
            <h2>Stories from our travellers</h2>
          </div>
          <Row className="row tickets">
            {reviews.map((r) => (
              <article className="ticket" key={r.trip}>
                <div className="stub">
                  <div className="photo"><Img src={tripPhotos[r.trip] ?? r.photo} alt={`${r.name}, guest photo`} /></div>
                  <b>{r.name}</b>
                  <small>{r.city}</small>
                  <span className="code">{r.trip.slice(0, 3).toUpperCase()}</span>
                </div>
                <div className="tbody">
                  <div className="t-top">
                    <span className="route"><Plane size={15} /> {r.trip} · {r.type}</span>
                    <div className="stars">{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={15} fill="currentColor" />)}</div>
                  </div>
                  <p>{r.text}</p>
                  {r.sample && <span className="sample-tag">Sample review</span>}
                </div>
              </article>
            ))}
          </Row>
          <div className="google">
            <svg viewBox="0 0 48 48" width="34" height="34" aria-hidden="true"><path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8c-.5 2.7-2.1 5-4.4 6.5v5.4h7.1c4.2-3.8 6.6-9.5 6.6-15.9z"/><path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-7.1-5.4c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.5-3.8-12.2-9H4.5v5.6C8.1 41.1 15.5 46 24 46z"/><path fill="#FBBC05" d="M11.8 28.4c-.4-1.3-.7-2.7-.7-4.4s.3-3 .7-4.4v-5.6H4.5C3 17 2 20.400 2 24s1 7 2.500 10l7.300-5.600z"/><path fill="#EA4335" d="M24 10.600c3.200 0 6.100 1.100 8.400 3.300l6.300-6.300C34.900 4.100 29.900 2 24 2 15.500 2 8.100 6.900 4.500 14l7.300 5.600c1.700-5.200 6.500-9 12.200-9z"/></svg>
            <div className="g-text">
              <b>Google Reviews</b>
              {googleReviews.rating && googleReviews.count ? (
                <span className="g-rate"><strong>{googleReviews.rating.toFixed(1)}</strong>
                  <span className="stars">{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={16} fill="currentColor" />)}</span>
                  <em>{googleReviews.count} reviews</em></span>
              ) : (
                <span className="g-rate"><em>Travelled with us? Tell others how it went.</em></span>
              )}
            </div>
            <a className="btn" href={googleReviews.url} target="_blank" rel="noreferrer">{googleReviews.rating ? 'See all reviews' : 'Review us on Google'}</a>
          </div>
          <a className="rv-cta center" href={wa('Hi, I travelled with you and want to share my experience.')} target="_blank" rel="noreferrer">Travelled with us? Share your experience →</a>        </div>
      </section>

      {press.length > 0 && (
        <section className="section">
          <div className="container">
            <p className="dest-head">As seen in</p>
            <div className="grid three">
              {press.map((p) => <blockquote className="review" key={p.name}><p>{p.quote}</p><footer>{p.name}</footer></blockquote>)}
            </div>
          </div>
        </section>
      )}
      <section className="section memo">
        <div className="container">
          <div className="section-head" style={{ margin: '0 auto 24px', textAlign: 'center' }}>
            <span className="eyebrow">Memories</span>
            <h2>Our guests, on the road</h2>
            <p>Real snapshots from real trips. Tap a stamp to see who has been there.</p>
          </div>
          <Memories />
        </div>
      </section>
      {partners.length > 0 && (
        <section className="partners-band">
          <div className="section-head" style={{ margin: '0 auto 30px', textAlign: 'center' }}>
            <span className="eyebrow">Travel partners</span>
            <h2>Our travel partners</h2>
            <p>Trusted platforms and airlines behind every fare, stay and flight we book.</p>
          </div>
          <div className="partner-marquee">
            <div className="partner-track">
              {[...partners, ...partners].map((p, i) => (
                <div className="ptag" key={i} style={{ ['--d' as string]: `${(i % 7) * -0.6}s` }}>
                  <span className="pt-strap" />
                  <div className="pt-card">
                    <span className="pt-hole" />
                    <img src={p.logo} alt={p.name} loading="lazy" />
                    <b>{p.name}</b>
                    <small>Travel partner</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="finale-wrap">
        <div className="container">
          <div className="finale" style={{ backgroundImage: `url(${heroImage})` }}>
            <svg className="f-path" viewBox="0 0 700 220" fill="none" aria-hidden="true">
              <path d="M0 180 C160 20 330 240 700 40" stroke="#fff" strokeWidth="2" strokeDasharray="6 10" strokeLinecap="round" />
            </svg>
            <div className="f-text">
              <span className="kicker">Ready when you are</span>
              <h2>Create your perfect holiday</h2>
              <p>Flights, visas and stays, handled end to end.</p>
              <div className="f-actions">
                <Link to="/contact" className="btn">Start planning</Link>
                <a className="btn ghost" href={wa('Hi, I want to plan a holiday.')} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
              </div>
              <a className="f-phone" href={`tel:+${site.whatsapp}`}><Phone size={16} /> {site.phone}</a>
            </div>
            <form className="f-card" onSubmit={subscribe}>
              <span className="f-ic"><Send size={20} /></span>
              <h3>Discover the world with us</h3>
              <p>Get package updates and group departures.</p>
              <input name="email" type="email" required placeholder="Your email address" />
              <button className="btn" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>    </>
  )
}
