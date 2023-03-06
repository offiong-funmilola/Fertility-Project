import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from './Assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa';

function Nav() {
    const [menu, setMenu] =useState(false)

    const handleClick = (e) => {
        setMenu(!menu);
       
        setTimeout(()=>{
            setMenu(menu);
            }, 3000)
    }
  return (
    <>
      <nav className='w-full h-full bg-inherit flex items-center justify-center'>
       <div className='flex items-center justify-center mr-auto'>
        <div className='w-10 h-14'><img src={logo} alt='signature'/></div>
        <p className='inline text font-sans font-medium text-lg xl:text-xl'>Fertility Pal</p>
       </div>
       <div className='hidden md:flex gap-4 lg:6 xl:10'>
        <Link to='/' className='text font-sans font-bold text-sm lg:text-lg lg:py-2 px-3 xl:text-xl'>Home</Link>
        <Link to='/community' className='font-sans font-bold text-sm lg:text-lg lg:py-2 px-3 xl:text-xl'>Community</Link>
        <Link to='/chat' className='font-sans font-bold text-sm lg:text-lg lg:py-2 px-3 xl:text-xl'>Chat with a doctor</Link>
        <Link to='/article' className='font-sans font-bold text-sm lg:text-lg  lg:py-2 px-3 xl:text-xl'>Article</Link>
        <Link to='/contact' className='font-sans font-bold text-sm lg:text-lg lg:py-2 px-3 xl:text-xl'>Contact Us</Link>
        <Link to='/login' className='border-line text font-sans bg-white font-bold text-sm lg:text-lg lg:py-2 px-4 xl:text-xl'>Sign in</Link>
        <Link to='/register' className='back font-sans font-bold  text-white text-sm lg:text-lg lg:py-2 px-4 xl:text-xl'>Register</Link>
       </div>
       <button type='button' onClick={handleClick} className='w-10 h-10 md:hidden'>{!menu ? <FaBars /> : <FaTimes />}</button>
      </nav>
      <div className={!menu ? 'hidden' :'bg-transparent w-full flex flex-col fixed z-40 gap-4' }>
      <Link to='/' className='text font-sans font-bold text-xl'>Home</Link>
        <Link to='./Community' className='font-sans font-bold text-xl'>Community</Link>
        <Link to='./BookAppointment' className='font-sans font-bold text-xl'>Book An Appointment</Link>
        <Link to='/Blog' className='font-sans font-bold text-xl'>Blog</Link>
        <Link to='/AboutUs' className='font-sans font-bold text-xl'>About Us</Link>
        <Link to='/SignIn' className=' text font-sans bg-white font-bold text-xl'>Sign-in</Link>
        <Link to='/Register' className=' text font-sans font-bold  text-white text-xl'>Register</Link>
      </div>
    </>
  )
}

export default Nav
