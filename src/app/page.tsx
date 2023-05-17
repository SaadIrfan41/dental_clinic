import Image from 'next/image'
import React from 'react'
import heroImage from '../../public/heroImage.jpg'
import LogoImage from '../../public/logo.png'
import ServiesBGImage from '../../public/servicesBG.jpg'
import DoctorImage from '../../public/doctorImage.jpg'
import {
  BracesIcon,
  Check_Icon,
  DentalExams_And_Checkups_Icon,
  DentalImplantsIcon,
  DenturesIcon,
  Email_Icon,
  EmergencyDentistIcon,
  Location_Icon,
  Phone_Icon,
  TeethCleaningIcon,
} from '@/components/Icons/icon'
import Link from 'next/link'

const services = [
  { name: 'Emergency Dentist', icon: <EmergencyDentistIcon /> },
  { name: 'Braces', icon: <BracesIcon /> },
  { name: 'Teeth Cleaning', icon: <TeethCleaningIcon /> },
  { name: 'Dentures', icon: <DenturesIcon /> },
  { name: 'Dental Implants', icon: <DentalImplantsIcon /> },
  {
    name: 'Dental Exams And Check-Ups',
    icon: <DentalExams_And_Checkups_Icon />,
  },
]
const skills = [
  {
    name: 'Lorem ipsum dolor sit amet',
  },
  {
    name: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    name: 'Ut enim ad minim veniam',
  },
  {
    name: 'Sed ut perspiciatis unde omnis iste',
  },
  {
    name: 'Duis aute irure dolor in reprehenderit',
  },
  {
    name: 'Excepteur sint occaecat cupidatat non proident',
  },
]
const HomePage = () => {
  return (
    <div>
      <div className='relative  md:h-screen z-20  overflow-hidden'>
        <div className='absolute bg-gradient-to-l from-black/5 to-black inset-0 opacity-[.9] ' />

        <Image
          priority
          src={heroImage}
          fill={true}
          className='  object-cover  fixed -z-20   '
          alt='Hero Image'
        />
        <header className='max-w-7xl border-b mx-auto relative text-white'>
          <nav className='flex justify-between '>
            <div className='max-h-[120px]  max-w-[227px]'>
              <Image
                priority
                // placeholder='blur'
                src={LogoImage}
                // fill={true}
                className='    '
                alt=' Logo Image'
              />
            </div>
            <ul className='lg:flex flex-wrap hidden content-center gap-x-10 tracking-widest leading-loose font-semibold text-lg uppercase pr-5  '>
              <a href='#Services-Section' className=''>
                Services
              </a>
              <a href='#About-Section'>About Us</a>
              <a href='#Location-Section'>Our Location</a>
              <li className=' hover:cursor-pointer'>
                Hotline(+92) 318-9737788
              </li>
            </ul>
          </nav>
        </header>
        <section className=' relative max-w-7xl mx-auto text-white'>
          <div className=' md:py-56 pt-56 pb-5  uppercase md:ml-20 md:pt-56 '>
            <p className=' text-lg font-semibold tracking-[3.5px] mb-3'>
              Dental Care For
            </p>
            <h2 className=' text-[5rem] max-w-xl leading-none font-normal'>
              Your
              <span className=' font-extrabold ml-5 bg-clip-text text-white'>
                New Smile
              </span>
            </h2>
            <a
              href='#WorkingHour-Section'
              className='mt-3 py-2 pr-12 w-fit hover:bg-[#17a8d8] hover:text-white text-[#17a8d8]  duration-300  pl-6 text-3xl flex rounded-full    items-center border-2 border-[#17a8d8]'
            >
              <span className='  mr-5'>Working Hours</span>{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-8 h-8 '
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </a>
          </div>
        </section>
      </div>
      <div
        id='WorkingHour-Section'
        className=' mt-32 mb-20 max-w-7xl mx-auto text-center'
      >
        <h3 className=' text-5xl text-[#121f38] font-medium'>Working Hours</h3>
        <p className=' my-4 text-[#717171] text-lg font-normal  max-w-2xl md:text-start  mx-auto'>
          Molestie am perpetua efficiendi vix no. Ad vel inani putent electram,
          eu quo nostrud accommodare. Cum accusata temporibus, atqui munere
          legendos.
        </p>
        <div className='divide-y   max-w-lg mx-auto text-2xl text-[#121F38] font-medium'>
          <div className='flex justify-between py-6 mx-5 md:mx-0'>
            <span>Monday - Friday</span>
            <span className=' text-base font-normal'>8AM - 6PM</span>
          </div>
          <div className='flex justify-between py-6 mx-5 md:mx-0'>
            <span>Saturday </span>
            <span className=' text-base font-normal'>9AM - 5PM</span>
          </div>

          <div className='flex justify-between py-6 mx-5 md:mx-0'>
            <span>Sunday</span>
            <span className=' text-base font-normal'>9AM - 4PM</span>
          </div>
        </div>
      </div>
      <div id='Services-Section' className=' '>
        <section>
          <div className='relative   z-20  '>
            <div className='absolute bg-gradient-to-l from-black/50 to-black inset-0 opacity-[.9] ' />

            <Image
              priority
              src={ServiesBGImage}
              fill={true}
              className='  object-cover   -z-20   '
              alt='Services Background Image'
            />
            <div className='flex flex-col max-w-7xl py-40 mx-auto text-center text-white'>
              <h2 className=' font-extrabold text-white z-30 text-6xl '>
                Our Services
              </h2>
              <p className='z-30 font-medium text-xl max-w-5xl mx-auto mt-3'>
                Offering general, cosmetic and orthodontic dentistry, Embassy
                Dental offers our patients exceptional dental care that is both
                convenient and affordable. We are Nashville&quot;s comprehensive
                dental solution.
              </p>
            </div>
          </div>
          <div className='grid xl:grid-cols-4 grid-cols-1 md:grid-cols-2  max-w-7xl mx-auto  mt-20  gap-12   '>
            {services.map(({ name, icon }, index) => (
              <div
                key={index}
                className=' hover:scale-110  items-center w-[284px] bg-white hover:text-[#17ada4]  hover:border-[#17ada4] shadow-xl text-[#C6CFDC]  flex flex-col  align-middle scale-100 border  px-16 py-12  mx-auto rounded-[4rem] text-center duration-300 '
              >
                <div className=' w-28 h-28   '>{icon}</div>
                <h1
                  id='#ServicesName'
                  className='text-xl w-full   font-semibold text-center'
                >
                  {name}
                </h1>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div id='About-Section' className=' mt-52 mb-20 mx-5'>
        <div className=' grid grid-cols-1 md:grid-cols-3  md:gap-x-10 gap-y-10 max-w-7xl mx-auto'>
          <div className=' pb-12 '>
            <Image
              src={DoctorImage}
              className='  '
              placeholder='blur'
              alt='Doctor Image'
            />

            <div className='flex flex-col py-5 px-3'>
              <h2 className=' font-medium text-4xl mb-5'>Dr. Anne Middleton</h2>
              <span className='text-[#17a8d8] font-medium text-sm'>
                DENTAL SPECIALIST
              </span>
            </div>
            <div className='text-[#17a8d8] px-3 border-b border-[#17a8d8]'>
              <div className='flex pb-[calc(10px/2)]'>
                <Phone_Icon />
                <span className=' text-black pl-[5px]'>
                  Phone: +012 (999) 8777
                </span>
              </div>
              <div className='flex pb-[calc(10px/2)]'>
                <Email_Icon />{' '}
                <span className=' text-black pl-[5px] mb-10'>
                  support.trusmile@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className='col-span-2'>
            <h3 className=' pb-4 text-4xl font-normal'>About MySelf</h3>
            <h5 className=' mb-5 font-medium  italic text-xl'>
              &quot;We encourage lifelong learning and professional development
              through dynamic learning environments where doctors are supported
              in achieving their learning and career goals.&quot;
            </h5>
            <p className=' my-4  text-base text-[#717171]'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam.
            </p>
            <h3 className=' text-4xl font-normal mt-5'>My Skill</h3>
            <p className=' my-4 '>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam.
            </p>
            {skills.map(({ name }, index) => (
              <div className='flex text-[#17a8d8]' key={index}>
                <Check_Icon />{' '}
                <span className='text-[#121f38] pl-3'>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id='Location-Section'
        className=' relative mt-20 mb-20 text-center md:text-start '
      >
        <div className=' grid grid-cols-1 md:grid-cols-2  md:gap-x-10 gap-y-10 max-w-7xl mx-auto mt-36 '>
          <div className=' pb-12 col-span-1 '>
            <h3 className=' pb-4 text-4xl font-normal'>Our Location:</h3>
            <h5 className=' mb-5 font-medium   text-5xl'>New York Dental</h5>
            <p className=' my-4 font-normal  text-xl text-[#717171]'>
              Seeing your dentist shouldn’t be hard. Our team is there for you
              when and where you need us. Close to home. Close to work. Let us
              care for you.
            </p>
            <h3 className=' text-4xl font-normal mt-5'>Address</h3>
            <div className='text-[#17a8d8] mt-5'>
              <div className='flex pb-[calc(20px/2)] justify-center md:justify-start'>
                <Location_Icon />
                <span className=' text-black pl-[5px]'>
                  90 St Johns Brooklyn, NY
                </span>
              </div>
              <div className='flex pb-[calc(20px/2)] justify-center md:justify-start'>
                <Phone_Icon />
                <span className=' text-black pl-[5px] '>
                  Phone: +012 (999) 8777
                </span>
              </div>
              <div className='flex pb-[calc(20px/2)] justify-center md:justify-start'>
                <Email_Icon />{' '}
                <span className=' text-black pl-[5px] mb-10'>
                  support.trusmile@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className='col-span-1 '>
            <iframe
              className=' w-full h-full'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3320023284045!2d-122.01384291048234!3d37.3346479654628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2s!4v1684273707794!5m2!1sen!2s'
              style={{ border: 0 }}
              allowFullScreen={false}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
