import {useFormik} from 'formik';
import * as yup from 'yup';
import design from './Assets/form.png';
import { Link } from 'react-router-dom';
import Header from './Header';


function Forgot() {
    const formik = useFormik({
        initialValues: {
            otp: '',   
        },
       
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: yup.object({
            otp: yup.number().required('Required').positive(),    
        })
    })
    // console.log(formik.errors)
    return (
        <section className='w-full max-h-fit reg'>
            <div className='w-full bg-white h-20 px-14 lg:px-24'>
               <Header />
            </div>
            <div className='reg w-full h-full py-28'>
                <div className='w-full h-full flex items-center justify-center'>
                    <div className='w-full h-full md:w-3/5 bg-white flex flex-col items-center rounded-lg px-12 md:px-6 lg:px-28 xl:px-36 '>
                        <h5 className='font-sans text text-2xl font-semibold self-center text-center mt-20'>Forgot password?</h5>
                        <h5 className='font-sans text text-2xl font-semibold self-center text-center  mt-5 mb-5'>Reset password in a few clicks</h5>
                        <div className='w-3/4 flex flex-col font-normal text-base'>
                            <form className='w-full flex flex-col my-6 px-9' onSubmit={formik.handleSubmit}>
                                <div className='w-full mb-10'>
                                    <label htmlFor='otp' className='block mb-2'>Input OTP</label>
                                    <input type='number' name='otp' placeholder='Type OTP sent to you' className='p-3 px-5 w-full border-2 border-slate-400 rounded-lg'
                                     value={formik.values.otp} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.errors.otp && formik.touched.otp ? (<div className='red'>{formik.errors.otp}</div>) : null} 
                                </div>
                                
                                <Link to='/reset' className='back w-3/4 self-center flex items-center justify-center rounded-sm'>
                                    <button type='submit' className='p-3 border-0 text-lg text-white font-bold font-sans'>Confirm</button>
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

export default Forgot;


