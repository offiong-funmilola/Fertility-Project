import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

function Nav() {
    const [menu, setMenu] =useState(false)

    const handleClick = (e) => {
        setMenu(!menu);
       
        setTimeout(()=>{
            setMenu(menu);
            }, 5000)
    }
  return (
    <>
      <nav className='w-full h-full bg-inherit flex items-center justify-center'>
       <div className='flex items-center justify-center mr-auto'>
        <p className='inline text font-sans font-medium text-lg xl:text-xl italic'>Fertility Pal</p>
       </div>
       <div className='hidden md:flex md:gap-2 lg:gap-0'>
        <Link to='/' className='text font-sans font-bold text-sm lg:py-2 px-3 xl:text-xl'>Home</Link>
        <Link to='/community' className='font-sans font-bold text-sm lg:py-2 px-3 xl:text-xl'>Community</Link>
        <Link to='/chat' className='font-sans font-bold text-sm  lg:py-2 px-3 xl:text-xl'>Chat with a doctor</Link>
        <Link to='/resources' className='font-sans font-bold text-sm  lg:py-2 px-3 xl:text-xl'>Article</Link>
        <Link to='/contact' className='font-sans font-bold text-sm lg:py-2 px-3 xl:text-xl'>Contact Us</Link>
        <Link to='/login' className='border-line text font-sans bg-white font-bold text-sm lg:py-2 px-4 xl:text-xl mr-2'>Sign in</Link>
        <Link to='/register' className='back font-sans font-bold  text-white text-sm lg:py-2 px-4 xl:text-xl'>Register</Link>
       </div>
       <button type='button' onClick={handleClick} className='w-10 h-10 md:hidden'>{!menu ? <FaBars /> : <FaTimes />}</button>
      </nav>
      <div className={!menu ? 'hidden' :'w-full bg-white flex flex-col fixed z-50 gap-4 px-14 items-center' }>
      <Link to='/' className='text font-sans font-bold text-xl'>Home</Link>
        <Link to='./community' className='font-sans font-bold text-xl'>Community</Link>
        <Link to='./chat' className='font-sans font-bold text-xl'>Chat with a doctor</Link>
        <Link to='/article' className='font-sans font-bold text-xl'>Article</Link>
        <Link to='/contact' className='font-sans font-bold text-xl'>Contact Us</Link>
        <Link to='/login' className='text font-sans bg-white font-bold text-xl'>Sign-in</Link>
        <Link to='/register' className='text font-sans font-bold  text-white text-xl'>Register</Link>
      </div>
    </>
  )
}

export default Nav
