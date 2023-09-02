import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import GoogleImageIcon from '../../assets/google.png';
import './style.css';

const SignUpForm: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .matches(
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
                'Password must meet the criteria'
                )
                .required('Password is required'),
            
            confirmPassword: Yup.string()
                .matches(
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
                'Password must meet the criteria'
                )
                .required('Password is required'),
        }),
        onSubmit: async (values) => {
        },
  });
  return (
    <div >
      <p className='text-styled auth-header-text pb-2'>Create your account</p>
      <form
      onSubmit={formik.handleSubmit}
      className='auth-form rounded-[2px] border-black border-2 p-6 flex flex-col w-96 items-start'
    >
      {/* <label htmlFor='email' className='font-bold'>
        Email Address
      </label> */}
      <input
        id='email'
        name='email'
        type='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className='border-2 h-10 p-2 w-full'
        placeholder='Email'
      />
      {formik.touched.email && formik.errors.email ? (
        <div className='text-red-500 pb-2'>{formik.errors.email}</div>
      ) : null}
      {/* <label htmlFor='password' className='font-bold mt-4'>
        Password
      </label> */}
      <input
        id='password'
        name='password'
        type='password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        className='border-2 h-10  p-2 w-full'
        placeholder='Password'
      />
      {formik.touched.password && formik.errors.password ? (
        <div className='text-red-500 pb-2'>{formik.errors.password}</div>
      ) : null}
      {/* <label htmlFor='confirmPassword' className='font-bold mt-4'>
        Confirm Password
      </label> */}
      <input
        id='confirmPassword'
        name='confirmPassword'
        type='password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
        className='border-2 h-10  p-2 w-full'
        placeholder='Confirm Password'
      />
      {formik.touched.password && formik.errors.confirmPassword ? (
        <div className='text-red-500 pb-2'>{formik.errors.confirmPassword}</div>
      ) : null}
      <button type='submit' className='flex justify-center items-center mt-2'>
        Register
    </button>
    <div className='flex gap-2 items-center mt-8 justify-between center'>
        <div  className='divider-auth'/>
        <p>Or Continue With</p>
        <div className='divider-auth'/>
    </div>
    <div className='flex social-icon-container items-center justify-center mt-4'>
        <img src={GoogleImageIcon}/>
    </div>
    <p className='mt-4 center'>Already Have an Account? <b className='text-styled auth-fot-text'>Login Now</b></p>
    </form>
    </div>
  )
}

export default SignUpForm;
