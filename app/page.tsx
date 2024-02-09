import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main>
      <div className='flex flex-col justify-center items-center h-screen' style={{ backgroundImage: 'url("/testudo.avif")' }}>
        {/* <img src="/testudo.avif"></img> */}
        <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-red-700 text-shadow md:text-5xl lg:text-6xl">Diamondback Innovators @ UMD</h1>
        <p className="mb-6 text-lg text-center font-normal text-gray-300 text-shadow lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">We are the first student-run engineering consulting club at the University of Maryland</p>
        <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Join Us
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
      

      <div className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Empowering Future Engineers</h2>
                <p className="mb-4">Diamondback Innovators is a student-run, engineering design and consulting organization, dedicated to teaching members of the organization how to design and create cost-efficient, high-quality mechanical solutions for its clients. Through lectures from guest speakers and UMD faculty, involved members will learn how to design mechanical solutions. Through our partnership with Terrapin Works, final prototypes and products will be made in the Advanced Fabrication Labs and other Terrapin Works associated facilities.</p>
                <p>Engineers from Diamondback Innovators creatively find ways to improve efficiency in the workplace, solve independent mechanical engineering challenges, and prototype and test solutions.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="whiteboardcpy.jpg" alt="office content 1"></img>
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"></img>
            </div>
        </div>
    </div>
    </main>
  )
}
