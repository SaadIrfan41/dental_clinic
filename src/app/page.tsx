import {
  BracesIcon,
  DentalExams_And_Checkups_Icon,
  DentalImplantsIcon,
  DenturesIcon,
  Email_Icon,
  EmergencyDentistIcon,
  Location_Icon,
  LogoSVG,
  Mobile_Icon,
  PhoneSVG,
  Phone_Icon,
  TeethCleaningIcon,
} from '@/components/Icons/icon'

import React from 'react'
import heroSideImage from '../../public/heroSideImage.png'
// import heroImage2 from '../../public/heroImage2.jpg'
import Image from 'next/image'
import Link from 'next/link'
const services = [
  { name: 'Emergency Dentist', icon: <EmergencyDentistIcon /> },
  { name: 'Braces', icon: <BracesIcon /> },
  { name: 'Teeth Cleaning', icon: <TeethCleaningIcon /> },
  { name: 'Dentures', icon: <DenturesIcon /> },
  { name: 'Dental Implants', icon: <DentalImplantsIcon /> },
  {
    name: 'Dental Check-Ups',
    icon: <DentalExams_And_Checkups_Icon />,
  },
]
const page = () => {
  return (
    <div>
      <section className=' relative bg-[#2b3340] overflow-hidden   '>
        <div className='heroBG' />
        <div className='heroImageSide '>
          <Image
            // placeholder='blur'
            src={heroSideImage}
            className='  h-full pointer-events-none w-fit z-10 xl:block  hidden '
            alt='SideImage'
          />
        </div>
        <div className=' lg:max-w-[100rem] xl:max-w-[80rem] max-w-[608px] md:max-w-[608px] flex flex-col    lg:mx-auto      '>
          <div className='  pb-[12.5rem]  pl-[5vw] lg:pt-80 2xl:pt-[330px]  pt-[290px] duration-500 transition-[padding]    z-20  '>
            <h1 className='text-[#c6cfdc]  font-normal lg:text-5xl xl:text-6xl text-4xl  mix-blend-normal '>
              Better Dental Healthcare.
              <br />
              <span className=' lg:text-[4.5rem] xl:text-[5.5rem] text-[54px] text-white font-bold'>
                Better you.
              </span>
            </h1>
            <Link
              href='/location'
              className='mt-3 py-2 pr-12 w-fit hover:bg-[#fbaf43] lg:text-2xl hover:text-white text-[#fbaf43]  duration-300  pl-6 md:text-xl text-base flex rounded-full    items-center border-2 border-[#fbaf43]'
            >
              <span className='  mr-5'>Find Our Location</span>{' '}
            </Link>
          </div>
        </div>
      </section>
      <section
        id='Services-Section'
        className='  rounded-tl-[11rem] relative bg-white'
      >
        <div
          style={{ zIndex: '-1' }}
          className=' hidden lg:block bg-[#2b3340] absolute inset-0 z-0'
        />
        <div className=' grid xl:grid-cols-3 grid-col-1 py-32 xl:max-w-[104rem] max-w-[483px] sm:max-w-[650px] md:max-w-4xl lg:max-w-5xl  mx-auto  z-30 '>
          <div className='grid xl:grid-cols-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-20 xl:mt-0   col-span-2  order-2 xl:order-1  max-w-7xl mx-auto  gap-5   lg:gap-12'>
            {services.map(({ name, icon }, index) => (
              <div
                style={{
                  boxShadow: '0 0 15px #c6cfdc',
                }}
                key={index}
                className=' group w-[226px] h-[228px] xl:w-[172px] 2xl:w-[226px] 2xl:h-[228px] xl:h-[174px] hover:scale-110 duration-500 flex bg-white   hover:border-[#17ada4]  text-[#C6CFDC]  flex-col justify-center rounded-[2rem]  '
              >
                <div className=' w-28 h-28 xl:w-20 xl:h-20 2xl:w-28 2xl:h-28 mx-auto  group-hover:text-[#17ada4] duration-500'>
                  {icon}
                </div>
                <h1
                  id='#ServicesName'
                  className='text-xl w-full 2xl:text-xl flex justify-center group-hover:text-[#2b3340]  duration-500  xl:text-sm mx-3 ml-auto mr-auto max-w-fit  font-semibold text-center'
                >
                  {name}
                </h1>
              </div>
            ))}
          </div>
          <div className=' col-span-1 xl:ml-[-25%] text-center 2xl:text-start 2xl:ml-[-15%] mx-5 sm:mx-0 mb-20  xl:order-2  my-auto 2xl:my-20'>
            <h2
              style={{ lineHeight: '60px' }}
              className=' lg:text-[50px] 2xl:text-[50px]  text-[25px] sm:text-3xl xl:text-4xl md:text-5xl  justify-center 2xl:justify-start font-normal mb-7 '
            >
              <span className=''>How can</span>
              <span className=' font-extrabold '> Aesthetic Dental Help? </span>
            </h2>

            <p className='lg:text-[22px] xl:text-[22px] xl:text-base text-base font-normal mb-7'>
              From general dentistry and emergency dental care up to braces and
              other cosmetic offerings, we are Islamabad&apos;s comprehensive
              dental solution. Let our expert dentists and clinicians care for
              you and your family.
            </p>
            <strong className=' font-semibold mb-7 xl:text-[22px] lg:text-[22px] text-base'>
              Call today to take advantage of our new patient specials.
            </strong>

            <Link
              href='/services'
              className='mt-10 py-2 pr-12 w-fit bg-[#fbaf43] lg:text-xl hover:text-white text-[#2b3340] text-center  duration-300  pl-6 md:text-xl text-base flex rounded-full    items-center border-2 border-[#fbaf43] mx-auto 2xl:ml-0'
            >
              <span className=''>View All Service Offerings</span>{' '}
            </Link>
          </div>
        </div>
      </section>

      <section className=' overflow-hidden xl:rounded-tr-[11rem] relative'>
        <div
          id='Location-Section'
          className=' relative pt-20  mx-5 text-center md:text-start location'
        >
          <div className=' grid grid-cols-1 md:grid-cols-2  md:gap-x-10 gap-y-10 max-w-[90rem] lg:max-w-[60rem] xl:max-w-6xl 2xl:max-w-7xl mx-auto xl:mt-36  xl:pb-32 '>
            <div className=' pb-12 col-span-1  '>
              <h5 className=' font-normal mb-5  text-3xl  xl:text-5xl whitespace-break-spaces'>
                Providing the <span className=' font-extrabold '>best</span>{' '}
                dental healthcare around.
              </h5>
              <p className=' my-4 font-normal text-lg  xl:text-[22px] text-[#2B3340] lg:pr-10'>
                Seeing your dentist shouldn’t be hard. Our team is there for you
                when and where you need us. Close to home. Close to work. Let us
                care for you.
              </p>
              <h3 className=' text-4xl font-normal mt-5'>Our Location:</h3>
              <div className='text-[#17ada4]  mt-5'>
                <div className='flex pb-[calc(20px/2)] justify-center md:justify-start'>
                  <Location_Icon />
                  <span className=' text-black pl-[5px]'>
                    Shop No 3, Ground Floor, Times Square Building, G-8
                    Markaz Islamabad
                  </span>
                </div>
                <div className='flex pb-[calc(20px/2)] justify-center md:justify-start'>
                  <Phone_Icon />
                  <span className=' text-black pl-[5px] '>
                    Landline: 051-8482888
                  </span>
                </div>
                <div className='flex pb-[calc(20px/2)] justify-center md:justify-start'>
                  <Mobile_Icon />
                  <span className=' text-black pl-[5px] '>
                    Phone: 0327-2214444
                  </span>
                </div>
                <div className='flex pb-[calc(20px/2)] justify-center md:justify-start'>
                  <Email_Icon />{' '}
                  <span className=' text-black pl-[5px] mb-10'>
                    aestheticdentalco@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <div className='col-span-1 '>
              <iframe
                className=' lg:w-full lg:h-full w-full h-96'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.470468742435!2d73.04819507633123!3d33.696773136415516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfe015b2bf2b%3A0x6662d4df82d9db23!2sAesthetic%20Dental%20Co!5e0!3m2!1sen!2s!4v1685795548061!5m2!1sen!2s'
                width='600'
                height='450'
                style={{ border: 0 }}
                allowFullScreen={false}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
