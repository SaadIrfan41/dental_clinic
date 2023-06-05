import React from 'react'
import {
  All_on_X_Dental_Implants_Icon,
  BracesIcon,
  ChevronRight,
  Clear_Aligners_Icon,
  Cosmetic_Dentistry_Icon,
  Dental_Bridges_Icon,
  Dental_Crowns_Icon,
  Dental_Sealants_Icon,
  DenturesIcon,
  EmergencyDentistIcon,
  Endodontics_Icon,
  Fillings_Icon,
  Orthodontist_Icon,
  Periodontics_Icon,
  Root_Canal_Therapy_Icon,
  Teeth_Cleaning_Icon,
  Teeth_Whitening_Icon,
  Tooth_Extraction_Icon,
  Veneers_Icon,
} from '@/components/Icons/icon'
import Link from 'next/link'

const services = [
  {
    name: 'Braces',
    icon: <BracesIcon />,
    details:
      'Traditional braces are constructed to correct the alignment of your teeth using a framework of metal straightening wires and brackets.',
  },

  {
    name: 'Cosmetic Dentistry',
    icon: <Cosmetic_Dentistry_Icon />,
    details:
      'There are two parts to your Aesthetic Dental visit – examination and cleaning. Your exam will check for cavities, plaque, and tartar on your teeth.',
  },
  {
    name: 'Endodontics',
    icon: <Endodontics_Icon />,
    details:
      'A root canal procedure with an expert endodontist is needed to save a tooth damaged by severe decay or trauma. ',
  },
  {
    name: 'Orthodontist',
    icon: <Orthodontist_Icon />,
    details:
      'Our orthodontists handle the diagnosis, positioning of the jaw, and correction of misaligned teeth with devices such as braces and clear aligners. ',
  },
  {
    name: 'Clear Aligners',
    icon: <Clear_Aligners_Icon />,
    details:
      'Clear aligners are made from transparent materials that adjust your teeth without the “hardware” traditionally associated with braces.',
  },
  {
    name: 'Dental Bridges',
    icon: <Dental_Bridges_Icon />,
    details:
      'A bridge is placed to correct teeth that sit on either side of a gap. A dental bridge can restore your smile, while also maintaining your face shape.',
  },
  {
    name: 'Dental Crowns',
    icon: <Dental_Crowns_Icon />,
    details:
      'A crown is a cap, for a damaged tooth. When created and placed correctly, crowns are unnoticeable from your other teeth.',
  },
  {
    name: 'Dental Exams And Check-Ups',
    icon: <Dental_Sealants_Icon />,
    details:
      'There are two parts to your Aesthetic Dental visit – examination and cleaning. Your exam will check for cavities, plaque, and tartar on your teeth.',
  },

  {
    name: 'All on X Dental Implants',
    icon: <All_on_X_Dental_Implants_Icon />,
    details:
      ' With All on X implants / dentures, patients can enjoy the full functionality and appearance of natural teeth.',
  },
  {
    name: 'Dental Implants',
    icon: <All_on_X_Dental_Implants_Icon />,
    details:
      ' Do you have a missing tooth? We understand how this can make you feel. We believe that everyone should be able to achieve their best smile.',
  },
  {
    name: 'Dental Sealants',
    icon: <Dental_Sealants_Icon />,
    details:
      'Sealants are a thin, protective coating that bonds to the surface of your teeth. When properly applied, sealants can help prevent cavities.',
  },
  {
    name: 'Dentures',
    icon: <DenturesIcon />,
    details:
      'Tooth loss is challenging on many levels. Not only can it affect what you eat and how you chew leading to more serious health concerns, but it can also make you feel embarrassed and uncomfortable.',
  },
  {
    name: 'Emergency Dentist',
    icon: <EmergencyDentistIcon />,
    details:
      'You never know when a dental emergency will happen. Thankfully, Aesthetic Dental is Islamabad’s most trusted Dental Emergency team. We have a team of dental experts to serve you.',
  },
  {
    name: 'Tooth Extraction',
    icon: <Tooth_Extraction_Icon />,
    details:
      'While many of us do our best to keep our teeth healthy, sometimes a tooth needs to be taken out to keep you healthy. In these cases, an extraction is necessary.',
  },
  {
    name: 'Fillings',
    icon: <Fillings_Icon />,
    details:
      'A toothache can disrupt your life. Tooth decay, cracked teeth, and cavities will provide a constant and painful reminder. At Aesthetic Dental we have completed thousands of fillings.',
  },
  {
    name: 'Root Canal Therapy',
    icon: <Root_Canal_Therapy_Icon />,
    details:
      'A Root canal is a treatment used to repair or save a tooth that is decayed or infected. Without proper treatment, the tissue surrounding the tooth may become infected and form painful abscesses.',
  },
  {
    name: 'Teeth Cleaning',
    icon: <Teeth_Cleaning_Icon />,
    details:
      'At Aesthetic Dental, we believe that getting your teeth cleaned every 6 months keep your teeth and gums as healthy as possible.',
  },
  {
    name: 'Teeth Whitening',
    icon: <Teeth_Whitening_Icon />,
    details:
      'Let our team help you determine what whitening process is right for you, based on the current color and condition of your teeth.',
  },
  {
    name: 'Veneers',
    icon: <Veneers_Icon />,
    details:
      'Our veneers are designed to look and fit naturally over your teeth. Remember, veneers are a permanent dental solution.',
  },
  {
    name: 'Periodontics',
    icon: <Periodontics_Icon />,
    details:
      'We specialize in a wide variety of procedures designed to maintain or improve your periodontal tissues. The periodontal (gum) tissues are an important part of your oral health. Our experience and expertise in periodontics allows us to provide high-quality treatments you cannot find anywhere else!',
  },
  {
    name: 'Pediatric Dentistry',
    icon: <Dental_Sealants_Icon />,
    details:
      'We provide comprehensive dental care so that children can stay in excellent oral health. With ongoing, regular appointments, we can identify and treat infections early so that your child can avoid feeling any discomfort or having premature tooth loss. As a kid’s dentist, we understand how important it is for your child to remain in good health and do our best to make that a reality. We specialize in providing complete oral rehabilitation under General Anesthesia.',
  },
]
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
            <span className=' '>Our Services</span>
          </div>
          <h1 className='text-white xl:text-[64px] text-3xl md:text-4xl font-extrabold'>
            Our Services
          </h1>
        </div>
      </div>
      <div className='rounded-tl-[8rem] relative bg-white'>
        <div className='max-w-5xl lg:max-w-7xl xl:max-w-6xl mx-auto 2xl:max-w-[80%] pt-20 px-[5vw] '>
          <div
            style={{ zIndex: '-1' }}
            className=' hidden xl:block bg-[#2b3340] absolute inset-0 z-0'
          />
          <div className='  '>
            <h3 className=' font-extrabold 2xl:text-[50px] lg:text-[36px] text-[25px] text-[#2B3340] xl:mb-10 mb-5'>
              Services
            </h3>
            <p className=' font-normal text-[16px] xl:text-[22px] text-[#2B3340]'>
              Offering general, cosmetic and orthodontic dentistry, Aesthetic
              Dental offers our patients exceptional dental care that is both
              convenient and affordable. We are Islamabad’s comprehensive dental
              solution.
            </p>
          </div>
          <div className='grid lg:grid-cols-2 grid-cols-1  mt-20  gap-5    '>
            {services.map(({ name, icon, details }, index) => (
              <div
                style={{
                  boxShadow: '0 0 15px #c6cfdc',
                }}
                key={index}
                className=' group  hover:border-[#17ada4] duration-500  border text-center md:text-start  text-[#2b3340] py-[18px] pr-[33px] pl-[18px] rounded-3xl '
              >
                <div className='py-[37px] flex flex-col md:flex-row md:mx-5 justify-center items-center'>
                  <div className='  w-20 h-20  mb-5 md:mb-0  md:flex text-[#C6CFDC] group-hover:text-[#17ada4] duration-500 '>
                    {icon}
                  </div>
                  <div>
                    <h1 className='group-hover:text-[#2b3340]  text-[#C6CFDC]  duration-500 text-base xl:text-xl font-bold mb-[15px] md:mb-2'>
                      {name}
                    </h1>
                    <p className=' text-base'>{details}</p>
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

export default ServicesPage
