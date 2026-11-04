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
  { name: 'Malaysia', region: 'International', blurb: 'Kuala Lumpur, Batu Caves and Petronas Towers', image: u('photo-1596422846543-75c6fc197f07') },
  { name: 'Abu Dhabi', region: 'International', blurb: 'Ferrari World, Ocean World and the Grand Mosque', image: u('photo-1512632578888-169bbbc64f33') },
  { name: 'Hong Kong', region: 'International', blurb: 'Disneyland, skyline and Macau', image: u('photo-1536599018102-9f803c140fc1') },
  { name: 'Thailand', region: 'International', blurb: 'Phuket, Phi Phi islands and Bangkok', image: u('photo-1552465011-b4e21bf6e79a') },
  { name: 'Goa', region: 'Domestic', blurb: 'Beaches, forts and sunset cruises', image: u('photo-1512343879784-a960bf40e7f2') },
  { name: 'Rajasthan', region: 'Domestic', blurb: 'Jaipur, Golden Triangle, forts and palaces', image: u('photo-1477587458883-47145ed94245') },
  { name: 'Uttarakhand', region: 'Domestic', blurb: 'Char Dham, Do Dham and Himalayan valleys', image: u('photo-1605649487212-47bdab064df7') },
  { name: 'Himachal', region: 'Domestic', blurb: 'Manali temples and mountain valleys', image: u('photo-1626621341517-bbf3d9990a23') },
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
const dest = (n: string) => destinations.find((d) => d.name === n)!.image
export const reviews: Review[] = [
  { name: 'Riya Shah', city: 'Ankleshwar', trip: 'Kashmir', type: 'Honeymoon', photo: u('photo-1494790108377-be9c29b29330', 300), text: 'Our Kashmir honeymoon was planned beautifully. The shikara ride on Dal Lake and the snow in Gulmarg were the highlights, and the team was always one message away.' },
  { name: 'Karan Mehta', city: 'Vadodara', trip: 'Bali', type: 'Friends', photo: u('photo-1500648767791-00dcc994a43e', 300), text: 'Six of us wanted surfing, temples and a few lazy beach days. They fitted all of it into one easy plan and handled every booking for us.' },
  { name: 'Neha Desai', city: 'Surat', trip: 'Vietnam', type: 'Family', photo: u('photo-1438761681033-6461ffad8d80', 300), text: 'Visa, flights and hotels were all sorted for us. The Ha Long Bay cruise was our kids\' favourite part, and nothing felt rushed.' },
  { name: 'Amit Joshi', city: 'Bharuch', trip: 'Kerala', type: 'Couple', photo: u('photo-1507003211169-0a1dd7228f2d', 300), text: 'A peaceful houseboat stay in Alleppey and a lovely drive through Munnar. Clear itinerary, honest advice and no last-minute surprises.' },
  { name: 'Pooja Trivedi', city: 'Ahmedabad', trip: 'Dubai', type: 'Solo', photo: u('photo-1534528741775-53994a69daeb', 300), text: 'I travelled alone for the first time and felt looked after throughout. The desert safari and the skydiving were unforgettable.' },
  { name: 'Meera Patel', city: 'Surat', trip: 'Singapore', type: 'Family', photo: dest('Singapore'), text: 'Marina Bay, Sentosa and Gardens by the Bay were all covered in a smooth, well-paced plan. Easy trip with the kids.', sample: true },
  { name: 'Jignesh Shah', city: 'Vadodara', trip: 'Sri Lanka', type: 'Couple', photo: dest('Sri Lanka'), text: 'Airport pickup, hotels and sightseeing ran like clockwork. We just enjoyed the tea hills and the coast.', sample: true },
  { name: 'Dhara Modi', city: 'Ankleshwar', trip: 'Georgia & Baku', type: 'Friends', photo: dest('Georgia & Baku'), text: 'Visa help and a clear itinerary made a first trip to the Caucasus stress-free for our group.', sample: true },
  { name: 'Hardik Parmar', city: 'Bharuch', trip: 'Leh Ladakh', type: 'Friends', photo: dest('Leh Ladakh'), text: 'Permits, stays and acclimatisation days were planned well. The passes and lakes were unforgettable.', sample: true },
  { name: 'Komal Rana', city: 'Ahmedabad', trip: 'Udaipur', type: 'Couple', photo: dest('Udaipur'), text: 'Lake-view stay, palace visits and a sunset boat ride, all arranged without us chasing anyone.', sample: true },
  { name: 'Sanjay Desai', city: 'Surat', trip: 'Darjeeling', type: 'Family', photo: dest('Darjeeling'), text: 'Toy train, tea gardens and a calm monastery visit. The whole family travelled comfortably.', sample: true },
  { name: 'Nidhi Joshi', city: 'Vadodara', trip: 'Malaysia', type: 'Couple', photo: dest('Malaysia'), text: 'Kuala Lumpur at night and the Batu Caves in one easy plan. Hotels were well located.', sample: true },
  { name: 'Rakesh Trivedi', city: 'Ankleshwar', trip: 'Abu Dhabi', type: 'Family', photo: dest('Abu Dhabi'), text: 'Ferrari World and the Grand Mosque in one trip, with transfers handled for us every day.', sample: true },
  { name: 'Pinal Gandhi', city: 'Surat', trip: 'Hong Kong', type: 'Friends', photo: dest('Hong Kong'), text: 'Disneyland and the skyline views were great, and the team sorted our Macau day trip too.', sample: true },
  { name: 'Chirag Vyas', city: 'Bharuch', trip: 'Thailand', type: 'Couple', photo: dest('Thailand'), text: 'Island hopping, longtail boats and clear water. Every booking was confirmed before we left.', sample: true },
  { name: 'Isha Chauhan', city: 'Vadodara', trip: 'Goa', type: 'Friends', photo: dest('Goa'), text: 'Budget-friendly Goa with a good beach stay and simple airport transfers. Would book again.', sample: true },
  { name: 'Mehul Bhatt', city: 'Ahmedabad', trip: 'Rajasthan', type: 'Family', photo: dest('Rajasthan'), text: 'Jaipur forts and palaces with a driver who knew every shortcut. Smooth and comfortable.', sample: true },
  { name: 'Foram Dave', city: 'Surat', trip: 'Uttarakhand', type: 'Family', photo: dest('Uttarakhand'), text: 'Our Char Dham yatra was organised carefully, with comfortable stays and clear darshan timings.', sample: true },
  { name: 'Tejas Solanki', city: 'Ankleshwar', trip: 'Himachal', type: 'Couple', photo: dest('Himachal'), text: 'Manali temples, snow and mountain drives. The itinerary was relaxed and well timed.', sample: true },
]
export const partners: { name: string; logo: string }[] = [
  { name: 'MakeMyTrip', logo: '/partners/makemytrip.png' },
  { name: 'Booking.com', logo: '/partners/bookingdotcom.svg' },
  { name: 'Agoda', logo: '/partners/agoda.png' },
  { name: 'Expedia', logo: '/partners/expedia.svg' },
  { name: 'Skyscanner', logo: '/partners/skyscanner.png' },
  { name: 'Cleartrip', logo: '/partners/cleartrip.png' },
  { name: 'Tripadvisor', logo: '/partners/tripadvisor.svg' },
  { name: 'Trivago', logo: '/partners/trivago.svg' },
  { name: 'Airbnb', logo: '/partners/airbnb.svg' },
  { name: 'IndiGo', logo: '/partners/indigo.svg' },
  { name: 'Air India', logo: '/partners/airindia.svg' },
  { name: 'Emirates', logo: '/partners/emirates.svg' },
  { name: 'Qatar Airways', logo: '/partners/qatarairways.svg' },
  { name: 'Etihad Airways', logo: '/partners/etihadairways.svg' },
  { name: 'Singapore Airlines', logo: '/partners/singaporeairlines.svg' },
]
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

// Google reviews card. Fill in the real numbers from your Google Business profile;
// rating/count stay hidden until you do. Replace `url` with your own "Write a review" link if you have one.
export const googleReviews: { url: string; rating: number | null; count: number | null } = {
  url: 'https://www.google.com/maps/search/?api=1&query=Abhinandan+Holidays+Ankleshwar',
  rating: null,
  count: null,
}

// Real guest photos used in the round avatar of each review card (by trip name).
export const tripPhotos: Record<string, string> = {
  Kashmir: '/memories/himachal-temple.jpg',
  Bali: '/memories/bali-temple.jpg',
  Vietnam: '/memories/vietnam-flags.jpg',
  Kerala: '/memories/abu-dhabi-ferrari-world.jpg',
  Dubai: '/memories/dubai-burj-al-arab.jpg',
  Singapore: '/memories/singapore-marina-bay.jpg',
  'Sri Lanka': '/memories/sri-lanka-arrival.jpg',
  Darjeeling: '/memories/darjeeling-peace-pagoda.jpg',
  Malaysia: '/memories/malaysia-petronas.jpg',
  'Abu Dhabi': '/memories/abu-dhabi-ocean.jpg',
  'Hong Kong': '/memories/hong-kong-disneyland.jpg',
  Thailand: '/memories/guests-longtail.jpg',
  Goa: '/memories/goa-calangute.jpg',
}
