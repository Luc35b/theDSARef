import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DSA Reference',
  description: 'Explore data structures and algorithms with explaniations and implemenations in different coding languages.',
  icons: {
    icon: '/dsaRef.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <header className="bg-white shadow-sm p-4">
          <nav className="max-w-4xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">The DSA Ref</Link>
            <div className="space-x-4">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About</Link>
            </div>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
        <footer className="bg-white border-t mt-8">
          <div className="max-w-4xl mx-auto px-4 py-6 text-sm text-gray-600 flex justify-between items-center flex-wrap gap-y-2">
            <p>&copy; {new Date().getFullYear()} The DSA Ref.</p>
            <div className="space-x-4">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <a
                href="https://github.com/luc35b/theDSARef"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}