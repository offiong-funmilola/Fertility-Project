import React from 'react';
import logo from './Assets/logo.png'
import add from './Assets/add.png';
import {Link} from 'react-router-dom';
import {FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';

function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className='bg-transparent w-full h-96'>
        <div className='w-full flex justify-between pt-12 px-14 lg:px-28'>
            <div className='grid grid-cols-1 text-white gap-2'>
                <div className='flex items-center justify-center mr-auto mb-2'>
                    <div className='w-3 h-12'><img src={logo} alt='signature'/></div>
                    <h3 className='font-bold text-2xl mb-2'>Fertility Pal</h3>
                </div>
                <div className='flex gap-4'>
                    <figure>
                        <img src={add} alt='Add'/>
                    </figure>
                    <p className='text-xl font-normal'>Address: Lagos, Nigeria</p>
                </div>
                <div className='flex gap-4'>
                    <FaPhone />
                    <p className='text-xl font-normal'>Call Us: +2349000111222</p>
                </div>
                <div className='flex gap-4'>
                    <FaEnvelope />
                    <p className='text-xl font-normal'>FertilityPal@gmail.com</p>
                </div>
            </div>
            <div className='grid grid-cols-1 text-white gap-2'>
                <h3 className='font-bold text-2xl mb-2'>Site Map</h3>
                <Link to='/' className='text-xl font-normal'>Home</Link>
                <Link to='/AboutUs' className='text-xl font-normal'>About Us</Link>
                <Link to='/ContactUs' className='text-xl font-normal'>Contact Us</Link>
                <Link to='./Community' className='text-xl font-normal'>Community</Link>
                <Link to='./BookAppointment' className='text-xl font-normal'>Book An Appointment</Link>
            </div>
            <div className='grid grid-cols-1 text-white gap-2'>
                <h3 className='font-bold text-2xl mb-2'>Resources</h3>
                <Link to='/Blog' className='text-xl font-normal'>Blog</Link>
                <Link to='/Faq' className='text-xl font-normal'>FAQs</Link>
                <Link to='/Privacy' className='text-xl font-normal'>Privacy Policy</Link>
                <Link to='/Terms' className='text-xl font-normal'>Terms Of Use</Link>
                
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
