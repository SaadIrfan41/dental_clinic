import React from 'react'

import WhatsAppImage from '../../public/whatsApp.svg'
import Image from 'next/image'
import Link from 'next/link'

const WhatsAppButton = () => {
  return (
    <Link
      href={'https://wa.me/+923272214444?text=Hello...'}
      target='_blank'
      className='  fixed md:w-20 md:h-20 w-16 h-16 z-50 bottom-3 right-3 md:bottom-5 md:right-5'
    >
      {/* <span className='animate-ping absolute inline-flex w-12 h-12 bottom-4 right-4 rounded-full bg-green-400 opacity-75' /> */}
      <Image
        priority
        // placeholder='blur'
        src={WhatsAppImage}
        className='  '
        alt='WhatsApp Buttom'
      />
    </Link>
  )
}

export default WhatsAppButton
