import React from 'react'
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import {FaSearch, FaArrowRight} from 'react-icons/fa';
import blog from './Assets/blog1.png';
import art2 from './Assets/art2.png';
import art4 from './Assets/art4.png';
import art5 from './Assets/art5.png';
import check from './Assets/blog4.png';
import use from './Assets/blog3.png';

// border-2 border-gray-600

function Resources() {
    return (
        <>
            <div className='w-full min-h-fit px-8 lg:px-20'> 
                <div className=''><Header /></div>
                <div className='w-full mt-12'>
                    <h3 className='text-4xl font-semibold text-center mb-20'>Articles</h3>
                    <div className='w-full flex flex-wrap gap-5 justify-between lg:flex-nowrap'>
                        <div className='font-medium text-base'>Period ovulation</div>
                        <div className='font-medium text-base'>Sexually transmitted infections (STI'S)</div>
                        <div className='font-medium text-base '>Contraception</div>
                        <div className='font-medium text-base'>In-vitro fertilization</div>
                        <div className='relative'>
                            <input type='text' placeholder='Search' className='w-full font-sans border-b-2 font-normal text-base text-center'/>
                            <FaSearch  className='absolute top-0 left-4 text-gray-300 text-xl'/>
                        </div>
                    </div>    
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24 mb-28'>
                    <div className="card w-80 blog h-[600px]">
                        <figure className='w-full'><img src={blog} alt="PCOS" /></figure>
                        <div className="card-body px-2">
                            <h6 className="card-title font-medium">What is PCOS and how does it affect your reproductive organs</h6>
                            <p className='font-normal text-base'>Polycystic ovary syndrome (PCOS) is a hormonal imbalance that 
                                occurs when your ovaries (the organ that produces and releases eggs) 
                                create excess hormone which may cause small cysts on the ovaries. 
                                PCOS can cause missed or irregular menstrual periods, 
                                excess hair growth, acne, infertility, and weight gain.
                            </p> 
                            <Link to='/article' className='w-28 h-7 mt-3.5 mb-4 text flex flex-row gap-2 items-center justify-center'>Read More <FaArrowRight /></Link>   
                        </div>
                    </div>
                    <div className="card w-80 blog h-[600px]">
                        <figure className='w-full'><img src={art2} alt="PCOS" /></figure>
                        <div className="card-body px-2">
                            <h6 className="card-title font-medium">Ovulation Calculator; How to Know Your Most Fertile Days</h6>
                            <p className='font-normal text-base'>By tracking your ovulation cycle, you can know when is the best time 
                                for you to have sex with your partner if you want to have a baby. Ideally, if you have sex within your ovulation period, 
                                the chances of getting pregnant is fairly high.
                            </p> 
                            <div className='w-28 h-7 mt-3.5 mb-4 text flex flex-row gap-2 items-center justify-center'>Read More <FaArrowRight /></div>   
                        </div>
                    </div>
                    <div className="card w-80 blog h-[600px]">
                        <figure className='w-full'><img src={check} alt="PCOS" /></figure>
                        <div className="card-body px-2">
                            <h6 className="card-title font-medium">CONTRACEPTION; All you need to know</h6>
                            <p className='font-normal text-base'>Birth control, also known as contraception, is the use of medicines, 
                                devices, or surgery to prevent pregnancy. There are many different types. Some are reversable,
                                while others are permanent. Some types can also help prevent Sexually Transmitted Infections (STIs).
                            </p> 
                            <div className='w-28 h-7 mt-3.5 mb-4 text flex flex-row gap-2 items-center justify-center'>Read More <FaArrowRight /></div>   
                        </div>
                    </div>
                    <div className="card w-80 blog h-[600px]">
                        <figure className='w-full'><img src={art4} alt="PCOS" /></figure>
                        <div className="card-body px-2">
                            <h6 className="card-title font-medium">What Is Ovulation? What to Know About Your Menstrual Cycle</h6>
                            <p className='font-normal text-base'>Ovulation is a part of your menstrual cycle. It occurs when an egg is released from your ovary. 
                                when the egg is released, it may or may not be fertilized by sperm. If fertilized, the egg may travel to the uterus and 
                                implant to develop into a pregnancy. If left unfertilized, the egg disintegrates and the uterine lining....
                            </p> 
                            <div className='w-28 h-7 mt-3.5 mb-4 text flex flex-row gap-2 items-center justify-center'>Read More <FaArrowRight /></div>   
                        </div>
                    </div>
                    <div className="card w-80 blog h-[600px]">
                        <figure className='w-full'><img src={art5} alt="PCOS" /></figure>
                        <div className="card-body px-2">
                            <h6 className="card-title font-medium">5 Things You May Not Know About Your Period</h6>
                            <p className='font-normal text-base'>You might probably know the basics when it comes to the menstrual cycle.However, 
                                there are many things women of all ages who don’t know about their periods! Here are some facts that probably you didn’t 
                                know but that could prove very useful. 
                            </p> 
                            <div className='w-28 h-7 mt-3.5 mb-4 text flex flex-row gap-2 items-center justify-center'>Read More <FaArrowRight /></div>   
                        </div>
                    </div>
                    <div className="card w-80 blog h-[600px]">
                        <figure className='w-full'><img src={use} alt="PCOS" /></figure>
                        <div className="card-body px-2">
                            <h6 className="card-title font-medium">Symptoms and causes of irregular periods</h6>
                            <p className='font-normal text-base'>Sometimes, irregular periods can be caused by some medicines, exercising too much, 
                            having a very low or high body weight, or not eating enough calories. Hormone imbalances can also cause irregular periods.
                            </p> 
                            <div className='w-28 h-7 mt-3.5 mb-4 text flex flex-row gap-2 items-center justify-center'>Read More <FaArrowRight /></div>   
                        </div>
                    </div>
                </div>
            </div>
            <div className='back w-full pb-2'>
                <Footer />
            </div>
        </>
    )
}

export default Resources;
