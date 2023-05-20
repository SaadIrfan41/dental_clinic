'use client'
import React from 'react'
import ReactWhatsapp from 'react-whatsapp'
import WhatsAppImage from '../../public/whatsApp.svg'
import Image from 'next/image'

const WhatsAppButton = () => {
  return (
    <ReactWhatsapp
      className='  fixed w-20 h-20 z-50 bottom-5 right-5'
      number='+923189737788'
      message='Hello !!!'
    >
      {/* <span className='animate-ping absolute inline-flex w-12 h-12 bottom-4 right-4 rounded-full bg-green-400 opacity-75' /> */}
      <Image
        priority
        // placeholder='blur'
        src={WhatsAppImage}
        className='  '
        alt='WhatsApp Buttom'
      />
    </ReactWhatsapp>
  )
}

export default WhatsAppButton
