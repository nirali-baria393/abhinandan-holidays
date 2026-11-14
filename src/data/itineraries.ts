import world1 from './raw/world1'
import india1 from './raw/india1'
import world2 from './raw/world2'
import { destinations } from './site'
import { destinationImages } from './destinationImages'

export interface Day { n: number; title: string; text: string }
export interface Place {
  slug: string
  name: string
  region: 'International' | 'Domestic'
  nights?: number
  days?: number
  tagline: string
  itinerary: Day[]
  image?: string
}

export const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

// Itinerary name -> name of an existing photo destination (for the card photo)
const photoAlias: Record<string, string> = {
  'Hong Kong & Macau': 'Hong Kong',
  Georgia: 'Georgia & Baku',
  'Himachal Pradesh': 'Himachal',
  'West Bengal': 'Darjeeling',
}

const HEAD = /^(.+?)\s+[–-]\s+(\d+)\s+Nights?\s*\/\s*(\d+)\s+Days?$/i
const DAY = /^Day\s+(\d+)\s+[–-]\s+(.+)$/i

function parse(raw: string, region: Place['region']): Place[] {
  const out: Place[] = []
  let cur: Place | null = null
  let expectTagline = false
  for (const line of raw.split('\n').map((l) => l.trim())) {
    if (!line) continue
    const h = line.match(HEAD)
    if (h && !DAY.test(line)) {
      cur = { slug: slugify(h[1]), name: h[1], region, nights: +h[2], days: +h[3], tagline: '', itinerary: [] }
      out.push(cur)
      expectTagline = true
      continue
    }
    if (!cur) continue
    if (expectTagline) { cur.tagline = line; expectTagline = false; continue }
    const d = line.match(DAY)
    if (d) {
      const rest = d[2]
      const i = rest.indexOf(': ')
      cur.itinerary.push({ n: +d[1], title: i > -1 ? rest.slice(0, i) : rest, text: i > -1 ? rest.slice(i + 2) : '' })
    } else if (cur.itinerary.length) {
      const last = cur.itinerary[cur.itinerary.length - 1]
      last.text += ' ' + line
    }
  }
  return out
}

const parsed: Place[] = [
  ...parse(world1, 'International'),
  ...parse(india1, 'Domestic'),
  ...parse(world2, 'International'),
]

const photo = (name: string) => destinations.find((d) => d.name === (photoAlias[name] ?? name))?.image

const withPhotos: Place[] = parsed.map((p) => ({ ...p, image: photo(p.name) ?? destinationImages[p.slug] }))

// Photo destinations that have no itinerary yet (still shown, with an enquiry prompt)
const covered = new Set(parsed.map((p) => photoAlias[p.name] ?? p.name))
const extras: Place[] = destinations
  .filter((d) => !covered.has(d.name))
  .map((d) => ({ slug: slugify(d.name), name: d.name, region: d.region, tagline: d.blurb, itinerary: [], image: d.image }))

export const places: Place[] = [...withPhotos, ...extras].sort((a, b) => a.name.localeCompare(b.name))
export const placeBySlug = (slug: string) => places.find((p) => p.slug === slug)
