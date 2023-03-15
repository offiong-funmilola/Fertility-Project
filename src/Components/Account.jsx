import React from 'react'
import profile from './Assets/profile.png'
import {FaUser, FaCalendarDay, FaComment, FaCalendar, FaLifeRing, FaQuestion, FaArrowCircleUp, FaHome} from 'react-icons/fa';

function Account() {
    const time = new Date().getHours() + ':' + new Date().getMinutes()
  return (
    <div className=' w-full h-screen grid grid-col-8 grid-rows-1 bg-neutral-100'>
        <div className='flex flex-col items-center col-span-1 bg-white border-r-2 border-gray-200 pt-10'>
            <div className='mb-20'>
                <p className='inline text font-sans font-medium text-lg xl:text-xl italic'>Fertility Pal</p>
            </div>
            <div className='flex flex-col gap-8'>
            <div className='flex gap-3 font-medium text-lg text-gray-500'><FaHome className='w-6 h-6' /> Home</div>
                <div className='flex gap-3 font-medium text-lg text-gray-500'><FaUser className='w-6 h-6' /> Profile</div>
                <div className='flex gap-3 font-medium text-lg text-gray-500'><FaCalendar className='w-6 h-6'/> Peroid Tracker</div>
                <div className='flex gap-3 font-medium text-lg text-gray-500'><FaCalendarDay className='w-6 h-6'/> Appointment</div>
                <div className='flex gap-3 font-medium text-lg text-gray-500'><FaComment className='w-6 h-6'/> Chat</div>
                <div className='flex gap-3 font-medium text-lg text-gray-500'><FaLifeRing className='w-6 h-6'/> Setting</div>
                <div className='flex gap-3 font-medium text-lg text-gray-500'><FaQuestion className='w-6 h-6'/> Help</div>
                <div className='red flex gap-3 font-medium text-lg text-gray-500'><FaArrowCircleUp className='w-6 h-6'/> Log Out</div>
            </div>
        </div>
        <div className='flex items-center justify-center col-start-2 col-span-7'>
            <div className='w-3/4 h-3/4 bg-white flex flex-col items-center justify-center'>
                <figure className='w-20 h-20 rounded-full mb-8'>
                    <img src={profile} alt=''/>
                </figure>
                <div className='flex flex-col gap-1 mb-7'>
                    <h6 className='font-medium text-xl font-sans'>BlackDaisy99</h6>
                    <p className='font-normal text-lg font-sans'>Last log in {time}</p>
                </div> 
                <div className='grid w-1/3 grid-cols-2 grid-rows-4 mb-16'>
                    <div className='inline'>Name</div>
                    <div className='inline'>Amanda Richard</div>
                    <div className='inline'>Gender</div>
                    <div className='inline'>Female</div>
                    <div className='inline'>Phone Number</div>
                    <div className='inline'>+2349052871645</div>
                    <div className='inline'>Email <address></address></div>
                    <div className='inline'>amandabrown@gmail.com</div>
                </div> 
                <div className='flex items-center justify-center back w-36 h-10 text-white p-3 font-sans font-medium text-xl'>Edit</div> 
            </div>
            {/*
            <div className=''>
                <figure className='w-20 h-20 rounded-full'>
                    <img src={profile} alt=''/>
                </figure>
                <div className='flex flex-col gap-1'>
                    <h6 className='font-medium text-xl font-sans'>Amanda Richard</h6>
                    <p className='font-normal text-lg font-sans'>Ikeja, Lagos</p>
                </div>    
            </div> */}
           
        </div>
    </div>
  )
}

export default Account
