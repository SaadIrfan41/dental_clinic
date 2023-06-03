import React from 'react'
import {
  ChevronRight,
  Email_Icon,
  Location_Icon,
  Mobile_Icon,
  Phone_Icon,
} from '@/components/Icons/icon'
import Link from 'next/link'
import SimpleSlider from '@/components/Carousel'

const ServicesPage = () => {
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
            <span className=' '>Our Locations</span>
          </div>
          <h1 className='text-white xl:text-[64px] text-3xl md:text-4xl font-extrabold'>
            Our Locations
          </h1>
        </div>
      </div>
      <div className='rounded-tl-[8rem] relative bg-white'>
        <div className='max-w-5xl lg:max-w-7xl xl:max-w-6xl mx-auto 2xl:max-w-[80%] pt-20 px-[5vw] '>
          <div
            style={{ zIndex: '-1' }}
            className=' hidden xl:block bg-[#2b3340] absolute inset-0 z-0'
          />
          <section className=' overflow-hidden xl:rounded-tr-[11rem] relative'>
            <div className=' relative  mx-5 text-center md:text-start location'>
              <div className=' grid grid-cols-1 md:grid-cols-2  md:gap-x-10 gap-y-10 max-w-[90rem] lg:max-w-[60rem] xl:max-w-6xl 2xl:max-w-7xl mx-auto xl:mt-36  xl:pb-32 '>
                <div className=' pb-12 col-span-1'>
                  <h5 className=' font-normal mb-5  text-3xl  xl:text-5xl whitespace-break-spaces'>
                    Providing the <span className=' font-extrabold '>best</span>{' '}
                    dental healthcare around.
                  </h5>
                  <p className=' my-4 font-normal text-lg  xl:text-[22px] text-[#2B3340] lg:pr-10'>
                    Seeing your dentist shouldn’t be hard. Our team is there for
                    you when and where you need us. Close to home. Close to
                    work. Let us care for you.
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
                  <SimpleSlider />
                </div>
              </div>
              <iframe
                className=' w-full '
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.470468742435!2d73.04819507633123!3d33.696773136415516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfe015b2bf2b%3A0x6662d4df82d9db23!2sAesthetic%20Dental%20Co!5e0!3m2!1sen!2s!4v1685795548061!5m2!1sen!2s'
                width='600'
                height='450'
                style={{ border: 0 }}
                allowFullScreen={false}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
