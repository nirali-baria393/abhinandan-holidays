import Img from '../components/Img'
import { packages } from '../data/site'

export default function About() {
  return (
    <>
      <section className="page-hero"><h1>About Us</h1><p>Professionally yours.</p></section>
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>Travel planned with care</h2>
            <p style={{ marginTop: 12, color: 'var(--muted)' }}>
              Abhinandan Holidays is a Gujarat-based travel company offering flights, visas and curated domestic and
              international holiday packages. From Kashmir and Kerala to Bali and Vietnam, we handle the details so you
              can enjoy the trip.
            </p>
          </div>
          <Img src={packages[0].image} alt="Holiday" />
        </div>
      </section>
    </>
  )
}
