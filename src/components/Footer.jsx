import React from 'react';
import Nuke from '../assets/explosion.svg'
const Footer = () => {
  return (
    <div className='bg-black font-abc md:px-14 p-4  mx-auto text-white '>
    <div className='my-12 flex flex-col md:flex-row gap--1'>
         <div className="md:w-1/2 space-y-8">
            <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-first '>
              <img src={Nuke} alt="" className='w-20 inline-block items-center'/>
              <span className='text-green-500 ' >Nuke </span>
          </a>
          <p className='md:w-1/2 text-left'>
              A  simple paragraph is comprised of three major component.
              The first sentence, which is often a declaretive sentence
          </p>
          
        </div>
         <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 item-start'>
           <div  className='space-y-4 mt-5'>
              <h4 className='text-xl'>Platform</h4>
              <ul className='space-y-3'>
                  <a href="/" className="block hover:text-gray-300">Overview</a>
                  <a href="/" className="block hover:text-gray-300">Features</a>
                  <a href="/" className="block hover:text-gray-300">About</a>
                  <a href="/" className="block hover:text-gray-300">Pricing</a>
              </ul>
           </div>
           <div  className='space-y-4 mt-5 '>
              <h4 className='text-xl'>Help</h4>
              <ul className='space-y-3'>
                  <a href="/" className="block hover:text-gray-300">How does it works</a>
                  <a href="/" className="block hover:text-gray-300">Where to ask questions</a>
                  <a href="/" className="block hover:text-gray-300">How tpo play</a>
                  <a href="/" className="block hover:text-gray-300">PWhat is needed for this</a>
              </ul>
           </div>
           <div  className='space-y-4 mt-5'>
              <h4 className='text-xl'>Contact</h4>
              <ul className='space-y'>
              <div>
          <input type="email" name='email' id='email' placeholder='Your Email'
          className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none'/>
          <input type="submit" value='Subscribe' className='px-4 py-2 bg-first rounded-md -ml-2
          cursor-pointer hover:bg-white hover:text-first duration-15 transition-all '/>
        </div>
              </ul>
           </div>
         </div>
    </div>
  </div>
  );
}

export default Footer;
