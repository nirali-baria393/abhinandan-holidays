import { Briefcase, Hotel, Plane, ShieldCheck, Car, FileCheck } from 'lucide-react'
import { services } from '../data/site'

const icons = [Briefcase, Plane, FileCheck, Hotel, Car, ShieldCheck]

export default function Services() {
  return (
    <>
      <section className="page-hero"><h1>Our Services</h1><p>Everything for your trip under one roof.</p></section>
      <section className="section">
        <div className="container grid three">
          {services.map((s, i) => {
            const Icon = icons[i]
            return (
              <div className="svc" key={s.title}>
                <div className="ic"><Icon size={22} /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
