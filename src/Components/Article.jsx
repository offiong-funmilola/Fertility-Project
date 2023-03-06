import React from 'react'
import Header from './Header';
import {FaSearch, FaArrowLeft} from 'react-icons/fa';
import blog1 from './Assets/blog1.png';

function Article() {
  return (
    <section className='w-full bg-white h-20 px-14 lg:px-28 '>
      <div className='w-full'>
        <Header />
        <div className='w-full'>
          <div className='w-full h-14 mt-9 mb-14 justify-center'>
            <div className='border-2 w-11 h-11 border-gray-600 rounded-full float-left flex items-center justify-center'>
              <FaArrowLeft className='text-xl'/>
            </div>
            <div className='flex flex-col float-right mr-72 w-1/2'>
              <h2 className='font-semibold text-3xl mb-3 self-center'>Articles</h2>
              <h2 className='text font-medium text-2xl'>Get access to reliable health information from specialists </h2>
            </div>
          </div>
          <div className='w-1/2 mt-10 mx-auto relative mb-5'>
            <input type='text' placeholder='Search' className=' w-full p-3 border-2 border-gray-600 font-sans font-normal text-lg'/>
            <FaSearch  className='absolute top-0 right-5 text-xl translate-y-5'/>
          </div>
          <p className='text font-sans font-normal text-base text-right mr-28 mb-2.5'>See more</p>
          <div className='grid grid-cols-4 gap-2.5 mb-20'>
            <div className='w-72 h-16 reg rounded-lg grid items-center justify-center font-medium text-lg'>Period ovulation</div>
            <div className='border-red-200 border-2 w-72 h-16 rounded-lg grid items-center justify-center font-medium text-lg px-12'>Sexually transmitted infections (STI'S)</div>
            <div className='border-red-200 border-2 w-72 h-16 rounded-lg grid items-center justify-center font-medium text-lg '>Contraception</div>
            <div className='border-red-200 border-2 w-72 h-16 rounded-lg grid items-center justify-center font-medium text-lg '>In-vitro fertilization</div>
          </div>
          <article className='w-full grid grid-cols-2'>
            <div className='w-3/4'>
              <aside className='w-full'>
                <img src={blog1} alt='' className='w-full mb-6'/>
              </aside>
              <h4 className='font-semibold text-4xl font-sans'>Symptoms and causes of irregular periods.</h4>
              <p className='font-sans text-lg font-normal my-3'>Menstrual periods typically last four to seven days 
                and occur roughly every 28 days. Examples of 
                irregular periods include periods that occur fewer 
                than 21 days or more than 35 days apart, missing 
                three or more periods in row, and menstrual flow 
                that’s much heavier or lighter than usual.</p>
              <p className='font-sans text-lg font-normal'>Sometimes, irregular periods can be caused by 
                some medicines, exercising too much, having a very 
                low or high body weight, or not eating enough 
                calories. Hormone imbalances can also cause 
                irregular periods.
              </p>
            </div>
            <div className='w-3/4'>
              <h6 className='font-medium text-xl font-sans mb-3'>What are examples of irregular periods?</h6>
              <p className='font-sans text-lg font-normal'>Your period is still considered “regular” even if it varies slightly from 
                cycle to cycle. Examples of irregular menstruation include:</p>
              <ul className='font-sans text-lg font-normal list-disc'>
                <li>Periods that occur fewer than 21 days or more than 35 days apart.</li>
                <li>Missing three or more periods in a row.</li>
                <li>Menstrual flow (bleeding) that’s much heavier or lighter than usual.</li>
                <li>Periods that last longer than seven days.</li>
                <li>Length of time between cycles varies by more than nine days. For example, one cycle is 28 days, the next is 37 days and the next is 29 days.</li>
                <li>Periods that are accompanied by severe pain, cramping, nausea or vomiting.</li>
                <li>Bleeding or spotting that happens between periods or after sexual intercourse.</li>
                <li>Soaking through one or more tampons or sanitary pads in an hour.</li>
              </ul>
              <p className='font-sans text-lg font-normal'>Your menstrual cycle may not always be predictable — and that 
                may be OK. It’s normal to have slight variations in cycle length or 
                have a menstrual period that seems slightly heavier or lighter in 
                flow than your previous period. Menstrual irregularities are fairly 
                common, and you don’t have to be able to predict your cycle to the 
                exact day for it to be considered “normal.”
              </p>
            </div>
          </article>
        </div>      
      </div>
    </section>
  )
}

export default Article;
