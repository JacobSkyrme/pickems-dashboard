import './globals.css'

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
      <head>
      <meta name="google-adsense-account" content="ca-pub-2890852664383961"/>
      </head>
      <body>
        <main className="min-h-screen bg-background flex flex-col items-center text-white">
          {children}
        </main>
      </body>
    </html>
  )
}
