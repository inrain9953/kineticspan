import Image from 'next/image'
import { DISPLAY, RING_DARK, NAV_LINKS } from './UI'

/* Usage:  <Footer /> */
export default function Footer () {
  const links = [...NAV_LINKS, ['Contact Us', '/contact-us']]
  return (
    <footer className='bg-[#3e4c41] pb-9 pt-12 text-base text-[#d7e8ea]'>
      <div className='mx-auto max-w-[1120px] px-6'>
        <Image
          src='/kineticSpan.svg'
          alt='Kinetic Span Logo'
          width={100}
          height={100}
        />
        <a
          href='/'
          className={`${DISPLAY} text-[1.35rem] font-extrabold tracking-[-0.02em] text-white ${RING_DARK}`}
        >
          Kinetic Span
        </a>
        <div
          aria-label='Footer'
          className={`my-5 flex flex-wrap gap-x-6 gap-y-2 ${DISPLAY} font-medium`}
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`underline-offset-[5px] hover:underline ${RING_DARK}`}
            >
              {label}
            </a>
          ))}
        </div>
        <p className='mb-2'>
          Kinetic Span designs, builds and maintains rainwater harvesting
          systems for industry.
        </p>
        <p>© {new Date().getFullYear()} Kinetic Span. All rights reserved.</p>
      </div>
    </footer>
  )
}
