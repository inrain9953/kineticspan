import { useState } from 'react'
import Image from 'next/image'

/*
  Usage:  <Navbar active='/services' />
  active – href of the current page; its link is bolded and underlined.
*/

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services' }
]

const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E8A95]'

export default function Navbar () {
  const [open, setOpen] = useState(false)

  return (
    <header className='fixed w-full top-5 z-50 p-2 *:backdrop-blur-sm'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-2 rounded-full bg-amber-50/50'>
        <a
          href='/'
          className={`flex items-center gap-1 text-xl font-extrabold text-[#10303A] ${focus}`}
        >
          <Image alt='Kinetic Span' width='50' height='50' src='/kineticSpan.svg' />
          Kinetic Span
        </a>

        {/* Desktop */}
        <nav aria-label='Main' className='hidden items-center gap-8 md:flex'>
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`font-medium text-[#10303A] hover:text-green-500 ${focus}`}
            >
              {label}
            </a>
          ))}
          <a
            href='/contact-us'
            className={`rounded-md border-2 border-[#F2B632] bg-[#F2B632] px-[10px] py-1 text-[#10303A] font-bold hover:bg-[#ffc94d] ${focus}`}
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type='button'
          aria-label='Toggle menu'
          aria-expanded={open}
          aria-controls='mobile-menu'
          onClick={() => setOpen(!open)}
          className={`rounded-md p-2 text-[#10303A] md:hidden ${focus}`}
        >
          <svg
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        id='mobile-menu'
        aria-label='Mobile'
        className={`${
          open ? 'flex' : 'hidden'
        } flex-col gap-1 border-t border-slate-200 px-6 pb-5 pt-2 m-3 rounded-2xl md:hidden`}
      >
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={`block rounded-md px-3 py-2 text-base font-medium text-[#10303A] hover:bg-[#10303A]/10 ${focus}`}
          >
            {label}
          </a>
        ))}
        <a
          href='/contact-us'
          className={`mt-2 block rounded-md border-2 border-[#F2B632] bg-[#F2B632] px-[12px] py-1.5 text-center text-[#10303A] font-bold hover:bg-[#ffc94d] ${focus}`}
        >
          Contact Us
        </a>
      </nav>
    </header>
  )
}
