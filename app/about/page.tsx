import React from 'react'

const About = () => {
  return (
    <div>
      
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
                <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">The officers of Diamondback Innovators</p>
            </div> 
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Amit Panchal</a>
                        </h3>
                        <span className="text-gray-500 dark:text-gray-400">Founder & President</span>
                        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Amit drives the high level strategy for the club and its partners</p>
                    </div>
                </div> 
                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Avatar" />
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Sebastian Hartman</a>
                        </h3>
                        <span className="text-gray-500 dark:text-gray-400">Treasurer</span>
                        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Manages the finances for the club and its partners</p>
                    </div>
                </div> 
                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Michael Avatar" />
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Youssef Seifeldin</a>
                        </h3>
                        <span className="text-gray-500 dark:text-gray-400">Vice President</span>
                        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Youssef builds strategy and coaches new members</p>
                    </div>
                </div> 
                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia Avatar" />
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Kieran Khan</a>
                        </h3>
                        <span className="text-gray-500 dark:text-gray-400">Webmaster</span>
                        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Kieran built and manages the website for Diamondback Innovators</p>
                    </div>
                </div>  
            </div>  
        </div>
      </section>


    </div>
  )
}

export default About