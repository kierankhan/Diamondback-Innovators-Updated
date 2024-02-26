import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main>
      <div className='flex flex-col justify-center items-center h-screen' style={{ backgroundImage: 'url("/testudo.avif")' }}>
        {/* <img src="/testudo.avif"></img> */}
        <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-red-800 text-shadow md:text-5xl lg:text-6xl">Diamondback Innovators @ UMD</h1>
        <p className="mb-6 text-lg text-center font-normal text-gray-300 text-shadow lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">We are the first student-run engineering consulting club at the University of Maryland</p>
        <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-red-800 rounded-lg hover:bg-red-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Join Us
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
      

      <div className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Empowering Future Engineers</h2>
                <p className="mb-4">Diamondback Innovators makes prestigious engineers. As a student-run engineering consultancy, DBI focuses on advancing the skills engineers learn in University. Throughout the academic year, our engineers expand on their skill set through a variety of methods, and apply their skills to work for real companies.</p>
                <p>Diamondback Innovators gives the brightest engineers at the University of Maryland direct industry experience, unparalleled to what the university provides. Our engineers work together to design, prototype, and create real solutions for our clients.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
            </div>
        </div>
    </div>
    </main>
  )
}
