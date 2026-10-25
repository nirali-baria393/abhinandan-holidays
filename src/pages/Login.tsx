import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Eye, EyeOff, Lock, Mail, MessageCircle, Plane, FileCheck, Sparkles, User } from 'lucide-react'
import { heroImage, site } from '../data/site'
import Img from '../components/Img'

export default function Login() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [showPw, setShowPw] = useState(false)
  const [sent, setSent] = useState<string | null>(null)

  // No backend yet: acknowledge the request and route the person to WhatsApp.
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    setSent(String(d.get('name') || d.get('email') || ''))
  }

  return (
    <section className="auth">
      <span className="blob b-1" />
      <span className="blob b-2" />
      <div className="auth-card">
        <aside className="auth-art">
          <Img src={heroImage} alt="Sunset beach" />
          <div className="auth-art-top">
            <Link to="/" className="logo">Abhinandan <span>Holidays</span></Link>
          </div>
          <div className="auth-art-bottom">
            <h2>Plan less.<br />Travel <em>more.</em></h2>
            <p>Your trips, quotes and visa updates in one place.</p>
            <div className="auth-chips">
              <span><Plane size={14} /> Flights</span>
              <span><FileCheck size={14} /> Visas</span>
              <span><Sparkles size={14} /> Custom holidays</span>
            </div>
          </div>
        </aside>

        <div className="auth-form">
          {sent === null ? (
            <>
              <div className="auth-tabs" role="tablist">
                <button role="tab" aria-selected={mode === 'login'} className={mode === 'login' ? 'on' : ''} onClick={() => setMode('login')}>Log in</button>
                <button role="tab" aria-selected={mode === 'signup'} className={mode === 'signup' ? 'on' : ''} onClick={() => setMode('signup')}>Sign up</button>
              </div>
              <h1>{mode === 'login' ? 'Welcome back' : 'Create your account'}</h1>
              <p className="auth-sub">{mode === 'login' ? 'Log in to see your trips and quotes.' : 'Join to save trips and track your bookings.'}</p>

              <form onSubmit={submit} key={mode}>
                {mode === 'signup' && (
                  <label className="af"><User size={18} /><input name="name" required placeholder="Full name" autoComplete="name" /></label>
                )}
                <label className="af"><Mail size={18} /><input name="email" type="email" required placeholder="Email address" autoComplete="email" /></label>
                <label className="af">
                  <Lock size={18} />
                  <input name="password" type={showPw ? 'text' : 'password'} required minLength={6} placeholder="Password" autoComplete={mode === 'login' ? 'current-password' : 'new-password'} />
                  <button type="button" className="eye" aria-label={showPw ? 'Hide password' : 'Show password'} onClick={() => setShowPw(!showPw)}>
                    {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </label>
                {mode === 'login' && (
                  <div className="auth-row">
                    <label className="check"><input type="checkbox" /> Remember me</label>
                    <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi, I forgot my password.')}`} target="_blank" rel="noreferrer">Forgot password?</a>
                  </div>
                )}
                <button className="btn auth-submit" type="submit">
                  {mode === 'login' ? 'Log in' : 'Create account'} <ArrowRight size={18} />
                </button>
              </form>

              <div className="auth-or"><span>or</span></div>
              <a className="auth-wa" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Continue on WhatsApp
              </a>
            </>
          ) : (
            <div className="auth-done">
              <span className="done-ic"><Sparkles size={30} /></span>
              <h1>Thanks{sent ? `, ${sent.split('@')[0]}` : ''}!</h1>
              <p className="auth-sub">Online accounts are not live yet. For quotes, bookings and visa updates, message our team and we'll look after you.</p>
              <a className="btn auth-submit" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Message us on WhatsApp</a>
              <button className="auth-back" onClick={() => setSent(null)}>Back</button>
            </div>
          )}
          <p className="auth-help">Need help? Call <a href={`tel:+${site.whatsapp}`}>{site.phone}</a></p>
        </div>
      </div>
    </section>
  )
}
