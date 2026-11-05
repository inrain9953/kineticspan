import { useState } from 'react'
import Navbar from './../components/Navbar'
import Footer from './../components/Footer'
import { DISPLAY, RING, RING_DARK, Btn } from './../components/UI'
import Sec from './../components/Attributes/Section'
import H2 from './../components/Attributes/H2'
import H3 from './../components/Attributes/H3'
import Image from 'next/image'
import Metatag from '@/components/Metatag'
/*
  Kinetic Span – Home page, styled with Tailwind CSS (v3.4+ or v4).
  No config changes needed: brand colours and fonts use arbitrary values.
  Palette: mist #E6EFEE, paper #F8FBFA, ink #10303A, deep #0B3C4A, water #1E8A95, pool #9ADADC, signal #F2B632.
*/

const P = 'mb-4 max-w-[62ch]'

const why = [
  [
    'Pay less for water',
    'Every litre you collect is a litre you don’t buy from a tanker, the municipal line or a borewell that’s running a little lower each year. Harvested rainwater suits cooling towers, washing, flushing, gardening and plenty of process uses, so the saving lands on your monthly bill instead of staying a nice idea in a brochure. And because the rain falls on a roof you already own, there’s no land to buy and no new connection to negotiate.'
  ],
  [
    'Stay on the right side of the rules',
    'Groundwater recharge conditions, environmental clearances and audit questions are far easier to handle when the system is already built, documented and working. We design to the norms that apply to your site and hand you the records to prove it, so an inspection becomes a short conversation instead of a scramble. That matters most when approvals, expansions or lender reviews are on the horizon.'
  ],
  [
    'Give your sustainability report something real to say',
    'Rainwater harvesting is measurable: litres collected, litres recharged, municipal water you didn’t need to draw. Those figures support ESG and CSR commitments and count towards green building ratings, and they hold up when a customer, investor or auditor asks for evidence rather than intentions. Fewer slides about aspirations, more numbers you can point to.'
  ],
  [
    'Keep water on hand when it’s scarce',
    'A few heavy weeks of monsoon can fill storage that carries you through months of dry weather, while recharge pits top up the aquifer your borewell depends on. It won’t replace every source, but it makes your plant far less exposed when supply tightens or prices jump. Think of it as insurance that also happens to pay you back.'
  ]
]

const services = [
  [
    '/blog9.jpg',
    'Rainwater Harvesting Systems',
    'rainwater-harvesting-systems',
    'Custom-designed systems built around your site, not a catalogue. We study your roof area, drainage, soil conditions and daily water use, then design the whole chain: catchment, filtration, storage and, where it makes sense, recharge. Every system is sized to what you’ll actually use, so you’re not paying for capacity that sits empty.'
  ],
  [
    '/blog7.webp',
    'Modular Rainwater Harvesting Systems',
    'modular-rwh-systems',
    'Prefabricated, scalable tanks and components that arrive ready to assemble. They suit plants that can’t afford long shutdowns, projects with tight timelines and businesses that expect to grow. Start with what you need today, then add modules later without digging everything up again.'
  ],
  [
    '/blog5.jpg',
    'Rainwater Harvesting Pits',
    'rwh-pits',
    'Recharge pits, soak pits and percolation systems that send excess rain down to the aquifer instead of out through the drain. They’re simple, long-lived and quietly effective, and they’re often the first thing a groundwater authority or auditor asks to see. Good design keeps them clear of silt for years.'
  ],
  [
    '/blog3.jpg',
    'Rainwater Harvesting Installation',
    'rwh-installation',
    'Our own crew handles the work from marking out to commissioning: pipework, first-flush diverters, filters, tank placement and testing. You deal with one accountable team, get a clear schedule, and receive a handover that includes training for the people who’ll look after the system.'
  ],
  [
    '/blog4.jpg',
    'Rainwater Harvesting Tanks',
    'rwh-tanks',
    'High-capacity storage in FRP, concrete or plastic, sized to your roof and your demand. We talk through the trade-offs honestly: cost, lifespan, footprint, above ground or below. The aim is a tank that fits your site, rather than a site rearranged around a tank.'
  ],
  [
    '/new-technology-based-rainwater.jpg',
    'Rainwater Harvesting for Industries',
    'rainwater-harvesting-for-industries',
    'Not ready to build yet? Start with advice. We review how your site uses water, explain which regulations apply, and prepare a feasibility report or design brief you can take to your board, your auditor or even another contractor. We’d rather you decide with good information than rush.'
  ]
]

const steps = [
  [
    'We visit your site',
    'We visit the site to measure your roof area, trace the drains. From that free audit, we estimate how much you can realistically collect and what it’s worth to you.'
  ],
  [
    'We design the system',
    'You get a clear plan covering layout, capacity, materials, cost and expected savings. We explain every choice in plain language, and we revise until it fits both your budget and the way your operation runs.'
  ],
  [
    'We build and install',
    'Our team fits the system with as little disruption as possible, tests every connection, and stays until water moves the way the design said it would. Production keeps running; we work around it.'
  ],
  [
    'We stay in touch',
    'Handover comes with training and a simple maintenance checklist. When the first monsoon arrives we’ll want to know how it performed, and you can call us for seasonal check-ups, cleaning or upgrades as your site grows.'
  ]
]

const benefits = [
  [
    'Lower water bills',
    'Rainwater offsets freshwater you’d otherwise buy or pump. The savings are steady, they grow when tanker and tariff rates rise, and they start the first time it rains after commissioning. Over time the system earns back what it cost, then keeps going.'
  ],
  [
    'Groundwater recharge',
    'A recharge pit or soak well sends excess rain down to the aquifer instead of out through the drain. It’s a simple, long-lived way to help the groundwater your borewell depends on, and it’s often the first thing a groundwater authority or auditor asks to see.'
  ],
  [
    'A brand that stands for something',
    'Customers, investors and employees increasingly care how a company treats shared resources. A harvesting system you can show them, with numbers behind it, is more convincing than any statement of intent.'
  ]
]

const faqs = [
  [
    'How much water can my plant collect?',
    'It depends on roof area, local rainfall and how well the catchment is set up. As a rule of thumb, every 100 square metres of roof in a place with 600 mm of annual rain can yield about 48,000 litres a year. The estimator at the top of this page does the same sum for your roof.'
  ],
  [
    'Is harvested rainwater safe to use?',
    'It isn’t for drinking unless it’s properly treated. For cooling, washing, cleaning, landscaping and many process uses, filtered rainwater works well. We match the treatment to what you plan to use it for, and nothing more.'
  ],
  [
    'How long does installation take?',
    'That depends on size and site conditions, so we won’t promise a number without seeing the site. Modular systems go in faster than cast-in-place ones, and we plan the work around your production schedule.'
  ],
  [
    'Do we need approvals?',
    'Often, in some form. Building and groundwater rules vary by city and state, and they change. Our consulting team will tell you what applies to your site and help prepare the documentation.'
  ],
  [
    'Does harvesting work in low-rainfall areas?',
    'Yes, though the system should be sized accordingly. In drier regions the rain comes in short bursts, so storage and recharge matter more than anything else. We’ll tell you plainly what to expect before you commit.'
  ],
  [
    'What maintenance does it need?',
    'Less than you’d think. Clean the filters and first-flush units before the monsoon, check gutters and pit inlets for debris, and inspect tanks once a year. We give you a checklist at handover and can service the system if you’d rather not.'
  ]
]

function Estimator () {
  const [area, setArea] = useState(5000)
  const [rain, setRain] = useState(600)
  const litres = Math.round(area * rain * 0.8)
  const fill = 14 + 86 * Math.sqrt(litres / 24000000)
  const fmt = n => n.toLocaleString('en-IN')
  const label = `mb-4 block ${DISPLAY} font-medium`
  const range = `mt-2 w-full accent-[#F2B632] ${RING_DARK}`
  return (
    <div
      role='group'
      aria-labelledby='est-title'
      className='rounded-2xl bg-[#0B3C4A] p-7 text-white'
    >
      <p
        id='est-title'
        className={`mb-5 ${DISPLAY} text-[1.4rem] font-bold leading-tight`}
      >
        How much could your roof catch?
      </p>
      <label className={label}>
        Roof area <b className='float-right text-[#F2B632]'>{fmt(area)} m²</b>
        <input
          className={range}
          type='range'
          min='500'
          max='20000'
          step='100'
          value={area}
          onChange={e => setArea(+e.target.value)}
        />
      </label>
      <label className={label}>
        Annual rainfall <b className='float-right text-[#F2B632]'>{rain} mm</b>
        <input
          className={range}
          type='range'
          min='200'
          max='1500'
          step='50'
          value={rain}
          onChange={e => setRain(+e.target.value)}
        />
      </label>
      <div className='mt-2 flex items-end gap-5'>
        <div
          aria-hidden='true'
          className='flex h-[150px] w-[84px] flex-none items-end overflow-hidden rounded-b-[18px] rounded-t-[10px] border-[3px] border-[#9ADADC]'
        >
          <div
            className='w-full border-t-2 border-[#9ADADC]/60 bg-[#1E8A95] transition-[height] duration-500 motion-reduce:transition-none'
            style={{ height: fill + '%' }}
          />
        </div>
        <p aria-live='polite' className='text-base'>
          <strong
            className={`block ${DISPLAY} text-[2.2rem] font-extrabold leading-none text-[#F2B632]`}
          >
            {fmt(litres)}
          </strong>
          litres a year
          <span className='mt-1.5 block text-[.95rem] text-[#9ADADC]'>
            about {fmt(Math.round(litres / 10000))} tanker loads of 10,000
            litres
          </span>
        </p>
      </div>
      <small className='mt-[18px] block text-sm leading-normal text-[#b9d3d6]'>
        A rough estimate that assumes about 80% of the rain is captured. Your
        audit uses local rainfall records and your actual roof.
      </small>
    </div>
  )
}

export default function Home () {
  const data = {
    title: 'Rainwater Harvesting System | Kinetic Span',
    desc: 'Find a Rainwater Harvesting System. We are the best Modular Rainwater Harvesting System Service Provider. Get & Install a Rainwater Harvesting System at the best price. ',
    keyword:
      'Rainwater Harvesting System, Modular Rainwater Harvesting, Rainwater Harvesting Tank, Polymer Type Rainwater Harvesting System, Storm water Management',
    canonical: 'https://www.kineticspan.com/',
    ogTitle: 'Rainwater Harvesting System | Kinetic Span',
    ogDescription:
      'Find a Rainwater Harvesting System. We are the best Modular Rainwater Harvesting System Service Provider. Get & Install a Rainwater Harvesting System at the best price.',
    ogUrl: 'https://www.kineticspan.com/',
    twittertitle: 'Rainwater Harvesting System | Kinetic Span',
    twitterdescription:
      'Find a Rainwater Harvesting System. We are the best Modular Rainwater Harvesting System Service Provider. Get & Install a Rainwater Harvesting System at the best price.'
  }
  return (
    <>
      <Metatag data={data} />
      <Navbar />
      <div className="bg-[#F8FBFA] font-['Source_Serif_4',Georgia,serif] text-lg leading-[1.7] text-[#10303A]">
        <main>
          <Sec bg='bg-[#E6EFEE]' pad='pb-16 pt-30'>
            <div className='grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]'>
              <div>
                <h1
                  className={`${DISPLAY} text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-5xl`}
                >
                  Rainwater Harvesting System
                </h1>
                <p className={`mb-2 mt-6 text-[1.10rem] ${P}`}>
                  A Rainwater Harvesting Company that provides smart rainwater
                  harvesting solutions for industrial and commercial buildings.
                  We design, build and maintain systems that catch, store and
                  put rainwater to work. This system is easy to maintain and
                  almost zero cost of maintenance. Your roof sheds thousands of
                  litres every monsoon. We help you catch it, store it and put
                  it to work, so your plant stops paying for water it could have
                  collected for free.
                </p>
                <div className='my-7 flex flex-wrap gap-3'>
                  <Btn href='/contact-us'>Request a free water audit</Btn>
                  <Btn href='#how' variant='ghost'>
                    See how it works
                  </Btn>
                </div>
                <p className='text-[.95rem] text-[#476670]'>
                  Free, no obligation. Built for factories, warehouses,
                  processing units, industrial parks and campuses.
                </p>
              </div>
              <Estimator />
            </div>
          </Sec>

          <Sec id='why'>
            <div>
              <Image
                src='/poster-2.webp'
                alt=''
                width={1200}
                height={600}
                className='rounded-2xl'
              />
            </div>
            <div className='grid gap-16 mt-5 lg:grid-cols-[0.85fr_1.4fr] lg:gap-24'>
              {/* Left: Sticky Introduction */}
              <div className='lg:sticky lg:top-28 lg:h-fit'>
                <div className='mb-7 flex items-center gap-3'>
                  <span className='h-px w-10 bg-[#1E8A95]' />
                  <span className='text-xs font-semibold uppercase tracking-[0.2em] text-[#1E8A95]'>
                    Why Kinetic Span
                  </span>
                </div>

                <H2>
                  Why Choose
                  <span className='block text-[#1E8A95]'>Kinetic Span</span>
                </H2>

                <p className={`mt-7 max-w-md text-base leading-8 ${P}`}>
                  Water is one of those costs that sneaks up on a plant. The
                  tanker bill, the borewell that goes a little deeper every
                  year, the audit that asks where your recharge plan is.
                  Rainwater harvesting answers all of it, and it starts with
                  something you already own: a roof.
                </p>

                <div className='mt-10 flex items-center gap-4'>
                  <div className='h-12 w-1 rounded-full bg-[#1E8A95]' />
                  <p className='max-w-[200px] text-sm font-medium leading-6 text-slate-500'>
                    Smarter water management. Sustainable industrial growth.
                  </p>
                </div>
              </div>

              {/* Right: Editorial Feature List */}
              <div className='border-t border-slate-200'>
                {why.map(([t, d], i) => (
                  <div
                    key={t}
                    className='group grid grid-cols-[55px_1fr] gap-5 border-b border-slate-200 py-9 transition-all duration-300 sm:grid-cols-[75px_1fr] sm:gap-8 sm:py-11'
                  >
                    {/* Number */}
                    <div className='pt-1'>
                      <span className='text-sm font-semibold tabular-nums text-[#1E8A95]'>
                        / {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Feature Content */}
                    <div>
                      <div className='flex items-start justify-between gap-4'>
                        <H3>{t}</H3>

                        <span className='mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-[#1E8A95] group-hover:bg-[#1E8A95] group-hover:text-white'>
                          <svg
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='1.8'
                            className='h-4 w-4 transition-transform duration-300 group-hover:rotate-45'
                          >
                            <path d='M7 17 17 7M7 7h10v10' />
                          </svg>
                        </span>
                      </div>

                      <p className={`mt-4 max-w-2xl leading-8 ${P}`}>{d}</p>

                      <div className='mt-6 h-px w-0 bg-[#1E8A95] transition-all duration-500 group-hover:w-16' />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Sec>

          <Sec id='services' bg='bg-white'>
            <div>
              <Image
                src='/save-env1.webp'
                alt=''
                width={1200}
                height={600}
                className='rounded-2xl'
              />
            </div>

            {/* Section Heading */}
            <div className='mb-16 mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end'>
              <div>
                <div className='mb-5 flex items-center gap-3'>
                  <span className='h-px w-10 bg-[#1E8A95]' />
                  <span className='text-xs font-semibold uppercase tracking-[0.2em] text-[#1E8A95]'>
                    What We Do
                  </span>
                </div>

                <H2>Our Core Services</H2>
              </div>

              <p className={`max-w-lg text-base leading-8 ${P}`}>
                One team for the whole job, from the first site visit to the
                last pipe fitting. Use what you need, skip what you don’t.
              </p>
            </div>

            {/* Services List */}
            <div className='border-t border-slate-200'>
              {services.map(([img, t, slug, d], i) => (
                <div
                  key={slug}
                  className='group relative grid gap-5 border-b border-slate-200 py-9 transition-all duration-300 lg:grid-cols-[100px_0.9fr_1.1fr] lg:gap-10 lg:py-12'
                >
                  {/* Number */}
                  <div className='flex items-start'>
                    <span className='text-sm font-semibold tabular-nums text-[#1E8A95]'>
                      0{i + 1}
                    </span>
                  </div>

                  {/* Service Title */}
                  <div>
                    <H3>
                      <a
                        href={'/' + slug}
                        className='transition-colors duration-300 group-hover:text-[#1E8A95]'
                      >
                        {t}
                      </a>
                    </H3>
                    <Image
                      src={img}
                      alt={t}
                      width={300}
                      height={100}
                      className='mt-4 rounded-lg object-cover'
                    />
                  </div>

                  {/* Description and CTA */}
                  <div>
                    <p className={`max-w-xl leading-8 ${P}`}>{d}</p>

                    <a
                      href={'/' + slug}
                      className={`mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[#0B3C4A] transition-colors duration-300 hover:text-[#1E8A95] ${RING}`}
                    >
                      Read more about {t}
                      <span className='flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover:border-[#1E8A95] group-hover:bg-[#1E8A95] group-hover:text-white'>
                        <svg
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='1.8'
                          className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                        >
                          <path d='M7 17 17 7M7 7h10v10' />
                        </svg>
                      </span>
                    </a>
                  </div>

                  {/* Hover Accent */}
                  <div className='absolute bottom-0 left-0 h-[2px] w-0 bg-[#1E8A95] transition-all duration-500 group-hover:w-full' />
                </div>
              ))}
            </div>

            {/* Closing Statement */}
            <div className='mt-14 grid gap-6 rounded-2xl bg-[#F1F7F7] p-7 sm:p-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-10'>
              <div className='flex h-14 w-14 items-center justify-center rounded-full bg-[#1E8A95]/10 text-[#1E8A95]'>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.6'
                  className='h-7 w-7'
                >
                  <path d='M3 20h18M5 20V9l7-5 7 5v11M9 20v-6h6v6M9 9h.01M15 9h.01' />
                </svg>
              </div>

              <p
                className={`${DISPLAY} max-w-4xl text-md font-medium leading-relaxed text-[#0B3C4A]`}
              >
                Most of our work is for factories, warehouses, food and textile
                units, industrial parks and large campuses, but any site with a
                large roof and a water bill is worth a look.
              </p>
            </div>
          </Sec>

          <Sec id='how' bg='bg-[#0B3C4A] text-white'>
            <H2>How It Works</H2>
            <p className={`mt-5 text-[#d7e8ea] ${P}`}>
              No mystery and no jargon. Here’s what working with us looks like.
            </p>
            <ol className='mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4'>
              {steps.map(([t, d], i) => (
                <li
                  key={t}
                  className='border-t-[3px] border-[#9ADADC] pt-[18px]'
                >
                  <span
                    className={`mb-3 block ${DISPLAY} text-[2.6rem] font-extrabold leading-none text-[#F2B632]`}
                  >
                    {i + 1}
                  </span>
                  <H3>{t}</H3>
                  <p className='max-w-[62ch] text-base text-[#d7e8ea]'>{d}</p>
                </li>
              ))}
            </ol>
          </Sec>

          <Sec>
            <div className='grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16'>
              <div>
                <H2>Straight talk before you spend a rupee</H2>
                <p className={`mt-5 ${P}`}>
                  Rainwater harvesting isn’t magic, and we’d rather say so up
                  front. In many regions the rain arrives in a few intense
                  months. Some plants have modest roofs and enormous water
                  demand. In those cases harvesting will cover part of your
                  needs, not all of them, and we’ll tell you which part.
                </p>
                <p className={P}>
                  What we won’t do is oversize a system to make the sale. A
                  system sized honestly fills up, gets used and pays for itself.
                  One that’s too big is an expensive monument to optimism.
                </p>
              </div>
              <div className='rounded-2xl bg-[#E6EFEE] p-7 lg:self-start'>
                <H3>A back-of-envelope example</H3>
                <p>
                  Take a factory roof of 5,000 square metres in a place that
                  gets 600 mm of rain a year. One millimetre of rain on one
                  square metre is one litre, and a well-kept catchment captures
                  roughly 80% of it. That’s about 24 lakh litres a year, or
                  around 240 tanker loads of 10,000 litres each. Your real
                  figure will differ, which is exactly why we start with an
                  audit.
                </p>
              </div>
            </div>
          </Sec>

          <Sec bg='bg-[#E6EFEE]'>
            <H2>What changes once it’s running</H2>
            <div className='mt-11 grid gap-9 md:grid-cols-3'>
              {benefits.map(([t, d]) => (
                <div key={t} className='border-t-4 border-[#1E8A95] pt-[18px]'>
                  <H3>{t}</H3>
                  <p className={P}>{d}</p>
                </div>
              ))}
            </div>
          </Sec>

          <Sec id='faqs' bg='bg-white' max='max-w-[908px]'>
            <H2 className='mb-8'>Questions we hear a lot</H2>
            {faqs.map(([q, a], i) => (
              <details
                key={q}
                className={`group border-t border-[#c5d6d6] py-[18px] ${
                  i === faqs.length - 1 ? 'border-b' : ''
                }`}
              >
                <summary
                  className={`flex cursor-pointer list-none justify-between gap-4 ${DISPLAY} text-xl font-semibold [&::-webkit-details-marker]:hidden ${RING}`}
                >
                  {q}
                  <span
                    aria-hidden='true'
                    className='text-2xl leading-none text-[#1E8A95]'
                  >
                    <span className='group-open:hidden'>+</span>
                    <span className='hidden group-open:inline'>−</span>
                  </span>
                </summary>
                <p className='mt-3 max-w-[62ch]'>{a}</p>
              </details>
            ))}
          </Sec>

          <Sec id='contact' bg='bg-[#F2B632]'>
            <H2 className='max-w-[20ch]'>
              Contact us and find out how can you get rid of water logging
            </H2>
            <p className={`mt-5 text-[1.2rem] ${P}`}>
              Book a free consultation and we’ll walk your site, run the numbers
              and tell you honestly whether rainwater harvesting makes sense for
              you. Prefer to read first? Download a case study and see how a
              project goes from first visit to first harvest.
            </p>
            <div className='mt-7 flex flex-wrap gap-3'>
              <Btn href='/contact-us' variant='dark'>
                Book a free consultation
              </Btn>
            </div>
          </Sec>
        </main>
      </div>
      <Footer />
    </>
  )
}
