import { useState } from 'react'

const fallback = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="4" height="3"><rect width="4" height="3" fill="%230e7c86"/></svg>'

export default function Img({ src, alt }: { src: string; alt: string }) {
  const [s, setS] = useState(src)
  return <img src={s} alt={alt} loading="lazy" onError={() => setS(fallback)} />
}
