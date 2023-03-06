
import {useFormik} from 'formik';
import * as yup from 'yup';
import design from './Assets/form.png';
import {Link} from 'react-router-dom';
import Header from './Header';
import {useContext} from 'react';
import RegContext from './Context/RegContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa'


function Reset() {
    const {hide, handlePassword} =useContext(RegContext);

    const REGEX_PASSWORD = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
       
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: yup.object({
            password: yup.string().matches(REGEX_PASSWORD, 'Enter a strong password with atleast 8 characters')        
                        .required('Required'), 
            confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Must match password field value')
                                .required('Required')
        })
    })
    // console.log(formik.errors)
    return (
        <section className='w-full h-screen reg'>
            <div className='w-full bg-white h-20 px-14 lg:px-24'>
               <Header />
            </div>
            <div className='w-full min-h-fit py-28'>
                <div className='w-full h-full flex items-center justify-center'>
                    <div className='w-full h-full md:w-3/5 bg-white flex flex-col items-center rounded-lg px-12 md:px-6 lg:px-28 xl:px-36 '>
                        <h5 className='font-sans text text-2xl font-semibold self-center text-center mt-20'>Create a new password</h5>
                        <h5 className='font-sans text text-2xl font-semibold self-center text-center  mt-5 mb-5'>Reset password in a few clicks</h5>
                        <div className='w-3/4 flex flex-col font-normal text-base'>
                            <form className='w-full flex flex-col my-6 px-9' onsubmit={formik.handleSubmit}>
                                <div className='w-full mb-10 relative'>
                                    <label for='password' className='block mb-2'>New Password</label>
                                    <input type='password' name='password' placeholder='Enter new password' className='p-3 px-5 w-full border-2 border-slate-400 rounded-lg'
                                        value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    <div onClick={handlePassword} className='w-5 h-5 absolute top-0 right-3 translate-y-12'>{hide ? <FaEyeSlash className='w-5 h-5'/> : <FaEye className='w-5 h-5'/>}</div>
                                    {formik.errors.password && formik.touched.password ? (<div className='red'>{formik.errors.password}</div>) : null}    
                                </div>
                                <div className='w-full mb-10 relative'>
                                    <label for='confirmPassword' className='block mb-2'>Confirm Password</label>
                                    <input type='confirmPassword' name='confirmPassword' placeholder='' className='p-3 px-5 w-full border-2 border-slate-400 rounded-lg'
                                        value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    <div onClick={handlePassword} className='w-5 h-5 absolute top-0 right-3 translate-y-12'>{hide ? <FaEyeSlash className='w-5 h-5'/> : <FaEye className='w-5 h-5'/>}</div>
                                    {formik.errors.confirmPassword && formik.touched.confirmPassword ? (<div className='red'>{formik.errors.confirmPassword}</div>) : null}    
                                </div>
                                
                                <Link to='/login' className='back w-3/4 self-center flex items-center justify-center rounded-sm'>
                                    <button type='submit' className='p-3 border-0 text-lg text-white font-bold font-sans'>Reset Password</button>
                                </Link>
                            </form>
                            
                        </div>

                    </div>
                </div>
                <div className='w-full h-48 relative'>
                    <img src={design} alt='' className='w-52 h-48 absolute top-0 right-32'/>
                </div>

            </div>
            
        </section>
    )
}

export default Reset;


