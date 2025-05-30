import './globals.css'

export const metadata = {
  title: 'WraithTheQueen',
  description: 'Mystical soul queen on ApeChain',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
