const u = (id: string, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`

export const site = {
  name: 'Abhinandan Holidays',
  tagline: 'Flights | Visas | Curated Domestic & International Holiday Packages',
  phone: '+91 83209 76229',
  whatsapp: '918320976229',
  instagram: 'https://www.instagram.com/abhinandan_holidays36',
  // Address read from Instagram post images - please verify
  address: 'FF-06, Anand Vihar Complex, Sardar Park, GIDC, Ankleshwar 393002, Gujarat',
}

export const heroImage = u('photo-1507525428034-b723cf961d3e', 1800)

export interface Destination {
  name: string
  region: 'International' | 'Domestic'
  blurb: string
  image: string
}

export const destinations: Destination[] = [
  { name: 'Vietnam', region: 'International', blurb: 'Da Nang, Hanoi, Sapa & Ha Long Bay', image: u('photo-1528127269322-539801943592') },
  { name: 'Bali', region: 'International', blurb: 'Temples, beaches and island villas', image: u('photo-1537996194471-e657df975ab4') },
  { name: 'Singapore', region: 'International', blurb: 'City lights, Sentosa and gardens', image: u('photo-1525625293386-3f8f99389edd') },
  { name: 'Dubai', region: 'International', blurb: 'Skyline, desert safaris and shopping', image: u('photo-1512453979798-5ea266f8880c') },
  { name: 'Sri Lanka', region: 'International', blurb: 'Tea hills, coast and wildlife', image: u('photo-1586500036706-41963de24d8b') },
  { name: 'Georgia & Baku', region: 'International', blurb: 'Caucasus peaks and old towns', image: u('photo-1565008576549-57569a49371d') },
  { name: 'Kashmir', region: 'Domestic', blurb: 'Srinagar, Gulmarg, Pahalgam, Sonamarg', image: u('photo-1595815771614-ade9d652a65d') },
  { name: 'Leh Ladakh', region: 'Domestic', blurb: 'High passes and blue lakes', image: u('photo-1506905925346-21bda4d32df4') },
  { name: 'Kerala', region: 'Domestic', blurb: 'Munnar, Alleppey, Thekkady, Kovalam', image: u('photo-1602216056096-3b40cc0c9944') },
  { name: 'Udaipur', region: 'Domestic', blurb: 'City of lakes and palaces', image: u('photo-1599661046289-e31897846e41') },
  { name: 'Darjeeling', region: 'Domestic', blurb: 'Tea gardens, toy train, monasteries', image: u('photo-1622308644420-b20142dc993c') },
]

export const featured = {
  title: 'Vietnam Group Departure',
  date: '9 Nov 2026',
  from: 'Ho Chi Minh City',
  days: '10 days, all-inclusive',
  route: 'Da Nang · Ba Na Hills · Hanoi · Sapa · Ha Long Bay',
  image: u('photo-1528127269322-539801943592', 1400),
}

export const packages = [
  { title: 'Honeymoon Escapes', text: 'Private, romantic itineraries for Kashmir, Kerala, Bali and more.', image: u('photo-1566073771259-6a8506099945') },
  { title: 'Family Holidays', text: 'Relaxed plans with comfortable stays and kid-friendly stops.', image: u('photo-1519681393784-d120267933ba') },
  { title: 'Group Tours', text: 'Fixed departures with everything handled, from visas to transfers.', image: u('photo-1573843981267-be1999ff37cd') },
]

export const services = [
  { title: 'Holiday Packages', text: 'Domestic and international trips tailored to your budget.' },
  { title: 'Flight Booking', text: 'Domestic and international tickets at honest fares.' },
  { title: 'Visa Services', text: 'Documentation and guidance for smooth visa approvals.' },
  { title: 'Hotel Booking', text: 'Hand-picked stays from budget to luxury.' },
  { title: 'Cab & Transfers', text: 'Airport pickups and sightseeing vehicles.' },
  { title: 'Travel Insurance', text: 'Cover for peace of mind on every journey.' },
]

export const who = [
  { label: 'Couple', image: u('photo-1566073771259-6a8506099945', 600) },
  { label: 'Family', image: u('photo-1519681393784-d120267933ba', 600) },
  { label: 'Friends', image: u('photo-1573843981267-be1999ff37cd', 600) },
  { label: 'Solo', image: u('photo-1469854523086-cc02fe5d8800', 600) },
  { label: 'Seniors', image: u('photo-1548013146-72479768bada', 600) },
]

export const trustImage = u('photo-1539635278303-d4002c07eae3', 1000)

export const trust = [
  { title: 'Customisation', text: 'Every itinerary is built around your dates, budget and pace.' },
  { title: 'Expertise', text: 'Destination know-how for Kashmir, Kerala, Bali, Vietnam and more.' },
  { title: 'Service', text: 'One team for flights, visas, stays and on-trip support.' },
]

// Fill these with real content; the matching home-page sections appear automatically when non-empty.
export interface Review { name: string; city: string; trip: string; type: string; text: string; photo: string; sample?: boolean }
// PLACEHOLDER reviews written for layout purposes (names, photos and text are not real customers).
// Replace every entry with a real customer review and photo before publishing.
export const reviews: Review[] = [
  { name: 'Riya Shah', city: 'Ankleshwar', trip: 'Kashmir', type: 'Honeymoon', photo: u('photo-1494790108377-be9c29b29330', 300), text: 'Our Kashmir honeymoon was planned beautifully. The shikara ride on Dal Lake and the snow in Gulmarg were the highlights, and the team was always one message away.' },
  { name: 'Karan Mehta', city: 'Vadodara', trip: 'Bali', type: 'Friends', photo: u('photo-1500648767791-00dcc994a43e', 300), text: 'Six of us wanted surfing, temples and a few lazy beach days. They fitted all of it into one easy plan and handled every booking for us.' },
  { name: 'Neha Desai', city: 'Surat', trip: 'Vietnam', type: 'Family', photo: u('photo-1438761681033-6461ffad8d80', 300), text: 'Visa, flights and hotels were all sorted for us. The Ha Long Bay cruise was our kids\' favourite part, and nothing felt rushed.' },
  { name: 'Amit Joshi', city: 'Bharuch', trip: 'Kerala', type: 'Couple', photo: u('photo-1507003211169-0a1dd7228f2d', 300), text: 'A peaceful houseboat stay in Alleppey and a lovely drive through Munnar. Clear itinerary, honest advice and no last-minute surprises.' },
  { name: 'Pooja Trivedi', city: 'Ahmedabad', trip: 'Dubai', type: 'Solo', photo: u('photo-1534528741775-53994a69daeb', 300), text: 'I travelled alone for the first time and felt looked after throughout. The desert safari and the skydiving were unforgettable.' },
]
export const partners: { name: string; logo: string }[] = []
export const press: { name: string; quote: string }[] = []

export const themes = [
  { label: 'Honeymoon', image: u('photo-1566073771259-6a8506099945', 900), text: 'Romantic escapes for two' },
  { label: 'Family', image: u('photo-1511895426328-dc8714191300', 900), text: 'Easy, comfortable family trips' },
  { label: 'Group Tours', image: u('photo-1529156069898-49953e39b3ac', 900), text: 'Fixed departures, all handled' },
  { label: 'Adventure', image: u('photo-1551632811-561732d1e306', 900), text: 'Mountains, lakes and high passes' },
]

export interface Adventure { place: string; activity: string; note: string; image: string; icon: 'bike' | 'boat' | 'train' | 'waves' | 'ship' | 'wind' }
export const adventures: Adventure[] = [
  { place: 'Leh Ladakh', activity: 'Bike ride to Pangong Lake', note: 'Cross high passes like Khardung La', image: u('photo-1558981806-ec527fa84c39', 700), icon: 'bike' },
  { place: 'Kashmir', activity: 'Shikara ride on Dal Lake', note: 'Plus the Gulmarg gondola and snow', image: u('photo-1715457573748-8e8a70b2c1be', 700), icon: 'boat' },
  { place: 'Darjeeling', activity: 'Toy train & Tiger Hill sunrise', note: 'Ride the Himalayan railway', image: u('photo-1671711847762-b8308b444a42', 700), icon: 'train' },
  { place: 'Bali', activity: 'Surfing & Mount Batur sunrise trek', note: 'Waves, volcano and temples', image: u('photo-1502680390469-be75c86b636f', 700), icon: 'waves' },
  { place: 'Vietnam', activity: 'Ha Long Bay cruise', note: 'Kayak between limestone islands', image: u('photo-1573270689103-d7a4e42b609a', 700), icon: 'ship' },
  { place: 'Dubai', activity: 'Skydiving over Palm Jumeirah', note: 'Plus desert safari and dune bashing', image: u('photo-1521673252667-e05da380b252', 700), icon: 'wind' },
  { place: 'Georgia & Baku', activity: 'Paragliding in the Caucasus', note: 'Fly over Gudauri mountains', image: u('photo-1601024445121-e5b82f020549', 700), icon: 'wind' },
]
