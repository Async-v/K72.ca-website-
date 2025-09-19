import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-end justify-center gap-5 mb-[0.5vw]'>
        <div className='hover:border-[#D3FD50] hover:text-[#D3FD50] border-3 rounded-full uppercase py-10 px-7 pt-13 leading-0 pb-3'>
          <Link className='text-[6.3vw]' to='/projects'>Projects</Link>
        </div>
        <div className='hover:border-[#D3FD50] hover:text-[#D3FD50] border-3 rounded-full uppercase py-10 px-7 pt-13 leading-0 pb-3'>
          <Link className='text-[6.3vw]' to='/agence'>Agence</Link>
        </div>
    </div>
  )
}

export default HomeBottomText