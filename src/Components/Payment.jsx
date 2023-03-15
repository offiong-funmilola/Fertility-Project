import React from 'react'
import {FaCcMastercard, FaCaretRight} from 'react-icons/fa';

function Payment() {
  return (
    <div className='w-full h-screen grid grid-cols-12 grid-rows-1 bg-neutral-100 gap-5 py-10'>
        <div className='col-start-2 col-span-7 bg-white flex justify-center'>
            <div className='w-2/3 flex flex-col'>
                <h4 className='font-semibold text-4xl font-sans mt-6 mb-12'>Payment Method</h4>
                <p className='font-medium text-xl font-sans mb-6'>Choose a payment method </p>
                <div className='w-full flex justify-between mb-10'>
                    <div className='w-12 h-8 border border-gray-500 bg-white flex items-center justify-center hover:border-emerald-500'>
                    <button type='button' className='p-5'><FaCcMastercard className='text-amber-600 text-lg' /></button>
                    </div>
                    <div className='w-12 h-8 border border-gray-500 bg-white flex items-center justify-center  hover:border-emerald-500'>
                    <button type='button' className='p-5'><FaCaretRight className='text-lg text-blue-900 shadow-sm shadow-sky-500 '/></button>
                    </div>
                    <div className='w-12 h-8 border border-gray-500 bg-white flex items-center justify-center  hover:border-emerald-500'>
                    <button type='button' className='p-5 font-sans  text-blue-900 font-bold text-lg'>VISA</button>
                    </div>
                </div>
                <p className='font-medium text-xl font-sans mb-6'>Card Info</p>
                <div className='w-full mb-4'>
                    <label className='block font-normal text-base font-sans'>CardHolder Name</label>
                    <input className='w-full px-5 py-4 border border-gray-500 ' />
                </div>
                <div className='w-full mb-4'>
                    <label className='block font-normal text-base font-sans'>Card Number</label>
                    <input className='w-full px-5 py-4 border border-gray-500 ' />
                </div>
                <div className='w-full flex justify-between'>
                    <div className='1/3 text-center'>
                        <label className='block font-normal text-base font-sans'>Expiry Date</label>
                        <input className='w-full px-5 py-4 border border-gray-500 '/>
                    </div>
                    <div className='1/3 text-center'>
                        <label className='block font-normal text-base font-sans'>CVV</label>
                        <input className='w-full px-5 py-4 border border-gray-500 '/>
                    </div>
                </div>   
                
            </div>
            
        </div>
        <div className='col-start-9 col-span-3 bg-white'>
            <div className='w-full flex flex-col gap-5 px-10'>
                <h4 className='text-center mt-12 font-semibold text-2xl'>Summary</h4>
                <div className='flex justify-between mt-16'>
                    <h6 className='font-normal text-lg'>Subscription</h6>
                    <p className='font-normal text-lg'>#5000</p>
                </div>
                <hr></hr>
                <div className='flex justify-between mb-52'>
                    <h6 className='font-normal text-lg'>Total</h6>
                    <p className='font-normal text-lg'>#5000</p>
                </div> 
                <div className=' self-center w-2/3 h-12 back text-white flex items-center justify-center'>
                    <button className='w-full text-lg'>Check Out</button>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Payment