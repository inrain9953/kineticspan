import Sec from './../components/Attributes/Section'
import H2 from './../components/Attributes/H2'
import H3 from './../components/Attributes/H3'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { DISPLAY } from '@/components/UI'
import Image from 'next/image'
import Metatag from '@/components/Metatag'

const values = [
  {
    title: 'Innovation',
    description:
      'We keep up with filtration and storage technology, and we use it where it earns its place. A better filter that gets more clean water into the tank is worth having. A gadget that looks impressive in a presentation but doesn’t improve the result isn’t. We’d rather be the second to adopt something proven than the first to experiment on your plant.'
  },
  {
    title: 'Integrity',
    description:
      'We design to meet or exceed the government and environmental norms that apply to your site, including CGWA guidance, and we document the work so you can show it to anyone who asks. When a rule is unclear, we say so and find out. When a system won’t pay back, we tell you before you buy, not after.'
  },
  {
    title: 'Excellence',
    description:
      'We look after the whole job: site survey, design, installation, training and support once the system is running. A harvesting system should serve a plant for decades, so the real test isn’t the day we hand it over. It’s how it performs in its tenth monsoon, which is why we plan for maintenance from day one.'
  },
  {
    title: 'Sustainability',
    description:
      'Water held in the landscape does a lot of quiet good. It recharges aquifers, supports local ecosystems and keeps runoff from overloading drains and streams. For us that’s the reason the work exists, not a bonus on the brochure.'
  }
]

const advantages = [
  {
    title: 'Expertise',
    description:
      'We have real industrial projects behind us, and we’re happy to walk you through the case studies so you can judge the work for yourself instead of taking our word for it.'
  },
  {
    title: 'Customisation',
    description:
      'No two sites are alike. Roof area, drainage, soil, rainfall and daily water demand all differ, so we design around yours rather than squeezing you into a standard package. You pay for the capacity you’ll use, not a catalogue default.'
  },
  {
    title: 'Quality',
    description:
      'We work with leading manufacturers of tanks and filters, because a system is only as durable as its weakest component. Good tanks can last anywhere from 15 to 30 years, and we choose materials with that kind of lifespan in mind.'
  },
  {
    title: 'Support',
    description:
      'From the first site survey to maintenance training for your staff, we stay involved. If something needs a look after handover, you’ll know exactly who to call.'
  }
]

const P = 'mb-4 max-w-[62ch]'

const About = () => {
  const data = {
    title: 'About Kinetic Span | Rainwater Harvesting System',
    desc: 'Looking for a reliable Rainwater Harvesting System in India? Kinetic Span provide efficient solutions for sustainable water management and get Rainwater Harvesting System in India',
    keyword:
      'About Kinetic Span, Rainwater Harvesting System, Modular Rainwater Harvesting, Rainwater Harvesting Tank, Polymer Type Rainwater Harvesting System, Storm water Management',
    canonical: 'https://www.kineticspan.com/about-us',
    ogTitle: 'About Kinetic Span | Rainwater Harvesting System',
    ogDescription:
      'Looking for a reliable Rainwater Harvesting System in India? Kinetic Span provide efficient solutions for sustainable water management and get Rainwater Harvesting System in India',
    ogUrl: 'https://www.kineticspan.com/about-us',
    twittertitle: 'About Kinetic Span | Rainwater Harvesting System',
    twitterdescription:
      'Looking for a reliable Rainwater Harvesting System in India? Kinetic Span provide efficient solutions for sustainable water management and get Rainwater Harvesting System in India'
  }
  return (
    <>
      <Metatag data={data} />
      <Navbar />
      <div className="bg-[#F8FBFA] font-['Source_Serif_4',Georgia,serif] text-lg leading-[1.7] text-[#10303A]">
        <main>
          {/* ABOUT HERO */}
          <Sec id='about-hero' bg='bg-[#F5F8F8]' pad='pb-16 pt-30 md:pb-[88px]'>
            <div className='grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20'>
              <div>
                <div className='mb-7 flex items-center gap-3'>
                  <span className='h-px w-10 bg-[#1E8A95]' />
                  <span className='text-xs font-semibold uppercase tracking-[0.2em] text-[#1E8A95]'>
                    About Us
                  </span>
                </div>

                <h1
                  className={`${DISPLAY} text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-5xl`}
                >
                  About Kinetic Span
                </h1>
                <span className='text-[#1E8A95]'>
                  {' '}
                  Pioneers in Rainwater Harvesting Sustainability
                </span>

                <p className={`mt-7 max-w-2xl leading-8 ${P}`}>
                  Every monsoon, rain lands on factory roofs, warehouse yards
                  and loading bays across India and runs straight into the
                  drain. A few weeks later, the same plants are paying for
                  tankers, drilling their borewells deeper and filling in forms
                  about groundwater. That never made sense to us. Kinetic Span
                  designs, builds and looks after rainwater harvesting systems
                  for industry, so the water that falls on your site gets used
                  on your site. We’re more comfortable with a roof calculation
                  than a slogan, and that shapes everything below.
                </p>
              </div>

              {/* Visual */}
              <div className='relative'>
                <div className='relative aspect-[5/4] overflow-hidden rounded-2xl bg-[#DCE9E9]'>
                  <Image
                    src='/blog9.jpg'
                    alt='Industrial rainwater harvesting infrastructure'
                    className='h-full w-full object-cover'
                    width={500}
                    height={400}
                  />

                  <div className='absolute inset-0 bg-gradient-to-t from-[#0B3C4A]/35 to-transparent' />
                </div>

                <div className='absolute -bottom-6 -left-5 hidden w-52 rounded-xl border border-white/70 bg-white p-5 shadow-xl sm:block'>
                  <div className='mb-3 h-1 w-10 rounded-full bg-[#1E8A95]' />
                  <p className='text-sm font-semibold leading-6 text-[#0B3C4A]'>
                    Water that falls on your site should work for your site.
                  </p>
                </div>
              </div>
            </div>
          </Sec>

          {/* MISSION & VISION */}
          <Sec id='mission-vision' bg='bg-white'>
            <div>
              <Image
                src='/poster-1.webp'
                alt=''
                width={1200}
                height={600}
                className='rounded-2xl'
              />
            </div>

            <div className='mb-14 mt-5 max-w-2xl'>
              <div className='mb-5 flex items-center gap-3'>
                <span className='h-px w-10 bg-[#1E8A95]' />
                <span className='text-xs font-semibold uppercase tracking-[0.2em] text-[#1E8A95]'>
                  Our Purpose
                </span>
              </div>

              <H2>What Drives Us Forward</H2>
            </div>

            <div className='grid gap-6 lg:grid-cols-2 lg:gap-8'>
              {/* Mission */}
              <div className='relative overflow-hidden rounded-2xl bg-[#F3F7F7] p-8 sm:p-11 lg:p-12'>
                <span className='absolute -right-4 -top-12 text-[180px] font-bold leading-none text-[#1E8A95]/[0.06]'>
                  01
                </span>

                <div className='relative z-10'>
                  <div className='mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E8A95]/10 text-[#1E8A95]'>
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='1.7'
                      className='h-6 w-6'
                    >
                      <path d='M12 3v18M5 8l7-5 7 5M5 16l7 5 7-5' />
                    </svg>
                  </div>

                  <H3>Our Mission</H3>

                  <p className={`mt-6 leading-8 ${P}`}>
                    Our mission is to change how industry thinks about water.
                    Rain is free, renewable and delivered right to your door.
                    Catching it at the source takes pressure off municipal
                    supply, cuts down on pumping from the ground and shrinks the
                    footprint of the plant that does it. We believe every
                    factory and warehouse can do this, and that it should make
                    financial sense as well as environmental sense. When profit
                    and sustainability point in the same direction, things
                    actually change.
                  </p>

                  <p className={`mt-5 leading-8 ${P}`}>
                    That means being practical. A harvesting system has to fit
                    around a working plant, respect a budget and hold up in real
                    weather. We start from those constraints instead of
                    pretending they don’t exist, and we build systems that make
                    it easy for a busy operations team to say yes.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className='relative overflow-hidden rounded-2xl bg-[#0B3C4A] p-8 text-white sm:p-11 lg:p-12'>
                <span className='absolute -right-4 -top-12 text-[180px] font-bold leading-none text-white/[0.05]'>
                  02
                </span>

                <div className='relative z-10'>
                  <div className='mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#8BD2D3]'>
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='1.7'
                      className='h-6 w-6'
                    >
                      <circle cx='12' cy='12' r='9' />
                      <path d='M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18' />
                    </svg>
                  </div>

                  <H3>Our Vision</H3>

                  <p className='mt-6 text-base leading-8 text-white/75'>
                    We picture a future where industrial sites everywhere
                    collect and reuse their own rainwater as a matter of
                    routine, the way they already treat power and safety.
                    Aquifers topped up instead of drained. Municipal water kept
                    for homes, schools and hospitals. We want to be the partner
                    that businesses call when they’re serious about water
                    independence and environmental leadership, and the one
                    they’re still happy to call ten years later because the
                    system is still doing its job. It’s an ambitious picture,
                    and we know it gets built one roof at a time.
                  </p>
                </div>
              </div>
            </div>
          </Sec>

          {/* OUR VALUES */}
          <Sec id='values' bg='bg-[#F5F8F8]'>
            <div className='mb-14 max-w-2xl'>
              <div className='mb-5 flex items-center gap-3'>
                <span className='h-px w-10 bg-[#1E8A95]' />
                <span className='text-xs font-semibold uppercase tracking-[0.2em] text-[#1E8A95]'>
                  What We Believe In
                </span>
              </div>

              <H2>Our Values</H2>
            </div>

            <div className='grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4'>
              {values.map(({ title, description }, i) => (
                <div key={title} className='group'>
                  <div className='mb-7 flex items-center justify-between border-b border-[#C5D6D6] pb-5'>
                    <span className='text-sm font-semibold text-[#1E8A95]'>
                      / 0{i + 1}
                    </span>

                    <span className='h-2 w-2 rounded-full bg-[#1E8A95]/30 transition-colors group-hover:bg-[#1E8A95]' />
                  </div>

                  <H3>{title}</H3>

                  <p className={`mt-5 leading-8 ${P}`}>{description}</p>

                  <div className='mt-7 h-[2px] w-0 bg-[#1E8A95] transition-all duration-500 group-hover:w-14' />
                </div>
              ))}
            </div>
          </Sec>

          {/* OUR TEAM */}
          <Sec id='team' bg='bg-[#0B3C4A]'>
            <div className='grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24'>
              <div className='lg:sticky lg:top-28 lg:h-fit'>
                <div className='mb-6 flex items-center gap-3'>
                  <span className='h-px w-10 bg-[#75C8C8]' />
                  <span className='text-xs font-semibold uppercase tracking-[0.2em] text-[#75C8C8]'>
                    The People Behind The Work
                  </span>
                </div>

                <H2>
                  <span className='text-white'>Our Team</span>
                </H2>

                <div className='mt-8 h-1 w-16 rounded-full bg-[#75C8C8]' />
              </div>

              <div className='space-y-7'>
                <p className='text-base leading-8 text-white/75'>
                  Behind every project is a small group of people who’ve spent a
                  long time around water. Our engineers and hydrologists bring
                  decades of combined experience in water resources and
                  industrial design. Civil engineers work out how to move water
                  off a roof and into storage without leaks or surprises.
                  Environmental scientists read the soil, the recharge potential
                  and the regulations. Project managers keep the schedule honest
                  and stay out of your production team’s way.
                </p>

                <p className='text-base leading-8 text-white/75'>
                  Between them, they’ve seen most of what a roof, a drain or a
                  clogged pit can do. When you ask a question, you’re talking to
                  someone who understands the answer rather than someone reading
                  from a script. Every site teaches us something, and it goes
                  straight into the next design.
                </p>

                {/* Team Bios Placeholder */}
                <div className='border-t border-white/15 pt-7'>
                  <p className='text-sm leading-7 text-white/55'>
                    Team bios go here: name, role, qualifications and a line
                    about what each person is proudest of building.
                  </p>
                </div>
              </div>
            </div>
          </Sec>

          {/* WHY CHOOSE US */}
          <Sec id='why-us' bg='bg-white'>
            <div>
              <Image
                src='/save-env2.webp'
                alt=''
                width={1200}
                height={600}
                className='rounded-2xl'
              />
            </div>

            <div className='mb-14 mt-5 flex flex-col justify-between gap-5 lg:flex-row lg:items-end'>
              <div>
                <div className='mb-5 flex items-center gap-3'>
                  <span className='h-px w-10 bg-[#1E8A95]' />
                  <span className='text-xs font-semibold uppercase tracking-[0.2em] text-[#1E8A95]'>
                    The Kinetic Span Advantage
                  </span>
                </div>

                <H2>Why Choose Us</H2>
              </div>
            </div>

            <div className='border-t border-[#C5D6D6]'>
              {advantages.map(({ title, description }, i) => (
                <div
                  key={title}
                  className='group grid gap-5 border-b border-[#C5D6D6] py-9 transition-all duration-300 sm:grid-cols-[75px_0.8fr_1.2fr] sm:gap-8 sm:py-11'
                >
                  <span className='pt-1 text-sm font-semibold tabular-nums text-[#1E8A95]'>
                    / 0{i + 1}
                  </span>

                  <H3>{title}</H3>

                  <div>
                    <p className={`leading-8 ${P}`}>{description}</p>

                    <div className='mt-5 h-px w-0 bg-[#1E8A95] transition-all duration-500 group-hover:w-14' />
                  </div>
                </div>
              ))}
            </div>
          </Sec>

          {/* SUSTAINABILITY IMPACT */}
          <Sec id='sustainability' bg='bg-[#F5F8F8]'>
            <div className='grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24'>
              {/* Left Side */}
              <div className='lg:sticky lg:top-28 lg:h-fit'>
                <div className='mb-6 flex items-center gap-3'>
                  <span className='h-px w-10 bg-[#1E8A95]' />
                  <span className='text-xs font-semibold uppercase tracking-[0.2em] text-[#1E8A95]'>
                    Beyond The Water Bill
                  </span>
                </div>

                <H2>Sustainability Impact</H2>

                <div className='mt-9 rounded-2xl bg-[#0B3C4A] p-7 sm:p-9'>
                  <p className='text-sm leading-7 text-white/70'>
                    For companies with sustainability targets, this adds up to
                    figures you can measure, report and defend. Rainwater
                    harvesting also supports the UN Sustainable Development
                    Goals, most directly SDG 6 on clean water and sanitation,
                    with benefits for resilient cities and climate action as
                    well.
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className='space-y-7'>
                <p className={`leading-8 ${P}`}>
                  Saving water on the bill is the part everyone notices. The
                  wider effect is quieter. When runoff is captured on site, less
                  of it races across hard surfaces, which means less local
                  flooding and less erosion. More of it soaks into the ground,
                  topping up the aquifers that your borewell, your neighbours
                  and your community all draw on. And every litre you collect is
                  a litre that doesn’t come from public supply, which matters
                  most in the dry months.
                </p>

                <p className={`leading-8 ${P}`}>
                  There’s resilience in it too. A plant with its own stored
                  water and a recharged aquifer behind it is far less exposed to
                  a tanker strike, a tariff rise or a bad year of rain.
                </p>

                <p className={`leading-8 ${P}`}>
                  For companies with sustainability targets, this adds up to
                  figures you can measure, report and defend. Rainwater
                  harvesting also supports the UN Sustainable Development Goals,
                  most directly SDG 6 on clean water and sanitation, with
                  benefits for resilient cities and climate action as well. It’s
                  small, practical work, and it repeats well: every site with a
                  roof can do its part.
                </p>
              </div>
            </div>
          </Sec>

          {/* FINAL CTA */}
          <Sec id='about-cta' bg='bg-[#0B3C4A]'>
            <div className='mx-auto max-w-4xl text-center'>
              <div className='mb-7 flex items-center justify-center gap-3'>
                <span className='h-px w-10 bg-[#75C8C8]' />
                <span className='text-xs font-semibold uppercase tracking-[0.2em] text-[#75C8C8]'>
                  Start A Conversation
                </span>
                <span className='h-px w-10 bg-[#75C8C8]' />
              </div>

              <H2>
                <span className='text-white'>Let’s Talk</span>
              </H2>

              <p className='mx-auto mt-7 max-w-3xl text-base leading-8 text-white/75'>
                If you’d like to know what rainwater harvesting could do for
                your site, we’d be glad to help, with no pressure and no jargon.
                Browse our Services, or go straight to Contact Us and book a
                free consultation. You can always head back to the Home page
                too.
              </p>

              <div className='mt-10 flex flex-wrap items-center justify-center gap-4'>
                <a
                  href='/services'
                  className='inline-flex items-center gap-3 rounded-full bg-[#1E8A95] px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-[#267F88] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white'
                >
                  Services
                  <span aria-hidden='true'>↗</span>
                </a>

                <a
                  href='/contact'
                  className='inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10'
                >
                  Contact Us
                  <span aria-hidden='true'>↗</span>
                </a>

                <a
                  href='/'
                  className='inline-flex items-center gap-2 px-5 py-4 text-sm font-medium text-white/65 transition-colors hover:text-white'
                >
                  Home
                  <span aria-hidden='true'>↗</span>
                </a>
              </div>
            </div>
          </Sec>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default About
