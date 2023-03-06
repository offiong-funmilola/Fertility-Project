import React from 'react';
import Header from './Header';
import Footer from './Footer';
import doctor1 from './Assets/doctor1.png';
import doctor2 from './Assets/doctor2.png';
import doctor3 from './Assets/doctor3.png';
import community from './Assets/community.png';
import chat from './Assets/chat.png';
import blog from './Assets/blog1.png';
import check from './Assets/blog4.png';
import use from './Assets/blog3.png';
import {FaArrowRight, FaStar} from 'react-icons/fa';
import service1 from './Assets/service1.png';
import service2 from './Assets/service2.png';
import service3 from './Assets/service3.png';
import service4 from './Assets/service4.png';
import service5 from './Assets/service5.png';
import talk from './Assets/talk.png';
import article from './Assets/article.png';
import test1 from './Assets/test1.png';
import test2 from './Assets/test2.png';
import test3 from './Assets/test3.png';
import community2 from './Assets/community2.png';
import meet3 from './Assets/meet3.png';
import meet2 from './Assets/meet2.png';
import meet1 from './Assets/meet1.png';
import secure from './Assets/secure.png';
import support from './Assets/support.png';


function Home() {
  return (
    <div className='w-full'>
        <section className='w-full px-14 lg:px-28 flex flex-col'>
            <Header />
            <div className='flex flex-col w-full h-fit justify-center pt-8 pb-12 md:justify-between md:flex-row md:h-[592px] md:pt-12 md:pb-4 lg:pt-16 lg:pb-12'>
                <div className='w-full flex flex-col mb-14 justify-center md:w-1/2 md:mb-0'>
                    <div className='pb-3 md:pd-0 lg:pb-3'>
                            <h1 className="card-title text-5xl font-sans font-semibold md:text-3xl lg:text-4xl">The Trusted Platform That</h1>
                            <h1 className="card-title text-5xl mt-4 font-sans font-semibold md:text-3xl md:mt-px lg:text-4xl lg:mt-4">Provides All The</h1> 
                            <h1 className="card-title text-5xl mt-4 font-sans font-semibold md:text-3xl md:mt-px lg:text-4xl lg:mt-4">Information You Need To</h1>
                            <h1 className="card-title text-5xl mt-4 font-sans font-semibold md:text-3xl md:mt-px lg:text-4xl lg:mt-4">Know About fertility</h1>  
                        </div>
                        <div className='w-3/4 mt-3'>
                            <p className='font-sans font-normal text-lg md:text-base lg:text-xl'>Your one stop health platform that provides you with the most 
                                reliable information about everything relating to fertility. 
                                We have carefully curated thousands of articles from fertility specialists 
                                to answer your questions and guide you on your journey
                            </p>
                        </div>
                        <div className="flex mt-8 md:pt-2 lg:mt-8">
                            <div className="back text-white p-3 font-sans font-medium text-xl">
                               Chat With A Doctor
                            </div>
                        </div>
                    </div>
                <div className='grid grid-cols-3'>
                    <figure className=''>
                        <img src={doctor1} alt="Hero"/>
                    </figure>
                    <figure className=''>
                        <img src={doctor2} alt="Hero"/>
                    </figure>
                    <figure className=''>
                        <img src={doctor3} alt="Hero"/>
                    </figure>
                </div>
            </div>
            {/* grid grid-cols-2 md:grid-cols-4 justify-between text-center pb-14 */}
            
            <div className='w -full flex flex-wrap font-medium text-2xl justify-between md:flex-nowrap pb-14'>
                    <div className='flex flex-col items-center justify-center'>
                        <p >50+</p>
                        <p>Doctors</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p >200+</p>
                        <p>Patients</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p >02+</p>
                        <p>Years Of Experience</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p >90%</p>
                        <p>Health Success</p>
                    </div>
                </div>
        </section>
        <section className='back2 w-full px-14 lg:px-28'>
            <div className='flex flex-col items-center justify-center py-14'>
                <div className='pb-12'>
                    <h3 className='font-sans text-4xl font-semibold'>Who We Are?</h3>
                </div>
                <div className='mb-8'>
                    <p className='font-sans font-normal text-2xl mb-5'>
                    Fertility Pal is a reliable digital health platform that provides you with 
                    verified information about your reproductive health. 
                    We strive out making sure our patients comes first by 
                    ensuring their appointment with their specialist produce a great result. </p>

                    <p className='font-sans font-normal text-2xl'>Fertility Pal allows you to book appointments with specialists, 
                        grants access to secure follow up virtually and on-site with your doctor,  
                        and ensures your data is secure. Our community provides a safe and secure 
                        space for you to share your sexual and reproductive health challenges and
                        connect with a community annonymously.
                    </p>
                </div>
            </div>

        </section>
        <section className='w-full px-14 lg:px-28 flex flex-col'>
            <div className='w-full bg-white py-16'>
                <div className='mb-12'>
                    <h3 className='font-sans text-4xl font-semibold text-center'>Our Services</h3>
                </div>
                <div className='w-screen grid grid-cols-2 md:grid-cols-3 gap-y-20'>
                    <div className='service w-64 h-72 p-2.5 flex flex-col items-center'>
                        <figure className='w-20 h-20 self-center mt-4 mb-1'>
                            <img src={service1} alt=''/>
                        </figure>
                        <h3 className='font-sans mb-2 font-medium text-xl'>Health Information</h3>
                        <p className='font-normal text-base w-52'>We Provide you with information concerning your health.</p>
                    </div>
                    <div className='service w-64 h-72 p-2.5 flex flex-col items-center '>
                        <figure className='w-20 h-20 self-center mt-4 mb-1'>
                            <img src={service2} alt=''/>
                        </figure>
                        <h3 className='font-sans mb-2 font-medium text-xl'>Wellness</h3>
                        <p className='font-normal text-base w-52'>Your one stop pal for overall wellness</p>
                    </div>
                    <div className='service w-64 h-72 p-2.5 flex flex-col items-center'>
                        <figure className='w-20 h-20 self-center mt-4 mb-1'>
                            <img src={service3} alt=''/>
                        </figure>
                        <h3 className='font-sans mb-2 font-medium text-xl'>ChatWith A Doctor</h3>
                        <p className='font-normal text-base w-52'>Let a doctor answer all your questions about infertility</p>
                    </div>
                    <div className='service w-64 h-72 p-2.5 flex flex-col items-center'>
                        <figure className='w-20 h-20 self-center mt-4 mb-1'>
                            <img src={service4} alt=''/>
                        </figure>
                        <h3 className='font-sans mb-2 font-medium text-xl'>Menstrual Tracker</h3>
                        <p className='font-normal text-base w-52'>We can help you keep track of your menstrual cycle accurately.</p>
                    </div>
                    <div className='service w-64 h-72 p-2.5 flex flex-col items-center'>
                        <figure className='w-20 h-20 self-center mt-4 mb-1'>
                            <img src={service5} alt=''/>
                        </figure>
                        <h3 className='font-sans mb-2 font-medium text-xl'>PCOS</h3>
                        <p className='font-normal text-base w-52'>Get information about PCOS and other hormonal disorders.</p>
                    </div>
                    <div className='service w-64 h-72 p-2.5 flex flex-col items-center'>
                        <figure className='w-20 h-20 self-center mt-4 mb-1'>
                            <img src={article} alt=''/>
                        </figure>
                        <h3 className='font-sans mb-2 font-medium text-xl'>Articles</h3>
                        <p className='font-normal text-base w-52'>Get unlimited access to trusted health articles.</p>
                    </div>
                </div>
            </div>

        </section>
        <section className='back2 w-full px-14 lg:px-28'>
            <div className='w-full py-14 md:py-8 flex flex-col'> 
                <div className="card w-full flex flex-col gap-10 md:gap-20 md:flex-row">
                    <figure className='w-full md:w-1/2'>
                        <img src={community2} alt="togetherness"/>
                    </figure>
                    <div className="card-body p-0 w-full md:mt-10 md:w-1/2">
                        <h2 className="card-title font-sans text-4xl font-semibold mb-4">Join Our Community</h2>
                        <p className='font-sans font-normal text-lg md:text-base lg:text-xl'>Fertility Pal is commited to providing  women with a safe community, 
                            to share experiences and learn from each other.
                            Our community is diverse and cater to all women 
                            from different backgrounds, it provides information 
                            for ladies and also a support system for ladies going 
                            through a lot to ease them.
                        </p>    
                    </div>
                </div> 
                <div className="card w-full flex-col-reverse md:gap-20 mt-16 md:flex-row "> 
                    <div className="card-body w-full p-0 mt-12 md:w-1/2">
                        <h2 className="card-title font-sans text-4xl font-semibold mb-4">Chat With A Doctor</h2>
                        <p className='font-sans font-normal text-lg md:text-base lg:text-xl'>We strive at making sure you get the best experience from the comfort of your home. 
                            You can easily chat with the consultant and get to ask all the questions that borders you and discuss challenges
                            related to fertility issues.
                        </p>    
                    </div> 
                    <figure>
                        <img src={chat} alt="Appointment"/>
                    </figure>
                </div>         
            </div>
        </section>
        <section className='w-full px-14 lg:px-28'>
            <div className='w-full py-16 flex flex-col'>
                <div className='font-sans text-4xl font-semibold text-center mb-12'>
                    <h3>Meet Our Doctors</h3>
                </div>
                <div className='w-full flex flex-col gap-10 items-center justify-center md:flex-row md:justify-between md:items-start'>
                    <div className='w-80 h-96 flex flex-col items-center'>
                        <figure className=''>
                            <img src={meet1} alt=''/>
                        </figure>
                        <h3 className='mt-8 mb-2 font-bold text-2xl'>Dr. John Obi</h3>
                        <p className='font-normal text-lg md-1'>Immunologist</p>
                        <div className='flex text gap-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    </div>
                    <div className='w-80 h-96 flex flex-col items-center'>
                        <figure>
                            <img src={meet2} alt=''/>
                        </figure>
                        <h3 className='mt-8 mb-2 font-bold text-2xl'>Dr. Jenny Ade</h3>
                        <p className='font-normal text-lg md-1'>Gynecologist</p>
                        <div className='flex text gap-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    </div>
                    <div className='w-80 h-96 flex flex-col items-center'>
                        <figure>
                            <img src={meet3} alt=''/>
                        </figure>
                        <h3 className='mt-8 mb-2 font-bold text-2xl'>Dr. Esther Tega</h3>
                        <p className='font-normal text-lg md-1'>Endocrinologist</p>
                        <div className='flex text gap-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    </div>
                    
                </div>
                <div className='flex items-center justify-center'>
                    <div className='back text-white font-medium text-xl w-44 h-12 p-3 mt-12 justify-self-center'>Meet Our Team</div>
                </div>
                <div className='flex flex-col mt-16'>
                    <div className='mb-12'>
                        <h3 className='font-sans text-4xl font-semibold text-center'>Why You Should Choose Us?</h3>
                    </div>
                    <div className='grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-20'>
                        <div className='service w-64 h-48 p-3 flex flex-col items-center justify-center'>
                            <figure className='w-12 h-12'>
                                <img src={talk} alt=''/>
                            </figure>
                            <h3 className='my-2 font-medium text-xl'>Chat With A Doctor</h3>
                            <p className='font-normal text-base text-center'>We have a list of specialist doctors that are ready to cater to you.</p>
                        </div>
                        <div className='service w-64 h-48 p-3 flex flex-col items-center justify-center'>
                        <figure className='w-12 h-12'>
                                <img src={community} alt=''/>
                            </figure>
                            <h3 className='my-2 font-medium text-xl'>Community</h3>
                            <p className='font-normal text-base text-center'>Our community provide you with answers to some of the health issues.</p>
                        </div>
                        <div className='service w-64 h-48 p-3 flex flex-col items-center justify-center'>
                        <figure className='w-12 h-12'>
                                <img src={secure} alt=''/>
                            </figure>
                            <h3 className='my-2 font-medium text-xl'>Secure</h3>
                            <p className='font-normal text-base text-center'>Your data are well protected and secure in our database.</p>
                        </div>
                        <div className='service w-64 h-48 p-3 flex flex-col items-center justify-center'>
                        <figure className='w-12 h-12'>
                                <img src={support} alt=''/>
                            </figure>
                            <h3 className='my-2 font-medium text-xl'>24 Hours Support</h3>
                            <p className='font-normal text-base text-center'>Our doctors are always here to assist you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='w-full px-14 lg:px-28'>
            <div>
                <div className='w-full h-16 flex items-center justify-between pb-12'>
                    <h3 className='text-4xl font-semibold'>Articles</h3>
                    <div className='w-24 h-9 text flex flex-row gap-2 items-center justify-center'>
                        View All<FaArrowRight className='mt-0'/>
                    </div>
                </div>
                <div className='w-full flex gap-10 flex-col items-center md:flex-row justify-between'>
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
                            <div className='w-28 h-7 mt-3.5 mb-4 text flex flex-row gap-2 items-center justify-center'>Read More <FaArrowRight /></div>   
                        </div>
                    </div>
                    <div className="card blog w-80 h-[600px]">
                        <figure><img src={check} alt="PCOS" /></figure>
                        <div className="card-body px-2">
                            <h6 className="card-title font-medium">CONTRACEPTION; All you need to know</h6>
                            <p className='font-normal text-base'>Birth control, also known as contraception, is the use of medicines, 
                                devices, or surgery to prevent pregnancy. There are many different types. 
                                Some are reversable, while others are permanent. Some types can also help 
                                prevent Sexually Transmitted Infections (STIs).
                            </p> 
                            <div className='w-28 h-7 mt-3.5 mb-4 text flex flex-row gap-2 items-center justify-center'>Read More <FaArrowRight /></div>   
                        </div>
                    </div>
                    <div className="card blog w-80 h-[600px]">
                        <figure><img src={use} alt="PCOS" /></figure>
                        <div className="card-body px-2">
                            <h6 className="card-title font-medium">Symptoms and causes of irregular periods</h6>
                            <p className='font-normal text-base'>Sometimes, irregular periods can be caused by some medicines, 
                                exercising too much, having a very low or high body weight, 
                                or not eating enough calories. Hormone imbalances can also cause irregular periods.
                            </p> 
                            <div className='w-28 h-7 mt-3.5 mb-4 text flex flex-row gap-2 items-center justify-center'>Read More <FaArrowRight /></div>  
                        </div>
                    </div>

                </div>
            </div>

        </section>
        <section className='w-full px-14 lg:px-28'>
            <div className='w-full flex flex-col pt-16 pb-36'>
                <div className='w-full flex flex-col gap-2 pb-16 items-center justify-center'>
                    <h3 className='text-4xl font-semibold'>Testimonials</h3>
                    <p className='font-normal text-2xl'>What Our clients Say About Us</p>
                </div>
                <div className='w-full flex flex-row justify-between'>
                    <div className='service w-80 h-64 relative flex flex-col items-center'>
                        <div  className='w-24 h-24 top-[-39px] absolute'>
                            <img src={test1} alt=''/>
                        </div>
                        <div className='flex flex-col p-9 items-center'>
                            <h3 className='font-normal text-2xl mt-6'>Ella Jerome</h3>
                            <div className='flex text gap-2 mt-1 mb-4'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <p className='font-normal text-base text-center'>The articles are truly exceptional, They are easy to understand and very informative.</p>
                        </div>
                    </div>
                    <div className='service w-80 h-64 relative flex flex-col items-center'>
                        <div className='w-24 h-24 absolute top-[-39px]'>
                            <img src={test2} alt='' />
                        </div>
                        <div className='flex flex-col p-9 items-center'>
                            <h3 className='font-normal text-2xl mt-6'>Jane Kelly</h3>
                            <div className='flex text gap-2 mt-1 mb-4'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <p className='font-normal text-base text-center'>It was easy to communicate with my doctor, he was always available and he helped me with my infertility treatment.</p>
                        </div>
                    </div>
                    <div className='service w-80 h-64 relative flex flex-col items-center'>
                        <div className='w-24 h-24 absolute top-[-39px]'>
                            <img src={test3} alt='' />
                        </div>
                        <div className='flex flex-col p-9 items-center'>
                            <h3 className='font-normal text-2xl mt-6'>Lois Mark</h3>
                            <div className='flex text gap-2 mt-1 mb-4'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <p className='font-normal text-base'>I felt the love and care from the community after sharing my reproductive health challenges and how lovely it was to get response from alot of ladies.</p>
                        </div>
                    </div>  
                </div>
            </div>

        </section>
        <section className='back w-full pb-2'>
            <Footer/>
        </section>
        
    </div>
  )
}

export default Home

