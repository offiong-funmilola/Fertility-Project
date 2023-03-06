import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import design from './Assets/form.png';
import {Link} from 'react-router-dom';
import Header from './Header';
import {useContext} from 'react';
import RegContext from './Context/RegContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa'


function SignIn() {
    const {hide, handlePassword} =useContext(RegContext);
    const REGEX_PASSWORD = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
       
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: yup.object({
            email: yup.string().email('Enter a valid email')
                    .required('Required'),
            password: yup.string().matches(REGEX_PASSWORD, 'Enter a strong password with atleast 8 characters')        
                        .required('Required'),    
        })
    })
    // console.log(formik.errors)
    return (
        <section className='w-full h-fit reg pb-9'>
            <div className='w-full bg-white h-20 px-14 lg:px-28'>
               <Header />
            </div>
            <div className='w-full pt-28'>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-full md:w-3/5 min-h-fit bg-white flex flex-col items-center rounded-lg px-12 md:px-6 lg:px-28 xl:px-36 '>
                        <h5 className='font-sans text text-4xl font-semibold self-center text-center mt-11'>Welcome back,</h5>
                        <h5 className='font-sans text text-4xl font-semibold self-center text-center  mt-5 mb-9'>Sign into your account</h5>
                        <div className='w-3/4 flex flex-col font-normal text-lg'>
                            <form className='w-full flex flex-col my-6 px-9' onSubmit={formik.handleSubmit}>
                                <div className='w-full mb-3'>
                                    <label htmlFor='email' className='block mb-2'>Email address</label>
                                    <input type='email' name='email' placeholder='jandoe@gmail.com' className='p-3 px-5 w-full border-2 border-slate-400 rounded-lg'
                                        value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.errors.email && formik.touched.email ? (<div className='red'>{formik.errors.email}</div>) : null}  
                                </div>
                                <div className='w-full mb-3 relative'>
                                    <label htmlFor='password' className='block mb-2'>Password</label>
                                    <input type='password' name='password' placeholder='Enter your password' className='p-3 px-5 w-full border-2 border-slate-400 rounded-lg'
                                        value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    <Link to='/forgot' className='text w-full text-right'>Forgot password?</Link>
                                    <div onClick={handlePassword} className='w-5 h-5 absolute top-0 right-3 translate-y-12'>{hide ? <FaEyeSlash className='w-5 h-5'/> : <FaEye className='w-5 h-5'/>}</div>
                                    {formik.errors.password && formik.touched.password ? (<div className='red'>{formik.errors.password}</div>) : null}  
                                </div>
                                
                                <Link to='/account' className='back w-3/4 self-center flex items-center justify-center rounded-sm mt-4 mb-6'>
                                    <button type='submit' className='p-3 border-0 text-xl text-white font-bold font-sans'>Sign in</button>
                                </Link>
                            </form>
                            <div className='flex gap-3 self-center mb-14'> 
                                <p className='font-sans font-medium text-xl'>New user? </p> 
                                <Link to='/register' className='text font-sans font-medium text-xl'>Create account</Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-full h-52 relative'>
                    <img src={design} alt='' className='w-52 h-52 absolute top-0 right-32'/>
                </div>

            </div>
            
        </section>
    )
}

export default SignIn;


