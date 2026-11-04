import { useState } from 'react'
import Sec from '../components/Attributes/Section'
import H2 from '../components/Attributes/H2'
import H3 from '../components/Attributes/H3'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { DISPLAY } from '@/components/UI'
import Image from 'next/image'
import Metatag from '@/components/Metatag'

const steps = [
  {
    title: 'A person reads it.',
    description: 'Your message goes to our team, not into a black hole.'
  },
  {
    title: 'We get in touch.',
    description:
      'We’ll reply by email or phone with a few questions about your site and your water use.'
  },
  {
    title: 'We suggest a next step.',
    description:
      'If it makes sense, we’ll book a free site visit and audit. If harvesting isn’t a good fit for you, we’ll tell you that too.'
  }
]

const contactDetails = [
  {
    title: 'Phone',
    value: '[phone number]',
    icon: 'phone'
  },
  {
    title: 'Email',
    value: '[email address]',
    icon: 'mail'
  },
  {
    title: 'Address',
    value: 'Chhatarpur, New Delhi, India',
    icon: 'map-pin'
  },
  {
    title: 'Office hours',
    value: 'Monday to Saturday, 9am to 6pm',
    icon: 'clock'
  }
]

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = e => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    setErrors(prev => ({
      ...prev,
      [name]: ''
    }))

    if (status !== 'idle') {
      setStatus('idle')
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Please tell us your name.'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }

    const mobile = formData.mobile.replace(/[\s()-]/g, '')

    if (!/^(?:\+91)?[6-9]\d{9}$/.test(mobile)) {
      newErrors.mobile = 'Please enter a valid mobile number.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us a little about what you need.'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!validateForm()) return

    setStatus('submitting')

    try {
      // Connect this endpoint to your backend API.
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')

      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: ''
      })

      setErrors({})
    } catch (error) {
      setStatus('error')
    }
  }

  const P = 'mb-4 max-w-[62ch]'

  const data = {
    title: 'Contact Us | Kinetic Span',
    desc: 'Looking for reliable Rainwater Harvesting System in India? Contact Us.',
    keyword:
      'Contact Us, Rainwater Harvesting System, Modular Rainwater Harvesting, Rainwater Harvesting Tank, Polymer Type Rainwater Harvesting System, Storm water Management',
    canonical: 'https://www.kineticspan.com/contact-us',
    ogTitle: 'Contact Us | Kinetic Span',
    ogDescription:
      'Looking for reliable Rainwater Harvesting System in India? Contact Us.',
    ogUrl: 'https://www.kineticspan.com/contact-us',
    twittertitle: 'Contact Us | Kinetic Span',
    twitterdescription:
      'Looking for reliable Rainwater Harvesting System in India? Contact Us.'
  }

  return (
    <>
      <Metatag data={data} />
      <Navbar />
      <div className="bg-[#F8FBFA] font-['Source_Serif_4',Georgia,serif] text-lg leading-[1.7] text-[#10303A]">
        <main>
          {/* =================================
          HERO SECTION
      ================================== */}
          <Sec
            id='contact-hero'
            bg='bg-[#F5F8F8]'
            pad='pb-16 pt-30 md:pb-[88px]'
          >
            <div>
              <Image
                src='/save-env1.webp'
                alt='Rainwater harvesting infrastructure'
                width={1200}
                height={600}
                className='mx-auto rounded-2xl object-cover'
              />
            </div>
            <div className='max-w-4xl mt-5'>
              <div className='mb-7 flex items-center gap-3'>
                <span className='h-px w-10 bg-[#1E8A95]' />

                <span className='text-xs font-semibold uppercase tracking-[0.2em] text-[#1E8A95]'>
                  Get In Touch
                </span>
              </div>

              <h1
                className={`${DISPLAY} text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-5xl`}
              >
                Contact Us
              </h1>
              <span className='text-[#1E8A95]'>
                Let’s Talk About Your Water
              </span>

              <p className={`mt-7 max-w-3xl text-base leading-8 ${P}`}>
                Maybe you have a plan sketched out, or you’re comparing options.
                Maybe you’re just wondering whether rainwater harvesting makes
                sense for your plant. Either way, this is the place to start.
                Tell us a little about your site and we’ll take it from there,
                with no pressure, no jargon and no obligation.
              </p>
            </div>
          </Sec>

          {/* =================================
          CONTACT FORM
      ================================== */}
          <Sec id='contact-form' bg='bg-white'>
            <div className='grid items-start gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20'>
              {/* LEFT: FORM */}
              <div>
                <div className='mb-9'>
                  <div className='mb-5 flex items-center gap-3'>
                    <span className='h-px w-10 bg-[#1E8A95]' />

                    <span className='text-xs font-semibold uppercase tracking-[0.2em] text-[#1E8A95]'>
                      Your Enquiry
                    </span>
                  </div>

                  <H2>Send Us a Message</H2>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div className='grid gap-7 sm:grid-cols-2'>
                    {/* NAME */}
                    <div>
                      <label
                        htmlFor='name'
                        className='mb-2.5 block text-sm font-semibold text-[#0B3C4A]'
                      >
                        Name
                      </label>

                      <input
                        id='name'
                        name='name'
                        type='text'
                        autoComplete='name'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='e.g. Anita Verma'
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? 'name-error' : undefined
                        }
                        className={`w-full rounded-xl border bg-[#FAFCFC] px-4 py-4 text-sm text-[#0B3C4A] outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#1E8A95]/15 ${
                          errors.name
                            ? 'border-red-400'
                            : 'border-[#C5D6D6] focus:border-[#1E8A95]'
                        }`}
                      />

                      {errors.name && (
                        <p
                          id='name-error'
                          role='alert'
                          className='mt-2 text-xs text-red-600'
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label
                        htmlFor='email'
                        className='mb-2.5 block text-sm font-semibold text-[#0B3C4A]'
                      >
                        Email
                      </label>

                      <input
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='you@company.com'
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? 'email-error' : undefined
                        }
                        className={`w-full rounded-xl border bg-[#FAFCFC] px-4 py-4 text-sm text-[#0B3C4A] outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#1E8A95]/15 ${
                          errors.email
                            ? 'border-red-400'
                            : 'border-[#C5D6D6] focus:border-[#1E8A95]'
                        }`}
                      />

                      {errors.email && (
                        <p
                          id='email-error'
                          role='alert'
                          className='mt-2 text-xs text-red-600'
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* MOBILE */}
                    <div className='sm:col-span-2'>
                      <label
                        htmlFor='mobile'
                        className='mb-2.5 block text-sm font-semibold text-[#0B3C4A]'
                      >
                        Mobile no.
                      </label>

                      <input
                        id='mobile'
                        name='mobile'
                        type='tel'
                        autoComplete='tel'
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder='+91 98765 43210'
                        aria-invalid={!!errors.mobile}
                        aria-describedby='mobile-helper mobile-error'
                        className={`w-full rounded-xl border bg-[#FAFCFC] px-4 py-4 text-sm text-[#0B3C4A] outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#1E8A95]/15 ${
                          errors.mobile
                            ? 'border-red-400'
                            : 'border-[#C5D6D6] focus:border-[#1E8A95]'
                        }`}
                      />

                      <p
                        id='mobile-helper'
                        className='mt-2 text-xs text-slate-500'
                      >
                        So we can call you if that’s easier.
                      </p>

                      {errors.mobile && (
                        <p
                          id='mobile-error'
                          role='alert'
                          className='mt-2 text-xs text-red-600'
                        >
                          {errors.mobile}
                        </p>
                      )}
                    </div>

                    {/* MESSAGE */}
                    <div className='sm:col-span-2'>
                      <label
                        htmlFor='message'
                        className='mb-2.5 block text-sm font-semibold text-[#0B3C4A]'
                      >
                        Message
                      </label>

                      <textarea
                        id='message'
                        name='message'
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='Tell us about your site: what kind of plant it is, roughly how big the roof is and what you’d like to achieve. Rough numbers are fine.'
                        aria-invalid={!!errors.message}
                        aria-describedby={
                          errors.message ? 'message-error' : undefined
                        }
                        className={`w-full resize-y rounded-xl border bg-[#FAFCFC] px-4 py-4 text-sm leading-7 text-[#0B3C4A] outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#1E8A95]/15 ${
                          errors.message
                            ? 'border-red-400'
                            : 'border-[#C5D6D6] focus:border-[#1E8A95]'
                        }`}
                      />

                      {errors.message && (
                        <p
                          id='message-error'
                          role='alert'
                          className='mt-2 text-xs text-red-600'
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* FORM STATUS */}
                  <div className='mt-7' aria-live='polite'>
                    {status === 'success' && (
                      <div className='mb-5 rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-800'>
                        Thanks, we’ve got your message. Someone from our team
                        will be in touch soon.
                      </div>
                    )}

                    {status === 'error' && (
                      <div className='mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700'>
                        Something went wrong and your message didn’t send.
                        Please try again, or reach us directly using the details
                        further down this page.
                      </div>
                    )}

                    <button
                      type='submit'
                      disabled={status === 'submitting'}
                      className='inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0B3C4A] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1E8A95] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto'
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send message'}

                      {status !== 'submitting' && (
                        <span aria-hidden='true'>↗</span>
                      )}
                    </button>

                    <p className='mt-4 text-xs leading-6 text-slate-500'>
                      By sending this form, you agree to us contacting you about
                      your enquiry.
                    </p>
                  </div>
                </form>
              </div>

              {/* RIGHT: GUIDANCE PANEL */}
              <div className='space-y-6 lg:sticky lg:top-28'>
                <div className='rounded-2xl bg-[#F5F8F8] p-7 sm:p-9'>
                  <div className='mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E8A95]/10 text-[#1E8A95]'>
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='1.7'
                      className='h-6 w-6'
                    >
                      <path d='M12 18h.01M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 5M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z' />
                    </svg>
                  </div>

                  <H3>Not Sure What to Write?</H3>

                  <p className={`mt-4 leading-7 ${P}`}>
                    You don’t need a perfect brief. If you can mention a few of
                    these, we can give you a more useful reply, and if you
                    can’t, just say what you know:
                  </p>

                  <ul className='mt-7 space-y-5'>
                    {[
                      'The kind of site you run, such as a factory, a warehouse or a campus',
                      'Roughly how big the roof is',
                      'Where the site is',
                      'Where your water comes from today and what it costs you',
                      'Any deadline or compliance requirement you’re working to'
                    ].map((item, i) => (
                      <li key={i} className='flex items-start gap-3'>
                        <span className='mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1E8A95]/10 text-[#1E8A95]'>
                          <svg
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2.5'
                            className='h-3 w-3'
                          >
                            <path d='m5 12 4 4L19 6' />
                          </svg>
                        </span>

                        <span className='text-sm leading-6 text-slate-600'>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SUPPORTING NOTE */}
                <div className='rounded-2xl border border-[#C5D6D6] p-7 sm:p-8'>
                  <div className='flex items-center gap-3'>
                    <div className='h-2 w-2 rounded-full bg-[#1E8A95]' />

                    <span className='text-xs font-semibold uppercase tracking-[0.15em] text-[#1E8A95]'>
                      No Pressure. No Obligation.
                    </span>
                  </div>

                  <p className='mt-4 text-sm leading-7 text-slate-600'>
                    Share what you know about your site. Our team will help you
                    understand what’s possible.
                  </p>
                </div>
              </div>
            </div>
          </Sec>

          {/* =================================
          WHAT HAPPENS NEXT
      ================================== */}
          <Sec id='what-happens-next' bg='bg-[#F5F8F8]'>
            <div className='mb-16 max-w-2xl'>
              <div className='mb-5 flex items-center gap-3'>
                <span className='h-px w-10 bg-[#1E8A95]' />

                <span className='text-xs font-semibold uppercase tracking-[0.2em] text-[#1E8A95]'>
                  The Next Steps
                </span>
              </div>

              <H2>What Happens Next</H2>
            </div>

            <div className='relative grid gap-10 sm:grid-cols-3 sm:gap-8'>
              {/* Connecting Line */}
              <div className='absolute left-0 right-0 top-6 hidden h-px bg-[#C5D6D6] sm:block' />

              {steps.map(({ title, description }, i) => (
                <div key={title} className='relative'>
                  <div className='relative z-10 mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#1E8A95] bg-[#F5F8F8] text-sm font-semibold text-[#1E8A95]'>
                    0{i + 1}
                  </div>

                  <H3>{title}</H3>

                  <p className={`mt-4 leading-8 ${P}`}>{description}</p>
                </div>
              ))}
            </div>
          </Sec>

          {/* =================================
          OTHER WAYS TO REACH US
      ================================== */}
          <Sec id='other-contact-details' bg='bg-white'>
            <div className='mb-14'>
              <div className='mb-5 flex items-center gap-3'>
                <span className='h-px w-10 bg-[#1E8A95]' />

                <span className='text-xs font-semibold uppercase tracking-[0.2em] text-[#1E8A95]'>
                  Reach Our Team
                </span>
              </div>

              <H2>Other Ways to Reach Us</H2>
            </div>

            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              {contactDetails.map(({ title, value, icon }) => (
                <div
                  key={title}
                  className='group rounded-2xl border border-[#C5D6D6] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#1E8A95]/50 hover:shadow-lg hover:shadow-[#0B3C4A]/5'
                >
                  <div className='mb-7 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1E8A95]/10 text-[#1E8A95]'>
                    {icon === 'phone' && (
                      <svg
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1.7'
                        className='h-5 w-5'
                      >
                        <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.08 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92Z' />
                      </svg>
                    )}

                    {icon === 'mail' && (
                      <svg
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1.7'
                        className='h-5 w-5'
                      >
                        <rect x='3' y='5' width='18' height='14' rx='2' />
                        <path d='m3 7 9 6 9-6' />
                      </svg>
                    )}

                    {icon === 'map-pin' && (
                      <svg
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1.7'
                        className='h-5 w-5'
                      >
                        <path d='M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z' />
                        <circle cx='12' cy='10' r='2.5' />
                      </svg>
                    )}

                    {icon === 'clock' && (
                      <svg
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1.7'
                        className='h-5 w-5'
                      >
                        <circle cx='12' cy='12' r='9' />
                        <path d='M12 7v5l3 2' />
                      </svg>
                    )}
                  </div>

                  <h3 className='text-sm font-semibold text-[#0B3C4A]'>
                    {title}
                  </h3>

                  <p className='mt-3 break-words text-sm leading-7 text-slate-500'>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </Sec>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default ContactPage
