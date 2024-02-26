'use client';

import React from 'react'
import PdfViewer from '../components/PdfViewer'
import { Document, Page } from 'react-pdf';

const Events = () => {

    const pdfFile = "/DBI First GBM.pdf";
  return (
    <div className='flex flex-col  items-center h-screen'>
        <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Upcoming Events</h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl">Stay updated on GBMs, workshops, and social gatherings!</p>
        </div> 
        <ol className="relative border-s border-gray-200">                  
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                <time className="mb-1 text-sm font-normal leading-none text-red-500 ">February 20th, 2024</time>
                <h3 className="text-lg font-semibold text-gray-900">First General Body Meeting</h3>
                <p className="mb-4 text-base font-normal text-gray-500">The official debut of Diamondback Innovators! We welcome new members and introduce what the club will be about.</p>
                <div className="container mx-auto p-4">
                    <PdfViewer file={pdfFile} />
                </div>
                
                {/* <Document file="DBI First GBM.pdf"></Document> */}
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-red-500 ">February 27th, 2024</time>
                <h3 className="text-lg font-semibold text-gray-900">Soldering Workshop Hosted By Terrapin Works</h3>
                <p className="text-base font-normal text-gray-500">Come learn basic and through-hole soldering! The club's President Amit Panchal will be helping host.</p>
            </li>
            <li className="ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-red-500 ">March 5th, 2024</time>
                <h3 className="text-lg font-semibold text-gray-900">General Body Meeting</h3>
                <p className="text-base font-normal text-gray-500">TBD - Stay Tuned! </p>
            </li>
        </ol>


    </div>
  )
}

export default Events