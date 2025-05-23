import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div >
      <Image src={'/logo.jpg'} alt='' width={300} height={100} className=''/>
     </div>
  )
}

export default Logo
