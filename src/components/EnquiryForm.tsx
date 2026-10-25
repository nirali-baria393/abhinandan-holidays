import { FormEvent } from 'react'
import { CalendarDays, MapPin, Plane, User, Users } from 'lucide-react'
import { site } from '../data/site'

// Sends the enquiry to WhatsApp so no backend is needed.
export default function EnquiryForm({ floating = false }: { floating?: boolean }) {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    const msg = `Hi, I'd like a quote.\nName: ${d.name}\nFrom: ${d.from}\nTo: ${d.to}\nDate: ${d.date}\nTravellers: ${d.pax}`
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
  }
  return (
    <form className={`planbar ${floating ? 'floating' : ''}`} onSubmit={submit}>
      <span className="plan-tag">Quick quote</span>
      <label className="cell"><User size={18} /><span>Name<input name="name" required placeholder="Your name" /></span></label>
      <label className="cell"><MapPin size={18} /><span>From<input name="from" placeholder="Ankleshwar" /></span></label>
      <label className="cell"><Plane size={18} /><span>To<input name="to" required placeholder="Destination" /></span></label>
      <label className="cell"><CalendarDays size={18} /><span>Travel date<input name="date" type="date" /></span></label>
      <label className="cell"><Users size={18} /><span>Travellers<input name="pax" type="number" min={1} defaultValue={2} /></span></label>
      <button className="btn" type="submit">Get a quote</button>
    </form>
  )
}
