import { useEffect } from 'react'

/* Shared bits used by Navbar, Footer and every page. Keep this file inside your Tailwind `content` paths. */

export const DISPLAY =
  "font-['Bricolage_Grotesque','Helvetica_Neue',Arial,sans-serif]"
export const RING =
  'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[#1E8A95]'
export const RING_DARK =
  'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[#9ADADC]'

export const NAV_LINKS = [
  ['Home', '/'],
  ['About Us', '/about-us'],
  ['Services', '/services'],
]

export const Btn = ({ href, variant = 'signal', children }) => {
  const v = {
    signal: 'border-[#F2B632] bg-[#F2B632] text-[#10303A] hover:bg-[#ffc94d]',
    ghost: 'border-current bg-transparent hover:bg-[#10303A]/10',
    dark: 'border-[#10303A] bg-[#10303A] text-white hover:bg-[#1b4452]'
  }[variant]
  return (
    <a
      href={href}
      className={`inline-block rounded-md border-2 px-[12px] py-1.5 ${DISPLAY} font-bold transition-colors motion-reduce:transition-none ${RING} ${v}`}
    >
      {children}
    </a>
  )
}

/* Loads the two brand fonts once. Navbar calls it, so every page that has a Navbar gets the fonts. */
export function useBrandFonts () {
  useEffect(() => {
    if (document.getElementById('ks-fonts')) return
    const l = document.createElement('link')
    l.id = 'ks-fonts'
    l.rel = 'stylesheet'
    l.href =
      'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap'
    document.head.appendChild(l)
  }, [])
}
