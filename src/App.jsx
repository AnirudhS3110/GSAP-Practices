import { useRef, useState } from 'react'
import React from 'react'
import './App.css'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import Page1 from './pages/poge1';
import Page2 from './pages/poge2';
gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
export const smoother = ScrollSmoother.create({
    // wrapper: '#wrapper',
    // content: '#content',
     smooth: 1.5,
     smoothTouch: 0.1,
    // effects: true,
  })

function App() {
  const pg1 = useRef(null);
  const pg2 = useRef(null);
  
  const [count, setCount] = useState(0)
  const box = useRef(null)
  
  useGSAP(() => {
    // Box rotation animation
    

    // Page2 slide up animation
    gsap.fromTo(pg2.current,
      {
        yPercent: 100, // Start position (100% below)
      },
      {
        yPercent: 0, // End position (original position)
        ease: "none",
        scrollTrigger: {
          trigger: pg1.current,
          start: "center center", // Start animation when Page1 center hits viewport center
          end: "bottom top", // End animation when Page1 bottom hits viewport top
          scrub: true, // Smooth scrubbing effect
          pin: true, // Pin Page1 while Page2 slides up
          markers: 0 // Remove this in production, helpful for debugging
        }
      }
    );
  });

  return (
    <>
    <div id="smooth-wrapper" className=' w-screen min-h-screen bg-white'>
    <div id="smooth-content" className='w-screen min-h-screen bg-gray-100 flex flex-col justify-center items-center'>
    <Page1 ref={pg1} />
    <Page2 ref={pg2} />
    </div>
    </div>
    
    </>
  )
}



export default App
