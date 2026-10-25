import { ReactNode } from 'react'

export default function Row({ className = 'row', children }: { className?: string; children: ReactNode }) {
  return <div className={className}>{children}</div>
}
