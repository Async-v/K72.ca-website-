import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'public/images/image1.jpg',
    'public/images/image2.jpg',
    'public/images/image3.jpg',
    'public/images/image4.jpg',
    'public/images/image5.jpg',
    'public/images/image6.jpg',
    'public/images/image7.jpg',
    'public/images/image8.jpg',
    'public/images/image9.jpg',
    'public/images/image10.jpg',
    'public/images/image11.jpg',
    'public/images/image12.jpg',
    'public/images/image13.jpg',
    'public/images/image14.jpg'
  ]

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger: imageDivRef.current,
        start: 'top 22.2%',
        end: 'top -143%',
        scrub: true,
        pin: true,
        onUpdate: (elem)=>{
          let imageIndex;
          if(elem.progress < 1){
            imageIndex = Math.floor(elem.progress * imageArray.length);
          }else{
            imageIndex = imageArray.length-1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <div className='text-black'>
      <div className='section1'>
      <div ref={imageDivRef} className='absolute h-[21vw] w-[15vw] rounded-3xl overflow-hidden top-35 left-[30vw]'>
        <img ref={imageRef} className='h-full w-full object-cover ' src='public/images/image1.jpg' />
      </div>
      <div className='relative font-[font2]'>
      <div className='pt-[60vh]'>
        <h1 className='text-[19.8vw] text-center leading-[17.5vw] uppercase'>Soixan7e <br />
          Douze</h1>
      </div>
      <div className='pl-[40%] mt-5'>
        <p className='text-5xl font-[font1]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
      </div>
    </div>
      </div>
      <div className='section2 h-screen'>

      </div>
    </div>
  )
}

export default Agence