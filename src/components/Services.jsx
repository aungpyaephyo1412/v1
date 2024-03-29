import {RiCustomerService2Line} from 'react-icons/ri'
import {motion} from "framer-motion";
import {easeIn} from "framer-motion/dom";

const Services = () => {
    return (
        <>
            <section id='services' className='bg-white dark:bg-gray-900 pt-[80px]'>
                <div className='min-h-screen container mx-auto flex justify-center items-center'>
                    <div className='w-full flex gap-3 p-3 flex-wrap'>
                        <div className='text-center w-full pb-5'>
                            <motion.h1
                                initial={{opacity: 0, y: 50}}
                                transition={{duration: 0.5, delay: 0.1, velocity: easeIn}}
                                whileInView={{opacity: 1, y: 0}}
                                className='text-gray-700 dark:text-white text-2xl font-bold uppercase'>Services
                            </motion.h1>
                        </div>
                        <div className='flex justify-evenly items-center w-full flex-wrap gap-y-4'>
                            <motion.div
                                initial={{opacity: 0, y: 50}}
                                transition={{duration: 0.5, delay: 0.1, velocity: easeIn}}
                                whileInView={{opacity: 1, y: 0}}
                                className="relative bg-white dark:bg-gray-700 py-6 px-6 rounded-3xl w-full md:w-64 my-4 shadow-xl">
                                <div
                                    className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <div className="mt-8">
                                    <p className="text-xl font-semibold my-2 dark:text-gray-200">Web Design</p>
                                    <div className="text-gray-400 text-sm">
                                        <p>User friendly design & fully responsive</p>
                                    </div>
                                    <div className="my-3 flex justify-start items-start">
                                        <a href="/contact"
                                           className=" flex justify-center items-start flex-col-reverse dark:text-white text-gray-800  before:w-[80px]  before:inline-block before:h-[0.1rem] overflow-x-hidden before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-500 before:bg-blue-500 hover:text-blue-500 transition-colors duration-500 dark:before:bg-white">Hire
                                            me →</a>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{opacity: 0, y: 50}}
                                transition={{duration: 0.5, delay: 0.2, velocity: easeIn}}
                                whileInView={{opacity: 1, y: 0}}
                                className="relative bg-white dark:bg-gray-700 py-6 px-6 rounded-3xl w-full md:w-64 my-4 shadow-xl">
                                <div
                                    className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                                    </svg>
                                </div>
                                <div className="mt-8">
                                    <p className="text-xl font-semibold my-2 dark:text-gray-200">Web Development</p>
                                    <div className="text-gray-400 text-sm">
                                        <p>I can create dynamic web application</p>
                                    </div>
                                    <div className="my-3 flex justify-start items-start">
                                        <a href="/contact"
                                           className=" flex justify-center items-start flex-col-reverse dark:text-white text-gray-800  before:w-[80px]  before:inline-block before:h-[0.1rem] overflow-x-hidden before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-500 before:bg-blue-500 hover:text-blue-500 transition-colors duration-500 dark:before:bg-white">Hire
                                            me →</a>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{opacity: 0, y: 50}}
                                transition={{duration: 0.5, delay: 0.3, velocity: easeIn}}
                                whileInView={{opacity: 1, y: 0}}
                                className="relative bg-white dark:bg-gray-700 py-6 px-6 rounded-3xl w-full md:w-64 my-4 shadow-xl">
                                <div
                                    className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
                                    <RiCustomerService2Line className="h-8 w-8"/>
                                </div>
                                <div className="mt-8">
                                    <p className="text-xl font-semibold my-2 dark:text-gray-200">Online support</p>
                                    <div className="text-gray-400 text-sm">
                                        <p>24/7 I'm online</p>
                                        <p>24/7 Message reply</p>
                                    </div>
                                    <div className="my-3 flex justify-start items-start">
                                        <a href="/contact"
                                           className=" flex justify-center items-start flex-col-reverse dark:text-white text-gray-800  before:w-[80px]  before:inline-block before:h-[0.1rem] overflow-x-hidden before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-500 before:bg-blue-500 hover:text-blue-500 transition-colors duration-500 dark:before:bg-white">Hire
                                            me →</a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className='text-center w-full pb-5'>
                            <motion.h1
                                initial={{opacity: 0, y: 50}}
                                transition={{duration: 0.5, delay: 0.1, velocity: easeIn}}
                                whileInView={{opacity: 1, y: 0}}
                                className='text-gray-700 dark:text-white text-2xl font-bold uppercase'>Skills
                            </motion.h1>
                        </div>
                        <div className='w-full dark:text-gray-200 dark:bg-gray-900 py-5'>
                            <div className="w-full">
                                <div className="w-full">
                                    <div
                                        className="w-full flex flex-wrap lg:flex-row flex-col justify-center items-center gap-y-16">
                                        <motion.div
                                            initial={{opacity: 0, y: 50}}
                                transition={{duration: 0.5, delay: 0.1, velocity: easeIn}}
                                whileInView={{opacity: 1, y: 0}}
                                            className='w-full lg:w-[30%] px-5'>
                                            <div className="pr-5  flex flex-col ">
                                                <div className="pattern-dots-md gray-light">
                                                    <div
                                                        className="rounded bg-white shadow dark:bg-gray-800 p-4 transform translate-x-6 -translate-y-6  ">
                                                        <div
                                                            className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                                                            <svg className="w-6 h-6" fill="none" stroke="currentColor"
                                                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                      strokeWidth="2"
                                                                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="flex-grow ">
                                                            <h2 className=" text-xl title-font font-medium mb-3">Web Design</h2>
                                                            <p className="leading-relaxed text-sm text-justify">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, explicabo?
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            initial={{opacity: 0, y: 50}}
                                transition={{duration: 0.5, delay: 0.2, velocity: easeIn}}
                                whileInView={{opacity: 1, y: 0}}
                                            className='w-full lg:w-[30%]  px-5'>
                                            <div className="pr-5 flex flex-col ">
                                                <div className="pattern-dots-md gray-light">
                                                    <div
                                                        className="rounded bg-white shadow dark:bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                                                        <div
                                                            className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                                                            <svg className="w-6 h-6" fill="none" stroke="currentColor"
                                                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                      strokeWidth="2"
                                                                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="flex-grow">
                                                            <h2 className=" text-xl title-font font-medium mb-3">Code Style</h2>
                                                            <p className="leading-relaxed text-sm text-justify">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, sit!
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            initial={{opacity: 0, y: 50}}
                                transition={{duration: 0.5, delay: 0.3, velocity: easeIn}}
                                whileInView={{opacity: 1, y: 0}}
                                            className='w-full lg:w-[30%]  px-5'>
                                            <div className="pr-5 flex flex-col ">
                                                <div className="pattern-dots-md gray-light">
                                                    <div
                                                        className="rounded bg-white shadow dark:bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                                                        <div
                                                            className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                                                            <svg className="w-6 h-6" fill="none" stroke="currentColor"
                                                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                      strokeWidth="2"
                                                                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="flex-grow">
                                                            <h2 className=" text-xl title-font font-medium mb-3">
                                                                Back-end Development</h2>
                                                            <p className="leading-relaxed text-sm text-justify">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, sunt!
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Services