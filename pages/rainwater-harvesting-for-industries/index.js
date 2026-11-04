import Footer from '@/components/Footer'
import Metatag from '@/components/Metatag'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const challenges = [
  {
    number: '01',
    title: 'Water scarcity',
    content:
      'Ask a plant manager about water and you’ll often get a sigh. Borewells that once gave a steady yield now give less, or run dry in summer. Tankers fill the gap at a price that moves with the season and the supplier. Every tanker is a cost, a scheduling headache and a risk to production if one doesn’t turn up on time.'
  },
  {
    number: '02',
    title: 'Regulatory pressure',
    content:
      'Authorities are paying closer attention to who takes water from the ground and what they put back. Groundwater extraction limits, recharge requirements from bodies like the CGWA and environmental clearances all push industry towards managing water more responsibly. Falling short can mean delays, penalties or trouble when you want to expand. It’s far easier to sort out before it becomes urgent than after.'
  },
  {
    number: '03',
    title: 'Corporate responsibility',
    content:
      'Investors, customers and lenders increasingly ask how a company handles water. ESG reports no longer get by on good intentions. They want figures you can stand behind: how much water you use, where it comes from and what you’re doing to reduce the strain on public supply. A harvesting system gives you real numbers to put in front of them.'
  }
]

const solutions = [
  {
    number: '01',
    title: 'Large-scale collection',
    content:
      'Factory roofs are some of the best catchments there are, and we put them to work. We channel runoff through engineered conveyance systems, with gutters, downpipes and drains sized for heavy monsoon downpours instead of a light shower. The aim is to get as much of the rain as possible to the next stage without overflows or leaks along the way.'
  },
  {
    number: '02',
    title: 'High-capacity filtration',
    content:
      'Roofs at industrial sites collect dust, grit and whatever else settles from the air around them. Before water reaches storage or a recharge structure, it passes through filtration built for that load. Clean water going in means less maintenance, longer equipment life and water that’s actually useful once you want to draw on it.'
  },
  {
    number: '03',
    title: 'Modular recharge units',
    content:
      'When there’s more rain than you can store, or when recharge is what the regulations call for, we build recharge wells, pits and other subsurface structures that let excess water soak into local aquifers quickly. They’re designed to your site’s soil and capacity, and they’re built so they don’t silt up in a couple of seasons.'
  },
  {
    number: '04',
    title: 'Storage reservoirs',
    content:
      'Where it makes sense, we add underground tanks and reservoirs to hold water for non-potable uses such as irrigation and cooling towers. Stored water also acts as a buffer. Instead of watching the monsoon run away and then scrambling in April, you’ve got something to draw from.'
  },
  {
    number: '05',
    title: 'Turnkey compliance',
    content:
      'Our designs follow the government guidelines that apply to your project, including CPWD and Smart City norms, and we help with the paperwork too. You get the documentation to show an auditor, an authority or a certification body, so you’re not rebuilding the paper trail after the fact.'
  }
]

const benefits = [
  {
    title: 'Less dependence on groundwater.',
    content:
      'Recharging the aquifer helps sustain well yields. You stop treating your borewell as a bottomless account and start putting something back.'
  },
  {
    title: 'Real cost savings.',
    content:
      'Every litre you collect is one you don’t buy. Lower tanker fees and less power spent on pumping both show up on the bill, and they keep showing up year after year.'
  },
  {
    title: 'Easier regulatory compliance.',
    content:
      'We design to the central and state water authority norms that apply to your site. A working system with proper documentation turns an awkward conversation with an authority into a short one.'
  },
  {
    title: 'Stronger ESG and green ratings.',
    content:
      'Harvesting gives you measurable figures for sustainability reporting, and it can contribute towards green building certifications such as IGBC and GRIHA. These numbers help in CSR reports, investor conversations and customer audits.'
  },
  {
    title: 'A dependable supply.',
    content:
      'Stored rainwater cushions you against dry spells and delivery problems. It won’t replace every source, but it makes production less hostage to the weather and the tanker schedule.'
  },
  {
    title: 'Better for the site and the surroundings.',
    content:
      'Capturing runoff reduces flooding on your own premises and sends more water into the ground, which improves local groundwater tables over time.'
  }
]

const industries = [
  {
    title: 'Manufacturing and engineering plants.',
    content:
      'Heavy industry needs a lot of process water, and big plants tend to have big roofs. It’s an obvious match.'
  },
  {
    title: 'Warehouses and logistics hubs.',
    content:
      'These sites often have enormous roof areas and relatively modest water demand, which makes them ideal for collection and recharge.'
  },
  {
    title: 'Food and beverage facilities.',
    content:
      'Hygiene comes first. We design storage and filtration with equipment washdown and cleaning in mind, so the water you reuse is fit for the job.'
  },
  {
    title: 'Chemical and pharmaceutical plants.',
    content:
      'Storage and safety requirements are stricter here, and any runoff that could be contaminated needs extra care. We design around your safety team’s requirements, not over them.'
  },
  {
    title: 'Textile and dyeing units.',
    content:
      'Few industries use water as heavily, so every litre reclaimed makes a noticeable difference.'
  },
  {
    title: 'Automotive and engineering units.',
    content:
      'Vehicle washing and cooling are good candidates for reusing harvested water.'
  },
  {
    title: 'Technology campuses.',
    content:
      'Corporate and IT parks often have green building goals, and harvesting fits naturally into the design from the start.'
  }
]

const faqs = [
  {
    question: 'Can a rainwater system handle polluted runoff?',
    answer:
      'Our systems are built around clean roof runoff. If roof runoff is contaminated, as it can be at chemical plants, we may need extra pre-treatment or a way to divert it so it doesn’t reach your storage tanks. We’ll look at this during the survey so there are no surprises later.'
  },
  {
    question: 'How do we know we’ll meet legal recharge requirements?',
    answer:
      'Our engineers calculate recharge pit and tank capacity from the relevant guidelines. We also carry out soil percolation tests, so recharge structures are sized to how your ground actually takes water, not to a textbook assumption.'
  },
  {
    question:
      'Does harvesting rain qualify for carbon or sustainability credits?',
    answer:
      'Rainwater harvesting contributes to sustainability goals, mainly by reducing your water footprint. Whether it earns specific credits depends on the certification body and its rules. What we can do is provide the documentation you’ll need for green building certifications.'
  },
  {
    question: 'Can we use harvested rainwater in our processes?',
    answer:
      'That depends on the process. Harvested rainwater is usually used for non-potable purposes such as cooling towers, washing, cleaning and irrigation. If you have a particular use in mind, tell us early, and we’ll match the filtration and storage to what it needs.'
  },
  {
    question: 'Can we add a system to a plant that’s already running?',
    answer:
      'Often, yes. We look at your roof, drainage and available space, and plan the work around your production schedule. Retrofits take a bit more thought than new builds, which is why the site survey matters so much.'
  }
]

const SectionHeading = ({ eyebrow, title, description, light = false }) => (
  <div className='max-w-3xl'>
    {eyebrow && (
      <p
        className={`mb-4 text-xs font-bold uppercase tracking-[0.2em] ${
          light ? 'text-teal-300' : 'text-[#1E8A95]'
        }`}
      >
        {eyebrow}
      </p>
    )}
    <h2
      className={`text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[46px] ${
        light ? 'text-white' : 'text-[#0B3C4A]'
      }`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`mt-5 text-base leading-8 ${
          light ? 'text-white/70' : 'text-slate-600'
        }`}
      >
        {description}
      </p>
    )}
  </div>
)

export default function RainwaterHarvestingIndustries () {
  const data = {
    title: 'Rainwater Harvesting for Industries | Kinetic Span',
    desc: 'Looking for reliable Rainwater Harvesting for Industries in India? We provide efficient solutions for sustainable water management and best in the industry.',
    keyword:
      'Rainwater Harvesting for Industries, Rainwater Harvesting System, Modular Rainwater Harvesting, Rainwater Harvesting Tank, Storm water Management',
    canonical:
      'https://www.kineticspan.com/rainwater-harvesting-for-industries',
    ogTitle: 'Rainwater Harvesting for Industries | Kinetic Span',
    ogDescription:
      'Looking for reliable Rainwater Harvesting for Industries in India? We provide efficient solutions for sustainable water management and best in the industry.',
    ogUrl: 'https://www.kineticspan.com/rainwater-harvesting-for-industries',
    twittertitle: 'Rainwater Harvesting for Industries | Kinetic Span',
    twitterdescription:
      'Looking for reliable Rainwater Harvesting for Industries in India? We provide efficient solutions for sustainable water management and best in the industry.'
  }
  return (
    <>
      <Metatag data={data} />
      <Navbar />
      <div className="bg-[#F8FBFA] font-['Source_Serif_4',Georgia,serif] text-lg leading-[1.7] text-[#10303A]">
        <main className='overflow-hidden bg-white text-[#183B43]'>
          {/* HERO / OVERVIEW */}
          <section className='relative overflow-hidden pt-10'>
            <div className='absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#1E8A95]/10' />
            <div className='absolute -right-20 -top-20 h-[340px] w-[340px] rounded-full border border-[#1E8A95]/10' />

            <div className='relative mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28'>
              <div>
                <p className='mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#1E8A95]'>
                  <span className='h-px w-9 bg-[#1E8A95]' />
                  Kinetic Span
                </p>

                <h1 className='max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight text-[#0B3C4A] sm:text-5xl lg:text-[64px]'>
                  Rainwater Harvesting for Industries
                </h1>

                <div className='mt-8 max-w-2xl space-y-5 text-base leading-8 text-slate-600'>
                  <p>
                    A factory uses water the way it uses power: constantly, and
                    mostly out of sight. Cooling towers, equipment washdown,
                    floor cleaning, process lines, landscaping and the canteen
                    all draw on the same supply. When that supply gets tight,
                    the whole plant feels it.
                  </p>
                  <p>
                    For a lot of industrial sites, that squeeze is already here.
                    Borewells yield less than they used to. Tanker bills climb.
                    Groundwater rules get stricter. In those conditions,
                    harvesting rainwater stops being a nice extra and becomes a
                    sensible part of running the plant.
                  </p>
                  <p>
                    Kinetic Span designs high-capacity rainwater harvesting
                    systems for factories, warehouses and industrial parks. The
                    idea is simple. Your buildings have enormous roofs, and
                    every monsoon those roofs shed more rainwater than most
                    people expect. We catch it, clean it, and either store it
                    for reuse or send it back into the ground. How we do that
                    depends on your site, and the sections below explain how.
                  </p>
                </div>

                <div className='mt-9 flex flex-wrap gap-4'>
                  <Link
                    href='/contact-us'
                    className='inline-flex items-center justify-center rounded-full bg-[#0B3C4A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#145767]'
                  >
                    Contact Us
                    <span className='ml-3' aria-hidden='true'>
                      ↗
                    </span>
                  </Link>
                  <Link
                    href='/services'
                    className='inline-flex items-center justify-center rounded-full border border-[#0B3C4A]/20 px-7 py-3.5 text-sm font-semibold text-[#0B3C4A] transition hover:border-[#0B3C4A] hover:bg-white'
                  >
                    Services Overview
                  </Link>
                </div>
              </div>

              <div className='relative'>
                <div className='relative aspect-[4/4.2] overflow-hidden rounded-[2rem] bg-[#0B3C4A]'>
                  <Image
                    src='/new-technology-based-rainwater.jpg'
                    alt='Industrial rainwater harvesting system'
                    className='h-full w-full object-cover opacity-80'
                    width={500}
                    height={500}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#082D38]/90 via-transparent to-transparent' />
                  <div className='absolute bottom-0 left-0 right-0 p-7 sm:p-9'>
                    <div className='mb-3 h-1 w-12 rounded-full bg-[#65C2C0]' />
                    <p className='max-w-sm text-2xl font-semibold leading-snug text-white sm:text-3xl'>
                      Every roof is an opportunity to capture water.
                    </p>
                  </div>
                </div>
                <div className='absolute -bottom-5 -right-5 hidden h-28 w-28 rounded-2xl border border-[#1E8A95]/30 bg-[#F2F7F6] lg:block' />
              </div>
            </div>
          </section>

          {/* INDUSTRY CHALLENGES */}
          <section className='mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-12'>
            <SectionHeading
              eyebrow='The reality for industry'
              title='Industry Challenges'
            />

            <div className='mt-12 grid gap-5 md:grid-cols-3'>
              {challenges.map(item => (
                <article
                  key={item.number}
                  className='group rounded-2xl border border-[#DCE7E6] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#1E8A95]/50 hover:shadow-[0_18px_45px_rgba(11,60,74,0.08)] sm:p-8'
                >
                  <span className='text-sm font-semibold tracking-widest text-[#1E8A95]'>
                    {item.number}
                  </span>
                  <div className='my-6 h-px w-full bg-[#DCE7E6] transition group-hover:bg-[#1E8A95]/40' />
                  <h3 className='text-xl font-semibold text-[#0B3C4A]'>
                    {item.title}
                  </h3>
                  <p className='mt-4 text-sm leading-7 text-slate-600'>
                    {item.content}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* INDUSTRIAL SOLUTIONS */}
          <section className='bg-[#F4F8F7] py-20'>
            <div className='mx-auto max-w-7xl px-6 sm:px-10 lg:px-12'>
              <SectionHeading
                eyebrow='Built around your site'
                title='Our Industrial Solutions'
                description='Every site is different, so we don’t sell a fixed package. We work from a toolkit and pick the parts that fit your roof, your soil and your water use. Here’s what’s in it.'
              />

              <div className='mt-14 border-t border-[#D5E2E0]'>
                {solutions.map(item => (
                  <article
                    key={item.number}
                    className='grid gap-4 border-b border-[#D5E2E0] py-8 md:grid-cols-[90px_0.8fr_1.2fr] md:gap-8 md:py-10'
                  >
                    <span className='pt-1 text-sm font-bold tracking-widest text-[#1E8A95]'>
                      {item.number}
                    </span>
                    <h3 className='text-xl font-semibold leading-snug text-[#0B3C4A] sm:text-2xl'>
                      {item.title}
                    </h3>
                    <p className='text-sm leading-7 text-slate-600 sm:text-base sm:leading-8'>
                      {item.content}
                    </p>
                  </article>
                ))}
              </div>

              <p className='mt-9 text-sm leading-7 text-slate-600'>
                You can read more on our{' '}
                <Link
                  href='/rainwater-harvesting-system'
                  className='font-semibold text-[#147987] underline decoration-[#147987]/40 underline-offset-4 hover:decoration-[#147987]'
                >
                  Rainwater Harvesting System
                </Link>{' '}
                and{' '}
                <Link
                  href='/rainwater-harvesting-installation-company'
                  className='font-semibold text-[#147987] underline decoration-[#147987]/40 underline-offset-4 hover:decoration-[#147987]'
                >
                  Rainwater Harvesting Installation Company
                </Link>{' '}
                pages.
              </p>
            </div>
          </section>

          {/* ROOF POTENTIAL CALCULATOR / EXAMPLE */}
          <section className='relative overflow-hidden bg-[#0B3C4A] py-20 text-white'>
            <div className='absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10' />
            <div className='absolute -right-20 -top-20 h-[340px] w-[340px] rounded-full border border-white/10' />

            <div className='relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12'>
              <div className='grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20'>
                <div>
                  <p className='mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#75CECA]'>
                    The potential above your head
                  </p>
                  <h2 className='text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[46px]'>
                    What Could a Factory Roof Give You?
                  </h2>
                  <p className='mt-6 text-base leading-8 text-white/75'>
                    It helps to put a number on it. Imagine a factory with
                    10,000 square metres of roof in a place that gets 700 mm of
                    rain a year. One millimetre of rain on one square metre is
                    one litre, and a well-kept catchment captures roughly 80% of
                    it. That comes to about 56 lakh litres a year, or around 560
                    tanker loads of 10,000 litres each.
                  </p>
                </div>

                <div className='rounded-[2rem] border border-white/15 bg-white/[0.06] p-7 sm:p-10'>
                  <p className='text-sm font-medium text-white/60'>
                    Estimated annual rainwater potential
                  </p>
                  <p className='mt-3 text-5xl font-semibold tracking-tight text-[#75CECA] sm:text-6xl lg:text-7xl'>
                    56 lakh
                  </p>
                  <p className='mt-2 text-lg text-white/80'>litres per year</p>

                  <div className='my-8 h-px bg-white/15' />

                  <div className='grid grid-cols-2 gap-6'>
                    <div>
                      <p className='text-2xl font-semibold text-white sm:text-3xl'>
                        10,000
                      </p>
                      <p className='mt-2 text-sm leading-6 text-white/60'>
                        Square metres of roof
                      </p>
                    </div>
                    <div>
                      <p className='text-2xl font-semibold text-white sm:text-3xl'>
                        700 mm
                      </p>
                      <p className='mt-2 text-sm leading-6 text-white/60'>
                        Annual rainfall
                      </p>
                    </div>
                    <div>
                      <p className='text-2xl font-semibold text-white sm:text-3xl'>
                        80%
                      </p>
                      <p className='mt-2 text-sm leading-6 text-white/60'>
                        Catchment efficiency
                      </p>
                    </div>
                    <div>
                      <p className='text-2xl font-semibold text-white sm:text-3xl'>
                        560
                      </p>
                      <p className='mt-2 text-sm leading-6 text-white/60'>
                        Tanker loads of 10,000 litres each
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className='mt-12 max-w-4xl border-l-2 border-[#75CECA] pl-5 text-sm leading-7 text-white/65'>
                It’s a rough sum, not a promise. Real figures depend on rainfall
                records, roof materials and how the catchment is laid out. But
                it shows why industrial roofs are worth taking seriously, and
                why we start every project with a proper survey instead of
                guesswork.
              </p>
            </div>
          </section>

          {/* BENEFITS */}
          <section className='mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12'>
            <SectionHeading
              eyebrow='The value of harvesting'
              title='Benefits'
            />

            <div className='mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2'>
              {benefits.map((item, index) => (
                <article
                  key={item.title}
                  className='flex gap-5 border-t border-[#DCE7E6] pt-6'
                >
                  <span className='mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8F3F1] text-xs font-bold text-[#147987]'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className='text-lg font-semibold leading-snug text-[#0B3C4A]'>
                      {item.title}
                    </h3>
                    <p className='mt-3 text-sm leading-7 text-slate-600'>
                      {item.content}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* INDUSTRIES SERVED */}
          <section className='bg-[#F4F8F7] py-20 sm:py-24'>
            <div className='mx-auto max-w-7xl px-6 sm:px-10 lg:px-12'>
              <SectionHeading
                eyebrow='Across sectors'
                title='Industries Served'
                description='We work with industrial sites of many kinds, and each has its own water story.'
              />

              <div className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {industries.map((item, index) => (
                  <article
                    key={item.title}
                    className='rounded-2xl border border-[#DCE7E6] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,60,74,0.07)] sm:p-7'
                  >
                    <p className='mb-5 text-xs font-bold tracking-[0.16em] text-[#1E8A95]'>
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className='text-lg font-semibold leading-snug text-[#0B3C4A]'>
                      {item.title}
                    </h3>
                    <p className='mt-3 text-sm leading-7 text-slate-600'>
                      {item.content}
                    </p>
                  </article>
                ))}
              </div>

              <p className='mt-9 max-w-4xl text-sm leading-7 text-slate-600'>
                Whatever the sector, every system is tailored to the site’s
                layout, local rainfall and the way it actually uses water.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className='mx-auto max-w-5xl px-6 py-20 sm:px-10'>
            <SectionHeading eyebrow='Common questions' title='FAQs' />

            <div className='mt-10 divide-y divide-[#DCE7E6] border-y border-[#DCE7E6]'>
              {faqs.map((faq, index) => (
                <details key={faq.question} className='group py-6'>
                  <summary className='flex cursor-pointer list-none items-center justify-between gap-6 text-left'>
                    <span className='flex items-start gap-4'>
                      <span className='mt-1 text-xs font-bold tracking-widest text-[#1E8A95]'>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className='text-base font-semibold leading-7 text-[#0B3C4A] sm:text-lg'>
                        {faq.question}
                      </span>
                    </span>
                    <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DCE7E6] text-xl text-[#147987] transition group-open:rotate-45'>
                      +
                    </span>
                  </summary>
                  <div className='pb-2 pl-9 pr-10 pt-4'>
                    <p className='text-sm leading-8 text-slate-600'>
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* FINAL CTA */}
          <section className='bg-[#0B3C4A] px-6 py-20 sm:px-10 lg:px-12'>
            <div className='mx-auto flex max-w-7xl flex-col gap-9 lg:flex-row lg:items-end lg:justify-between'>
              <div className='max-w-3xl'>
                <p className='mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#75CECA]'>
                  Start with your site
                </p>
                <h2 className='text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[48px]'>
                  Let’s Look at Your Roof
                </h2>
                <p className='mt-6 max-w-2xl text-base leading-8 text-white/75'>
                  If you run a plant and wonder what rainwater harvesting could
                  do for you, we’d be glad to help. Start with a free
                  consultation. We’ll walk your site, run the numbers and tell
                  you honestly what’s possible. Contact Us to book, or see the
                  full range of what we offer on our Services Overview page.
                </p>
              </div>

              <div className='flex shrink-0 flex-wrap gap-3'>
                <Link
                  href='/contact-us'
                  className='inline-flex items-center justify-center rounded-full bg-[#75CECA] px-7 py-4 text-sm font-semibold text-[#0B3C4A] transition hover:bg-white'
                >
                  Contact Us{' '}
                  <span className='ml-3' aria-hidden='true'>
                    ↗
                  </span>
                </Link>
                <Link
                  href='/services'
                  className='inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10'
                >
                  Services Overview
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}
