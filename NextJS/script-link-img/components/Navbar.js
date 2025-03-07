import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-white text-xl font-bold">Facebook</span>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-200">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-200">About</Link>
          <Link href="/contact" className="text-white hover:text-gray-200">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
