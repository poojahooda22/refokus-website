import React from 'react'
import Button from './button/Button'

function Product() {
  return (
    <div className='w-full py-5'>
      <div className='max-w-screen-xl mx-auto flex justify-between '>
       <h2 className='text-[2vw] font-medium'>Arqitel</h2>
       <div className='w-1/3'>
            <p>
                With a continuous 3D animation, we showcase Arqitel approach and 
                show how migration data translates into real estate.
            </p>
            <Button text='Live Website' />
       </div>
      </div>
    </div>
  )
}

export default Product
