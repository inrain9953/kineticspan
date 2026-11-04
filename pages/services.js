import Sec from '../components/Attributes/Section'
import H2 from '../components/Attributes/H2'
import H3 from '../components/Attributes/H3'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { DISPLAY } from '@/components/UI'
import Image from 'next/image'
import Metatag from '@/components/Metatag'

const services = [
  {
    image: '/blog9.jpg',
    title: 'Rainwater Harvesting Systems',
    slug: 'rainwater-harvesting-systems',
    description:
      'Custom-designed systems built around your site, not a catalogue. We study your roof area, drainage, soil conditions and daily water use, then design the whole chain: catchment, filtration, storage and, where it makes sense, recharge. Every system is sized to what you’ll actually use, so you’re not paying for capacity that sits empty.'
  },
  {
    image: '/blog7.webp',
    title: 'Modular Rainwater Harvesting Systems',
    slug: 'modular-rwh-systems',
    description:
      'Prefabricated, scalable tanks and components that arrive ready to assemble. They suit plants that can’t afford long shutdowns, projects with tight timelines and businesses that expect to grow. Start with what you need today, then add modules later without digging everything up again.'
  },
  {
    image: '/blog5.jpg',
    title: 'Rainwater Harvesting Pits',
    slug: 'rwh-pits',
    description:
      'Recharge pits, soak pits and percolation systems that send excess rain down to the aquifer instead of out through the drain. They’re simple, long-lived and quietly effective, and they’re often the first thing a groundwater authority or auditor asks to see. Good design keeps them clear of silt for years.'
  },
  {
    image: '/blog3.jpg',
    title: 'Rainwater Harvesting Installation',
    slug: 'rwh-installation',
    description:
      'Our own crew handles the work from marking out to commissioning: pipework, first-flush diverters, filters, tank placement and testing. You deal with one accountable team, get a clear schedule, and receive a handover that includes training for the people who’ll look after the system.'
  },
  {
    image: '/blog4.jpg',
    title: 'Rainwater Harvesting Tanks',
    slug: 'rwh-tanks',
    description:
      'High-capacity storage in FRP, concrete or plastic, sized to your roof and your demand. We talk through the trade-offs honestly: cost, lifespan, footprint, above ground or below. The aim is a tank that fits your site, rather than a site rearranged around a tank.'
  },
  {
    image: '/new-technology-based-rainwater.jpg',
    title: 'Rainwater Harvesting for Industries',
    slug: 'rainwater-harvesting-for-industries',
    description:
      'Not ready to build yet? Start with advice. We review how your site uses water, explain which regulations apply, and prepare a feasibility report or design brief you can take to your board, your auditor or even another contractor. We’d rather you decide with good information than rush.'
  }
]

const benefits = [
  {
    title: 'It lowers your water costs.',
    description:
      'Every litre you collect is one you don’t buy from a tanker, the municipal line or a borewell.'
  },
  {
    title: 'It eases the strain on groundwater.',
    description:
      'Recharge systems send surplus rain back into the aquifer that your site, and everyone around you, depends on.'
  },
  {
    title: 'It makes compliance simpler.',
    description:
      'A working system with proper records is a far easier answer for a regulator or auditor than a plan on paper.'
  },
  {
    title: 'It gives you something real to report.',
    description:
      'Litres collected and litres recharged are figures you can put in an ESG or CSR report and stand behind.'
  }
]

const process = [
  {
    title: 'Site survey.',
    description:
      'We visit, walk the roof, trace the drains and look at how your plant actually uses water. You get an honest estimate of what you can collect and what it’s worth to you.'
  },
  {
    title: 'Design.',
    description:
      'You receive a plan covering layout, capacity, materials, cost and expected savings. We explain it in plain language and revise it until it fits your budget and the way your operation runs.'
  },
  {
    title: 'Installation.',
    description:
      'Our crews and certified contractors build to spec, test every connection and plan the work around your production schedule, not against it.'
  },
  {
    title: 'Handover and support.',
    description:
      'Your team gets training and a simple maintenance checklist. After the system is running, we stay reachable for check-ups, cleaning and upgrades.'
  }
]

const faqs = [
  {
    question: 'I’m not sure which service I need. Where do I start?',
    answer:
      'Start with a conversation. Book a free consultation and we’ll look at your site, your water use and your goals, then point you to the service, or the mix of services, that makes sense. Some plants need the whole system, others only one piece. You don’t have to know the answer before you call.'
  },
  {
    question:
      'Do I have to take everything from you, or can I pick one service?',
    answer:
      'Pick what you need. Each service stands on its own, so you can hire us to install a design you already have, to supply tanks, or to run the whole project. If you start small and want more later, that’s fine too.'
  },
  {
    question: 'Will installation disrupt production?',
    answer:
      'We plan the work around your operations, not the other way round. Modular systems in particular are designed to go together quickly on site, which helps when downtime isn’t an option. We’ll talk through the schedule with you before anything starts.'
  },
  {
    question: 'Should my tank go underground or above ground?',
    answer:
      'It depends on available space, soil conditions, budget and how the water will be used. Underground tanks free up floor area, while above-ground tanks are usually easier to inspect. Our tank page walks through the trade-offs, and we’ll help you decide during the survey.'
  },
  {
    question: 'Can the system grow with my plant?',
    answer:
      'Often, yes. Modular systems are built to be scalable, so you can add capacity as demand grows. With other designs, we’ll ask about your plans during the survey so we don’t design you into a corner.'
  }
]

const P = 'mb-4 max-w-[62ch]'

const ServicesPage = () => {
  const data = {
    title: 'Our Rainwater Harvesting Services | Kinetic Span',
    desc: 'Looking for reliable Rainwater Harvesting Services in India? Kinetic Span provide efficient solutions for sustainable water management in India',
    keyword:
      'Our Rainwater Harvesting Services, Rainwater Harvesting System, Modular Rainwater Harvesting, Rainwater Harvesting Tank, Polymer Type Rainwater Harvesting System, Storm water Management',
    canonical: 'https://www.kineticspan.com/services',
    ogTitle: 'Our Rainwater Harvesting Services | Kinetic Span',
    ogDescription:
      'Looking for a reliable Rainwater Harvesting Services in India? Kinetic Span provide efficient solutions for sustainable water management in India',
    ogUrl: 'https://www.kineticspan.com/services',
    twittertitle: 'Our Rainwater Harvesting Services | Kinetic Span',
    twitterdescription:
      'Looking for a reliable Rainwater Harvesting Services in India? Kinetic Span provide efficient solutions for sustainable water management in India'
  }
  return (
    <>
      <Metatag data={data} />
      <Navbar />
      <div className="bg-[#F8FBFA] font-['Source_Serif_4',Georgia,serif] text-lg leading-[1.7] text-[#10303A]">
        <main>
          {/* =================================
          HERO / INTRODUCTION
      ================================== */}
          <Sec
            id='services-hero'
            bg='bg-[#F5F8F8]'
            pad='pb-16 pt-30 md:pb-[88px]'
          >
            <div className='max-w-4xl'>
              <div className='mb-7 flex items-center gap-3'>
                <span className='h-px w-10 bg-[#1E8A95]' />
                <span className='text-xs font-semibold uppercase tracking-[0.2em] text-[#1E8A95]'>
                  What We Do
                </span>
              </div>

              <h1
                className={`${DISPLAY} text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-5xl`}
              >
                Our Rainwater Harvesting Services
              </h1>

              <p className={`mt-8 max-w-3xl text-base leading-8 ${P}`}>
                Every site we visit has a different roof, a different drainage
                layout and a different relationship with water. Some plants need
                a complete system designed from scratch. Others already have a
                plan and need a crew who can build it properly. Some just want
                someone to tell them honestly what’s possible.
              </p>

              <p className={`mt-5 max-w-3xl text-base leading-8 ${P}`}>
                That’s why our work is split into seven services, and why you
                can take one on its own or combine several. This page is a quick
                map of them. Each service has its own page with the full detail,
                so here we’ve kept it short: what it is, who it suits and where
                to read more.
              </p>

              <div className='mt-10 flex flex-wrap items-center gap-4'>
                <a
                  href='#service-offerings'
                  className='inline-flex items-center gap-3 rounded-full bg-[#0B3C4A] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1E8A95]'
                >
                  Explore our services
                  <span aria-hidden='true'>↓</span>
                </a>

                <a
                  href='/contact-us'
                  className='inline-flex items-center gap-2 px-5 py-4 text-sm font-semibold text-[#0B3C4A] transition-colors hover:text-[#1E8A95]'
                >
                  Talk to our team
                  <span aria-hidden='true'>↗</span>
                </a>
              </div>
            </div>
          </Sec>

          {/* =================================
          SERVICE OFFERINGS
      ================================== */}
          <Sec id='service-offerings' bg='bg-white'>
            <div className='mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end'>
              <div>
                <div className='mb-5 flex items-center gap-3'>
                  <span className='h-px w-10 bg-[#1E8A95]' />
                  <span className='text-xs font-semibold uppercase tracking-[0.2em] text-[#1E8A95]'>
                    What We Offer
                  </span>
                </div>

                <H2>Service Offerings</H2>
              </div>

              <p className='max-w-sm text-sm leading-7 text-slate-500'>
                Seven ways to make better use of the water your site already
                receives.
              </p>
            </div>

            <div className='border-t border-[#C5D6D6]'>
              {services.map(({ image, title, slug, description }, i) => (
                <div
                  key={slug}
                  className='group relative grid gap-5 border-b border-[#C5D6D6] py-9 transition-colors duration-300 hover:bg-[#F8FAFA] sm:px-5 lg:grid-cols-[65px_0.9fr_1.2fr] lg:gap-10 lg:py-11'
                >
                  {/* Number */}
                  <div className='flex items-start'>
                    <span className='text-sm font-semibold tabular-nums text-[#1E8A95]'>
                      / {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <H3>
                      <a
                        href={`/${slug}`}
                        className='transition-colors duration-300 group-hover:text-[#1E8A95]'
                      >
                        {title}
                      </a>
                    </H3>
                    <Image
                      src={image}
                      alt={title}
                      width={300}
                      height={200}
                      className='rounded-2xl object-cover'
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <p className={`max-w-2xl leading-8 ${P}`}>{description}</p>

                    <a
                      href={`/${slug}`}
                      className='mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[#0B3C4A] transition-colors hover:text-[#1E8A95]'
                    >
                      Learn more
                      <span className='flex h-8 w-8 items-center justify-center rounded-full border border-[#C5D6D6] transition-all duration-300 group-hover:border-[#1E8A95] group-hover:bg-[#1E8A95] group-hover:text-white'>
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
          </Sec>

          {/* =================================
          WHY HARVEST RAINWATER
      ================================== */}
          <Sec id='why-harvest-rainwater' bg='bg-[#F5F8F8]'>
            <div>
              <Image
                src='/save-env.webp'
                alt='Rainwater harvesting infrastructure'
                width={1200}
                height={600}
                className='mx-auto rounded-2xl object-cover'
              />
            </div>
            <div className='grid gap-14 mt-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20'>
              {/* Left: Introduction + Calculation */}
              <div>
                <div className='mb-6 flex items-center gap-3'>
                  <span className='h-px w-10 bg-[#1E8A95]' />
                  <span className='text-xs font-semibold uppercase tracking-[0.2em] text-[#1E8A95]'>
                    The Value Of Rain
                  </span>
                </div>

                <H2>Why Harvest Rainwater</H2>

                <p className={`mt-7 leading-8 ${P}`}>
                  Because the numbers are hard to argue with. Picture a 2,000
                  square metre warehouse roof in a place that gets 800 mm of
                  rain a year. One millimetre of rain on one square metre is one
                  litre, and a well-kept catchment holds on to roughly 80% of
                  it. That works out to around 12.8 lakh litres a year, falling
                  on a roof you already own. It’s a rough sum, not a promise,
                  but it shows why the conversation is worth having.
                </p>

                {/* Calculation Highlight */}
                <div className='mt-9 overflow-hidden rounded-2xl bg-[#0B3C4A] p-7 text-white sm:p-9'>
                  <span className='text-xs font-semibold uppercase tracking-[0.18em] text-[#75C8C8]'>
                    Annual Rainwater Potential
                  </span>

                  <div className='mt-5'>
                    <span className='text-5xl font-bold tracking-tight sm:text-6xl'>
                      12.8
                    </span>
                    <span className='ml-3 text-xl font-medium text-white/75'>
                      Lakh Litres
                    </span>
                  </div>

                  <div className='my-7 h-px bg-white/15' />

                  <div className='grid grid-cols-2 gap-5'>
                    <div>
                      <span className='block text-2xl font-semibold'>
                        2,000
                      </span>
                      <span className='mt-1 block text-xs text-white/55'>
                        Square metre roof
                      </span>
                    </div>

                    <div>
                      <span className='block text-2xl font-semibold'>
                        800 mm
                      </span>
                      <span className='mt-1 block text-xs text-white/55'>
                        Annual rainfall
                      </span>
                    </div>

                    <div>
                      <span className='block text-2xl font-semibold'>80%</span>
                      <span className='mt-1 block text-xs text-white/55'>
                        Catchment efficiency
                      </span>
                    </div>

                    <div>
                      <span className='block text-2xl font-semibold'>
                        1 Year
                      </span>
                      <span className='mt-1 block text-xs text-white/55'>
                        Estimated collection
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Benefits */}
              <div className='lg:pt-16'>
                <div className='border-t border-[#C5D6D6]'>
                  {benefits.map(({ title, description }, i) => (
                    <div
                      key={title}
                      className='group grid grid-cols-[45px_1fr] gap-5 border-b border-[#C5D6D6] py-8 sm:grid-cols-[60px_1fr] sm:gap-7'
                    >
                      <span className='pt-1 text-sm font-semibold text-[#1E8A95]'>
                        0{i + 1}
                      </span>

                      <div>
                        <H3>{title}</H3>

                        <p className={`mt-3 leading-8 ${P}`}>{description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className='mt-8 border-l-2 border-[#1E8A95] pl-6 text-lg font-medium leading-8 text-[#0B3C4A]'>
                  And on a practical level, it means more water on hand when
                  supply tightens.
                </p>
              </div>
            </div>
          </Sec>

          {/* =================================
          HOW IT WORKS
      ================================== */}
          <Sec id='how-it-works' bg='bg-white'>
            <div className='mb-16 max-w-2xl'>
              <div className='mb-5 flex items-center gap-3'>
                <span className='h-px w-10 bg-[#1E8A95]' />
                <span className='text-xs font-semibold uppercase tracking-[0.2em] text-[#1E8A95]'>
                  From Planning To Performance
                </span>
              </div>

              <H2>How It Works</H2>

              <p className={`mt-6 leading-8 ${P}`}>
                Whichever service you start with, the path looks much the same.
              </p>
            </div>

            {/* Desktop Timeline */}
            <div className='relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
              {/* Timeline line */}
              <div className='absolute left-0 right-0 top-5 hidden h-px bg-[#C5D6D6] lg:block' />

              {process.map(({ title, description }, i) => (
                <div key={title} className='relative'>
                  <div className='relative z-10 mb-8 flex h-11 w-11 items-center justify-center rounded-full border border-[#1E8A95] bg-white text-sm font-semibold text-[#1E8A95] transition-all duration-300 hover:bg-[#1E8A95] hover:text-white'>
                    0{i + 1}
                  </div>

                  <H3>{title}</H3>

                  <p className={`mt-4 leading-8 ${P}`}>{description}</p>
                </div>
              ))}
            </div>
          </Sec>

          {/* =================================
          FAQs
      ================================== */}
          <Sec id='faqs' bg='bg-[#F5F8F8]'>
            <div className='grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20'>
              {/* FAQ Heading */}
              <div className='lg:sticky lg:top-28 lg:h-fit'>
                <div className='mb-6 flex items-center gap-3'>
                  <span className='h-px w-10 bg-[#1E8A95]' />
                  <span className='text-xs font-semibold uppercase tracking-[0.2em] text-[#1E8A95]'>
                    Need To Know
                  </span>
                </div>

                <H2>Frequently Asked Questions</H2>
              </div>

              {/* Accordion */}
              <div className='border-t border-[#C5D6D6]'>
                {faqs.map(({ question, answer }, i) => (
                  <details
                    key={question}
                    className='group border-b border-[#C5D6D6]'
                  >
                    <summary className='flex cursor-pointer list-none items-center justify-between gap-6 py-7 [&::-webkit-details-marker]:hidden'>
                      <div className='flex items-start gap-5'>
                        <span className='mt-1 text-xs font-semibold text-[#1E8A95]'>
                          0{i + 1}
                        </span>

                        <span className='text-base font-semibold leading-7 text-[#0B3C4A] transition-colors group-hover:text-[#1E8A95]'>
                          {question}
                        </span>
                      </div>

                      <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C5D6D6] text-[#0B3C4A] transition-all duration-300 group-open:rotate-45 group-open:border-[#1E8A95] group-open:bg-[#1E8A95] group-open:text-white'>
                        <svg
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='1.8'
                          className='h-4 w-4'
                        >
                          <path d='M12 5v14M5 12h14' />
                        </svg>
                      </span>
                    </summary>

                    <div className='pb-8 pl-9 sm:pl-10'>
                      <p className={`max-w-3xl leading-8 ${P}`}>{answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </Sec>

          {/* =================================
          CASE STUDIES
      ================================== */}
          <Sec id='case-studies' bg='bg-[#0B3C4A]'>
            <div className='grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20'>
              <div>
                <div className='mb-6 flex items-center gap-3'>
                  <span className='h-px w-10 bg-[#75C8C8]' />
                  <span className='text-xs font-semibold uppercase tracking-[0.2em] text-[#75C8C8]'>
                    Work That Speaks
                  </span>
                </div>

                <H2>
                  <span className='text-white'>Case Studies</span>
                </H2>

                <p className='mt-7 max-w-2xl text-base leading-8 text-white/70'>
                  Numbers on a page only tell you so much, so we’d rather show
                  you real projects: the site, the problem, what we built and
                  how it’s performing. Our case studies follow a project from
                  first survey to first harvest, so you can judge the work for
                  yourself.
                </p>
              </div>

              {/* Visual / CTA */}
              <div className='relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-8 sm:p-10'>
                <div className='mb-10 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1E8A95] text-white'>
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.6'
                    className='h-7 w-7'
                  >
                    <path d='M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6M9 10h.01M15 10h.01' />
                  </svg>
                </div>

                <p className='text-xl font-semibold leading-8 text-white'>
                  Real projects. Practical solutions. Measurable results.
                </p>
              </div>
            </div>
          </Sec>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default ServicesPage
