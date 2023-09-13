import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Cookies from 'js-cookie';
import GoogleImageIcon from '../../assets/google.png';
import { AuthState } from '../../utils/type';
import './style.css';
import { API_ENDPOINT } from '../../utils/constant';

interface SignInFormProps{
  handleAuthState: (authState: AuthState) => void;
}

const SignInForm: React.FC<SignInFormProps> = (props) => {
    const {
      handleAuthState
    } = props;
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
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
        }),
        onSubmit: async (values) => {
          const response = await fetch(API_ENDPOINT.LOGIN, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });
          const data = await response.json();
          Cookies.set('token', data.data.token, { expires: 7 });
        },
  });
  return (
    <div >
      <p className='text-styled auth-header-text pb-2'>Login to your account</p>
      <form
      onSubmit={formik.handleSubmit}
      className='auth-form rounded-[2px] border-black border-2 p-6 flex flex-col w-96 items-start'
    >
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
      <p className='text-right mt-2 mb-4 cursor-pointer' onClick={() => handleAuthState(AuthState.ForgetPass)}>Forgot Password?</p>
      <button type='submit' className='flex justify-center items-center mt-2'>
        Login
    </button>
    <div className='flex gap-2 items-center mt-8 justify-between center'>
        <div  className='divider-auth'/>
        <p>Or Continue With</p>
        <div className='divider-auth'/>
    </div>
    <div className='flex social-icon-container items-center justify-center mt-4'>
        <img src={GoogleImageIcon}/>
    </div>
    <p className='mt-4 center'>Don’t Have an Account? <b className='text-styled auth-fot-text' onClick={() => handleAuthState(AuthState.Register)}>Register Now</b></p>
    </form>
    </div>
  )
}

export default SignInForm;
