import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SQ-6 Training Guide',
  description: 'Volunteer training guide for the Allen & Heath SQ-6 digital mixer',
}

export default function SQ6Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}