import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-900 flex justify-between'>
        <a className='mt-1' >
            <img src="images/icon.png" alt="Logo" className='w-24'  />
        </a>
        <button className='px-4 py-3 bg-linear-to-r from-gray-800 to-gray-900 rounded-full cursor-pointer m-2 border-1 border-gray-200 hover:border-gray-500'>
          Playground
        </button>
    </div>
  )
}

export default Navbar