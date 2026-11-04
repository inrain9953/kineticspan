import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
import EngineeringIcon from '@mui/icons-material/Engineering'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Error () {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gradient-to-b pt-24 from-sky-50 via-white to-green-50'>
        {/* HERO */}
        <section className='relative overflow-hidden'>
          <div className='absolute top-0 left-0 w-[400px] h-[400px] bg-sky-200 blur-[140px] rounded-full opacity-40' />
          <div className='absolute bottom-0 right-0 w-[350px] h-[350px] bg-green-200 blur-[120px] rounded-full opacity-40' />

          <div className='max-w-7xl mx-auto px-5 md:px-10 py-10'>
            <div className='grid lg:grid-cols-2 gap-14 items-center'>
              {/* LEFT CONTENT */}
              <div className='text-center lg:text-left'>
                {/* Badge */}
                <span className='inline-flex items-center gap-2 bg-green-100 text-green-700 border border-green-200 px-5 py-2 rounded-full text-sm font-semibold'>
                  <EngineeringIcon fontSize='small' />
                  Water Conservation & Management Company
                </span>

                {/* Title */}
                <h1 className='text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 leading-tight'>
                  Kinetic Span
                </h1>

                <h2 className='text-sky-700 text-2xl md:text-3xl font-bold mt-5'>
                  Oops! Page Not Found (404)
                </h2>

                <p className='text-lg text-gray-600 leading-7 mt-3'>
                  Looks like you’ve taken a wrong turn—this page doesn’t exist
                  or has been moved.
                </p>

                <p className='text-gray-600 leading-7 mt-3'>
                  At <strong>Kinetic Span</strong>, we are all about
                  building sustainable solutions, but unfortunately, we couldn't
                  build the page you're looking for.
                </p>

                {/* WHAT YOU CAN DO */}
                <div className='bg-white border border-slate-200 rounded-[32px] shadow-lg p-6 mt-4'>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    Here's what you can do:
                  </h3>

                  <div className='space-y-2'>
                    <Link
                      href='/'
                      className='flex items-center gap-3 text-gray-700 hover:text-sky-600 transition'
                    >
                      🔹 Go Back to the Home Page
                    </Link>

                    <Link
                      href='/services'
                      className='flex items-center gap-3 text-gray-700 hover:text-sky-600 transition'
                    >
                      🔹 Explore Our Services: Rainwater Harvesting Solutions
                    </Link>

                    <div className='text-gray-700 leading-7'>
                      🔹 Contact Us for any assistance:
                    </div>

                    <div className='flex flex-col md:flex-row md:items-center gap-4'>
                      <a
                        href='mailto:sales@inrainwaterharvesting.com'
                        className='flex items-center gap-2 text-sky-700 hover:text-sky-900 transition'
                      >
                        <EmailIcon fontSize='small' />
                        sales@inrainwaterharvesting.com
                      </a>

                      <a
                        href='tel:+919953070003'
                        className='flex items-center gap-2 text-green-700 hover:text-green-900 transition'
                      >
                        <PhoneIcon fontSize='small' />
                        +91-9953070003
                      </a>
                    </div>
                  </div>
                </div>

                {/* Need Help */}
                <div className='mt-8 bg-gradient-to-r from-green-700 to-sky-700 rounded-[32px] p-7 shadow-xl text-white'>
                  <h3 className='text-2xl font-bold mb-4'>Need Help?</h3>

                  <p className='leading-8 text-white/90'>
                    We’re always ready to assist you with Water Conservation,
                    Rainwater Harvesting Systems, and Sustainable Solutions.
                  </p>

                  <p className='mt-4 font-semibold text-lg'>
                    Let’s make every drop count!
                  </p>

                  <Link
                    href='/'
                    className='inline-flex items-center gap-2 bg-white text-sky-700 hover:bg-slate-100 px-7 py-4 rounded-2xl font-bold mt-6 transition duration-300 hover:scale-105'
                  >
                    <HomeIcon />
                    Back To Homepage
                  </Link>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className='relative'></div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
