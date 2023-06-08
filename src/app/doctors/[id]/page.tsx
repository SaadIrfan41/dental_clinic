import React from 'react'
import DocImage01 from '../../../../public/doctor1.png'
import DocImage02 from '../../../../public/doctor2.jpg'
import DocImage03 from '../../../../public/doctor3.png'
import DocImage04 from '../../../../public/doctor4.png'
import DocImage05 from '../../../../public/doctor5.jpg'
import Link from 'next/link'
import { ChevronRight } from '@/components/Icons/icon'
import Image, { StaticImageData } from 'next/image'
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }]
}
const doctors = [
  {
    id: '1',
    name: 'Prof. Adil Shahnawaz ',
    image: '/doctor1.png',
    details: `Prof. Adil Shahnawaz did his graduation from de’Montmorency College of Dentistry, Lahore in 2003. He cleared his Fellowship of College of Physicians & Surgeon Pakistan (FCPS) examination in 2011. After serving as Registrar and Assistant Professor in Islamabad Medical & Dental College (IM&DC) for five years he joined Abbottabad International Medical & Dental College in 2016 and still serving the institute as Head Department of Operative Dentistry and Vice Principal (Administration).
He has various research publications in International & National Journals. His expertise includes dental procedures including Root Canal Treatment, Fillings, Veneers, Crown & Bridge (Fixed Prosthesis) and Paediatric Dental Procedures. He also specializes in performing complete Paediatric Oral Rehabilitation under General Anaesthesia.
 Prof. Adil is associated with many Continuing Dental Education (CDE) programs that are run all over the country and has a vast experience of conducting hands on workshops related to endodontics and operative dentistry. He is course lead and facilitator at Academy of Continuing Health Education & Research (ACHER) where he is running a six-month long certification course in endodontics and restorative dentistry
`,
  },
  {
    id: '2',
    name: 'Prof. Amber Farooq ',
    image: '/doctor2.jpg',
    details: `Prof. Amber Farooq did her graduation from de’Montmorency College of Dentistry, Lahore. She completed her Fellowship in Orthodontics from College of Physicians and Surgeons in 2014. She is a Professor and Heads the Department of Orthodontics at Abbottabad International Medical and Dental College. She also holds the additional post of Vice principal (Clinical Sciences) of the College. Previously, she had worked with Agha Khan Health services for four years and was their head of dentistry as well as their Orthodontist for northern region.
She did her Certification in Health Professional Education from NUMS institute in 2020. She has a number of publications in renowned journals and has participated in numerous local and international workshops/conferences. She is also the reviewer for a number of journals. 
She specialises in treating adult patients with clear Aligners and ceramic braces. Her speciality has enabled her to master interceptive, adolescent, adult and surgical orthodontics.  She is trained in treating patients with congenital anomalies like cleft lip and palate and various syndromes. 
`,
  },
  {
    id: '3',
    name: 'Dr Muhammad Jamal ',
    image: '/doctor3.png',
    details: `Dr Muhammad Jamal graduated from Khyber college of Dentistry, Peshawar in 2007. He completed her Fellowship in Orthodontics from College of Physicians and Surgeons in 2014. He worked as Assistant Professor in Oral and Maxillofacial Surgery Department at Islamabad Medical & Dental College from January 2015 to January 2020 and got promoted to the post of Associate Professor. He is currently the head of maxillofacial unit and dental department of CDA hospital. He has fellowship of AOCMF from Germany.  He has also done certification in medical education from Riphah University, Rawalpindi and certification in health professional research from Khyber medical university. He is trained in performing Minor oral procedures like surgical extractions, wisdom teeth extraction and apicectomies. He is also trained to perform dental Implants, handle Maxillofacial trauma, Orthognathic surgery, Maxillofacial pathology and Oral cancer.`,
  },
  {
    id: '4',
    name: 'Dr. Nageen ',
    image: '/doctor4.png',
    details: `Dr. Nageen has been practicing general dentistry for over 4 years now and has been a part of our team for 2 years. She has immense passion for providing quality care especially to paediatric dentistry.
Performing all paediatric dental procedures chair side in a safe and comfortable environment for the child in need is her priority and is her strength.
Educating and promoting oral health is another thing she feel strongly about. She was also entrusted with teaching undergraduate dental students of IMDC for over 2 years therefore she's always happy to answer as many and all questions from her patients.
`,
  },
  {
    id: '5',
    name: 'Dr. Zuhair Mehdi ',
    image: '/doctor5.jpg',
    details: `Dr. Zuhair Mehdi completed his BDS degree from prestigious Fatima Jinnah Dental College Karachi in the 2011. He pursued postgraduate training and achieved the Membership in Oral Surgery from CPSP. He also has completed one year postgraduate diploma in the field of Medical Education from Shifa Tameer e Millat University Islamabad. He is serving as an Assistant Professor at FMDC Abbottabad.
With extensive experience in surgical procedures, Dr. Zuhair Mehdi has developed exceptional skills in performing complex oral surgeries. He specializes in dental implant procedures, helping patients restore their smiles and improve their oral health through the use of advanced implant technology.
He has done research work, with several publications in reputable dental journals.
`,
  },
]

const page = ({ params }: { params: { id: string } }) => {
  const id = params.id
  const doc = doctors.find((d) => d.id === id)

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
            <Link href='/doctors' className=' '>
              Our Team
            </Link>
          </div>
          <h1 className='text-white xl:text-[64px] text-3xl md:text-4xl font-extrabold'>
            {doc?.name}
          </h1>
        </div>
      </div>
      <div className='rounded-tl-[8rem] relative bg-white'>
        <div className='max-w-5xl lg:max-w-7xl xl:max-w-6xl mx-auto 2xl:max-w-[80%] pt-20 px-[5vw] '>
          <div
            style={{ zIndex: '-1' }}
            className=' hidden xl:block bg-[#2b3340] absolute inset-0 z-0'
          />
          <div className=' grid   grid-cols-1  '>
            <div className=' 2xl:text-[50px] lg:text-[36px] text-[25px] text-[#2B3340]   '>
              <div className='   gap-5   rounded-2xl  '>
                <div className=' relative  rounded-3xl '>
                  <img
                    // priority
                    // fill={true}
                    // placeholder='blur'
                    src={doc?.image}
                    className='  object-contain z-0  rounded-3xl mx-auto  max-h-[500px]'
                    alt='SideImage'
                  />
                </div>
              </div>
              <p className=' font-normal text-[16px] mt-10 xl:text-[22px] text-[#2B3340]'>
                {doc?.details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
