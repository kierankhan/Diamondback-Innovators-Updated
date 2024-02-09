'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link'
import React, { useState } from 'react'
import { Navbar } from 'flowbite-react';

const ActualNavbar = () => {
    const pathname = usePathname();
    const [menuToggle, setMenuToggle] = useState(false)
  return (
    <div>
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm p-3">
        <nav className="max-w-[85rem] w-full mx-auto md:px-4 sm:px-1 sm:flex sm:items-center sm:justify-between" aria-label="Global">
            <div className="flex items-center justify-between">
            <a className="flex-none text-xl font-semibold" href="#">
                <div className='flex flex-row items-center'>
                    <img src="/diamondback_innovators.jpg" width={70}></img>
                    <h1 className='px-2'>Diamondback Innovators</h1>
                </div>
                
            </a>
            <div className="sm:hidden">
                <button type="button" onClick={() => setMenuToggle(!menuToggle)} className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>
            </div>
            <div id="navbar-collapse-with-animation" className={`hs-collapse ${menuToggle ? "" : "hidden"} overflow-hidden transition-all duration-300 basis-full grow sm:block`}>
                <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                    <Link onClick={() => setMenuToggle(!menuToggle)} className="font-medium text-gray-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/" aria-current="page">Home</Link>
                    <Link onClick={() => setMenuToggle(!menuToggle)} className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/about">About</Link>
                    <Link onClick={() => setMenuToggle(!menuToggle)} className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/projects">Projects</Link>
                    <Link onClick={() => setMenuToggle(!menuToggle)} className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/contact">Contact</Link>
                </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default ActualNavbar