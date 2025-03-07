import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-purple-900'>
      {/* this navbar for all page from @components/Navbar */}
      <ul className='flex gap-9'>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </div>
  )
}

export default Navbar
