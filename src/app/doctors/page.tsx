import Link from 'next/link'
import React from 'react'
import { ChevronRight } from '@/components/Icons/icon'
import DocImage01 from '../../../public/doctorImage.jpg'
import Image from 'next/image'
const doctors = [
  {
    name: 'Dr. Kirulus Wifky',
    image: DocImage01,
    details: 'Family Dentist',
  },
  {
    name: 'Dr. Kirulus Wifky',
    image: DocImage01,
    details: 'Family Dentist',
  },
  {
    name: 'Dr. Kirulus Wifky',
    image: DocImage01,
    details: 'Family Dentist',
  },
  {
    name: 'Dr. Kirulus Wifky',
    image: DocImage01,
    details: 'Family Dentist',
  },
  {
    name: 'Dr. Kirulus Wifky',
    image: DocImage01,
    details: 'Family Dentist',
  },
  {
    name: 'Dr. Kirulus Wifky',
    image: DocImage01,
    details: 'Family Dentist',
  },
]
const OurDoctors = () => {
  return (
    <div className=' mb-20'>
      <div className='servicesBG  xl:pt-[15rem] xl:pb-[5rem] pt-[10rem] pb-[30px] sm:pt-[10rem] sm:pb-[30px]'>
        <div className=' max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-[2vw] md:gap-y-5 gap-x-1 flex flex-col'>
          <div className='text-[#c6cfdc] flex items-center gap-x-1 text-[16.5px] xl:text-[28px]'>
            <Link href={'/'} className=' hover:text-white '>
              Home
            </Link>
            <span className='text-[#fbaf43] pt-[6px]'>
              <ChevronRight />
            </span>
            <span className=' '>Our Team</span>
          </div>
          <h1 className='text-white xl:text-[64px] text-3xl md:text-4xl font-extrabold'>
            Our Team
          </h1>
        </div>
      </div>
      <div className='rounded-tl-[8rem] relative bg-white'>
        <div className='max-w-5xl lg:max-w-7xl xl:max-w-6xl mx-auto 2xl:max-w-[80%] pt-20 px-[5vw] '>
          <div
            style={{ zIndex: '-1' }}
            className=' hidden xl:block bg-[#2b3340] absolute inset-0 z-0'
          />
          <div className=' grid md:grid-cols-2  grid-cols-1  '>
            <div className=' 2xl:text-[50px] lg:text-[36px] text-[25px] text-[#2B3340]   '>
              <div className='flex whitespace-break-spaces md:block'>
                Meet the <span className='font-extrabold'>Embassy</span>
                <h3 className=' font-extrabold 2xl:text-[50px] lg:text-[36px] text-[25px] text-[#2B3340] xl:mb-10 mb-5'>
                  Dental Team
                </h3>
              </div>
              <p className=' font-normal text-[16px] xl:text-[22px] text-[#2B3340]'>
                Embassy Dental is Nashville’s dentist. With 7 convenient
                locations and a comprehensive service offering, we deliver the
                best dental healthcare in Nashville and its surrounding
                communities. From the land on the lake down to Mule town, we are
                close to what matters in your life, fairly priced and ready to
                exceed your expectations.
              </p>
            </div>
            <div className=' md:mt-auto flex md:flex-col  md:items-end gap-5 mt-10 mx-auto'>
              <Link
                href='/#Location-Section'
                className=' xl:py-[12px] xl:px-[24px] py-[9px] px-[18px] w-fit bg-[#fbaf43] lg:text-xl hover:text-white text-[#2b3340] text-center  duration-300 md:text-xl text-base flex rounded-full    items-center border-2 border-[#fbaf43] '
              >
                <span className=''>Find Our Location</span>{' '}
              </Link>
              <Link
                href='/services'
                className=' xl:py-[12px] xl:px-[24px] py-[9px] px-[18px] w-fit bg-[#fbaf43] lg:text-xl hover:text-white text-[#2b3340] text-center  duration-300   md:text-xl text-base flex rounded-full    items-center border-2 border-[#fbaf43] '
              >
                <span className=''>View All Service Offerings</span>{' '}
              </Link>
            </div>
          </div>
          <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  mt-20  gap-5   rounded-2xl  '>
            {doctors.map(({ name, details, image }, index) => (
              <div
                style={{
                  boxShadow: '0 0 15px #c6cfdc',
                }}
                key={index}
                className=' relative group  overflow-hidden transition-all duration-500  border text-center md:text-start  text-[#2b3340] py-60  rounded-3xl '
              >
                <Image
                  priority
                  fill={true}
                  placeholder='blur'
                  src={image}
                  className=' object-cover z-0  rounded-3xl'
                  alt='SideImage'
                />

                <div className='  text-center absolute bottom-[30px] w-full  '>
                  <div className='bg-white rounded-full max-w-xs mx-auto py-3 group-hover:pb-5 duration-500 '>
                    <h1 className=' text-[#2b3340] group-hover:text-[#17ada4]  duration-500 text-base xl:text-lg font-bold '>
                      {name}
                    </h1>
                    <p className='group-hover:animate-wiggle group-hover:block hidden   text-base italic '>
                      {details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurDoctors