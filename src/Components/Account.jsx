import React, { useEffect, useState } from 'react'
// import profile from './Assets/profile.png'
import {FaUser, FaCalendarDay, FaComment, FaCalendar, FaLifeRing, FaQuestion, FaArrowCircleUp, FaHome, FaCamera} from 'react-icons/fa';
import {useAuthValue} from './Context/AuthContext';
import {signOut} from 'firebase/auth';
import {auth, db} from '../config/firebase';
import {doc, getDoc} from 'firebase/firestore';

function Account() {
    const [user, setUser] = useState({});
    const time = new Date().getHours() + ':' + new Date().getMinutes();
    const {currentUser} = useAuthValue();
   
    useEffect(() => {
        console.log(currentUser.uid)
        const userRef = doc(db, "users", currentUser.uid);
        getDoc(userRef)
        .then(user => {
            if (user.exists()) {
                setUser(user.data());
            }    
        });
       
    }, [currentUser])
    
    return (
       
            <div className=' w-full h-screen grid grid-col-8 grid-rows-1 bg-neutral-100'>
                <div className='flex flex-col items-center col-span-1 bg-white border-r-2 border-gray-200 pt-10'>
                    <div className='mb-16'>
                        <p className='inline text font-sans font-medium text-lg xl:text-xl italic'>FertilityPal</p>
                    </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-3 font-medium text-lg text-gray-500'><FaHome className='w-6 h-6' /> Home</div>
                        <div className='flex gap-3 font-medium text-lg text-gray-500'><FaUser className='w-6 h-6' /> Profile</div>
                        <div className='flex gap-3 font-medium text-lg text-gray-500'><FaCalendar className='w-6 h-6'/> Peroid Tracker</div>
                        <div className='flex gap-3 font-medium text-lg text-gray-500'><FaCalendarDay className='w-6 h-6'/> Appointment</div>
                        <div className='flex gap-3 font-medium text-lg text-gray-500'><FaComment className='w-6 h-6'/> Chat</div>
                        <div className='flex gap-3 font-medium text-lg text-gray-500'><FaLifeRing className='w-6 h-6'/> Setting</div>
                        <div className='flex gap-3 font-medium text-lg text-gray-500'><FaQuestion className='w-6 h-6'/> Help</div>
                        <div className='red flex gap-3 font-medium text-lg text-gray-500' onClick={(e)=> signOut(auth)}><FaArrowCircleUp className='w-6 h-6'/> Log Out</div>
                    </div>
                </div>
                <div className='flex items-center justify-center col-start-2 col-span-7'>
                    <div className='w-3/4 h-3/4 bg-white flex flex-col items-center justify-center'>
                        <div className='flex gap-5 mb-5'>
                            <div className='flex items-center justify-center w-20 h-20  rounded-full bg-gray-200'>
                                <FaCamera className='text-xl text-white'/>
                            </div>
                            {/* <figure className='w-20 h-20 rounded-full mb-2'>
                                <img src={profile} alt=''/>
                            </figure> */}
                            <div className='flex flex-col gap-1 mb-7'>
                                <h6 className='font-medium text-xl font-sans'>{user.userName}</h6>
                                <p className='font-normal text-lg font-sans'>Last log in: {time}</p>
                            </div> 
                        </div>
                        <div className='grid w-1/3 grid-cols-2 grid-rows-4 mb-16'>
                            <div className='inline'>Name</div>
                            <div className='inline'>{user.fullName}</div>
                            <div className='inline'>Location</div>
                            <div className='inline'>{user.location}</div>
                            <div className='inline'>Phone Number</div>
                            <div className='inline'>{user.phoneNumber}</div>
                            <div className='inline'>Email <address></address></div>
                            <div className='inline'>{currentUser?.email}</div>
                        </div> 
                        <div className='flex items-center justify-center back w-36 h-10 text-white p-3 font-sans font-medium text-xl'>Edit</div> 
                    </div>
                
                </div>
            </div>
      
    )
}

export default Account
