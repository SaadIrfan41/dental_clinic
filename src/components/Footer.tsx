import React from 'react'
import {
  Email_Icon,
  Location_Icon,
  LogoImage,
  LogoSVG,
  Mobile_Icon,
  Phone_Icon,
} from './Icons/icon'
import Link from 'next/link'
import Image from 'next/image'
import Logo2 from '../../public/logo.png'

const Footer = () => {
  return (
    <footer
      style={{ boxShadow: 'inset 0px 12px 300px 60px #c6cfdc' }}
      className=' '
    >
      <div className='  grid md:grid-cols-3 text-[#2b3340] grid-cols-1 max-w-7xl mx-auto items-center py-24 px-20 '>
        <div className=' hidden md:block '>
          {' '}
          <h3 className=' font-extrabold text-2xl mt-5 '>Our Location</h3>
          <div className='text-[#17ada4]  mt-5 flex flex-col  items-start'>
            <div className='flex pb-[calc(20px/2)] justify-center flex-shrink-0 '>
              <Location_Icon />
              <span className=' text-[#2b3340] pl-[5px]'>
                Shop No 3, Ground Floor, Times Square Building, G-8
                Markaz Islamabad
              </span>
            </div>
            <div className='flex pb-[calc(20px/2)] justify-center '>
              <Phone_Icon />
              <span className=' text-[#2b3340] pl-[5px] '>
                Landline: 051-8482888
              </span>
            </div>
            <div className='flex pb-[calc(20px/2)] justify-center md:justify-start'>
              <Mobile_Icon />
              <span className=' text-black pl-[5px] '>Phone: 0327-2214444</span>
            </div>
            <div className='flex pb-[calc(20px/2)] justify-center'>
              <Email_Icon />{' '}
              <span className=' text-[#2b3340] pl-[5px] mb-10'>
                aestheticdentalco@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className=' mb-auto'>
          <h3 className=' font-extrabold text-2xl mt-5 text-center'>
            Quick Links
          </h3>
          <div className='text-[#17ada4]  mt-5'>
            <div className='flex pb-[calc(20px/2)] justify-center '>
              <Link href='/doctors' className=' text-[#2b3340] pl-[5px]'>
                Meet Our Team
              </Link>
            </div>
            <div className='flex pb-[calc(20px/2)] justify-center '>
              <a
                href='/#Services-Section'
                className=' text-[#2b3340] pl-[5px] '
              >
                Services
              </a>
            </div>
            <div className='flex pb-[calc(20px/2)] justify-center '>
              <a
                target='_blank'
                href='https://www.google.com/maps/dir//Apple+Park+One+Apple+Park+Way+Cupertino,+CA+95014+United+States/@37.3346438,-122.008972,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808fb596e9e188fd:0x3b0d8391510688f0!2m2!1d-122.008972!2d37.3346438'
                className=' text-[#2b3340] pl-[5px] mb-10'
              >
                Geo Location
              </a>
            </div>
          </div>
        </div>
        <div className=' text-[#2b3340] w-40 h-40 my-auto  order-first md:order-last mx-auto '>
          <img src={'/logo.png'} alt='Logo Image' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
