import React from 'react'
import LayoutHome from '../components/LayoutHome'


const Test = () => {
   return (
      <LayoutHome>
         <div className='container'>
            <div className='d-flex align-items-center justify-content-center vh-100'>
               <div className='slider'>
                  <div className='slider-item bg-primer text-white fs-4 fw-bold img-thumbnail-2'>One</div>
                  <div className='slider-item bg-second base fs-4 fw-bold'>Two</div>
                  <div className='slider-item bg-third text-white fs-4 fw-bold'>Three</div>
               </div>
            </div>
         </div>
      </LayoutHome>
   )
}

export default Test