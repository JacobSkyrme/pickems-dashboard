import './globals.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Worlds 2023 Pickems Tracker',
  description: 'A dashboard keeping track of the League of Legends Worlds 2023 crystal ball and Pickems Trackers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark text-white'>
      <body>
        <main className="min-h-screen bg-background flex flex-col items-center text-white">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  )
}
