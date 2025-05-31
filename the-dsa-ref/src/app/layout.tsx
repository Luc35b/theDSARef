import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DSA Reference',
  description: 'Explore data structures and algorithms with explaniations and implemenations in different coding languages.',
  icons: {
    icon: '/dsaRef2.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900 min-h-screen flex flex-col`}>
        <header className="bg-white text-gray-900 shadow-sm p-4">
          <nav className="flex justify-between items-center px-8">
            <div className="flex items-center space-x-4">
              <Image src="/dsaRef2.png" width={55} height={55} alt="DSA Ref Logo" />
              <Link href="/" className="text-xl font-bold">The DSA Ref</Link>
            </div>
            <div className="space-x-4">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About</Link>
            </div>
          </nav>
        </header>
        <main className="p-6 flex-grow">{children}</main>
        <footer className="bg-white border-t mt-8">
          <div className="px-16 py-6 text-sm text-gray-600 flex justify-between items-center flex-wrap gap-y-2">
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