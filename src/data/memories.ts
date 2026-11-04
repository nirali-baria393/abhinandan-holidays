// Guest photos from the Abhinandan Holidays Instagram (public/memories).
export interface Memory { file: string; place: string; note: string }

const m = (file: string, place: string, note: string): Memory => ({ file: `/memories/${file}.jpg`, place, note })

export const memories: Memory[] = [
  m('singapore-marina-bay', 'Singapore', 'Marina Bay views'),
  m('bali-temple', 'Bali', 'By the water temple'),
  m('dubai-burj-al-arab', 'Dubai', 'Burj Al Arab'),
  m('malaysia-petronas', 'Malaysia', 'Petronas Towers by night'),
  m('guests-airport', 'Bengaluru', 'Ready for take-off'),
  m('vietnam-flags', 'Vietnam', 'Festive flags'),
  m('abu-dhabi-ferrari-world', 'Abu Dhabi', 'Ferrari World'),
  m('himachal-temple', 'Himachal', 'Temple stop'),
  m('goa-calangute', 'Goa', 'Calangute'),
  m('darjeeling-peace-pagoda', 'Darjeeling', 'Peace Pagoda in the mist'),
  m('hong-kong-disneyland', 'Hong Kong', 'Disneyland entrance'),
  m('malaysia-batu-caves', 'Malaysia', 'Batu Caves'),
  m('dubai-frame', 'Dubai', 'Dubai Frame'),
  m('bali-cliffs', 'Bali', 'Cliffside views'),
  m('singapore-group', 'Singapore', 'Group trip'),
  m('sri-lanka-arrival', 'Sri Lanka', 'Warm welcome on arrival'),
  m('abu-dhabi-ocean', 'Abu Dhabi', 'Ocean World'),
  m('malaysia-kl', 'Malaysia', 'Kuala Lumpur'),
  m('guests-longtail', 'Thailand', 'Longtail boat ride'),
]

export const memoryPlaces = ['All', ...Array.from(new Set(memories.map((x) => x.place)))]
