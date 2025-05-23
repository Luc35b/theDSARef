import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DSA Learning Site',
  description: 'Explore data structures and algorithms with interactive code and explanations.',
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
            <Link href="/" className="text-xl font-bold">DSA Explorer</Link>
            <div className="space-x-4">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About</Link>
            </div>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
        <footer className="bg-white border-t mt-8">
          <div className="max-w-4xl mx-auto px-4 py-6 text-sm text-gray-600 flex justify-between items-center flex-wrap gap-y-2">
            <p>&copy; {new Date().getFullYear()} DSA Explorer. Built with ❤️ using Next.js.</p>
            <div className="space-x-4">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <a
                href="https://github.com/your-username/ds-algo-site"
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