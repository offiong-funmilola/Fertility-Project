import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import "yup-phone";
import design from './Assets/form.png';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import { FaFacebook, FaGoogle, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import {useContext } from 'react';
import RegContext from './Context/RegContext';
import useSubmit from './Hook/useSubmit';
import { toast } from 'react-toastify';




function Register() {
    const {response, submit} =useSubmit()
    const navigate = useNavigate();
    const {hide, type, handlePassword} = useContext(RegContext);
    
    const REGEX_PASSWORD = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    
    const formik = useFormik({
        initialValues: {
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: ''
        },
       
        onSubmit: (values) => {
            const {confirmPassword, ...data} = values;
            submit("http://localhost:5000/registers", data);
            if (response.status === 201) {
                toast.success("Please, Complete your registration");
                formik.resetForm();
                navigate('/registration');  
            }
            if (response.status > 300) {
                toast.error("Something went wrong, Please try again")
            }      
            
        },
        validationSchema: yup.object({
            email: yup.string().email('Enter a valid email')
                    .required('Required'),
            phoneNumber: yup.string()
                        // .phone(null, true, 'Enter a valid phone number')
                        .required('Required'),
            password: yup.string().matches(REGEX_PASSWORD, 'Enter a strong password with atleast 8 characters containing atleast a number and a special character')        
                        .required('Required'), 
            confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Must match password field value')
                                .required('Required')
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
                    <div className=' w-full md:w-3/5 min-h-fit bg-white flex flex-col items-center rounded-lg px-12 md:px-6 lg:px-28 xl:px-36 '>
                        <h5 className='font-sans text text-2xl font-semibold self-center text-center mt-11'>Create An Account </h5>
                        <div className='w-full flex flex-col font-normal text-base'>
                            <form className='w-full flex flex-col my-6' onSubmit={formik.handleSubmit}>
                                <div className='w-full grid grid-cols-2 gap-x-14 gap-y-3 md:grid-cols-2'>
                                    <div className='w-full mb-3 font-normal text-base'>
                                        <label htmlFor='email' className='block mb-2'>Email address</label>
                                        <input type='email' id='email' name='email' placeholder='jandoe@gmail.com' className='p-3 px-5 w-full border-2 border-slate-400 rounded-lg'
                                            value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.errors.email && formik.touched.email ? (<div className='red'>{formik.errors.email}</div>) : null}    
                                    </div>
                                    <div>
                                        <label htmlFor='phoneNumber' className='block mb-2'>Phone Number</label>
                                        <input type='tel' id='phoneNumber' name='phoneNumber' placeholder='Enter your number' className='p-3 px-5 w-full border-2 border-slate-400 rounded-lg'
                                            value={formik.values.phoneNumber} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                        {formik.errors.phoneNumber && formik.touched.phoneNumber ? (<div className='red'>{formik.errors.phoneNumber}</div>) : null}    
                                    </div>
                                    <div className='w-full mb-3 relative'>
                                        <label htmlFor='password' className='block mb-2'>Password</label>
                                        <input type={type} id='password' name='password' placeholder='password' className='p-3 px-5 w-full border-2 border-slate-400 rounded-lg'
                                            value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                        <div onClick={handlePassword} className='w-5 h-5 absolute top-0 right-3 translate-y-12'>{hide ? <FaEyeSlash className='w-5 h-5'/> : <FaEye className='w-5 h-5'/>}</div>
                                        {formik.errors.password && formik.touched.password ? (<div className='red'>{formik.errors.password}</div>) : null}    
                                    </div>
                                    <div className='w-full mb-3 relative'>
                                        <label htmlFor='confirmPassword' className='block mb-2'>Retype Password</label>
                                        <input type={type} id='confirmPassword' name='confirmPassword' placeholder='password' className='p-3 px-5 w-full border-2 border-slate-400 rounded-lg'
                                            value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                        <div onClick={handlePassword} className='w-5 h-5 absolute top-0 right-3 translate-y-12'>{hide ? <FaEyeSlash className='w-5 h-5'/> : <FaEye className='w-5 h-5'/>}</div>
                                        {formik.errors.confirmPassword && formik.touched.confirmPassword ? (<div className='red'>{formik.errors.confirmPassword}</div>) : null}    
                                    </div>
                                </div>
                                <div className='back w-3/4 self-center flex items-center justify-center rounded-sm mt-11 mb-6'>
                                    <button type='submit' disabled={!formik.isValid} className='w-full p-3 border-0 text-lg text-white font-bold font-sans disabled:bg-lime-800'>Register</button>
                                </div>
                                <div className='flex flex-col gap-2 self-center'>
                                    <p className='font-normal text-base'>Or sign up with</p>
                                    <div className='flex gap-3'>
                                        <FaFacebook className='w-10 h-10'/>
                                        <FaGoogle className='w-10 h-10'/>
                                        <FaApple  className='w-10 h-10'/>
                                    </div>
                                </div>
                            </form>
                            <div className='flex gap-3 self-center mb-12'> 
                                <p className='font-sans font-medium text-lg'>Already have an account?</p> 
                                <Link to='/login' className='text font-sans font-medium text-lg'>Sign in</Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-full h-52 relative'>
                    <img src={design} alt='' className='w-52 h-52 absolute top-0 right-24'/>
                </div>

            </div>
            
        </section>
    )
}

export default Register;

