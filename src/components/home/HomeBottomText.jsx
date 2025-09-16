import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-end justify-center gap-5 mb-[0.5vw]'>
        <Link className='text-[6.5vw] rounded-full uppercase border-3 py-10 px-7 leading-0 pt-14 pb-8 '>Projects</Link>
        <Link className='text-[6.5vw] rounded-full uppercase border-3 py-10 px-7 leading-0 pt-14 pb-8 '>Agence</Link>
    </div>
  )
}

export default HomeBottomText