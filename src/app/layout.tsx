import './globals.css'

// TODO: move favicon to public folder.
export const metadata = {
  title: 'Acacia Pappas',
  description: 'A place to get to know me.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
