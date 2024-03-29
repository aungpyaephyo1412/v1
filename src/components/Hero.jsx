import {motion} from "framer-motion";
import {easeIn} from "framer-motion/dom";
import ReactTypingEffect from "react-typing-effect";
import {BsGithub} from "react-icons/bs";
import {FaFacebookSquare, FaYoutube} from "react-icons/fa";
import {AiOutlineArrowDown} from "react-icons/ai";
import HeroPic from '../assets/img/photo_2023-05-10_07-30-35-removebg-preview.png'

const Hero = () => {
  return(
      <section className='bg-white dark:bg-gray-900 pt-[80px] lg:p-0' id='home'>
          <div className='container mx-auto relative'>
              <div className="min-h-screen flex flex-col justify-start md:justify-center items-center flex-wrap">
                  <div className='w-full flex justify-center items-center flex-wrap'>
                      <div className="w-full lg:w-2/4 px-3 pt-3">
                          <div className='flex justify-start items-start mx-auto gap-x-[0.1rem] md:gap-x-4'>
                              <div className='flex flex-col justify-center items-center'>
                                  <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                                  <div className='w-1 h-80 violet-gradient' />
                              </div>
                              <div className='mt-5'>
                                  <motion.h1
                                      initial={{ opacity: 0,y:50}}
                                      transition={{ duration: 0.5,velocity:easeIn }}
                                      whileInView={{ opacity: 1,y:0  }}
                                      className='text-gray-700 dark:text-gray-300 text-4xl font-bold tracking-wide mb-3'>Hi, I'm <span className='text-blue-500'>Typle</span> </motion.h1>
                                  <motion.div
                                      initial={{ opacity: 0,y:50}}
                                      transition={{ duration: 0.5,delay:0.4,velocity:easeIn }}
                                      whileInView={{ opacity: 1,y:0  }}
                                      className='text-gray-700 dark:text-gray-300 text-xl md:text-2xl tracking-wide leading-9 mb-3 '>I am a <ReactTypingEffect
                                      speed={90}
                                      eraseDelay={90}
                                      typingDelay={90}
                                      text={["Fullstack developer.", "Youtuber."]}
                                  />
                                      <br/> I develop my portfolio , user <br className='hidden lg:block'/>
                                      interfaces and web applications</motion.div>
                                  <motion.div
                                      initial={{ opacity: 0,y:50}}
                                      transition={{ duration: 0.5,delay:0.6,velocity:easeIn }}
                                      whileInView={{ opacity: 1,y:0  }}
                                      className='flex flex-row items-center mb-5 gap-x-5'>
                                      <a href="https://github.com/aungpyaephyo1412" target='_blank'>
                                          <BsGithub className='w-8 h-8 dark:text-gray-200'/>
                                      </a>
                                      <a href="https://www.facebook.com/aungpyaephyo1412/" target='_blank'>
                                          <FaFacebookSquare className='w-8 h-8 text-blue-500'/>
                                      </a>
                                      <a href="https://www.youtube.com/channel/UCyOuFpk3FQe1E1fNI3ad4tg" target='_blank'>
                                          <FaYoutube className='w-8 h-8 text-red-500'/>
                                      </a>
                                  </motion.div>
                                  <motion.a
                                      initial={{ opacity: 0,y:50}}
                                      transition={{ duration: 0.5,delay:0.8,velocity:easeIn }}
                                      whileInView={{ opacity: 1,y:0  }}
                                      href='../assets/app.pdf' download='' className=' text-white bg-blue-500 py-2 rounded flex items-center justify-center w-52 hover:bg-blue-900'> Download cv <AiOutlineArrowDown className='ml-1'/></motion.a>
                              </div>
                          </div>
                      </div>
                      <motion.div
                          initial={{ opacity: 0,y:50}}
                          transition={{ duration: 0.5,delay:0.2,velocity:easeIn }}
                          whileInView={{ opacity: 1,y:0  }}
                          className="w-full lg:w-2/4 flex flex-col lg:flex-row justify-center items-center gap-5 p-3">
                          <div className='flex-1 relative'>
                              <div className='absolute inset-0 pattern-dots-md z-[1]'>

                              </div>
                              {/*<img src={HeroPic} className='z-[5] relative w-full lg:w-[100%] lg:mx-auto h-auto object-contain obj-p lg:h-[555px] rounded-xl' alt=""/>*/}
                          </div>
                      </motion.div>
                  </div>
              </div>
          </div>
      </section>
  )
}
export default Hero