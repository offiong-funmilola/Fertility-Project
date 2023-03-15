import React from 'react'
import Header from './Header';
import Footer from './Footer';
import contact from './Assets/contactus.png';

function Contact() {
  return (
    <>
      <div className='w-full min-h-fit px-8 lg:px-20'> 
        <div className='mb-20'><Header /></div>
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <h3 className='text-4xl font-semibold mb-3'>Contact Us</h3>
            <p className='text-2xl font-normal'>Feel free to send us a message to any questions you might have. </p>
          <div className='w-full flex mt-8 mb-32'>
            <aside className='w-1/2'>
              <figure className='w-[508px] h-[600px]'>
              <img src={contact} alt='' className='w-full h-full'/>
              </figure>
            </aside>
            <form className='w-1/2 pl-5'>
              <div className='w-3/4 mb-5'>
                <label htmlFor='name' className='block mb-1'>Name</label>
                <input type='text' name='name' className='w-full py-2 px-4 border-2' />
              </div>
              <div className='w-3/4 mb-5'>
                <label htmlFor='email' className='block mb-1'>Email</label>
                <input type='email' name='email' className='w-full py-2 px-4 border-2'/>
              </div>
              <div className='w-3/4 mb-5'>
                <label htmlFor='subject' className='block mb-1'>Subject</label>
                <input type='text' name='subject' className='w-full py-2 px-4 border-2'/>
              </div>
              <div className='w-3/4 mb-5'>
                <label htmlFor='message' className='block mb-1'>Message</label>
                <textarea type='text' name='message' className='w-full py-10 px-4 border-2'></textarea>
              </div>
              <div className='w-1/4'>
                <button type='submit' className='back w-full px-4 py-4 text-white'>Send</button>
              </div>
            
            </form>
          </div>
        </div>
      </div>
      <div className='back w-full pb-2'><Footer /></div>
    </>
  )
}

export default Contact;
