import React from 'react'
import { RotateLoader } from 'react-spinners'

function Loader() {
  return (
    <>

    <div className='flex items-center justify-center h-screen'>
      <RotateLoader
        color="#0f3460"
        size={20}
        />
    </div>
    </>
  )
}

export default Loader
