import React from 'react'
import profile from './Assets/profile.png'
import {FaUser, FaCalendarDay, FaComment, FaCalendar, FaLifeRing, FaQuestion, FaArrowCircleUp} from 'react-icons/fa';

function Account() {
  return (
    <div className=' w-full h-screen grid grid-col-6 grid-rows-1 px-14 lg:px-28'>
        <div className='flex flex-col items-center col-span-1 bg-white border-r-2 border-black pt-14'>
            <h5 className='font-semibold text-3xl pb-16'>My Account</h5>
            <div className='flex flex-col gap-16'>
                <div className='flex gap-3 font-medium text-xl'><FaUser className='w-9 h-9 ' /> Profile</div>
                <div className='flex gap-3 font-medium text-xl'><FaCalendar className='w-9 h-9 '/> Peroid Tracker</div>
                <div className='flex gap-3 font-medium text-xl'><FaCalendarDay className='w-9 h-9 '/> Appointment</div>
                <div className='flex gap-3 font-medium text-xl'><FaComment className='w-9 h-9 '/> Chat</div>
                <div className='flex gap-3 font-medium text-xl'><FaLifeRing className='w-9 h-9 '/> Setting</div>
                <div className='flex gap-3 font-medium text-xl'><FaQuestion className='w-9 h-9 '/> Help</div>
                <div className='red flex gap-3 font-medium text-xl'><FaArrowCircleUp className='w-9 h-9 '/> Log Out</div>
            </div>
        </div>
        <div className='col-start-2 col-span-5 pl-24'>
            <h6 className='font-normal mt-28 mb-9 text-2xl'>Profile Settings</h6>
            <div className='w-80 h-20 flex gap-11'>
                <figure className='w-20 h-20 rounded-full'>
                    <img src={profile} alt=''/>
                </figure>
                <div className='flex flex-col gap-1'>
                    <h6 className='font-medium text-xl font-sans'>Amanda Richard</h6>
                    <p className='font-normal text-lg font-sans'>Ikeja, Lagos</p>
                </div>    
            </div>
           
        </div>
    </div>
  )
}

export default Account
