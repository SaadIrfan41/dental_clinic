'use client'
import React, { useEffect, useRef, useState } from 'react'
import { LogoSVG, PhoneSVG } from './Icons/icon'
import Link from 'next/link'
import Logo from '../../public/logo3.png'
import Logo2 from '../../public/logo.png'
import { Squash as Hamburger } from 'hamburger-react'
import Image from 'next/image'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 90) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    isOpen === false
      ? (document.body.style.overflow = 'auto')
      : (document.body.style.overflow = 'hidden')
  }, [isOpen])
  return (
    <header
      className={`fixed xl:pt-14 lg:px-28 px-[5vw] py-6 duration-500  w-full z-50 ${
        scrolled ? 'bg-white   shadow-md' : 'bg-transparent '
      }`}
    >
      <nav
        className={`flex  2xl:justify-center  w-full ${
          scrolled ? 'text-[#2B3240] gap-x-20  ' : 'text-white gap-x-10  '
        }`}
      >
        <Link
          href='/'
          style={scrolled ? {} : { filter: 'drop-shadow(0 0 15px #14181e)' }}
          className={` lg:max-w-[280px] max-w-[223px]  max-h-[70px] ${
            scrolled
              ? 'xl:-mt-10 -mt-5 -ml-12'
              : 'xl:-mt-10 -mt-5 mr-10 -ml-12 '
          } `}
        >
          <Image
            src={scrolled ? Logo2 : Logo}
            alt='Logo Image'
            className=' aspect-[5/2] object-contain '
          />
        </Link>
        <div className='2xl:flex gap-x-5  flex-grow items-baseline hidden'>
          <Link
            className=' py-2  text-[22px] px-2 font-medium'
            href='/services'
          >
            Services
          </Link>
          <Link
            className=' py-2  text-[22px] px-2  font-normal'
            href='/doctors'
          >
            Meet Your Doctors
          </Link>
          <Link
            className=' py-2  text-[22px] px-2  font-normal'
            href='/location'
          >
            Our Locations
          </Link>
          <span className=' text-[#fbaf43] py-2 flex items-center jus text-[22px] px-2  font-normal'>
            <span className=' flex items-center justify-center mr-1 rounded-full w-6 h-6 bg-[#fbaf43]'>
              {' '}
              <PhoneSVG />
            </span>
            Contact (+92) 327-2214444
          </span>
        </div>
        <div
          className='bg-[#2b3340] 2xl:hidden ml-auto   text-white rounded-xl py-[4px] px-[10px] '
          onClick={() => dialogRef.current?.showModal()}
        >
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>

        <dialog
          ref={dialogRef}
          onClick={(ev) => {
            const target = ev.target as HTMLDialogElement
            if (target.nodeName === 'DIALOG') {
              target.close()
              setIsOpen(false)
            }
          }}
          className=' right-auto min-h-screen w-0 transition-[width]
             duration-500 [&[open]]:opacity-100 lg:[&[open]]:w-[20vw] [&[open]]:w-[70vw] backdrop:backdrop-blur p-0   bg-white h-full bottom-0 block opacity-0 '
        >
          <nav className=' h-full w-full  px-[1vw] pt-10 flex flex-col'>
            <Link
              href='/'
              className={` lg:max-w-[280px] max-w-[223px]  max-h-[70px] ${
                scrolled
                  ? 'xl:-mt-10 -mt-5 -ml-12'
                  : 'xl:-mt-10 -mt-5 mr-10 -ml-12 '
              } `}
            >
              <Image
                src={Logo2}
                alt='Logo Image'
                className=' aspect-[5/2] object-contain '
              />
            </Link>
            <div className=' text-[#2b3340]  flex flex-col font-semibold mt-10 gap-5 divide-y '>
              <Link
                onClick={() => {
                  dialogRef.current?.close(), setIsOpen(false)
                }}
                className=' py-2  text-[24px] px-2 '
                href='/services'
              >
                Services
              </Link>
              <Link
                onClick={() => {
                  dialogRef.current?.close(), setIsOpen(false)
                }}
                className=' py-2  text-[24px] px-2 '
                href='/doctors'
              >
                Meet Your Doctors
              </Link>
              <Link
                onClick={() => {
                  dialogRef.current?.close(), setIsOpen(false)
                }}
                className=' py-2  text-[24px] px-2 '
                href='/location'
              >
                Our Locations
              </Link>
              <span className=' text-[#fbaf43] py-2 flex items-center text-[24px] '>
                <span className=' flex items-center justify-center mr-1 rounded-full w-7 h-7 bg-[#fbaf43]'>
                  {' '}
                  <PhoneSVG />
                </span>
                Contact
                <br />
                (+92) 327-2214444
              </span>
            </div>
          </nav>
        </dialog>
      </nav>
    </header>
  )
}

export default Navbar
