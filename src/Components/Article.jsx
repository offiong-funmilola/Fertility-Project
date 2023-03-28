import React from 'react'
import Header from './Header';
import blog1 from './Assets/blog1.png';

function Article() {
  return (
    <section className='w-full bg-white h-20 px-14 lg:px-28 pb-28'>
      <div className='w-full'>
        <Header />
        <div className='w-full mt-5'>
          <h4 className='font-semibold text-3xl font-sans mb-5'>Symptoms and causes of irregular periods.</h4>
          <article className='w-full grid grid-cols-2'>
            <div className='w-3/4'>
              <aside className='w-full'>
                <img src={blog1} alt='' className='w-full mb-6'/>
              </aside>
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
              <p className='font-sans text-base font-normal'>Your period is still considered “regular” even if it varies slightly from 
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
              <p className='font-sans text-base font-normal'>Your menstrual cycle may not always be predictable — and that 
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
