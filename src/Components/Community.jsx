import React from 'react'
import Header from './Header';
import design from './Assets/form.png';
import {FaStar} from 'react-icons/fa'

function Community() {
  return (
    <section className='w-full max-h-fit reg pb-9'>
      <div className='w-full bg-white h-20 px-14 lg:px-28'>
        <Header />
      </div>
      <div className='w-full h-fit flex items-center justify-center'>
        <div className='w-1/2 h-fit bg-white m-auto mt-20 flex flex-col items-center justify-center'>
          <h5 className='mb-1 mt-14 font-semibold text-2xl font-sans'>Subscriptions</h5>
          <h6 className='text font-medium text-xl font-sans'>Subscribe to a premium account to access all our services</h6>
          <div className='w-11/12 mt-9 grid grid-cols-1 gap-2 self-center'>
            <div className='w-full flex items-center justify-start gap-3'>
              <FaStar className='w-10 h-10 star'/>
              <p className='font-medium text-lg font-sans'>Chat with a doctor specialized in infertility management </p>
            </div>
            <div className='w-full flex items-center justify-start gap-3'>
              <FaStar className='w-10 h-10 star'/>
              <p className='font-medium text-lg font-sans'>Get access to connect with a community annonymously </p>
            </div>
            <div className='w-full flex items-center justify-start gap-3'>
              <FaStar className='w-10 h-10 star'/>
              <p className='font-medium text-lg font-sans'>Get unlimited access to trusted health articles </p>
            </div>
            <div className='w-full flex items-center justify-start gap-3'>
              <FaStar className='w-10 h-10 star'/>
              <p className='font-medium text-lg font-sans'>All for 5000 naira monthly</p>
            </div>
          </div>
          <div className='flex mt-12 mb-14 gap-6'>
            <button className='back w-50 font-bold text-lg font-sans text-center text-white py-3 px-10'>Subcribe</button>
            <button className=' text w-50 font-bold text-lg font-sans bg-white text-center border-2 border-line py-3 px-10'>Not now</button>
          </div>
        </div>

      </div>
      <div className='w-full h-52 relative'>
        <img src={design} alt='' className='w-52 h-52 absolute top-0 right-36'/>
      </div>
    </section>
  )
}

export default Community
