import './globals.css'

export const metadata = {
  title: 'Rak Realm - Official Music & Community',
  description: 'Official website for Rak Realm - Music, Community, and Entertainment',
  keywords: 'music, rak realm, community, entertainment, discord',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}