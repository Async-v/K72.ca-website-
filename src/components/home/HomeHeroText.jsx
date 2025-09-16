import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-[0.5vw] text-center'>
        <div className='text-[9.3vw] justify-center flex items-center uppercase leading-[8.9vw]'>
            L'étincelle
        </div>
        <div className='text-[9.3vw] justify-center flex items-start uppercase leading-[8.9vw]'>
            qui 
            <div className='h-[7vw] w-[15vw] m-[0.5vw] rounded-full overflow-hidden'>
                <Video />
            </div> 
            génère
        </div>
        <div className='text-[9.3vw] -mt-2.5 justify-center flex items-center uppercase leading-[8.9vw]'>
            la créativité
        </div>
    </div>
  )
}

export default HomeHeroText