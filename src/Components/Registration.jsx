import React from 'react'
import { useNavigate} from 'react-router-dom';
import {useFormik} from 'formik';
import * as yup from 'yup';
import "yup-phone";
import {useContext} from 'react';
import RegContext from './Context/RegContext';
import { FaEye, FaEyeSlash, FaCamera } from 'react-icons/fa';
import useSubmit from './Hook/useSubmit';
import { toast } from 'react-toastify';

function Registration() {
    const navigate = useNavigate();
    const {response,submit} =useSubmit();
    const {hide, type, handlePassword} =useContext(RegContext);
    const REGEX_PASSWORD = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const formik = useFormik({
        initialValues: {
            fullName: '',
            userName: '',
            email: '',
            phoneNumber: '',
            password: '',    
        },
       
        onSubmit: (values) => {
            submit("http://localhost:5000/users", values);
            if (response.status === 201) {
                toast.success("Congratulation! You have completed your registration");
                formik.resetForm();
                navigate('/account');  
            }
            if (response.status > 300) {
                toast.error("Something went wrong, Please try again")
            }  
            
        },
        validationSchema: yup.object({
            fullName: yup.string().required('Required'),
            userName: yup.string().required('Required'),
            email: yup.string().email('Enter a valid email')
                    .required('Required'),
            phoneNumber: yup.string()
                        // .phone(null, true, 'Enter a valid phone number')
                        .required('Required'),
            location: yup.string().required('Required'),
            password: yup.string().matches(REGEX_PASSWORD, 'Enter a strong password with atleast 8 characters')        
                        .required('Required'),    
        })
    })
    // console.log(formik.errors)
  return (
    <div className='w-full py-28 px-14 lg:px-28 flex items-center justify-center'>
        <div className='w-full md:w-3/4 flex flex-col'>
            <h5 className='font-semibold text-3xl font-sans text-center'>Set Up Your Profile</h5>
            <div className='flex h-32 items-center gap-4 self-center'>
                <div className='flex items-center justify-center w-12 h-12 rounded-full bg-gray-200'>
                    <FaCamera className='text-xl text-white'/>
                </div>
                <p className='font-normal text-lg font-sans'>Choose your Avatar</p>
            </div>
            <div className='w-full flex flex-col font-normal text-lg font-sans'>
                <form className='w-full flex flex-col my-6 px-3' onSubmit={formik.handleSubmit}>
                    <div className='w-full grid grid-cols-2 gap-x-14 gap-y-3 md:grid-cols-2'>
                        <div className='w-full mb-3 font-normal text-lg'>
                            <label htmlFor='fullName' className='block mb-2'>Full Name</label>
                            <input type='text' name='fullName' placeholder='Full name' className='p-3 px-5 w-full border-2 border-slate-400 rounded-lg'
                                value={formik.values.fullName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.errors.fullName && formik.touched.fullName ? (<div className='red'>{formik.errors.fullName}</div>) : null}
                        </div>
                        <div className='w-full mb-3 font-normal text-lg'>
                            <label htmlFor='userName' className='block mb-2'>User Name</label>
                            <input type='text' name='userName' placeholder='Enter your user name' className='p-3 px-5 w-full border-2 border-slate-400 rounded-lg'
                                value={formik.values.userName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.errors.userName && formik.touched.userName ? (<div className='red'>{formik.errors.userName}</div>) : null}
                        </div>
                        <div className='w-full mb-3 font-normal text-lg'>
                            <label htmlFor='phoneNumber' className='block mb-2'>Phone Number</label>
                            <input type='tel' name='phoneNumber' placeholder='+2349044672317' className='p-3 px-5 w-full border-2 border-slate-400 rounded-lg'
                                value={formik.values.phoneNumber} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.errors.phoneNumber && formik.touched.phoneNumber ? (<div className='red'>{formik.errors.phoneNumber}</div>) : null}
                        </div>
                        <div className='w-full mb-3 font-normal text-lg'>
                            <label htmlFor='location' className='block mb-2'>Location</label>
                            <input type='text' name='location' placeholder='Ikeja, Lagos' className='p-3 px-5 w-full border-2 border-slate-400 rounded-lg'
                                value={formik.values.location} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.errors.location && formik.touched.location ? (<div className='red'>{formik.errors.location}</div>) : null}
                        </div>
                        <div className='w-full mb-3 font-normal text-lg'>
                            <label htmlFor='email' className='block mb-2'>Email</label>
                            <input type='email' name='email' placeholder='Your email address' className='p-3 px-5 w-full border-2 border-slate-400 rounded-lg'
                                value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.errors.email && formik.touched.email ? (<div className='red'>{formik.errors.email}</div>) : null}        
                        </div>
                        <div className='w-full mb-3 font-normal text-lg relative'>
                            <label htmlFor='password' className='block mb-2'>Password</label>
                            <input type={type} name='password' placeholder='password' className='p-3 px-5 w-full border-2 border-slate-400 rounded-lg'
                                value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <div onClick={handlePassword} className='w-5 h-5 absolute top-0 right-3 translate-y-12'>{hide ? <FaEyeSlash className='w-5 h-5'/> : <FaEye className='w-5 h-5'/>}</div>
                            {formik.errors.password && formik.touched.password ? (<div className='red'>{formik.errors.password}</div>) : null}    
                        </div>
                    </div>
                    <div className='back w-1/2 self-center flex items-center justify-center rounded-sm mt-11 mb-6'>
                        <button type='submit' className='w-full p-5 border-0 text-xl text-white font-bold font-sans disabled:bg-lime-800' disabled={!formik.isValid}>Save Changes</button>
                    </div>    
                </form>
                                
            </div>
        </div> 
    </div>
  )
}

export default Registration
