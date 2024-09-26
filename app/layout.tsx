import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Worlds 2024 Pickems Tracker',
  description: 'A dashboard keeping track of the League of Legends Worlds 2024 crystal ball and Pickems Trackers',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark text-white'>
      <head>
      </head>
      <body>
        <main className="min-h-screen bg-background flex flex-col items-center text-white">
          {children}
        </main>
      </body>
    </html>
  )
}
