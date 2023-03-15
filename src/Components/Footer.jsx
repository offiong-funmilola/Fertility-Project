import React from 'react';
import logo from './Assets/logo.png'
import add from './Assets/add.png';
import {Link} from 'react-router-dom';
import {FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';

function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className='bg-transparent w-full h-96'>
        <div className='w-full flex justify-between pt-12 px-8 lg:px-20'>
            <div className='grid grid-cols-1 text-white gap-2'>
                <div className='flex items-center justify-center mr-auto mb-2'>
                    <div className='w-3 h-12'><img src={logo} alt='signature'/></div>
                    <h3 className='font-bold text-2xl mb-2'>Fertility Pal</h3>
                </div>
                <div className='flex gap-4'>
                    <figure>
                        <img src={add} alt='Add'/>
                    </figure>
                    <p className='text-base md:text-xl font-normal font-sans'>Address: Lagos, Nigeria</p>
                </div>
                <div className='flex gap-4'>
                    <FaPhone />
                    <p className='text-base md:text-xl font-normal font-sans'>Call Us: +2349000111222</p>
                </div>
                <div className='flex gap-4'>
                    <FaEnvelope className=''/>
                    <p className='text-base md:text-xl font-normal font-sans'>FertPal@gmail.com</p>
                </div>
            </div>
            <div className='grid grid-cols-1 text-white gap-2'>
                <h3 className='font-bold text-2xl mb-2'>Site Map</h3>
                <Link to='/' className='text-xl font-normal'>Home</Link>
                <Link to='/about-us' className='text-base md:text-xl font-normal font-sans'>About Us</Link>
                <Link to='/contact' className='text-base md:text-xl font-normal font-sans'>Contact Us</Link>
                <Link to='/community' className='text-base md:text-xl font-normal font-sans'>Community</Link>
                <Link to='/appointment' className='text-base md:text-xl font-normal font-sans'>Book An Appointment</Link>
            </div>
            <div className='grid grid-cols-1 text-white gap-2'>
                <h3 className='font-bold text-2xl mb-2'>Resources</h3>
                <Link to='/article' className='text-base md:text-xl font-normal font-sans'>Article</Link>
                <Link to='/questions' className='text-base md:text-xl font-normal font-sans'>FAQs</Link>
                <Link to='/privacy' className='text-base md:text-xl font-normal font-sans'>Privacy Policy</Link>
                <Link to='/terms' className='text-base md:text-xl font-normal font-sans'>Terms Of Use</Link>
                
            </div> 
        </div> 
        <div className='w-full border-t-2 border-white mt-14 pt-5 px-14 lg:px-28 flex justify-between'>
            <div className='text-white font-sans text-xl font-normal'>
                &copy; {year} Fertility Pal. All Right Reserved.
            </div>
            <div className='flex gap-5'>
                <FaInstagram  className='w-5 h-5 text-white'/>
                <FaFacebook  className='w-5 h-5 text-white'/>
                <FaTwitter  className='w-5 h-5 text-white'/>
                <FaLinkedin  className='w-5 h-5 text-white'/>
            </div>
        </div>
    </div>
  )
}

export default Footer
