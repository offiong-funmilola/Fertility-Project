import React from 'react'
import Header from './Header';
import donate from './Assets/donate.png';
import {Link} from 'react-router-dom';

function Donate() {
  return (
    <div className='w-full bg-white px-8 lg:px-20'>
        <Header/>
        <div className='w-3/4 m-auto flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center mt-9'>
              <h2 className='text-4xl font-semibold mb-3.5 font-sans'>Donate</h2>
              <p className='text text-xl font-medium font-sans'>Help thousands of women get funds for infertility treatment when you donate</p>
          </div>
          <div className='flex mt-5 '>
              <p className='w-96 font-normal text-2xl font-sans mt-32'>We are commited to meeting our 2023 goal of supporting 1 million families on their journrney to fertility by the end of 2023</p>
              <fiqure className='w-72'>
                  <img src={donate} alt='donate' />
              </fiqure>
          </div>
          <div className='w-full mt-4 mb-16'>
            <div className='flex flex-row mb-1 gap-1'>
              <div className='w-11/12 rounded-md bg-emerald-100 h-3'><div className='w-1/3 rounded-md bg-emerald-600 h-3'></div></div>
              <p>33%</p>
            </div>
            <p className='font-normal text-center font-sans'>3,534,000 naira out of 9,000,000 naira raised so far</p>
          </div>
          <div className='w-full flex gap-24 justify-center h-10 mb-52'>
            <Link to='/payment'><button className='w-32 h-10 back text-white font-sans text-medium text-xl'>Donate</button></Link> 
            <button className='w-32 bg-white text font-sans text-medium border-line text-xl'>Cancel</button> 
          </div>
        </div>
      
    </div>
  )
}

export default Donate
