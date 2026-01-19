'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  if (pathname.includes('dashboard')) return null

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-yellow-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="leading-tight">
          <p className="text-xl font-bold tracking-wide">জীবনদীপ্ত</p>
          <p className="text-sm text-yellow-300 text-right">রমাদান</p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            { name: 'Home', href: '/' },
            { name: 'Resource', href: '/resource' },
            { name: 'Blogs', href: '/blogs' },
            { name: 'Event', href: '/event' },
            { name: 'About', href: '/about' },
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`hover:text-yellow-300 transition ${
                  pathname === item.href ? 'text-yellow-300' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-yellow-200 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 px-6 pb-6">
          <ul className="flex flex-col gap-4 text-sm">
            {[
              { name: 'Home', href: '/' },
              { name: 'Resource', href: '/resource' },
              { name: 'Blogs', href: '/blogs' },
              { name: 'Event', href: '/event' },
              { name: 'About', href: '/about' },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 border-b border-gray-700 hover:text-yellow-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
