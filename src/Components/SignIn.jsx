import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import design from './Assets/form.png';
import {Link, useNavigate} from 'react-router-dom';
import Header from './Header';
import {useContext} from 'react';
import RegContext from './Context/RegContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { toast } from 'react-toastify';


function SignIn() {
    const navigate = useNavigate();

    const {hide, type, handlePassword} =useContext(RegContext);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            email: yup.string().required('Required'),
            password: yup.string().required('Required'),    
        }),
       
        onSubmit: (values) => {
            fetch('http://localhost:5000/users')
            .then((res) => res.json())
            .then((users)=>{
                const response = users.find((user) => user.email === values.email && user.password === values.password)
                if(response) {
                    toast.success("Login successful")
                    formik.resetForm();
                    navigate('/account');  
                }
                else {
                    toast.warning("Invalid login details") 
                }
            })
            .catch((err) => toast.error('Enter a valid log in details'))
             
        },
       
    })

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
                        <div className='w-full flex flex-col font-normal text-lg'>
                            <form className='w-full flex flex-col my-6 px-9' onSubmit={formik.handleSubmit}>
                                <div className='w-full mb-3'>
                                    <label htmlFor='email' className='block mb-2'>Email address</label>
                                    <input type='email' name='email' placeholder='jandoe@gmail.com' className='p-3 px-5 w-full border-2 border-slate-400 rounded-lg'
                                        value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.errors.email && formik.touched.email ? (<div className='red'>{formik.errors.email}</div>) : null}  
                                </div>
                                <div className='w-full mb-3 relative'>
                                    <label htmlFor='password' className='block mb-2'>Password</label>
                                    <input type={type} name='password' placeholder='Enter your password' className='p-3 px-5 w-full border-2 border-slate-400 rounded-lg'
                                        value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    <div onClick={handlePassword} className='w-5 h-5 absolute top-0 right-3 translate-y-12'>{hide ? <FaEyeSlash className='w-5 h-5'/> : <FaEye className='w-5 h-5'/>}</div>
                                    {formik.errors.password && formik.touched.password ? (<div className='red'>{formik.errors.password}</div>) : null} 
                                    <div className='w-full text-right'>
                                    <Link to='/forgot' className='text full text-right'>Forgot password?</Link> 
                                    </div>
                                </div>
                                
                                <div className='back w-3/4 self-center flex items-center justify-center rounded-sm mt-4 mb-6'>
                                    <button type='submit' disabled={!formik.isValid} className='w-full p-3 border-0 text-xl text-white font-bold font-sans disabled:bg-lime-800'>Sign in</button>
                                </div>
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


