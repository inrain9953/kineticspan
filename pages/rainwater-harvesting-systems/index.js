import Footer from '@/components/Footer'
import Metatag from '@/components/Metatag'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const technicalFeatures = [
  {
    number: '01',
    title: 'Catchment and conveyance',
    content:
      'Industrial roofs are big, often thousands of square metres, and a monsoon downpour sends a lot of water into the gutters very quickly. We lay out guttering and piping to suit your particular roof, sized to carry the flow instead of spilling over the edge. Every litre that makes it into the system is a litre your roof has earned.'
  },
  {
    number: '02',
    title: 'Filtration',
    content:
      'Multi-stage filters take out leaves, dust and sediment. Ahead of them sits a first-flush diverter, which throws away the first runoff of each storm. That first rush carries most of the grime that settled on the roof since the last rain, so removing it makes a real difference to water quality. Cleaner water going in means less maintenance and a longer life for everything downstream.'
  },
  {
    number: '03',
    title: 'Storage tank',
    content:
      'High-capacity tanks in food-grade FRP or polymer, or in reinforced concrete, above ground or below. Every tank has an overflow, so an extreme storm has somewhere safe to go, and level sensors, so you can see what’s inside without climbing up to look.'
  },
  {
    number: '04',
    title: 'Treatment and controls',
    content:
      'For non-potable reuse, UV disinfection or chlorination can be added where the application calls for it. Pumps and valves run on smart sensors that send water where it’s needed and stop anything overflowing, so nobody has to babysit the system.'
  },
  {
    number: '05',
    title: 'Backflow protection',
    content:
      'Critical valves stop harvested water from flowing back into the municipal supply. It’s a small part with an important job: it protects the public water and keeps your system on the right side of the utility.'
  },
  {
    number: '06',
    title: 'Monitoring',
    content:
      'Flow meters, level indicators and data loggers track how the system performs. Your operations team can see at a glance whether everything is working, and your sustainability team gets real figures for litres collected and reused, not estimates.'
  }
]

const benefits = [
  {
    title: 'Lower water costs.',
    content:
      'Harvested rainwater offsets borewell and tanker water, so you spend less on utility charges, less on extraction and less on tankers that arrive when they feel like it. The savings start with the first monsoon after commissioning and repeat every year, which is how a system earns its keep.'
  },
  {
    title: 'Compliance and sustainability.',
    content:
      'A working system helps you meet regulatory requirements such as CGWA recharge conditions and pollution-control norms. It also gives you something concrete to point to in ESG and circular-economy reporting: water collected, reused and returned to the ground, with data behind it.'
  },
  {
    title: 'Operational resilience.',
    content:
      'When supply gets tight, stored rainwater is your emergency backup. Critical processes like cooling and cleaning can keep running while others wait for a tanker. It won’t cover everything, but having a reserve you control changes how a dry spell feels.'
  },
  {
    title: 'A lighter footprint.',
    content:
      'Capturing runoff reduces the water rushing across your site, which means less flooding and erosion on your own premises. And water that goes into the ground or into use is water that doesn’t strain the public system or the local ecosystem.'
  }
]

const applications = [
  {
    title: 'Process water.',
    content:
      'Cooling tower makeup, boiler feed and equipment washing are some of the most common uses, and often the thirstiest. With the right treatment for each, rainwater can take a real bite out of that demand.'
  },
  {
    title: 'Sanitation.',
    content:
      'Flushing toilets and cleaning floors don’t need drinking-quality water, yet at many sites that’s exactly what they use. Rainwater is a natural fit, and so is watering landscaping.'
  },
  {
    title: 'Site runoff control.',
    content:
      'Parking areas, yards and other hard surfaces shed a great deal of water in a storm. We can capture it for reuse, or direct it to percolate into the ground, instead of leaving it to overwhelm the drains.'
  },
  {
    title: 'Amenity and green spaces.',
    content:
      'Green belts, gardens and landscape features on a campus are an easy first use for stored rainwater, and a visible one. Staff and visitors can see exactly where the water comes from.'
  }
]

const maintenanceItems = [
  {
    title: 'Gutters and filters:',
    content:
      'inspect and clean at least once a year, and clear debris screens and first-flush devices after storms.'
  },
  {
    title: 'Storage tanks:',
    content:
      'remove sediment every three to five years, with periodic flushing in between.'
  },
  {
    title: 'Pumps and UV units:',
    content:
      'periodic checks. Pumps typically last somewhere between two and ten years, depending on how hard they work and how well they’re cared for.'
  },
  {
    title: 'Controls and electronics:',
    content:
      'these typically carry five to ten year warranties and are replaced when needed.'
  }
]

const timeline = [
  {
    number: '01',
    title: 'Site survey and design:',
    duration: '1 week'
  },
  {
    number: '02',
    title: 'Permitting and procurement:',
    duration: '1 to 2 weeks, much of it waiting for tank fabrication'
  },
  {
    number: '03',
    title: 'Construction and installation:',
    duration: '2 to 3 weeks, covering the tank, piping and electrical work'
  },
  {
    number: '04',
    title: 'Commissioning:',
    duration: '1 week, testing the pumps and water quality'
  }
]

const faqs = [
  {
    question: 'How much rainwater can we collect?',
    answer:
      'It depends on your roof area, your rainfall and how well the catchment is set up. The basic sum is roof area in square metres, times annual rainfall in millimetres, times about 0.8, which gives litres a year. A full calculation uses your catchment area, rainfall records and efficiency factors specific to your roof, and we’ll run it during the survey.'
  },
  {
    question: 'Do harvesting systems reduce flood risk?',
    answer:
      'Yes. By capturing runoff and sending it to storage or recharge, a system cuts the amount of stormwater leaving your site. It has limits, though: a tank of finite size can fill up during an extreme storm, which is why every system gets a proper overflow route.'
  },
  {
    question: 'Is the water safe to touch or use?',
    answer:
      'With proper filtration, rainwater is generally fine for non-potable uses such as irrigation and flushing. For any potable use, additional disinfection with UV or chlorine is needed, and the water has to meet local standards. If that’s what you have in mind, tell us early so we can design for it.'
  },
  {
    question: 'What maintenance is required?',
    answer:
      'Clean debris screens and first-flush devices after storms, flush the tanks from time to time and have the gutters and filters inspected every year. If you’d rather hand that over, Kinetic Span offers maintenance contracts for peace of mind.'
  },
  {
    question: 'Do we need a recharge pit as well as a tank?',
    answer:
      'Not always, but the two work well together. Tanks hold water for reuse, while recharge pits take care of the surplus and help meet recharge requirements. We’ll recommend the right mix after the survey.'
  },
  {
    question: 'Should we choose a modular system or a custom one?',
    answer:
      'If you’re short on time, short on space or expect to grow, a modular system can be a great fit. For large or complicated sites, a fully custom design usually makes more sense. We’ll tell you honestly which one suits you.'
  }
]

export default function RainwaterHarvestingSystem () {
  const data = {
    title: 'Rainwater Harvesting System | Kinetic Span',
    desc: 'Looking for reliable Rainwater Harvesting System in India? We provide efficient solutions for sustainable water management and best in the industry.',
    keyword:
      'Rainwater Harvesting System, Rainwater Harvesting for Industries, Modular Rainwater Harvesting, Rainwater Harvesting Tank, Storm water Management',
    canonical: 'https://www.kineticspan.com/rainwater-harvesting-systems',
    ogTitle: 'Rainwater Harvesting System | Kinetic Span',
    ogDescription:
      'Looking for reliable Rainwater Harvesting System in India? We provide efficient solutions for sustainable water management and best in the industry.',
    ogUrl: 'https://www.kineticspan.com/rainwater-harvesting-systems',
    twittertitle: 'Rainwater Harvesting System | Kinetic Span',
    twitterdescription:
      'Looking for reliable Rainwater Harvesting System in India? We provide efficient solutions for sustainable water management and best in the industry.'
  }
  return (
    <>
      <Metatag data={data} />
      <Navbar />
      <div className="bg-[#F8FBFA] font-['Source_Serif_4',Georgia,serif] text-lg leading-[1.7] text-[#10303A]">
        <main className='overflow-hidden bg-white text-[#183B43]'>
          {/* =========================================================
          HERO
      ========================================================= */}
          <section className='relative bg-[#F2F7F6]'>
            <div className='absolute inset-y-0 right-0 hidden w-[42%] bg-[#0B3C4A] lg:block' />

            <div className='relative mx-auto grid max-w-7xl lg:grid-cols-[1.05fr_0.95fr]'>
              {/* Hero copy */}
              <div className='px-6 pt-32 lg:px-12'>
                <p className='mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#1E8A95]'>
                  <span className='h-px w-10 bg-[#1E8A95]' />
                  Industrial Infrastructure
                </p>

                <h1 className='max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#0B3C4A] sm:text-5xl lg:text-[62px]'>
                  Rainwater Harvesting System
                </h1>

                <div className='mt-8 max-w-2xl space-y-5 text-base leading-8 text-slate-600'>
                  <p>
                    Say “Rainwater Harvesting” and most people picture a barrel
                    under a downpipe. An industrial system is different from
                    conventional rainwater harvesting system. It’s plant
                    infrastructure, designed the way you’d design any other
                    utility: sized to the load, built so it can be serviced, and
                    expected to run for years without anyone having to think
                    about it.
                  </p>

                  <p>
                    Strip it back and it does four jobs. It catches rain from
                    your roofs and hard surfaces. It cleans that water. It
                    stores it, or sends it down into the ground. And it delivers
                    it to the parts of your plant that can use it. Each stage
                    has its own equipment and its own ways of going wrong, which
                    is why we design the whole chain together instead of handing
                    you a list of parts and wishing you luck.
                  </p>

                  <p>
                    Nothing about it is off the shelf. Your roof, your drainage,
                    your soil and the way your plant uses water are all
                    different from the old rainwater harvesting systems, so we
                    start with a survey, not a catalogue. The result is that our
                    rainwater harvesting system cost almost zero maintenance and
                    easy to install so your team doesn't have to nurse it every
                    day.
                  </p>
                </div>
              </div>

              {/* Technical visual */}
              <div className='relative hidden min-h-[720px] lg:block'>
                <div className='absolute inset-0 flex items-center justify-center px-14 pr-1'>
                  <div className='relative w-full max-w-md'>
                    <div className='aspect-square rounded-[2rem] border border-white/20 bg-white/[0.05] p-8'>
                      <div className='flex h-full flex-col justify-between rounded-[1.5rem] border border-white/15'>
                        <Image
                          src='/blog9.jpg'
                          alt='Rainwater harvesting system'
                          width={400}
                          height={400}
                          className='h-full w-full object-cover rounded-[1.5rem]'
                        />
                      </div>
                    </div>

                    <div className='absolute -bottom-7 -left-7 rounded-2xl bg-[#75CECA] px-6 py-5 text-[#0B3C4A] shadow-xl'>
                      <p className='text-2xl font-bold'>80%</p>
                      <p className='mt-1 text-xs font-semibold uppercase tracking-wider'>
                        Catchment efficiency
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative block min-h-[520px] lg:hidden'>
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='relative w-full max-w-md'>
                  <div className='aspect-square rounded-[2rem] border border-white/20 bg-white/[0.05] p-8'>
                    <div className='flex h-full flex-col justify-between rounded-[1.5rem] border border-white/15'>
                      <Image
                        src='/blog9.jpg'
                        alt='Rainwater harvesting system'
                        width={400}
                        height={400}
                        className='h-full w-full object-cover rounded-[1.5rem]'
                      />
                    </div>
                  </div>

                  <div className='absolute -bottom-7 -left-0 rounded-2xl bg-[#75CECA] px-6 py-5 text-[#0B3C4A] shadow-xl'>
                    <p className='text-2xl font-bold'>80%</p>
                    <p className='mt-1 text-xs font-semibold uppercase tracking-wider'>
                      Catchment efficiency
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================
          QUICK SUM
      ========================================================= */}
          <section className='mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-28'>
            <div className='grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center'>
              <div>
                <p className='mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#1E8A95]'>
                  Kinetic Span
                </p>

                <h2 className='text-3xl font-semibold leading-tight tracking-tight text-[#0B3C4A] sm:text-4xl lg:text-[48px]'>
                  A quick sum
                </h2>

                <p className='mt-6 max-w-xl text-base leading-8 text-slate-600'>
                  Here’s the arithmetic behind all of this. One millimetre of
                  rainwater on one square metre of roof is one litre of water,
                  and a well-kept catchment holds on to roughly 80% of it. Take
                  an 8,000 square metre factory roof in a place that gets 750 mm
                  of rain a year. That’s about 48 lakh litres a year, or around
                  480 tanker loads of 10,000 litres each, falling on a roof you
                  already own.
                </p>

                <p className='mt-5 max-w-xl text-base leading-8 text-slate-600'>
                  Your real figure will depend on local rainfall records, roof
                  materials and how the catchment is laid out, which is why the
                  rainwater harvesting survey always comes first.
                </p>
              </div>

              <div className='relative overflow-hidden rounded-[2rem] bg-[#0B3C4A] p-7 text-white sm:p-10 lg:p-12'>
                <div className='absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10' />

                <div className='relative'>
                  <p className='text-xs font-bold uppercase tracking-[0.2em] text-[#75CECA]'>
                    Annual potential
                  </p>

                  <div className='mt-4 flex flex-wrap items-end gap-x-4 gap-y-1'>
                    <span className='text-6xl font-semibold tracking-tight text-[#75CECA] sm:text-7xl'>
                      48 lakh
                    </span>
                    <span className='pb-2 text-lg text-white/60'>
                      litres / year
                    </span>
                  </div>

                  <div className='my-9 h-px bg-white/15' />

                  <div className='grid grid-cols-3 gap-4'>
                    <div>
                      <p className='text-2xl font-semibold sm:text-3xl'>
                        8,000
                      </p>
                      <p className='mt-2 text-xs leading-5 text-white/50'>
                        square metres roof
                      </p>
                    </div>

                    <div>
                      <p className='text-2xl font-semibold sm:text-3xl'>
                        750 mm
                      </p>
                      <p className='mt-2 text-xs leading-5 text-white/50'>
                        annual rainfall
                      </p>
                    </div>

                    <div>
                      <p className='text-2xl font-semibold sm:text-3xl'>480</p>
                      <p className='mt-2 text-xs leading-5 text-white/50'>
                        tanker loads
                      </p>
                    </div>
                  </div>

                  <div className='mt-9 flex items-center gap-4'>
                    <div className='h-2 flex-1 overflow-hidden rounded-full bg-white/10'>
                      <div className='h-full w-[80%] rounded-full bg-[#75CECA]' />
                    </div>
                    <span className='text-xs font-bold text-[#75CECA]'>
                      80%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================
          TECHNICAL FEATURES
      ========================================================= */}
          <section className='bg-[#F4F8F7] py-20 sm:py-24 lg:py-28'>
            <div>
              <Image
                src='/poster-2.webp'
                alt='Save water'
                width={1920}
                height={1080}
                className='w-full'
              />
            </div>
            <div className='mx-auto max-w-7xl px-6 sm:px-10 lg:px-12'>
              <div className='grid gap-12 lg:grid-cols-[0.7fr_1.3fr]'>
                <div className='lg:sticky lg:top-24 lg:h-fit'>
                  <p className='mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#1E8A95]'>
                    Built as one system
                  </p>

                  <h2 className='text-3xl font-semibold leading-tight tracking-tight text-[#0B3C4A] sm:text-4xl lg:text-[48px]'>
                    Technical Features
                  </h2>

                  <p className='mt-6 max-w-md text-base leading-8 text-slate-600'>
                    Here’s what goes into a rainwater harvesting system, in the
                    order the water meets it.
                  </p>
                </div>

                <div className='border-t md:border-hidden border-[#D5E2E0]'>
                  {technicalFeatures.map(item => (
                    <article
                      key={item.number}
                      className='group grid gap-5 border-b border-[#D5E2E0] py-9 md:grid-cols-[72px_0.65fr_1.35fr] md:gap-8 md:py-10'
                    >
                      <span className='text-sm font-bold tracking-[0.15em] text-[#1E8A95]'>
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
              </div>
            </div>
          </section>

          {/* =========================================================
          INDUSTRY BENEFITS
      ========================================================= */}
          <section className='mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-28'>
            <div className='max-w-3xl'>
              <span className='mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#1E8A95]'>
                Why it matters
              </span>

              <h2 className='text-3xl font-semibold leading-tight tracking-tight text-[#0B3C4A] sm:text-4xl lg:text-[48px]'>
                Industry Benefits
              </h2>
            </div>

            <div className='mt-14 grid gap-x-14 gap-y-12 md:grid-cols-2'>
              {benefits.map((item, index) => (
                <article
                  key={item.title}
                  className='border-t border-[#DCE7E6] pt-7'
                >
                  <div className='flex gap-5'>
                    <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F3F1] text-xs font-bold text-[#147987]'>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div>
                      <h3 className='text-xl font-semibold leading-snug text-[#0B3C4A]'>
                        {item.title}
                      </h3>

                      <p className='mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8'>
                        {item.content}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* =========================================================
          APPLICATIONS
      ========================================================= */}
          <section className='bg-[#0B3C4A] py-20 text-white sm:py-24 lg:py-28'>
            <div className='mx-auto max-w-7xl px-6 sm:px-10 lg:px-12'>
              <div className='grid gap-12 lg:grid-cols-[0.65fr_1.35fr]'>
                <div>
                  <span className='mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#75CECA]'>
                    Where the water goes
                  </span>

                  <h2 className='text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[48px]'>
                    Applications
                  </h2>

                  <p className='mt-6 max-w-md text-base leading-8 text-white/65'>
                    Rainwater Harvesting is most useful where the water doesn’t
                    need to be drinking quality, which covers a lot of an
                    industrial site.
                  </p>
                </div>

                <div className='grid gap-x-8 gap-y-10 sm:grid-cols-2'>
                  {applications.map((item, index) => (
                    <article
                      key={item.title}
                      className='border-t border-white/15 pt-6'
                    >
                      <span className='text-xs font-bold tracking-[0.15em] text-[#75CECA]'>
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <h3 className='mt-5 text-xl font-semibold text-white'>
                        {item.title}
                      </h3>

                      <p className='mt-3 text-sm leading-7 text-white/60'>
                        {item.content}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================
          INSTALLATION & MAINTENANCE
      ========================================================= */}
          <section className='mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-28'>
            <div className='grid gap-16 lg:grid-cols-2 lg:gap-20'>
              {/* Installation */}
              <div>
                <span className='mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#1E8A95]'>
                  From survey to operation
                </span>

                <h2 className='text-3xl font-semibold leading-tight tracking-tight text-[#0B3C4A] sm:text-4xl'>
                  Installation
                </h2>

                <p className='mt-6 text-base leading-8 text-slate-600'>
                  Installation starts with the site survey and moves through
                  excavation, if you’re having an underground tank, and the
                  plumbing connections. We coordinate with your civil
                  contractors on things like concrete footings and with your
                  electrical team on pumps and controls, so nobody is surprised
                  halfway through. Our engineers and certified contractors do
                  the work, and we test every connection before we call it done.
                </p>

                <div className='mt-8 rounded-2xl bg-[#F2F7F6] p-6 sm:p-7'>
                  <div className='flex gap-4'>
                    <div className='mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1E8A95]' />
                    <p className='text-sm leading-7 text-slate-600'>
                      Site survey → Excavation → Base Preparation → Laying of
                      Geotextile → Installation Tank → Back Filling → Filter
                      Connection → Testing
                    </p>
                  </div>
                </div>
              </div>

              {/* Maintenance */}
              <div>
                <span className='mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#1E8A95]'>
                  Keep it running
                </span>

                <h2 className='text-3xl font-semibold leading-tight tracking-tight text-[#0B3C4A] sm:text-4xl'>
                  Maintenance
                </h2>

                <p className='mt-6 text-base leading-8 text-slate-600'>
                  A well-designed rainwater harvesting system needs less looking
                  after than you’d think, but it isn’t nothing. Here’s what to
                  expect:
                </p>

                <div className='mt-8 space-y-4'>
                  {maintenanceItems.map((item, index) => (
                    <div
                      key={item.title}
                      className='flex gap-4 rounded-xl border border-[#DCE7E6] p-5'
                    >
                      <span className='text-xs font-bold text-[#1E8A95]'>
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <p className='text-sm leading-7 text-slate-600'>
                        <strong className='font-semibold text-[#0B3C4A]'>
                          {item.title}
                        </strong>{' '}
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>

                <p className='mt-7 text-sm leading-7 text-slate-600'>
                  If you’d rather not add this to your team’s to-do list, we
                  offer maintenance contracts, so someone is always keeping an
                  eye on it for you.
                </p>
              </div>
            </div>
          </section>

          {/* =========================================================
          TIMELINE
      ========================================================= */}
          <section className='bg-[#F4F8F7] py-20 sm:py-24 lg:py-28'>
            <div className='mx-auto max-w-7xl px-6 sm:px-10 lg:px-12'>
              <div className='max-w-3xl'>
                <span className='mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#1E8A95]'>
                  Project delivery
                </span>

                <h2 className='text-3xl font-semibold leading-tight tracking-tight text-[#0B3C4A] sm:text-4xl lg:text-[48px]'>
                  Timeline
                </h2>

                <p className='mt-6 text-base leading-8 text-slate-600'>
                  Every project is different, but this is what a typical
                  medium-sized industrial facility for rainwater harvesting
                  system looks like:
                </p>
              </div>

              <div className='relative mt-14'>
                <div className='absolute left-[27px] top-8 hidden h-[calc(100%-64px)] w-px bg-[#C9DAD8] md:block' />

                <div className='space-y-5'>
                  {timeline.map(item => (
                    <div
                      key={item.number}
                      className='relative grid gap-5 rounded-2xl border border-[#DCE7E6] bg-white p-6 md:grid-cols-[55px_0.9fr_1.1fr] md:items-center md:p-7'
                    >
                      <div className='relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#0B3C4A] text-xs font-bold text-white'>
                        {item.number}
                      </div>

                      <h3 className='text-lg font-semibold text-[#0B3C4A] sm:text-xl'>
                        {item.title}
                      </h3>

                      <p className='text-sm leading-7 text-slate-600'>
                        {item.duration}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className='mt-9 max-w-4xl border-l-2 border-[#1E8A95] pl-5'>
                <p className='text-sm leading-7 text-slate-600'>
                  Add those up and you’re looking at roughly six to eight weeks
                  from first visit to a working system. Larger sites take
                  longer, smaller ones less. We’ll give you a realistic schedule
                  once we’ve seen your site, and we plan it around your
                  production calendar, not against it.
                </p>
              </div>
            </div>
          </section>

          {/* =========================================================
          FAQ
      ========================================================= */}
          <section className='mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:py-28'>
            <div className='text-center'>
              <p className='mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#1E8A95]'>
                Common questions
              </p>

              <h2 className='text-3xl font-semibold leading-tight tracking-tight text-[#0B3C4A] sm:text-4xl lg:text-[48px]'>
                FAQs
              </h2>
            </div>

            <div className='mt-12 divide-y divide-[#DCE7E6] border-y border-[#DCE7E6]'>
              {faqs.map((faq, index) => (
                <details key={faq.question} className='group py-6'>
                  <summary className='flex cursor-pointer list-none items-center gap-5'>
                    <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8F3F1] text-xs font-bold text-[#147987]'>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className='flex-1 text-left text-base font-semibold leading-7 text-[#0B3C4A] sm:text-lg'>
                      {faq.question}
                    </span>

                    <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DCE7E6] text-xl font-light text-[#147987] transition-transform duration-200 group-open:rotate-45'>
                      +
                    </span>
                  </summary>

                  <div className='pl-14 pr-4 pt-5'>
                    <p className='text-sm leading-8 text-slate-600 sm:text-base'>
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* =========================================================
          FINAL CTA
      ========================================================= */}
          <section className='relative overflow-hidden bg-[#0B3C4A] px-6 py-20 sm:px-10 lg:px-12 lg:py-24'>
            <div className='absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10' />
            <div className='absolute -right-20 -top-20 h-[340px] w-[340px] rounded-full border border-white/10' />

            <div className='relative mx-auto max-w-7xl'>
              <div className='max-w-3xl'>
                <span className='mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#75CECA]'>
                  Start with your site
                </span>

                <h2 className='text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[52px]'>
                  Let’s Look at Your Roof
                </h2>

                <p className='mt-6 text-base leading-8 text-white/70'>
                  Whether you’re starting from scratch or comparing quotes, we’d
                  like to hear about your site. Contact Us for a free
                  consultation, or see everything we do on the Services Overview
                  page.
                </p>
              </div>

              <div className='mt-9 flex flex-wrap gap-3'>
                <Link
                  href='/contact-us'
                  className='inline-flex items-center justify-center rounded-full bg-[#75CECA] px-7 py-4 text-sm font-semibold text-[#0B3C4A] transition hover:bg-white'
                >
                  Contact Us
                  <span className='ml-3' aria-hidden='true'>
                    ↗
                  </span>
                </Link>

                <Link
                  href='/services'
                  className='inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10'
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
