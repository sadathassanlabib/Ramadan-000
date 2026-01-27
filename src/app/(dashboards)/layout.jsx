'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Add Blogs', path: '/resource/blogs/add' },
  { name: 'Add Book', path: '/resource/book/add' },
  { name: 'Add Pdf', path: '/resource/pdf/add' },
  { name: 'Add Muhasaba', path: '/resource/muhasaba/add' },
  { name: 'Add Boyan', path: '/resource/boyan/add' },
  { name: 'Add Course', path: '/resource/course/add' },
]

const DashboardLayout = ({ children }) => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen flex relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]">

   
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      
      <aside
        className={`fixed z-50 md:static top-0 left-0 h-full w-64
        bg-white/5 backdrop-blur-xl border-r border-white/10 p-5
        transform transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0`}
      >
        <h2 className="text-white text-xl font-bold mb-8">
          Admin Dashboard
        </h2>

        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path

            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2 rounded-md transition
                    ${
                      isActive
                        ? 'bg-cyan-600/80 text-white shadow'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>

     
      <div className="flex-1 flex flex-col relative z-10">

        
        <header className="md:hidden bg-white/5 backdrop-blur border-b border-white/10 text-white px-4 py-3 flex items-center">
          <button
            onClick={() => setOpen(true)}
            className="text-2xl mr-3"
          >
            ☰
          </button>
          <span className="font-semibold">Dashboard</span>
        </header>

       
        <main className="flex-1 p-4 md:p-8 text-gray-100">
          {children}
        </main>

      </div>
    </div>
  )
}

export default DashboardLayout
